/**
 * AgencyForm — the Agency Platform's drop-in headless form component.
 *
 * Copy this single file into any React website, then render:
 *
 *   import { AgencyForm } from "./AgencyForm";
 *   <AgencyForm formKey="YOUR_FORM_KEY" />
 *
 * It loads the live question list from the platform, adapts to the site's own
 * design tokens (works in light, dark and brand-coloured themes), submits each
 * enquiry straight to the platform with spam protection, and never stores
 * leads locally. Zero dependencies beyond React.
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

/** Kit version reported to the platform (keep in sync with KIT_VERSION). */
export const AGENCY_KIT_VERSION = "3.1.4";

export type AgencyFormFieldType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "select"
  | "radio"
  | "checkbox"
  | "textarea";

export type AgencyFormField = {
  key: string;
  label: string;
  placeholder: string;
  type: AgencyFormFieldType;
  required: boolean;
  options: string[];
  /** "half" | "full"; omitted = derived from the type. */
  width?: "half" | "full";
  /** Hidden fields are never rendered. */
  visible?: boolean;
};

type AgencyFormProps = {
  /** The form key from the platform's Setup guide. */
  formKey: string;
  /** Platform origin; defaults to the current site (the platform serves the config). */
  platformUrl?: string;
  /**
   * Business-critical fields this website must always show (e.g. its own
   * service selector). Any fallback field whose key the platform config does
   * not already include is merged in after the configured fields, so a
   * generic platform setup can never strip the site's own questions.
   */
  fallbackFields?: AgencyFormField[];
  /** Called after the platform accepts the enquiry. */
  onSuccess?: () => void;
  className?: string;
};

/** Short, paired answer fields that share a desktop row at 50%. */
const HALF_WIDTH_KEYS = new Set([
  "name", "first_name", "last_name", "surname", "full_name", "contact_name",
  "phone", "mobile", "tel", "phone_number", "mobile_number", "contact_number",
  "suburb", "city", "postcode", "zip", "zip_code",
]);

/** The width a field takes when the configuration does not pin one down. */
function fieldWidth(field: Pick<AgencyFormField, "type" | "width" | "key">): "half" | "full" {
  if (field.width === "half" || field.width === "full") return field.width;
  if (field.type === "email" || field.type === "select" || field.type === "radio" || field.type === "checkbox" || field.type === "textarea") {
    return "full";
  }
  return HALF_WIDTH_KEYS.has(field.key) ? "half" : "full";
}

type SubmitState = "idle" | "submitting" | "success" | "error";

/** Fires the platform's analytics events on the site's own tracking stack. */
function emitEvent(name: "form_submit" | "lead", detail: Record<string, unknown>) {
  try {
    window.dispatchEvent(new CustomEvent(name, { detail }));
    const w = window as unknown as { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
    w.gtag?.("event", name === "lead" ? "generate_lead" : name, detail);
    w.dataLayer?.push({ event: name, ...detail });
  } catch {
    // Analytics must never break a submission.
  }
}

export function AgencyForm({ formKey, platformUrl, fallbackFields, onSuccess, className }: AgencyFormProps) {
  const [fields, setFields] = useState<AgencyFormField[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const shownAt = useRef<number>(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  const base = (platformUrl ?? (typeof window !== "undefined" ? window.location.origin : "")).replace(/\/+$/, "");
  const fallbackKey = (fallbackFields ?? []).map((f) => f.key).join(",");

  useEffect(() => {
    shownAt.current = Date.now();
    let alive = true;
    setState("idle");
    setValues({});
    // Two-way sync: report this website's own questions first, so the
    // platform adopts them (admin edits still win), then load the live list.
    const reportFields = async () => {
      if (!fallbackFields?.length) return;
      for (let attempt = 0; attempt < 3 && alive; attempt++) {
        try {
          const response = await fetch(`${base}/api/public/kit/v1/form/sync`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ form_key: formKey, fields: fallbackFields }),
          signal: AbortSignal.timeout(8000),
          });
          if (!response.ok) throw new Error(`Form sync returned ${response.status}`);
          return;
        } catch (error) {
          console.warn("[AgencyForm] Questions not yet synced", error);
          if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
        }
      }
    };
    reportFields()
      .then(() => fetch(`${base}/api/public/kit/v1/config?form_key=${encodeURIComponent(formKey)}&kv=${AGENCY_KIT_VERSION}&v=${Date.now()}`))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Form unavailable"))))
      .then((data: { fields?: AgencyFormField[] }) => {
        if (!alive) return;
        const configured = Array.isArray(data.fields) ? data.fields : [];
        // Intelligent merge: keep the platform's field order and slot any
        // business-critical fallback field the configuration is missing in
        // before the first long-answer box, so a message box always stays last.
        const present = new Set(configured.map((f) => f.key));
        const missing = (fallbackFields ?? []).filter((f) => f.key && !present.has(f.key));
        const firstLong = configured.findIndex((f) => f.type === "textarea");
        const at = firstLong === -1 ? configured.length : firstLong;
        const merged = [...configured.slice(0, at), ...missing.filter((f) => f.type !== "textarea"), ...configured.slice(at), ...missing.filter((f) => f.type === "textarea")];
        setFields(merged);
      })
      .catch(() => {
        if (alive) setLoadError("The form could not be loaded. Please try again shortly.");
      });
    return () => {
      alive = false;
    };
  }, [base, formKey, fallbackKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const set = useCallback((key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    // Required choices that render no native control are guarded client-side;
    // the server re-checks everything regardless.
    const missing = (fields ?? []).find(
      (f) =>
        f.required &&
        f.visible !== false &&
        !(values[f.key] ?? "").trim() &&
        f.type !== "checkbox",
    );
    if (missing) {
      setState("error");
      setErrorMessage(`Please complete the ${missing.label.toLowerCase()}`);
      return;
    }

    setState("submitting");
    setErrorMessage(null);

    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const utm = (k: string) => params.get(`utm_${k}`) || undefined;
    const submitted: Record<string, string> = { ...values, _hp: honeypot };

    try {
      const res = await fetch(`${base}/api/public/form-submit`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          form_key: formKey,
          fields: submitted,
          page_url: typeof window !== "undefined" ? window.location.href : undefined,
          page_title: typeof document !== "undefined" ? document.title : undefined,
          referrer: typeof document !== "undefined" ? document.referrer || null : null,
          elapsed_ms: Date.now() - shownAt.current,
          utm_source: utm("source"),
          utm_medium: utm("medium"),
          utm_campaign: utm("campaign"),
        }),
      });
      if (res.ok) {
        setState("success");
        emitEvent("form_submit", { form_key: formKey });
        emitEvent("lead", { form_key: formKey });
        onSuccess?.();
        return;
      }
      const detail = (await res.json().catch(() => null)) as { error?: string } | null;
      setState("error");
      setErrorMessage(detail?.error ?? "That didn't send. Please try again.");
    } catch {
      setState("error");
      setErrorMessage("That didn't send. Please check your connection and try again.");
    }
  }

  if (state === "success") {
    return (
      <div className={cnx("af-card af-success", className)} role="status">
        <span className="af-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
        <h3 className="af-success-title">Thank you — message received</h3>
        <p className="af-success-body">Your details are with the team. We&apos;ll be in touch shortly.</p>
        <button
          type="button"
          className="af-link"
          onClick={() => {
            setValues({});
            setState("idle");
            shownAt.current = Date.now();
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className={cnx("af-card", className)} role="alert">
        <p className="af-error-text">{loadError}</p>
      </div>
    );
  }

  if (fields === null) {
    return (
      <div className={cnx("af-loading", className)} aria-busy="true">
        <span className="af-skeleton" />
        <span className="af-skeleton" />
        <span className="af-skeleton af-skeleton-tall" />
      </div>
    );
  }

  const visible = fields.filter((f) => f.visible !== false);

  return (
    <form ref={formRef} className={cnx("af-grid", className)} onSubmit={handleSubmit} noValidate>
      {/* Honeypot: invisible to people, catnip for bots. */}
      <input
        type="text"
        name="_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="af-honeypot"
      />

      {visible.map((field) => {
        const wide = fieldWidth(field) === "full";
        return (
          <div key={field.key} className={cnx("af-field", wide && "af-field-full")}>
            {field.type === "checkbox" ? (
              <label className="af-checkbox-row">
                <input
                  type="checkbox"
                  checked={(values[field.key] ?? "") === "Yes"}
                  onChange={(e) => set(field.key, e.target.checked ? "Yes" : "No")}
                  className="af-checkbox"
                />
                <span className="af-checkbox-label">{field.placeholder || field.label}</span>
              </label>
            ) : (
              <>
                <label className="af-label" htmlFor={`af-${field.key}`}>
                  {field.label}
                  {field.required && <span className="af-required" aria-hidden="true"> *</span>}
                </label>
                {field.type === "select" ? (
                  <AfDropdown
                    id={`af-${field.key}`}
                    placeholder={field.placeholder}
                    options={field.options}
                    value={values[field.key] ?? ""}
                    onChange={(v) => set(field.key, v)}
                  />
                ) : field.type === "radio" ? (
                  <div role="radiogroup" aria-label={field.label} className="af-pills">
                    {field.options.map((option) => {
                      const active = (values[field.key] ?? "") === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => set(field.key, active ? "" : option)}
                          className={cnx("af-pill", active && "af-pill-active")}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                ) : field.type === "textarea" ? (
                  <textarea
                    id={`af-${field.key}`}
                    rows={4}
                    value={values[field.key] ?? ""}
                    placeholder={field.placeholder}
                    onChange={(e) => set(field.key, e.target.value)}
                    className={cnx("af-input af-textarea")}
                  />
                ) : (
                  <input
                    id={`af-${field.key}`}
                    type="text"
                    inputMode={field.type === "number" ? "decimal" : field.type === "tel" ? "tel" : field.type === "email" ? "email" : undefined}
                    autoComplete={field.type === "email" ? "email" : field.type === "tel" ? "tel" : "off"}
                    value={values[field.key] ?? ""}
                    placeholder={field.placeholder}
                    onChange={(e) => set(field.key, e.target.value)}
                    className="af-input"
                  />
                )}
              </>
            )}
          </div>
        );
      })}

      {state === "error" && errorMessage && (
        <p className="af-error af-field-full" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" disabled={state === "submitting"} className="af-submit af-field-full">
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Animated dropdown (no native <select>): search over 6 options,       */
/* keyboard navigation, outside-click dismissal.                        */
/* ------------------------------------------------------------------ */

function AfDropdown({
  id,
  placeholder,
  options,
  value,
  onChange,
}: {
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchable = options.length > 6;

  const filtered = useMemo(
    () => (query.trim() ? options.filter((o) => o.toLowerCase().includes(query.trim().toLowerCase())) : options),
    [options, query],
  );

  useEffect(() => {
    if (!open) return;
    const onDocClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  useEffect(() => {
    if (open && searchable) searchRef.current?.focus();
    if (!open) {
      setQuery("");
      setHighlight(0);
    }
  }, [open, searchable]);

  const pick = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const onKeyDown = (event: ReactKeyboardEvent) => {
    if (!open) {
      if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
        event.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const option = filtered[highlight];
      if (option) pick(option);
    }
  };

  return (
    <div ref={rootRef} className="af-dropdown" onKeyDown={onKeyDown}>
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cnx("af-input af-dropdown-trigger", open && "af-dropdown-open")}
      >
        <span className={cnx("af-dropdown-value", !value && "af-dropdown-placeholder")}>
          {value || placeholder || "Choose…"}
        </span>
        <svg className="af-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className={cnx("af-dropdown-panel", open && "af-dropdown-panel-open")} role="listbox" aria-hidden={!open}>
        {searchable && (
          <input
            ref={searchRef}
            type="text"
            value={query}
            placeholder="Search options…"
            onChange={(e) => {
              setQuery(e.target.value);
              setHighlight(0);
            }}
            className="af-dropdown-search"
          />
        )}
        <ul className="af-dropdown-list">
          {filtered.map((option, index) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={value === option}
                onMouseEnter={() => setHighlight(index)}
                onClick={() => pick(option)}
                className={cnx("af-dropdown-option", (index === highlight || value === option) && "af-dropdown-option-active")}
              >
                {option}
              </button>
            </li>
          ))}
          {filtered.length === 0 && <li className="af-dropdown-empty">No matches</li>}
        </ul>
      </div>
    </div>
  );
}

/** Tiny class joiner (the component stays dependency-free). */
function cnx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/*
 * Styles below use the host site's CSS custom properties with sensible
 * fallbacks, so the form blends into light, dark and branded themes without
 * any configuration. A site can override any class prefixed `af-` for
 * pixel-perfect control.
 */
const AGENCY_FORM_STYLES = `
.af-grid{display:grid;grid-template-columns:1fr;gap:1rem}
@media(min-width:640px){.af-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.af-field-full{grid-column:span 2}}
.af-field{display:grid;gap:.375rem;min-width:0}
.af-label{font-size:.8rem;font-weight:600;color:var(--af-muted,var(--muted-foreground,#5b6472));letter-spacing:.01em}
.af-required{color:var(--af-danger,#dc2626)}
.af-input{width:100%;min-height:44px;border-radius:var(--af-radius,var(--radius,.75rem));border:1px solid var(--af-border,var(--border,#e2e5ea));background:var(--af-background,var(--background,#fff));color:var(--af-foreground,var(--foreground,#101418));padding:.65rem .9rem;font-size:1rem;line-height:1.4;outline:none;transition:border-color .2s,box-shadow .2s}
.af-input:focus{border-color:var(--af-primary,var(--primary,#2563eb));box-shadow:0 0 0 3px color-mix(in srgb,var(--af-primary,var(--primary,#2563eb)) 18%,transparent)}
.af-input::placeholder{color:var(--af-placeholder,#9aa3af)}
.af-textarea{resize:vertical;min-height:6.5rem}
.af-honeypot{position:absolute;left:-9999px;width:0;height:0;opacity:0;pointer-events:none}
.af-checkbox-row{display:flex;align-items:center;gap:.75rem;min-height:44px;cursor:pointer}
.af-checkbox{width:1.05rem;height:1.05rem;accent-color:var(--af-primary,var(--primary,#2563eb));flex-shrink:0}
.af-checkbox-label{font-size:1rem;color:var(--af-foreground,var(--foreground,#101418))}
.af-pills{display:flex;flex-wrap:wrap;gap:.5rem}
.af-pill{min-height:44px;border-radius:999px;border:1px solid var(--af-border,var(--border,#e2e5ea));background:var(--af-background,var(--background,#fff));color:var(--af-foreground,var(--foreground,#101418));padding:.45rem 1.1rem;font-size:.9rem;font-weight:500;cursor:pointer;transition:border-color .2s,background .2s,color .2s,box-shadow .2s}
.af-pill:hover{border-color:var(--af-primary,var(--primary,#2563eb))}
.af-pill-active{border-color:var(--af-primary,var(--primary,#2563eb));background:color-mix(in srgb,var(--af-primary,var(--primary,#2563eb)) 12%,transparent);color:var(--af-primary,var(--primary,#2563eb));box-shadow:inset 0 0 0 1px var(--af-primary,var(--primary,#2563eb))}
.af-submit{min-height:48px;border-radius:var(--af-radius,var(--radius,.75rem));border:0;background:var(--af-primary,var(--primary,#2563eb));color:var(--af-primary-foreground,#fff);font-size:1rem;font-weight:600;cursor:pointer;transition:filter .2s,transform .15s}
.af-submit:hover{filter:brightness(1.08)}
.af-submit:active{transform:translateY(1px)}
.af-submit:disabled{opacity:.6;cursor:progress}
.af-error{grid-column:1/-1;font-size:.85rem;color:var(--af-danger,#dc2626)}
.af-card{display:grid;justify-items:start;gap:.6rem;border-radius:var(--af-radius-lg,1rem);border:1px solid var(--af-border,var(--border,#e2e5ea));background:var(--af-card,var(--card,#fff));padding:1.5rem}
.af-success-icon{display:inline-flex;align-items:center;justify-content:center;width:2.75rem;height:2.75rem;border-radius:.9rem;background:color-mix(in srgb,var(--af-primary,var(--primary,#2563eb)) 12%,transparent);color:var(--af-primary,var(--primary,#2563eb))}
.af-success-icon svg{width:1.35rem;height:1.35rem}
.af-success-title{margin:0;font-size:1.15rem;font-weight:650;color:var(--af-foreground,var(--foreground,#101418))}
.af-success-body{margin:0;font-size:.95rem;color:var(--af-muted,var(--muted-foreground,#5b6472))}
.af-error-text{margin:0;font-size:.95rem;color:var(--af-danger,#dc2626)}
.af-link{background:none;border:0;padding:0;font-size:.9rem;font-weight:600;color:var(--af-primary,var(--primary,#2563eb));cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.af-loading{display:grid;gap:.75rem}
.af-skeleton{height:2.75rem;border-radius:var(--af-radius,.75rem);background:linear-gradient(90deg,color-mix(in srgb,var(--af-muted,#5b6472) 10%,transparent),color-mix(in srgb,var(--af-muted,#5b6472) 18%,transparent),color-mix(in srgb,var(--af-muted,#5b6472) 10%,transparent));animation:af-shimmer 1.4s infinite}
.af-skeleton-tall{height:6.5rem}
@keyframes af-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
.af-dropdown{position:relative}
.af-dropdown-trigger{display:flex;align-items:center;justify-content:space-between;gap:.5rem;text-align:left;cursor:pointer;padding-right:.75rem}
.af-dropdown-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.af-dropdown-placeholder{color:var(--af-placeholder,#9aa3af)}
.af-chevron{width:1rem;height:1rem;flex-shrink:0;color:var(--af-placeholder,#9aa3af);transition:transform .2s}
.af-dropdown-open .af-chevron{transform:rotate(180deg)}
.af-dropdown-panel{position:absolute;z-index:50;top:calc(100% + .35rem);left:0;right:0;max-height:16rem;overflow:auto;border-radius:var(--af-radius,.75rem);border:1px solid var(--af-border,var(--border,#e2e5ea));background:var(--af-popover,var(--popover,#fff));box-shadow:0 12px 32px -12px rgb(2 6 23/.25);opacity:0;transform:translateY(-4px) scale(.98);pointer-events:none;transition:opacity .16s ease,transform .16s ease}
.af-dropdown-panel-open{opacity:1;transform:none;pointer-events:auto}
.af-dropdown-search{width:100%;border:0;border-bottom:1px solid var(--af-border,var(--border,#e2e5ea));background:transparent;padding:.6rem .9rem;font-size:.9rem;color:var(--af-foreground,var(--foreground,#101418));outline:none;position:sticky;top:0;z-index:1}
.af-dropdown-list{list-style:none;margin:0;padding:.25rem}
.af-dropdown-option{display:block;width:100%;text-align:left;border:0;background:none;border-radius:.5rem;padding:.55rem .75rem;font-size:.92rem;color:var(--af-foreground,var(--foreground,#101418));cursor:pointer}
.af-dropdown-option-active{background:color-mix(in srgb,var(--af-primary,var(--primary,#2563eb)) 10%,transparent);color:var(--af-primary,var(--primary,#2563eb))}
.af-dropdown-empty{padding:.55rem .75rem;font-size:.85rem;color:var(--af-placeholder,#9aa3af)}
`;

/** Injects the stylesheet once per page, with the id as the dedupe key. */
export function AgencyFormStyles() {
  if (typeof document === "undefined") return null;
  if (!document.getElementById("agency-form-styles")) {
    const style = document.createElement("style");
    style.id = "agency-form-styles";
    style.textContent = AGENCY_FORM_STYLES;
    document.head.appendChild(style);
  }
  return null;
}

export default AgencyForm;

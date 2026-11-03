import { useState } from "react";
import type { FormEvent } from "react";
import type { AgencyFormField } from "@/components/AgencyForm";

function cnx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/**
 * Demo mode only (no site key yet): same fields and the same `af-` look as
 * AgencyForm, but validates locally and sends nothing anywhere.
 */
export function DemoContactForm({ fields }: { fields: AgencyFormField[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const missing = fields.find((f) => f.required && !(values[f.key] ?? "").trim() && f.type !== "checkbox");
    if (missing) {
      setState("error");
      setErrorMessage(`Please complete the ${missing.label.toLowerCase()}`);
      return;
    }
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="af-card af-success" role="status">
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
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="af-grid"
      onSubmit={handleSubmit}
      noValidate
    >
      {fields.map((field) => (
        <div key={field.key} className="af-field">
          <label className="af-label" htmlFor={`demo-${field.key}`}>
            {field.label}
            {field.required && <span className="af-required" aria-hidden="true"> *</span>}
          </label>
          {field.type === "select" ? (
            <select
              id={`demo-${field.key}`}
              value={values[field.key] ?? ""}
              onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
              className={cnx("af-input")}
            >
              <option value="">{field.placeholder || "Choose…"}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={`demo-${field.key}`}
              rows={4}
              value={values[field.key] ?? ""}
              placeholder={field.placeholder}
              onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
              className="af-input af-textarea"
            />
          ) : (
            <input
              id={`demo-${field.key}`}
              type="text"
              inputMode={field.type === "tel" ? "tel" : field.type === "email" ? "email" : undefined}
              autoComplete={field.type === "email" ? "email" : field.type === "tel" ? "tel" : "off"}
              value={values[field.key] ?? ""}
              placeholder={field.placeholder}
              onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
              className="af-input"
            />
          )}
        </div>
      ))}

      {state === "error" && errorMessage && (
        <p className="af-error" role="alert">{errorMessage}</p>
      )}

      <button type="submit" className="af-submit">
        Send message
      </button>
    </form>
  );
}

export default DemoContactForm;

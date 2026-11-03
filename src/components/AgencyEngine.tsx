/**
 * Agency Engine — Creative Bilal Agency Platform starter kit v3.1.4.
 * Invisible engine plumbing: chat widget boot, admin-controlled tracking
 * (GA4 / GTM / Meta Pixel / Google Ads) and visitor analytics. It never
 * changes the site's design.
 */

import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import chatAvatar from "@/assets/chat-avatar.png";
import {
  AGENCY_PLATFORM_URL,
  AGENCY_BUSINESS_PHONE,
  AGENCY_BUSINESS_EMAIL,
  AGENCY_SITE_KEY,
} from "@/agency.config";
import { resolveAgencyKey, subscribeAgencyKey } from "@/hooks/useAgencyKey";

/* ------------------------------------------------------------------ */
/* Business knowledge (from this site's own verified content only)     */
/* ------------------------------------------------------------------ */

const BRAND = {
  name: "Stratus Project Group",
  accentColor: "#DC2626",
  // White mark on red — served from public/ so the platform always gets an
  // absolute URL it can render (relative bundled paths are ignored by chat.js).
  avatarUrl: "/chat-avatar.png",
  welcome:
    "Hi there — welcome to Stratus Project Group! Ask me anything about our services, the approvals process, fees or getting started. Happy to help.",
};

const KNOWLEDGE = {
  about:
    "Stratus Project Group is a Sydney-based development consultancy helping homeowners, first-time developers and builders deliver residential projects — duplexes, townhouses and small multi-unit sites — from first feasibility study through design, council approvals (DA & CDC), engineering and compliance setup, construction coordination and building inspections. Address: 9 Epic Pl, Villawood NSW 2163. Phone: +61 0422 207 176. Email: Sajidur@Stratusprojectgroup.com.au. Website: https://stratusprojectgroup.com.au",
  services:
    "Feasibility Study — assess what a site can deliver before you commit. | Design & Documentation — architectural design and construction-ready documentation. | Development Approvals (DA & CDC) — council and complying development approvals with clean documentation to prevent delays. | Engineering & Compliance Setup — structural, BASIX, NatHERS and certifier coordination. | Construction & Project Management — consultant, builder and certifier coordination without unnecessary variations. | Building Inspections — site checks and progress inspections.",
  hours:
    "Office hours: Monday to Friday, 8:00 am – 6:00 pm. Free consultation available; the team responds to enquiries within 24 hours. Based in Sydney, serving Greater Sydney and surrounding NSW regions.",
  faqs:
    "Projects: residential developments — duplexes, townhouses, small multi-unit sites. You don't need an architect already; we can start from concept or take over mid-way. DA/CDC timeframes vary by council and project type; clean documentation prevents delays. Site visits happen when required. Fees depend on scope — a fixed-fee proposal is provided once the site and needs are understood, so there are no surprises. First-time developers are guided through each stage. Areas served: Greater Sydney & surrounding NSW. Engineering and inspections are coordinated with architectural, structural and certifier consultants.",
};

const STARTER_QUESTIONS = [
  "What services does Stratus offer?",
  "How do your fees work?",
  "How long does a DA or CDC approval take?",
  "Do you serve my area?",
];

const REVIEWS = [
  { author: "Michael T., Private Developer", quote: "Stratus handled everything from design to approvals. The process was clear, predictable, and well-managed from day one.", rating: 5 },
  { author: "Sarah L., Project Manager", quote: "They coordinated the consultants and builder seamlessly. Zero unnecessary delays. Honestly couldn't ask for better project management.", rating: 5 },
  { author: "James K., Small-Scale Developer", quote: "If you're a first-time developer, these are the guys you want on your side. Straightforward, no games, just results.", rating: 5 },
  { author: "Daniel P., Builder", quote: "The documentation was spot-on from day one. Council approvals came back faster than expected. Highly professional team.", rating: 5 },
  { author: "Rebecca M., Property Investor", quote: "What impressed me most was how they stayed involved even during construction. True accountability from start to finish.", rating: 5 },
  { author: "Andrew H., Developer", quote: "They clearly know the Sydney council process inside out. Fast approvals, detailed plans, zero miscommunication.", rating: 5 },
  { author: "Lisa C., First-Time Developer", quote: "Professional from first contact to finish. They managed our DA submission perfectly — council had no issues at all.", rating: 5 },
  { author: "Paul W., Construction Manager", quote: "We had a tight deadline and couldn't afford setbacks. Stratus delivered exactly what they promised — on time, every time.", rating: 5 },
  { author: "Nathan K., Private Developer", quote: "Excellent coordination between all consultants. Engineering reports, BASIX, NatHERS — everything was integrated perfectly.", rating: 5 },
  { author: "Emma G., Boutique Builder", quote: "Best decision we made was hiring Stratus. They removed all the confusion and kept our project moving forward smoothly.", rating: 5 },
];

/* ------------------------------------------------------------------ */
/* Tracking (admin-controlled; each tag injects only when its ID set)  */
/* ------------------------------------------------------------------ */

type TrackingConfig = {
  ga4?: string | null;
  metaPixel?: string | null;
  gtm?: string | null;
  adsId?: string | null;
  adsLabel?: string | null;
  events?: Record<string, boolean>;
};

let trackingEvents: Record<string, boolean> = {};

function eventEnabled(name: string): boolean {
  return trackingEvents[name] !== false;
}

type TagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
};

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

function injectTracking(cfg: TrackingConfig) {
  const w = window as TagWindow;
  const needsGtag = !!cfg.ga4 || !!cfg.adsId;
  if (needsGtag && !w.gtag) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag(...args: unknown[]) { w.dataLayer!.push(args); };
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${cfg.ga4 || cfg.adsId}`, "agency-gtag-js");
    w.gtag("js", new Date());
  }
  if (cfg.ga4) w.gtag!("config", cfg.ga4);
  if (cfg.adsId) w.gtag!("config", cfg.adsId);
  if (cfg.gtm) {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${cfg.gtm}`, "agency-gtm-js");
  }
  if (cfg.metaPixel) {
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "agency-fbevents");
    const init = () => {
      if (!w.fbq) { setTimeout(init, 200); return; }
      w.fbq("init", cfg.metaPixel);
      w.fbq("track", "PageView");
    };
    init();
  }
}

function trackEvent(name: string, detail: Record<string, unknown> = {}) {
  if (!eventEnabled(name)) return;
  try {
    window.dispatchEvent(new CustomEvent(name, { detail }));
    const w = window as TagWindow;
    w.gtag?.("event", name === "lead" ? "generate_lead" : name, detail);
    w.dataLayer?.push({ event: name, ...detail });
    if (name === "phone_click" || name === "email_click") w.fbq?.("track", "Contact", detail);
  } catch {
    // Analytics must never break the page.
  }
}

/* ------------------------------------------------------------------ */
/* Visitor analytics (section 5)                                       */
/* ------------------------------------------------------------------ */

function sessionId(): string {
  try {
    let sid = sessionStorage.getItem("agency_session_id");
    if (!sid) {
      sid = `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem("agency_session_id", sid);
    }
    return sid;
  } catch {
    return "s_anon";
  }
}

function postAnalytics(path: string) {
  if (!AGENCY_SITE_KEY) return;
  fetch(`${AGENCY_PLATFORM_URL}/api/public/track`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      site_key: AGENCY_SITE_KEY,
      path,
      page_title: document.title,
      referrer: document.referrer || null,
      session_id: sessionId(),
    }),
    keepalive: true,
  }).catch(() => {
    // Fire-and-forget.
  });
}

/* ------------------------------------------------------------------ */
/* Engine                                                              */
/* ------------------------------------------------------------------ */

export function AgencyEngine() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Page view + visitor analytics on every route change.
  useEffect(() => {
    trackEvent("page_view", { page_path: pathname });
    postAnalytics(pathname);
  }, [pathname]);

  // Global click events: phone, email, main CTA.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest) return;
      if (target.closest('a[href^="tel:"]')) trackEvent("phone_click");
      else if (target.closest('a[href^="mailto:"]')) trackEvent("email_click");
      else if (target.closest(".btn-primary, [data-cta]")) trackEvent("cta_click");
    };
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Boot the agency chat widget; start tracking/analytics exactly once per key.
  useEffect(() => {
    let currentKey = "";
    let startedKey = "";
    let active = true;

    const initChat = (siteKey: string) => {
      (window as unknown as { AgencyChat?: { init: (opts: Record<string, unknown>) => void } }).AgencyChat?.init({
        ...(siteKey ? { siteKey } : {}),
        clientChatEndpoint: "/api/public/chat",
        branding: {
          accentColor: BRAND.accentColor,
          avatarUrl: BRAND.avatarUrl,
          botName: BRAND.name,
          phone: AGENCY_BUSINESS_PHONE,
        },
        defaults: { welcome: BRAND.welcome },
        knowledgeBase: KNOWLEDGE,
        starterQuestions: STARTER_QUESTIONS,
        reviews: REVIEWS,
        contact: { phone: AGENCY_BUSINESS_PHONE, email: AGENCY_BUSINESS_EMAIL },
      });
    };

    const applyKey = (siteKey: string) => {
      if (!active) return;
      currentKey = siteKey;
      const agencyEnabled = !!siteKey;
      initChat(siteKey);
      const existing = document.getElementById("agency-chat");
      if (!existing) {
        const s = document.createElement("script");
        s.id = "agency-chat";
        s.src = AGENCY_PLATFORM_URL + "/api/public/kit/chat.js";
        s.async = true;
        if (agencyEnabled) s.dataset["siteKey"] = siteKey;
        s.dataset["launcher"] = "custom"; // the site's own data-open-chat buttons open it
        s.onload = () => { if (active) initChat(currentKey); };
        document.body.appendChild(s);
      }
      if (agencyEnabled && startedKey !== siteKey) {
        startedKey = siteKey;
        void fetch(`${AGENCY_PLATFORM_URL}/api/public/kit/v1/config?form_key=${encodeURIComponent(siteKey)}`, { cache: "no-store" })
          .then((r) => (r.ok ? r.json() : null))
          .then((cfg: { tracking?: TrackingConfig } | null) => {
            if (!cfg?.tracking) return;
            trackingEvents = cfg.tracking.events ?? {};
            injectTracking(cfg.tracking);
          })
          .catch(() => {
            // Tracking stays off until the platform responds.
          });
      }
    };

    const unsubscribe = subscribeAgencyKey(applyKey);
    void resolveAgencyKey().then(applyKey); // boot demo too if not yet registered
    return () => { active = false; unsubscribe(); };
  }, []);

  // Desktop: premium floating pill bottom-right. Mobile: sticky glass dock (AI 40% / quote 60%).
  return (
    <>
      <div
        className="agency-glass fixed inset-x-3 z-40 flex gap-2 rounded-2xl p-2 md:hidden"
        style={{ bottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          data-open-chat
          className="relative flex min-h-[48px] basis-[40%] items-center justify-center gap-2 overflow-hidden rounded-xl border border-foreground/15 bg-foreground/[0.02] text-sm font-semibold tracking-[-0.01em] text-foreground transition-transform duration-200 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" /> Ask AI
        </button>
        <a
          href="/contact-us"
          data-cta="dock-quote"
          className="relative flex min-h-[48px] flex-1 basis-[60%] items-center justify-center gap-2 overflow-hidden rounded-xl text-sm font-bold tracking-[-0.01em] text-primary-foreground transition-transform duration-200 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.85) 100%)",
            boxShadow: "0 4px 14px hsl(var(--primary) / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(135deg, hsl(0 0% 100% / 0.12) 0%, transparent 50%)" }}
            aria-hidden="true"
          />
          Get a Free Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <button
        type="button"
        data-open-chat
        aria-label="Chat with Stratus"
        className="agency-glass agency-sheen group fixed bottom-6 right-6 z-40 hidden h-16 items-center gap-3 rounded-full pl-2 pr-6 transition-transform duration-300 hover:-translate-y-1 md:flex"
      >
        <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-primary shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.8)]">
          <img src={chatAvatar} alt="" width={48} height={48} className="h-full w-full object-cover" />
          <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-background bg-[hsl(142_70%_45%)]" />
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-sm font-bold text-foreground">Ask Stratus</span>
          <span className="text-[11px] font-medium text-muted-foreground">AI assistant · Online now</span>
        </span>
      </button>
    </>
  );
}

export default AgencyEngine;

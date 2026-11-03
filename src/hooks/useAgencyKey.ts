import { useEffect, useState } from "react";
import { AGENCY_SITE_KEY, AGENCY_PLATFORM_URL, AGENCY_WEBSITE_ID, AGENCY_BUSINESS_PHONE, AGENCY_BUSINESS_EMAIL } from "@/agency.config";

let pending: Promise<string> | null = null;
let resolved = "";
const listeners = new Set<(key: string) => void>();
let retryTimer: ReturnType<typeof setTimeout> | undefined;
let attempt = 0;
export function resolveAgencyKey(): Promise<string> {
  if (AGENCY_SITE_KEY.trim()) return Promise.resolve(AGENCY_SITE_KEY.trim());
  if (typeof window === "undefined") return Promise.resolve("");
  if (resolved) return Promise.resolve(resolved);
  return (pending ??= fetch(AGENCY_PLATFORM_URL + "/api/public/kit/v1/resolve?" + new URLSearchParams({ id: AGENCY_WEBSITE_ID, phone: AGENCY_BUSINESS_PHONE, email: AGENCY_BUSINESS_EMAIL }), { cache: "no-store", signal: AbortSignal.timeout(8000) })
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => (d?.connected && typeof d.siteKey === "string" ? d.siteKey : ""))
    .catch(() => "")
    .then((key) => {
      if (key) { resolved = key; attempt = 0; listeners.forEach((fn) => fn(key)); }
      return key;
    })
    .finally(() => {
      pending = null;
      if (!resolved && listeners.size && !retryTimer) retryTimer = setTimeout(() => {
        retryTimer = undefined;
        if (listeners.size) void resolveAgencyKey();
      }, Math.min(30000, 2000 * 2 ** Math.min(attempt++, 4)));
    }));
}
export function subscribeAgencyKey(fn: (key: string) => void): () => void {
  listeners.add(fn);
  void resolveAgencyKey().then(fn);
  return () => {
    listeners.delete(fn);
    if (!listeners.size && retryTimer) { clearTimeout(retryTimer); retryTimer = undefined; }
  };
}
export function useAgencyKey(): string {
  const [key, setKey] = useState("");
  useEffect(() => subscribeAgencyKey(setKey), []);
  return key;
}

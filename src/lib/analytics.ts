// Shared event helper (MyHiwi client sites). Every client-side event goes to
// Vercel Web Analytics AND to the GTM dataLayer (if present), so an existing
// Google Ads / GA4 setup keeps working unchanged.
//
// Event vocabulary (identical across sites, see
// denis-workspace/dokumente/MyHiwi_Web_Analytics_Event_Tracking_Konzept_2026-09-04.md):
//   lead          { type, topic, source, page }   -> SERVER-SIDE only (API routes)
//   lead_start    { type, topic, page }
//   contact_click { channel: 'tel'|'whatsapp'|'mail', placement, page }
//
// Rules: values are string | number | boolean | null, no nesting, max 8 keys,
// NEVER personal data (names, mails, phone numbers, free text).

import { track as vercelTrack } from "@vercel/analytics";

export type EventProps = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function currentPage() {
  return typeof window !== "undefined" ? window.location.pathname : "";
}

/** Client-side event: Vercel + dataLayer. Never throws, never blocks the UI. */
export function track(name: string, props: EventProps = {}) {
  const data: EventProps = { page: currentPage(), ...props };
  try {
    vercelTrack(name, data);
  } catch {
    /* analytics must never break the page */
  }
  try {
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...data });
    }
  } catch {
    /* ignore */
  }
}

export type ContactChannel = "tel" | "whatsapp" | "mail";
export type ContactPlacement = "header" | "footer" | "content";

/** Convenience wrappers so call sites stay uniform. */
export const analytics = {
  leadStart: (type: string, topic: string) => track("lead_start", { type, topic }),
  contactClick: (channel: ContactChannel, placement: ContactPlacement) =>
    track("contact_click", { channel, placement }),
};

// Server-side `lead` (API routes): import { track } from "@vercel/analytics/server"
// and call it only after the mail/insert really went through, inside try/catch.
// Note: on Deployment-Protection-protected previews the server-side track() needs
// VERCEL_AUTOMATION_BYPASS_SECRET; production is unaffected.

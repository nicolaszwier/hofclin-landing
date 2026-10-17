import { deleteCookiesByPrefix, readCookie, writeCookie } from "./cookies";

/**
 * Consent (CONTEXT.md): Analytics and Marketing, both off until granted, rejectable with
 * the same prominence, revisitable anytime. Consent Mode v2 *basic*: GTM itself is not
 * requested before a category is granted, so nothing — not even cookieless pings —
 * leaves the browser without consent.
 */
export interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const COOKIE = "hof_consent";
const MAX_AGE_SECONDS = 180 * 24 * 60 * 60;
const CONSENT_EVENT = "hof:consent";

const ANALYTICS_COOKIE_PREFIXES = ["_ga", "_clck", "_clsk", "CLID", "ANONCHK", "MR", "MUID", "SM"] as const;
const MARKETING_COOKIE_PREFIXES = ["_gcl", "_fbp", "_fbc", "_ttp", "_tt_", "ttcsid"] as const;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __hofGtmLoaded?: boolean;
  }
}

export function readConsent(): ConsentState | null {
  const raw = readCookie(COOKIE);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<ConsentState>;
    return {
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
    };
  } catch {
    return null;
  }
}

export function saveConsent(choice: { analytics: boolean; marketing: boolean }): ConsentState {
  const previous = readConsent();
  const state: ConsentState = { ...choice, updatedAt: new Date().toISOString() };
  writeCookie(COOKIE, encodeURIComponent(JSON.stringify(state)), MAX_AGE_SECONDS);

  const revokedAnalytics = previous?.analytics === true && !state.analytics;
  const revokedMarketing = previous?.marketing === true && !state.marketing;
  if (revokedAnalytics) deleteCookiesByPrefix(ANALYTICS_COOKIE_PREFIXES);
  if (revokedMarketing) deleteCookiesByPrefix(MARKETING_COOKIE_PREFIXES);

  applyConsent(state);
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));

  // Tags already running cannot be unloaded; a reload is the only honest revocation.
  if ((revokedAnalytics || revokedMarketing) && window.__hofGtmLoaded) location.reload();
  return state;
}

export function onConsentChange(listener: (state: ConsentState) => void): void {
  window.addEventListener(CONSENT_EVENT, (event) => listener((event as CustomEvent<ConsentState>).detail));
}

export function applyConsent(state: ConsentState): void {
  const marketing = state.marketing ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  });
  if (state.analytics || state.marketing) loadTagManager();
}

function loadTagManager(): void {
  if (window.__hofGtmLoaded) return;
  const id = document.documentElement.dataset.gtmId;
  if (!id || !/^GTM-[A-Z0-9]+$/.test(id)) {
    console.info("[hofclin] GTM não configurado (site.analytics.gtmId); nenhuma tag carregada.");
    return;
  }
  window.__hofGtmLoaded = true;
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

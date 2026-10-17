import { readCookie, writeCookie } from "./cookies";
import type { ConsentState } from "./consent";

/**
 * Attribution (CONTEXT.md) — writes the `hof_attr` cookie exactly as
 * docs/attribution-contract.md §2 specifies. The app reads it at signup; this
 * module is the only writer.
 */
export interface Touch {
  at: string;
  source: string | null;
  medium: string | null;
  campaign: string | null;
  term: string | null;
  content: string | null;
  id: string | null;
  landingPath: string;
  referrer: string | null;
}

type ClickIdKey = "gclid" | "gbraid" | "wbraid" | "fbclid" | "ttclid";
type Ids = Partial<Record<ClickIdKey | "fbc" | "fbp" | "ttp", string>>;

export interface Attribution {
  v: 1;
  first: Touch;
  last?: Touch;
  consent: { analytics: boolean; marketing: boolean; updatedAt: string | null };
  ids?: Ids;
  gaClientId?: string;
}

const COOKIE = "hof_attr";
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60;
const MAX_STRING = 200;
const SESSION_IDS_KEY = "hof_landing_ids";

const CLICK_IDS: readonly ClickIdKey[] = ["gclid", "gbraid", "wbraid", "fbclid", "ttclid"];
const CLICK_ID_SOURCE: Record<ClickIdKey, string> = {
  gclid: "google",
  gbraid: "google",
  wbraid: "google",
  fbclid: "meta",
  ttclid: "tiktok",
};
const SEARCH_ENGINES: readonly string[] = ["google", "bing", "duckduckgo", "yahoo", "ecosia"];

const clip = (value: string | null | undefined): string | null =>
  value == null || value === "" ? null : value.slice(0, MAX_STRING);

function isSameSite(host: string): boolean {
  return host === location.hostname || host === "hofclin.com.br" || host.endsWith(".hofclin.com.br");
}

function externalReferrerHost(): string | null {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname;
    return isSameSite(host) ? null : host;
  } catch {
    return null;
  }
}

function clickIdsFrom(params: URLSearchParams): Partial<Record<ClickIdKey, string>> {
  const ids: Partial<Record<ClickIdKey, string>> = {};
  for (const key of CLICK_IDS) {
    const value = clip(params.get(key));
    if (value) ids[key] = value;
  }
  return ids;
}

/** The visit as a Touch, or null when it is direct (no UTM, no click ID, no outside referrer). */
function touchFromVisit(params: URLSearchParams, referrer: string | null): Touch | null {
  const utm = (name: string) => clip(params.get(`utm_${name}`));
  const clickId = CLICK_IDS.find((key) => params.has(key));
  const hasUtm = ["source", "medium", "campaign", "term", "content", "id"].some((name) => params.has(`utm_${name}`));
  if (!hasUtm && !clickId && !referrer) return null;

  let inferredSource: string | null = null;
  let inferredMedium: string | null = null;
  if (clickId) {
    inferredSource = CLICK_ID_SOURCE[clickId];
    inferredMedium = "cpc";
  } else if (referrer) {
    const engine = SEARCH_ENGINES.find((name) => referrer.split(".").includes(name));
    inferredSource = engine ?? referrer;
    inferredMedium = engine ? "organic" : "referral";
  }

  return {
    at: new Date().toISOString(),
    source: utm("source") ?? inferredSource,
    medium: utm("medium") ?? inferredMedium,
    campaign: utm("campaign"),
    term: utm("term"),
    content: utm("content"),
    id: utm("id"),
    landingPath: location.pathname,
    referrer,
  };
}

function directTouch(): Touch {
  return {
    at: new Date().toISOString(),
    source: null,
    medium: null,
    campaign: null,
    term: null,
    content: null,
    id: null,
    landingPath: location.pathname,
    referrer: null,
  };
}

export function readAttribution(): Attribution | null {
  const raw = readCookie(COOKIE);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Attribution;
    return parsed?.v === 1 && parsed.first ? parsed : null;
  } catch {
    return null;
  }
}

function write(attribution: Attribution): void {
  writeCookie(COOKIE, encodeURIComponent(JSON.stringify(attribution)), MAX_AGE_SECONDS);
}

/** `_ga` = GA1.1.<random>.<timestamp>; the client id is the last two fields. */
function gaClientIdFromCookie(): string | undefined {
  const raw = readCookie("_ga");
  const parts = raw?.split(".");
  return parts && parts.length >= 4 ? `${parts[parts.length - 2]}.${parts[parts.length - 1]}` : undefined;
}

function stashedClickIds(): Partial<Record<ClickIdKey, string>> {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_IDS_KEY) ?? "{}");
  } catch {
    return {};
  }
}

/** Applies the Consent-dependent fields: ids need Marketing, gaClientId needs Analytics. */
function withConsent(attribution: Attribution, consent: ConsentState | null): Attribution {
  const next: Attribution = {
    ...attribution,
    consent: {
      analytics: consent?.analytics === true,
      marketing: consent?.marketing === true,
      updatedAt: consent?.updatedAt ?? null,
    },
  };

  if (next.consent.marketing) {
    const ids: Ids = { ...next.ids, ...stashedClickIds(), ...clickIdsFrom(new URLSearchParams(location.search)) };
    const fbcCookie = readCookie("_fbc");
    if (fbcCookie) ids.fbc = clip(fbcCookie) ?? undefined;
    else if (ids.fbclid && !ids.fbc?.endsWith(`.${ids.fbclid}`)) ids.fbc = clip(`fb.1.${Date.now()}.${ids.fbclid}`) ?? undefined;
    const fbp = clip(readCookie("_fbp"));
    if (fbp) ids.fbp = fbp;
    const ttp = clip(readCookie("_ttp"));
    if (ttp) ids.ttp = ttp;
    next.ids = ids;
  } else {
    delete next.ids;
  }

  if (next.consent.analytics) {
    const clientId = gaClientIdFromCookie();
    if (clientId) next.gaClientId = clientId;
  } else {
    delete next.gaClientId;
  }
  return next;
}

/** Runs on every page view: records the touch, then the Consent-dependent fields. */
export function recordVisit(consent: ConsentState | null): void {
  const params = new URLSearchParams(location.search);
  const urlClickIds = clickIdsFrom(params);
  if (Object.keys(urlClickIds).length > 0) {
    try {
      sessionStorage.setItem(SESSION_IDS_KEY, JSON.stringify(urlClickIds));
    } catch {
      /* storage unavailable — capture still works on this page view */
    }
  }

  const touch = touchFromVisit(params, externalReferrerHost());
  const existing = readAttribution();
  const base: Attribution = existing ?? {
    v: 1,
    first: touch ?? directTouch(),
    consent: { analytics: false, marketing: false, updatedAt: null },
  };
  if (touch) base.last = touch;
  write(withConsent(base, consent));
}

/**
 * Re-applies Consent after the visitor changes it. Tag cookies (`_ga`, `_fbp`, `_ttp`)
 * appear a moment after GTM loads, so it samples them again a few times.
 */
export function syncAttributionConsent(consent: ConsentState): void {
  const apply = () => {
    const existing = readAttribution();
    if (existing) write(withConsent(existing, consent));
  };
  apply();
  if (consent.analytics || consent.marketing) for (const delay of [1500, 4000, 8000]) setTimeout(apply, delay);
}

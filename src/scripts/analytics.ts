import { readAttribution } from "./attribution";

/**
 * Landing-side Funnel events (CONTEXT.md): `cta_click` and `whatsapp_click`.
 * They go to the dataLayer only; GTM — loaded after Consent — forwards them.
 * Everything after the click (`sign_up` … `purchase`) is reported by odonto-api.
 */
export function track(event: "cta_click" | "whatsapp_click", params: Record<string, string | null>): void {
  window.dataLayer.push({ event, page_path: location.pathname, ...attributionParams(), ...params });
}

/** Campaign context on every event, so BigQuery joins don't depend on GA4's session attribution. */
function attributionParams(): Record<string, string | null> {
  const attribution = readAttribution();
  return {
    attr_first_source: attribution?.first.source ?? null,
    attr_first_medium: attribution?.first.medium ?? null,
    attr_first_campaign: attribution?.first.campaign ?? null,
    attr_last_source: attribution?.last?.source ?? null,
    attr_last_medium: attribution?.last?.medium ?? null,
    attr_last_campaign: attribution?.last?.campaign ?? null,
  };
}

export function initCtaTracking(): void {
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[data-cta]");
    if (!link) return;
    track("cta_click", {
      cta_placement: link.dataset.ctaPlacement ?? null,
      plan: link.dataset.plan ?? null,
      link_url: link.href,
    });
  });
}

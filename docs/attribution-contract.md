# Attribution contract (landing → app → API)

The landing owns this contract. `odonto-web` reads it, `odonto-api` stores it and reports conversions from it. Why it exists: [ADR 0001](./adr/0001-ad-conversions-are-sent-server-side-not-from-app-pixels.md). Vocabulary (Attribution, Consent, Funnel event, Trial plan): [`CONTEXT.md`](../CONTEXT.md).

## 1. Plan on the signup link

Every trial CTA links to `https://app.hofclin.com.br/signup`, with `?plan=standard` or `?plan=pro` when it sits on a Plan card. Any other value, or none, means `standard`. The value is the **Trial plan**, not a purchase.

## 2. The `hof_attr` cookie

| Attribute | Value |
| --- | --- |
| Name | `hof_attr` |
| Domain | `.hofclin.com.br` (readable by `app.hofclin.com.br`) |
| Path | `/` |
| Max-Age | 7776000 (90 days), refreshed on every write |
| SameSite / Secure | `Lax` / `Secure` |
| HttpOnly | no — written by the landing's script, read by the SPA |
| Value | `encodeURIComponent(JSON.stringify(payload))`, at most 2048 characters encoded (see "Size budget") |

### Payload, version 1

```jsonc
{
  "v": 1,
  "first": Touch,                 // set once on the first visit (a direct one has source/medium null); never overwritten
  "last": Touch,                  // most recent non-direct visit; absent until there is one
  "consent": {
    "analytics": false,
    "marketing": false,
    "updatedAt": "2026-10-17T19:00:00.000Z"
  },
  "ids": {                        // present only while consent.marketing is true
    "gclid": "…", "gbraid": "…", "wbraid": "…",
    "fbclid": "…",
    "fbc": "fb.1.1760727600000.<fbclid>",   // built from fbclid + capture time (ms)
    "fbp": "…",                             // copied from the _fbp cookie
    "ttclid": "…",
    "ttp": "…"                              // copied from the _ttp cookie
  },
  "gaClientId": "1234567890.1760727600"     // present only while consent.analytics is true; from _ga
}
```

```jsonc
// Touch
{
  "at": "2026-10-17T19:00:00.000Z",
  "source": "google",          // utm_source, or inferred (below); null when direct
  "medium": "cpc",             // utm_medium, or inferred
  "campaign": "odonto-search", // utm_campaign
  "term": null,                // utm_term
  "content": null,             // utm_content
  "id": null,                  // utm_id
  "landingPath": "/odontologia",
  "referrer": "www.google.com" // host only, null when none or same-site
}
```

### Rules

- **Non-direct visit:** the URL has any `utm_*` or click ID, or the referrer is another site. Only non-direct visits write `last`. A direct visit never overwrites it, and `first` is written only when absent.
- **Inference without UTMs:** a click ID implies `medium: "cpc"` and `source` `google` (`gclid`/`gbraid`/`wbraid`), `meta` (`fbclid`) or `tiktok` (`ttclid`). A search-engine referrer (Google, Bing, DuckDuckGo, Yahoo, Ecosia) implies `medium: "organic"` and the engine as `source`. Any other referrer implies `medium: "referral"` and its host as `source`.
- **UTMs travel regardless of Consent** — they identify a campaign, not a person.
- **Click IDs, `fbc`, `fbp`, `ttp` require Marketing.** If Marketing is granted later in the same session, the landing captures the IDs from the session's landing URL at that moment. Revoking Marketing deletes `ids`.
- **`gaClientId` requires Analytics.** Revoking Analytics deletes it.
- **Size budget.** Touch strings are cut to 200 characters. A click ID (or `fbc`/`fbp`/`ttp`) over 200 characters is discarded, never truncated — a partial ID matches nothing. If the encoded cookie still exceeds 2048 characters, the landing sheds data in this order until it fits: `term`, `content` and `id` from both touches; touch strings cut to 100, then 50, then 25 characters; then ids in the order `ttp`, `fbp`, `fbc`, `wbraid`, `gbraid`, `ttclid`, `fbclid`, `gclid`. Real campaign links never get past the first step.

## 3. What the app sends

`odonto-web` reads `hof_attr` on `/signup` and sends the decoded payload, unchanged, as `attribution` on `POST /auth/signup`. It never writes the cookie. An absent or unparseable cookie sends nothing.

`odonto-api` validates the payload against version 1, drops unknown fields, records the request's client IP and user agent beside it (needed by Meta and TikTok), and stores it on the user. When that user creates a clinic, the clinic gets a copy — the Attribution belongs to the clinic from `trial_start` on.

## 4. Funnel events reported by the API

| Funnel event | When | GA4 (Measurement Protocol) | Meta (Conversions API) | TikTok (Events API) |
| --- | --- | --- | --- | --- |
| `sign_up` | `POST /auth/signup` succeeds | `sign_up` | `CompleteRegistration` | `CompleteRegistration` |
| `trial_start` | Clinic created (Trial begins) | `trial_start` (key event, imported into Google Ads) | `StartTrial` | `Subscribe` |
| `add_payment_info` | Card registered through Checkout | `add_payment_info` | `AddPaymentInfo` | `AddPaymentInfo` |
| `purchase` | First `paid` Payment confirmed by the gateway | `purchase` (value, `BRL`, Plan) | `Purchase` (value, `BRL`) | `CompletePayment` (value, `BRL`) |

The platform event names are the proposed mapping; verify each against the platform's current docs when implementing.

- GA4 receives an event only when `gaClientId` is present. Google Ads learns conversions by importing the GA4 key events — no Google Ads API in v1.
- Meta and TikTok receive an event only when `consent.marketing` is true. With it, the event carries the clinic admin's email and phone, normalized and SHA-256 hashed, plus `fbc`/`fbp` or `ttclid`/`ttp`, IP and user agent. Never any patient data.
- Reporting is asynchronous and retried. It never blocks or fails the user's request.

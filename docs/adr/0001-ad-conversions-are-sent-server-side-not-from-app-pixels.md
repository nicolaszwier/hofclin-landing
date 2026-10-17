# Ad conversions are sent server-side, never from pixels in the app

The conversions paid campaigns optimize on (`sign_up`, `trial_start`, `add_payment_info`, `purchase`) all happen in the app at `app.hofclin.com.br`, which handles patient data and today loads no third-party SDK. We decided the landing captures **Attribution** (UTMs and click IDs) in a first-party cookie on `.hofclin.com.br`, the app hands it to `odonto-api` at signup, and the API stores it on the clinic and reports conversions to GA4 (Measurement Protocol), Google Ads, Meta (Conversions API) and TikTok (Events API). Ad pixels live only on the landing, behind **Consent**. The app never loads one — patient routes and titles (`/patients/:id`) must not reach ad networks — and server-side reporting also survives ad blockers and iOS tracking limits and lets campaigns optimize on paid clinics, not clicks.

## Considered Options

- **Same GTM container in the app, firing events client-side.** Fastest to build; rejected because it puts Meta/TikTok scripts on pages that render patient data.
- **Landing-only conversions (`cta_click`).** No app work; rejected because campaigns would learn from clicks instead of clinics.

## Consequences

- The attribution cookie format and the conversion payloads are a contract across `hofclin-landing`, `odonto-web` and `odonto-api`; changing either needs all three.
- Conversions sent to ad platforms carry Marketing consent captured on the landing; without it the API sends nothing to Meta, TikTok or Google Ads.

# Hofclin Landing

Public marketing site for Hofclin at `hofclin.com.br`. The app itself is `odonto-web` (`app.hofclin.com.br`) backed by `odonto-api`.

Astro (static output) + Tailwind v4, deployed on Vercel. Every user-visible string is PT-br.

## Read first

- [`CONTEXT.md`](./CONTEXT.md) — vocabulary: Plan, Trial, Trial plan, Plan choice, Refund window, Prospect, Attribution, Consent, Funnel event.
- [`docs/attribution-contract.md`](./docs/attribution-contract.md) — the `hof_attr` cookie and the `?plan=` link the app depends on.
- [`docs/adr/`](./docs/adr) — decisions (0001: conversions are server-side; no pixels in the app).
- [`docs/go-live-checklist.md`](./docs/go-live-checklist.md) — what must be true before production.
- [`docs/analytics-setup.md`](./docs/analytics-setup.md) — GTM, GA4, BigQuery, Clarity, Meta, TikTok.
- [`DESIGN.md`](./DESIGN.md) — the shipped design system: tokens, components and rules (mirrors `src/styles/global.css`).

## Develop

```bash
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # warns about go-live placeholders
pnpm build:production   # fails until src/config/site.ts is complete and legal is reviewed
pnpm og             # regenerate public/og-image.png from /og-image (needs pnpm dev + Google Chrome)
```

## Where things live

| What | Where |
| --- | --- |
| Company data, WhatsApp number, GTM id, legal-review flag | `src/config/site.ts` |
| Plans, prices, features (mirror of production `plans`) | `src/config/plans.ts` |
| FAQ copy (+ FAQPage JSON-LD) | `src/content/faq.ts` |
| Consent banner and Consent Mode | `src/components/ConsentBanner.astro`, `src/scripts/consent.ts` |
| Attribution cookie | `src/scripts/attribution.ts` |
| `cta_click` / `whatsapp_click` | `src/scripts/analytics.ts`, `src/scripts/whatsapp.ts` |
| Product mockups (fictional data only) | `src/components/mockups/` |

## Rules worth knowing

- The offer binds (CDC art. 30). List only what the app does today; keep claims to the defensible wording in `odonto-web/docs/research/termos-de-uso-privacidade-lgpd-saas.md` §5.3.
- Crimson (`--color-crimson`) is for actions only. Sand is for icons and micro-graphics. The gradient lives only on hero bands.
- No real patient data in mockups or screenshots, ever.

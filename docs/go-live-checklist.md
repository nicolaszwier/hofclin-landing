# Go-live checklist

`GO_LIVE=1 pnpm build` (and every Vercel **production** deploy) fails until the items marked 🔒 are done in [`src/config/site.ts`](../src/config/site.ts). The rest cannot be checked by the build — tick them by hand.

## Before the landing goes live (organic)

### Company and legal
- [ ] 🔒 `site.company`: razão social, CNPJ, endereço, e-mail, telefone (Decreto 7.962/2013, art. 2º).
- [ ] 🔒 `site.dpo`: encarregado and contact e-mail (LGPD art. 41).
- [ ] Counsel reviewed `/termos`, `/privacidade` and `/seguranca`; every `[a definir …]` bracket is resolved. Open points come from `odonto-web/docs/research/termos-de-uso-privacidade-lgpd-saas.md` §7:
  - [ ] whether the CDC applies (shapes refund, liability and price-change clauses);
  - [ ] the international-transfer mechanism for the US hosting (`odonto-api` #110);
  - [ ] the 90-day backup retention against deletion requests (gap G12);
  - [ ] whether `hof_attr` (campaign origin kept without consent) can stay "necessário" under legítimo interesse;
  - [ ] what happens to clinic data after cancellation (export, retention);
  - [ ] the site deliberately names no hosting provider and no country where data is stored (decision of 2026-10-18): the privacy policy lists supplier categories and says only that some suppliers may process data outside Brazil. Confirm this satisfies LGPD art. 9 (shared-use information) and Res. CD/ANPD 19/2024 art. 17 (international-transfer transparency), or whether the named list has to live somewhere — e.g. in the DPA sent to clinics.
- [ ] The Acordo de Tratamento de Dados (DPA) is published and linked where the drafts say `[a publicar]`.
- [ ] 🔒 `site.legal.reviewed = true` and `site.legal.updatedAt` set to the published date.
- [ ] The privacy policy promises **6 months** of access logs (Marco Civil art. 15). Railway keeps 7 days today — the API must actually retain them before this text goes live.

### Product promises the landing makes
- [ ] `nicolaszwier/odonto-api#361` + `nicolaszwier/odonto-web#360` are in production — the Pro card links to `/signup?plan=pro` and promises a Pro trial.
- [ ] `nicolaszwier/odonto-api#364` + `nicolaszwier/odonto-web#362` are in production — pricing says "você escolhe o plano ao cadastrar o cartão".
- [ ] `nicolaszwier/odonto-api#362` + `nicolaszwier/odonto-web#363` are in production — pricing, FAQ and Termos promise the **garantia de 7 dias**.
- [ ] `nicolaszwier/odonto-web#364` is in production — the app is `noindex`, so it does not compete with the landing in search.
- [ ] Re-read `src/config/plans.ts` against the production `plans` rows (prices, features). Documentos stays off while the app hides it.

### Contact
- [ ] 🔒 `site.whatsapp.number` (digits with country code, e.g. `5541999999999`).
- [ ] `site.whatsapp.enabled = true` — the floating button stays hidden until then.

### Domain and search
- [ ] Vercel project for this repo, production domain `hofclin.com.br`, plus `www.hofclin.com.br` (redirected to the apex by `vercel.json`).
- [ ] Google Search Console: verify the domain property, submit `https://hofclin.com.br/sitemap-index.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Check `https://hofclin.com.br/og-image.png` with a link preview (WhatsApp, LinkedIn Post Inspector).

## Before paid campaigns start

- [ ] 🔒 `site.analytics.gtmId`, with the container configured as in [analytics-setup.md](./analytics-setup.md).
- [ ] `nicolaszwier/odonto-api#363` + `nicolaszwier/odonto-web#361` in production — the API stores Attribution from `hof_attr`.
- [ ] `nicolaszwier/odonto-api#365` in production — `trial_start` and `purchase` reach GA4, Meta and TikTok server-side.
- [ ] End-to-end test: open the landing with `?utm_source=teste&utm_medium=cpc&gclid=TEST`, accept all cookies, sign up on `app.hofclin.com.br`, create a clinic, and see `trial_start` in GA4 DebugView, Meta Test Events and TikTok Events Manager.
- [ ] GA4 key events `trial_start` and `purchase` imported into Google Ads as conversions (`trial_start` as primary at launch).

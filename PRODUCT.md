# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: the dentist-owner of a small clinic that practices both odontologia and harmonização orofacial (HOF).** They choose the software, pay for it, and become the clinic admin in the app. Later they invite their dentists and secretárias, and each person gets a role with its own permissions.
- **Primary: the solo HOF practitioner.** One professional focused mainly on HOF, often without staff.
- **Served, but not the lead audience:** odontology-only clinics. The landing speaks first to clinics that do both, but it must never exclude odontology-only ones (CONTEXT.md, **HOF**). For them the faceograma simply stays available for later.
- On the landing these people are **Prospects**: clinics that arrived but have not started a Trial. They are never called "leads", because in Hofclin a **Lead** is a patient pre-registration (CONTEXT.md).
- Their job on the landing is to decide whether Hofclin fits their practice well enough to start the 10-day Trial.

## Product Purpose

Hofclin is clinic-management software for odontologia and HOF. The app lives at `app.hofclin.com.br` (`odonto-web` + `odonto-api`). This repository is the public marketing site at `hofclin.com.br`. Its job is to turn paid-campaign and organic visitors into clinics that start a **Trial**.

Success is measured server-side by the API. `trial_start` is the primary optimization conversion at launch, and `purchase` (the first paid charge) follows it. The landing itself emits only `cta_click` and `whatsapp_click`, and neither one counts as a conversion (docs/analytics-setup.md).

## Positioning

The lead claim is **odontologia and harmonização in the same prontuário**. Odontograma and faceograma sit on the same patient record, so what was done in the mouth and on the face shows up in one history, and the clinic never switches systems. Three supporting claims follow, all confirmed as differentiators:

1. **HOF traceability in depth.** Regions, application points, and doses are marked on the face. Planned and applied work sit on the same map, and each product records its brand, lot, expiry, reconstitution date, and label photo.
2. **Finance tied to care (Pro).** A sale is generated from the accepted quote or the appointment. Installments are recorded on the day the money arrives, with daily closing, a defaulters list, and a cost calculator for pricing procedures.
3. **An honest, simple offer.** A clear monthly price with no lock-in. The 10-day Trial needs no card, the clinic picks its plan when it registers a card, cancellation is self-service in the app, and there is a 7-day refund window after the first charge.

## Operating Context

- **How visitors arrive:** paid campaigns (Google Ads, Meta, TikTok) and organic search. Attribution (UTMs and click IDs) is captured in the `hof_attr` cookie and handed to the app at signup (docs/attribution-contract.md).
- **Handoff:** every Trial CTA goes to `app.hofclin.com.br/signup`, optionally with `?plan=standard|pro`, which sets the **Trial plan**. Signup, clinic creation, and payment all happen in the app. The landing has no forms or text inputs.
- **Contact:** a floating WhatsApp button exists, but it stays hidden until the real number is set (`site.whatsapp` in `src/config/site.ts`).
- **How the product is used:** in the browser, with nothing to install. It is designed for the tablet at the chair and the computer at reception, and patients sign anamneses and appointments on the tablet with a finger or stylus.
- **Pages:** home, `/odontologia`, `/harmonizacao-orofacial`, `/seguranca`, `/termos`, `/privacidade`, the cookie policy, and 404.
- **Language:** every user-visible string is PT-br.

## Capabilities and Constraints

**Offer (source of truth: `src/config/plans.ts`, which mirrors the production `odonto-api` Plan rows):**
- **Standard:** agenda, prontuário digital (odontograma, faceograma, anamnese), orçamentos with a link and a PDF for the patient, insights, and iCal.
- **Pro:** Standard plus Financeiro, which includes the Calculadora de custos. The calculator is never sold as separate from Financeiro.
- **Trial:** 10 days, no card. If it ends without a card, the clinic turns read-only until a card is registered, and the card is charged immediately. Either plan can be chosen at card registration, whichever one was trialled.
- **Billing:** monthly, auto-renewing, cancelled self-service. The 7-day refund window counts from the first paid charge.

**Binding constraints:**
- **The offer binds (CDC art. 30).** List only what a clinic on that plan can reach in the app today. Anything hidden or unreleased stays off; Documentos, for example, is hidden in the app and therefore absent from the landing.
- **Claims follow the defensible wording** in `odonto-web/docs/research/termos-de-uso-privacidade-lgpd-saas.md` §5.3. Security claims are limited to what `/seguranca` states. The site deliberately names no hosting provider and no storage country.
- **Price, renewal, cancellation, and Trial end appear together in legible type** (Lei 10.962/2004 art. 2º, III; Decreto 7.962/2013 art. 2º). The footer carries the company identification.
- **Consent (LGPD):** the Analytics and Marketing categories both start off, rejecting is as prominent as accepting, and no tag fires before its category is granted. GTM is not requested until a grant.
- **No real patient data** in mockups or screenshots, ever. The product mockups in `src/components/mockups/` use fictional data only.
- **No ad pixels inside the clinical app.** Conversions reach the ad platforms server-side (docs/adr/0001).
- **Vocabulary follows CONTEXT.md** (Plan, Trial, Trial plan, Plan choice, Refund window, Prospect, Funnel event). If CONTEXT.md and the `odonto-api` glossary disagree, the API wins.
- **Some promises depend on app releases.** The Pro Trial, plan choice at card registration, and the 7-day guarantee are each gated on specific app releases (docs/go-live-checklist.md, "Product promises the landing makes").

**Undecided or pending:**
- The real WhatsApp number, and when the button turns on.
- Showing the encarregado (DPO) line in the footer is switched off for now; `/privacidade` still names them.
- The open legal points in docs/go-live-checklist.md.

## Brand Commitments

- **Name:** Hofclin. The "HOF" means harmonização orofacial, which is the brand-level term; "estética facial" is avoided.
- **Logo assets:** `public/images/Hofclin-Horizontal.svg`, `public/images/Hofclin-Icone.svg`, `public/images/hofclin-logo-512.png`, `public/favicon.svg`, and `public/og-image.png` (generated by `pnpm og`).
- **Voice, as observed across the shipped copy:** plain, specific PT-br addressed to "você". The copy names the concrete clinical mechanism (faces of a tooth, points and doses, lot and expiry) instead of generic "gestão" claims. It uses no superlatives and says exactly what the product does, as in "dizemos exatamente o que fazemos". Offer terms use the UI labels from CONTEXT.md: "teste grátis", "garantia de 7 dias", and "plano". Never "freemium", "grátis para sempre", "premium", or "básico".

## Evidence on Hand

- **Pilot clinics use Hofclin, but nothing is approved for publication.** That rules out names, logos, quotes, testimonials, usage counts, and ratings. Future work must not invent any of these, nor imply them through phrases like "clínicas que confiam" or numeric social proof.
- **Product truth that can be shown:** the HTML product mockups in `src/components/mockups/` (agenda, anamnese, odontograma, faceograma, treatment plan, traceability, quote, insights, finance, cost calculator), all with fictional data.
- **Security facts:** the `/seguranca` page and `src/components/home/SecuritySection.astro`. These cover HTTPS, encrypted clinical files and backups, bcrypt passwords, backups every 6 hours kept for 90 days and immutable, per-clinic isolation, role permissions, an audit history, no Hofclin access to clinical content, and card data held only by the payment processor.
- **FAQ:** `src/content/faq.ts`, which also feeds the FAQPage JSON-LD.
- **Absent:** certifications, press, awards, and case studies.

## Product Principles

1. **Say only what is true today.** The offer binds. Every capability, price, and security claim must match the production app and the defensible legal wording, and an unreleased feature is left off rather than softened.
2. **One patient, one record.** Lead with odontologia and HOF together, and keep odontology-only clinics welcome.
3. **Show the mechanism, not the adjective.** Concrete clinical detail (faces, points, doses, lot, expiry, sale-from-quote) is the persuasion. Generic management claims are not.
4. **Transparency is part of the pitch.** Price, Trial end, renewal, cancellation, refund, and cookie choices are stated plainly and side by side, with no dark patterns.
5. **Clinical data is never decoration.** Use only fictional data in visuals and conservative security claims, and keep tracking consent-first.

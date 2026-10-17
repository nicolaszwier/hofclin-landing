# Hofclin Landing

The public marketing site for Hofclin, the clinic-management SaaS whose app lives in `odonto-web` / `odonto-api`. It exists to turn paid-campaign and organic visitors into clinics that start a **Trial**. Product terms (Plan, Subscription, Trial, Clinic) mirror the `odonto-api` glossary; if the two drift, the API wins and this file gets fixed.

Every user-visible string is PT-br. UI labels are noted per term as `(UI: …)`.

## Language

### Audience

**HOF** (UI: harmonização orofacial):
Facial harmonization performed by dental professionals — the "HOF" in Hofclin. The landing speaks first to clinics that practice both odontology and HOF, without excluding odontology-only clinics.
_Avoid_: estética facial; harmonização facial as the brand-level term

**Prospect**:
A clinic (or the person representing it) that reached the landing but has not yet started a Trial. Becomes a customer clinic at `trial_start`.
_Avoid_: lead — in Hofclin, **Lead** is a patient pre-registration (`odonto-web` glossary); never use it for a prospective clinic, even where ad platforms name their event "Lead"

### Attribution

**Attribution**:
The record of where a Prospect came from — UTM parameters and ad-platform click IDs (`gclid`, `gbraid`, `wbraid`, `fbclid`, `ttclid`) captured on the landing and handed to the app at signup, so the API can store it on the clinic. Holds two touches: the **first touch** (the visit that first brought the Prospect) and the **last non-direct touch** (the most recent campaign or referral before signup). Conversions reach ad platforms from the API, never from pixels inside the app; each platform receives its own click ID.
_Avoid_: putting ad pixels in the clinical app; keeping only one touch; letting a direct visit overwrite the last campaign touch

**Consent** (UI: preferências de cookies):
The visitor's choice, per category — Analytics (UI: analíticos) and Marketing — made on the landing banner. Both start off; rejecting is as prominent as accepting; it can be revisited anytime. No tag fires before its category is granted. UTM parameters travel to the app regardless, because they identify a campaign, not a person; click IDs and every server-side conversion sent to an ad platform require Marketing consent, which is stored alongside the Attribution. With Marketing granted, those conversions may carry the clinic admin's email and phone, normalized and SHA-256 hashed — never any patient data.
_Avoid_: pre-checked categories; a single "Concordo" button; sending a conversion to an ad platform for a Prospect who did not grant Marketing

**Conversation code** (UI: cód.):
A short random code appended to the prefilled WhatsApp message, recorded on that `whatsapp_click` so a chat can be traced back to its campaign and page. Appended only when the visitor granted Analytics — without the event that maps it, a code means nothing — so otherwise the chat arrives without one.
_Avoid_: putting UTM text or campaign names in the message itself

**Funnel event**:
One named step a Prospect or clinic passes, with one canonical name everywhere (landing, API, ad platforms map to it):
- `cta_click` — landing; carries the CTA's placement and the Plan, if any.
- `whatsapp_click` — landing.
- `sign_up` — API; account created.
- `trial_start` — API; clinic created, Trial begins. The primary optimization conversion at launch.
- `add_payment_info` — API; card registered via Checkout. Not revenue: during a Trial the first debit happens only at Trial end.
- `purchase` — API; first paid charge confirmed by the gateway, carrying value and Plan.
_Avoid_: calling card registration a purchase; per-platform event names in our own code or reports

### Offer

**Plan** (UI: plano):
A package the landing advertises, mirroring an active `odonto-api` Plan row. Two today: **Standard** and **Pro**. The landing lists only capabilities a clinic on that plan can reach in the app today — anything hidden or unreleased is left off, never shown as included.
_Avoid_: listing a feature the app currently hides; "pacote"; "tier"

**Standard** (UI: Standard):
The entry Plan: agenda, prontuário digital (odontograma, faceograma, anamnese), orçamentos, insights, and iCal.
_Avoid_: básico; listing documentos (hidden in the app)

**Pro** (UI: Pro):
Standard plus the Financeiro module, which includes the Calculadora de custos.
_Avoid_: premium; completo; selling the Calculadora de custos as separate from Financeiro

**Trial** (UI: teste grátis):
The 10-day self-service period every new clinic starts with, no card required. When it ends without a card the clinic turns read-only (reads and export still work) until a card is registered, which charges immediately.
_Avoid_: free plan; freemium; "grátis para sempre"

**Refund window** (UI: garantia de 7 dias):
The 7 days after a clinic's first paid charge during which cancelling returns that charge in full. Outside it, cancelling stops renewal and keeps access until the end of the paid cycle, with no refund. Renewal is monthly and automatic; cancelling is self-service in the app.
_Avoid_: "sem reembolso" as a blanket rule; counting the 7 days from Trial start or from card registration

**Trial plan**:
The Plan a Trial runs on, chosen by the Plan card the visitor clicked on the landing; Standard when none was chosen. It only sets the starting point — it never commits the clinic to that Plan.
_Avoid_: treating the Trial plan as the purchased plan

**Plan choice**:
The moment the clinic picks the Plan it will pay for: when registering the card, with the Trial plan preselected. Either Plan can be chosen regardless of which one was trialled.
_Avoid_: locking a clinic into its Trial plan; a plan switch that only the platform can perform

# Analytics setup (GTM, GA4, BigQuery, Clarity, Meta, TikTok)

The landing only does two things for analytics: it records **Attribution** in the `hof_attr` cookie ([contract](./attribution-contract.md)) and pushes two **Funnel events** to `window.dataLayer`. Everything after the click is reported server-side by `odonto-api` ([ADR 0001](./adr/0001-ad-conversions-are-sent-server-side-not-from-app-pixels.md)). Vocabulary: [`CONTEXT.md`](../CONTEXT.md).

## How Consent reaches GTM

1. `<head>` sets Consent Mode v2 defaults: `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` all **denied**.
2. GTM (`site.analytics.gtmId`) is **not requested** until the visitor grants Analytics or Marketing. This is Consent Mode *basic*: no cookieless pings before consent.
3. On a grant, the page sends `gtag('consent', 'update', …)` (Analytics → `analytics_storage`; Marketing → the three `ad_*` signals) and then loads GTM.
4. Revoking deletes the category's cookies and reloads the page.

So inside GTM, **every tag must require its consent type** (Tag → Advanced settings → Consent settings → "Require additional consent"):

| Tag | Required consent |
| --- | --- |
| Google tag (GA4) | `analytics_storage` |
| Microsoft Clarity | `analytics_storage` |
| Conversion Linker | `ad_storage` |
| Google Ads remarketing (if used) | `ad_storage`, `ad_personalization` |
| Meta Pixel | `ad_storage` |
| TikTok Pixel | `ad_storage` |

## dataLayer events

Both events carry `page_path` and the Attribution summary (`attr_first_source`, `attr_first_medium`, `attr_first_campaign`, `attr_last_source`, `attr_last_medium`, `attr_last_campaign`).

| Event | Extra parameters | Fired when |
| --- | --- | --- |
| `cta_click` | `cta_placement` (e.g. `hero`, `nav`, `pricing_pro`, `odontologia_final`), `plan` (`standard` / `pro` / `none`), `link_url` | Any trial CTA is clicked |
| `whatsapp_click` | `conversation_code` (e.g. `G7K2`), `wa_placement`, `wa_context` (`home`, `odontologia`, `harmonizacao`, `legal`) | The floating WhatsApp button is clicked |

## GTM container

**Variables** (Data Layer Variable): one per parameter above.

**Triggers**: Custom Event `cta_click`; Custom Event `whatsapp_click`; All Pages.

**Tags**
- *Google tag* — GA4 measurement ID, All Pages.
- *GA4 Event — cta_click* — event name `cta_click`, parameters from the variables.
- *GA4 Event — whatsapp_click* — event name `whatsapp_click`, parameters from the variables. `conversation_code` is what lets a WhatsApp chat be traced to its campaign.
- *Conversion Linker* — All Pages (keeps `_gcl_*` for Google Ads).
- *Microsoft Clarity* — Clarity project ID, All Pages. Turn on Clarity's masking for all text inputs (there are none on the landing today, but keep the default safe).
- *Meta Pixel* — base code (PageView) on All Pages; `Contact` standard event on `whatsapp_click`.
- *TikTok Pixel* — base code on All Pages; `Contact` on `whatsapp_click`.

Do **not** fire `Lead`, `CompleteRegistration`, `StartTrial` or `Purchase` from the landing: the API sends those with the real outcome. A landing-side copy would double-count. (And in Hofclin, "Lead" means a patient pre-registration — see `CONTEXT.md`, **Prospect**.)

## GA4 property

- Custom dimensions (event scope): `cta_placement`, `plan`, `conversation_code`, `wa_placement`, `wa_context`, `attr_first_source`, `attr_first_medium`, `attr_first_campaign`, `attr_last_source`, `attr_last_medium`, `attr_last_campaign`.
- Key events: `trial_start` and `purchase` (both arrive from the API via Measurement Protocol). `cta_click` is **not** a key event.
- Create a Measurement Protocol API secret for `odonto-api` (Admin → Data streams → Measurement Protocol).
- Link Google Ads; import `trial_start` (primary) and `purchase` (secondary, with value) as conversions.
- Link BigQuery with the **daily** export (the streaming export costs extra and is not needed for campaign analysis). Raw events then join on `user_pseudo_id` = `gaClientId` stored by the API on the clinic.
- Data retention: 14 months.

## Analyses this enables

- Trials and paid clinics per campaign, first touch vs last non-direct touch — SQL on `odonto-api` (Attribution on the clinic) joined with revenue.
- Landing funnel per campaign — `page_view` → `cta_click` (by `cta_placement`) → `trial_start` in BigQuery.
- WhatsApp conversations per campaign — look up a chat's `cód.` in `whatsapp_click` events.
- Where visitors stall — Clarity heatmaps and recordings per page.

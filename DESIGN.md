---
name: Hofclin
description: Warm, precise marketing system for clinic software that keeps odontologia and harmonização orofacial in one prontuário.
colors:
  crimson: "#ae2351"
  crimson-hover: "#941c44"
  sand: "#ecba7c"
  sand-deep: "#a86a2f"
  sand-soft: "#fbefe1"
  ink: "#1c1517"
  charcoal: "#62585a"
  slate: "#8f8486"
  paper: "#ffffff"
  cream: "#fbf6f2"
  cloud: "#f5ede6"
  hairline: "#ece1d9"
  hairline-strong: "#d9cbc1"
  whatsapp: "#25d366"
  whatsapp-hover: "#1ebe5a"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 5.2vw + 1rem, 5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  display-sm:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 3.6vw + 1rem, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 2.6vw + 1rem, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.375rem, 1vw + 1rem, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  price:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum' 1"
  body-lg:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.56
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body-sm:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: "-0.01em"
  button:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  eyebrow:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  chip:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  icon: "8px"
  input: "12px"
  card: "18px"
  band: "28px"
  card-lg: "32px"
  band-lg: "40px"
  pill: "100px"
spacing:
  gutter-sm: "16px"
  gutter: "32px"
  grid-gap: "20px"
  tile-padding: "24px"
  card-padding-sm: "32px"
  card-padding: "40px"
  heading-gap: "56px"
  section-sm: "80px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.crimson-hover}"
  button-primary-md:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-light-hover:
    backgroundColor: "{colors.cream}"
  pill-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip-highlight:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-deep}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip-done:
    backgroundColor: "{colors.sand-deep}"
    textColor: "{colors.paper}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  chip-planned:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-deep}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  icon-tile:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-deep}"
    rounded: "{rounded.icon}"
    size: "40px"
  feature-card:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.card-lg}"
    padding: "40px"
  surface-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card-lg}"
    padding: "40px"
  plan-card:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.card-lg}"
    padding: "40px"
  plan-card-highlighted:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card-lg}"
    padding: "40px"
  info-tile:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "24px"
  mock-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
  consent-option:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.input}"
    padding: "16px"
  final-cta-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.band-lg}"
    padding: "112px 24px"
  nav:
    backgroundColor: "rgb(255 255 255 / 0.85)"
    textColor: "{colors.charcoal}"
    height: "72px"
  whatsapp-button:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    size: "56px"
---

# Design System: Hofclin

## Overview

**Creative North Star: "The Warm Clinical Record"**

Hofclin looks like a patient chart laid on warm paper. Everything is specific and exact: the faces of a tooth, the points and doses on a face, a lot number and an expiry date. Nothing feels sterile. Every neutral leans toward a warm red-brown, the surfaces alternate between white paper and cream, and every shadow is tinted toward crimson rather than grey. The product itself carries the persuasion. Each section shows the real record as an HTML mockup with fictional data, tilted slightly and cropped by its container, as if a page were sliding out of a folder.

The mood is **warm, precise, and candid**. Warmth comes from the material: cream, sand, and a warm ink. Precision comes from tight display tracking, 1px hairlines, tabular prices, and single-weight line icons. Candor comes from what the system refuses to hide: the fine print under the price is set in legible charcoal at the same width as the plans, and the consent banner gives Reject and Accept the same weight.

Components feel **warm and tactile**. Buttons are fully rounded pills that lift on a soft crimson-tinted shadow and press down 1px when clicked. Cards are generously rounded and padded and sit on cream. Product mockups are white sheets with a hairline edge. Each page has one atmospheric moment, a framed sand-light band at the top, and a deep ink band closes the page at the bottom.

The system explicitly rejects **spa or beauty-salon gloss** (rose gold, glossy stock photos of faces, soft-focus aesthetics imagery) and **generic startup gradients** (purple-blue washes, glassmorphism, floating 3D blobs).

**Key Characteristics:**
- Warm monochrome canvas: paper, cream, and cloud, with warm ink and charcoal text.
- One action color: Hofclin Crimson appears only on the primary CTA and in the logo.
- Burnished Sand marks everything that is information rather than action: icons, checkmarks, eyebrows, and the marks inside mockups.
- Poppins at 400, 500, and 600, with display tracking pulled to -0.04em.
- Pills for everything you can press or tag, and 18–32px corners for everything that holds content.
- Product mockups with fictional data serve as the imagery. There are no photographs.

## Colors

The palette is a warm monochrome with one action color (crimson) and one informational accent family (sand).

### Primary
- **Hofclin Crimson** (`crimson`): the fill of the primary CTA ("Comece a usar gratuitamente", "Começar grátis", "Testar o Pro grátis") and the main color of the logo. It is the same color as the app's primary, so the hand-off from landing to app feels like one product.
- **Pressed Crimson** (`crimson-hover`): the hover state of the primary button, and nothing else.

### Secondary
- **Warm Sand** (`sand`): the logo's second color, the base of the hero gradient, the fill inside filler points on the faceograma mockup, and the low-opacity sparkle on the final CTA band. Never used for text.
- **Burnished Sand** (`sand-deep`): the same hue deepened until it reads at icon size. It colors every line icon, checkmark, eyebrow, highlighted chip text, toxin points on the faceograma, and "done" chips in the mockups.
- **Sand Wash** (`sand-soft`): the tile behind section icons, the "Mais completo" chip, "planned" chips in the mockups, and the text-selection highlight.

### Neutral
- **Warm Ink** (`ink`): headings, primary text, the outline of the highlighted plan card, the focus ring, and the background of the final CTA band. It replaces pure black everywhere.
- **Warm Charcoal** (`charcoal`): secondary copy, subtitles, card descriptions, the fine print under the price, and inactive nav links.
- **Mauve Slate** (`slate`): line art inside mockups, such as the face outline on the faceograma.
- **Paper** (`paper`): the page canvas, mockup sheets, and the surface of elevated cards.
- **Cream** (`cream`): alternating section backgrounds (Especialidades, Segurança, Dúvidas, footer), feature cards, mockup wells, and the standard plan card.
- **Cloud** (`cloud`): quiet fills inside mockups, such as the "Atendido" chip.
- **Hairline** (`hairline`): 1px dividers, card borders, FAQ separators, and the nav border once the page scrolls.
- **Strong Hairline** (`hairline-strong`): ghost-button and pill-tag borders, and the round mobile-menu trigger.

### Third-party
- **WhatsApp Green** (`whatsapp`, `whatsapp-hover`): only on the floating WhatsApp button, which is currently switched off.

### Named Rules
**The One Action Color Rule.** Hofclin Crimson fills the primary CTA and appears in the logo, and nowhere else. It is never used for text, links, icons, borders, section backgrounds, or chart marks. If something is not a button that starts the Trial, it is not crimson.

**The Sand Marks Rule.** Information is marked in Burnished Sand and actions in Crimson. Icons, checkmarks, eyebrows, and mockup marks use `sand-deep`. Sand is never body text.

**The No Cold Grey Rule.** Every neutral carries the warm red-brown undertone. Pure black, cool greys, and blue-greys are never used, and neither are Tailwind's default `gray`, `zinc`, or `slate` scales.

## Typography

**Display Font:** Poppins (with ui-sans-serif, system-ui, -apple-system, Segoe UI)
**Body Font:** Poppins (same stack)

**Character:** A single geometric sans does all the work. At display sizes it is pulled tight to -0.04em so headlines read as confident blocks. At body sizes it relaxes to -0.01em. Only the 400, 500, and 600 weights ship (latin subset, self-hosted via `@fontsource/poppins`, with 600 preloaded).

### Hierarchy
- **Display** (`display`): the home hero H1 only, one per page. It sets in two or three balanced lines.
- **Display Small** (`display-sm`): H1s on feature pages, which carry longer, keyword-bearing titles.
- **Headline** (`headline`): section H2s, the final CTA, and feature-row titles.
- **Title** (`title`): card and plan H3s.
- **Price** (`price`): the plan amount, with tabular numerals. "R$" and "/mês" sit beside it at body sizes.
- **Body Large** (`body-lg`): hero and section subtitles, in charcoal on paper and cream and in 75% Warm Ink on the hero band. Hero subtitles cap at about 36rem.
- **Body** (`body`): default running text. Feature lists set slightly smaller, at 15px.
- **Body Small** (`body-sm`): fine print, tile text, footer links, and the consent banner.
- **Eyebrow** (`eyebrow`): the sentence-case label above a section heading, in Burnished Sand. It is never uppercase and never tracked out.
- **Label** (`label`): pill-tag text.
- **Chip** (`chip`): status chips inside mockups, plus the "Mais completo" badge set at 12px.

### Named Rules
**The Tight Heading Rule.** Display and headline sizes always carry -0.04em tracking, and titles carry -0.035em. Flattening the tracking makes Poppins look generic.

**The Balanced Line Rule.** Headings use `text-wrap: balance` and paragraphs use `text-wrap: pretty`. No heading is left with a one-word last line.

## Layout

The page is a centered column with a max width of 1200px and side gutters of 16px (32px from 768px up). Sections stack vertically with 80px of vertical padding, 112px from 768px up. Paper and cream sections alternate, and a cream section is usually edged with hairline borders.

Two framed bands bracket every marketing page. The **hero band** is inset from the viewport by 12px (16px from 768px up) rather than running full-bleed. It has rounded corners, carries the sand-light gradient, and centers an eyebrow or breadcrumb, the H1, a subtitle, the CTA, and the "10 dias grátis · Cartão de crédito não obrigatório" reassurance line. Product mockups rise out of its bottom edge and are cropped by it. The **final CTA band** mirrors the hero at the foot of the page in Warm Ink with white text.

Section intros use a centered stack (eyebrow, H2, subtitle) capped at about 48rem, with 56px before the content. Content grids are two columns from 768px or 1024px up, with a 20px gap. Small tiles (assurances, security) go four-up from 1024px. Feature pages use alternating split rows: text and a check-list on one side, a cream well holding a mockup on the other, swapping sides from row to row.

The navigation is sticky: 64px tall (72px on desktop), white at 85% opacity with a backdrop blur, and it gains a hairline bottom border after 8px of scroll. Below 1024px the links collapse into a `<details>` menu behind a round 40px trigger. Anchor jumps offset by 88px so headings clear the nav.

Breakpoints are Tailwind's defaults: 640px, 768px, and 1024px. Every layout must hold at 375px with no horizontal scroll. Wide legal tables scroll inside their own box.

## Elevation & Depth

Depth is mostly tonal: cream against paper, with 1px hairlines. Shadows are reserved for things that should feel lifted off the page, and every shadow is tinted with the crimson-brown `rgb(85 12 36)`, never neutral black.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 17px 37px 0 rgb(85 12 36 / 0.035), 0 67px 67px 0 rgb(85 12 36 / 0.03), 0 150px 90px 0 rgb(85 12 36 / 0.02)`): a large, near-invisible ambient lift for white cards that sit on cream or white, such as the specialty cards and the highlighted Pro plan. Also used for the mobile menu sheet and the consent dialog.
- **Mock** (`box-shadow: 0 1px 2px 0 rgb(85 12 36 / 0.06), 0 12px 32px -8px rgb(85 12 36 / 0.12)`): product mockup sheets. It is slightly crisper, so a mockup reads as a separate piece of paper.
- **Button** (`box-shadow: 0 1px 2px 0 rgb(85 12 36 / 0.18), 0 3px 3px 0 rgb(85 12 36 / 0.12), 0 6px 4px 0 rgb(85 12 36 / 0.06), 0 11px 4px 0 rgb(85 12 36 / 0.01)`): the four-layer lift under filled buttons (primary, light, WhatsApp).
- **Hairline** (`box-shadow: 0 1px 2px 0 rgb(85 12 36 / 0.06)`): a whisper of separation for small elements.

### Named Rules
**The Tinted Shadow Rule.** Every shadow uses `rgb(85 12 36 / ≤0.18)`. A grey or black shadow breaks the warmth of the page.

**The Tonal-First Rule.** Separate with cream and hairlines before reaching for a shadow. A cream card on a paper section needs no shadow, while a white card on a cream section gets the Card shadow.

## Shapes

The form language is soft and consistent. Anything you press or that labels something is a full pill (100px): buttons, pill tags, chips, the round menu trigger, and the WhatsApp button. Anything that holds content is a rounded rectangle on a short scale: 8px for icon tiles, 12px for consent options and larger icon tiles, 18px for mockup sheets, info tiles, and the consent banner, 32px for feature, specialty, plan, and FAQ containers, and 28px (40px from 768px up) for the hero and final CTA bands.

Borders are always 1px hairlines. The only heavier outline is the Warm Ink border on the highlighted plan card. Mockups are the one place shapes break the grid: they tilt by ±2–3°, overlap in pairs, and are clipped by the bottom edge of their container. That cropping is deliberate, and a mockup is never shown floating whole in empty space.

Icons are custom single-weight line drawings (1.6px stroke, round caps and joins, `currentColor`) at 14–22px. Filled icon variants are never used.

## Components

### Buttons
Warm, tactile pills that lift and press.
- **Shape:** full pill (100px), with label and optional arrow icon spaced 8px apart, never wrapping.
- **Primary:** Hofclin Crimson fill, white Poppins 500 text, the Button shadow. Large is `14px 28px` at 16px; medium (nav) is `10px 20px` at 15px.
- **Hover / Active / Focus:** the fill deepens to Pressed Crimson over 160ms ease, and on press the button drops 1px (`translateY(1px)`). Focus shows a 2px Warm Ink outline offset by 3px, the global focus style.
- **Ghost:** transparent with a Strong Hairline border and Warm Ink text. On hover the border darkens to Warm Ink. It is used for "Entrar", the Standard plan CTA, and every consent button.
- **Light:** a white fill with the Button shadow for use on dark or gradient grounds. On hover it shifts to cream.

### Chips and Tags
- **Pill tag:** white, Strong Hairline border, 13px Poppins 500 Warm Ink with a Burnished Sand icon. It labels feature cards and mockup headers ("Prontuário digital", "Faceograma"). On a hero band it turns translucent white with a blur.
- **Status chips (inside mockups):** 11px Poppins 500 pills. Done is Burnished Sand with white text, planned is Sand Wash with Burnished Sand text, and in progress is outlined in Burnished Sand. In the agenda, attended is Cloud with charcoal text and scheduled is outlined in Strong Hairline. State is shown through sand depth, never through green, amber, or red.
- **Highlight chip:** Sand Wash with Burnished Sand text ("Mais completo"), and only one per view.

### Cards / Containers
- **Feature card:** cream, 32px corners, 32px padding (40px on desktop) on top. The mockup well below bleeds to the bottom edge, which crops the mockup.
- **Surface card:** white, 32px corners, hairline border, Card shadow. It is used on cream sections, such as the specialty columns.
- **Plan cards:** Standard is cream with a hairline border. Pro is white with a Warm Ink border and the Card shadow. Both are 32px corners with 40px padding, and the CTA is pinned to the bottom of each.
- **Info tiles:** white or transparent, hairline border, 18px corners, 20–24px padding, an icon (bare, or in a Sand Wash tile), then a semibold title and charcoal text.
- **FAQ:** one white 32px container with hairline dividers between native `<details>` rows. The question sets in Poppins 500, the charcoal chevron rotates 180° when open, and the answer sets in 15px charcoal at 1.625 line-height.

### Product Mockups (signature component)
White sheets (18px corners, hairline border, Mock shadow) that rebuild real screens in HTML and SVG: the odontograma, faceograma, anamnese with its signature line, agenda, orçamento, insights, finance, and cost calculator. A mockup header is a pill tag plus a charcoal meta line (patient name, age, or version). All marks inside use the sand family over slate line art. All names and data are fictional, mockups are `aria-hidden`, and they are never used as screenshots of real patient records.

### Inputs / Fields
The landing has no text inputs; signup happens in the app. The only form controls are the consent dialog's checkboxes. Each sits in a 12px-cornered option card with a hairline border, 16px padding, a semibold title, and a charcoal description, and the checkbox is accented in Warm Ink.

### Navigation
The logo (horizontal SVG, 28–32px tall) sits on the left. Links in the center are 14px Poppins 500 charcoal and turn Warm Ink on hover or when they are the current page (`aria-current`). On the right are ghost "Entrar" and primary "Começar grátis". On mobile a round hairline trigger opens a full-width white sheet with stacked links and full-width buttons.

### Consent Banner
A white card with 18px corners and stacked Card and Mock shadows. It sits bottom-left on desktop (max 440px wide) and spans the bottom edge on mobile. **Reject and Accept are both Ghost buttons of equal size, side by side**, with "Personalizar" as an underlined text button below. Consent UI never uses the primary crimson button.

### Final CTA Band
A Warm Ink band with 28px corners (40px from 768px up). It holds a white headline, a subtitle in 75% white, the primary crimson CTA, and the reassurance line. A large Warm Sand sparkle at 25% opacity sits in the top-right corner, the only decorative mark in the system.

## Do's and Don'ts

### Do:
- **Do** reserve Hofclin Crimson (#ae2351) for the primary Trial CTA fill, with #941c44 on hover.
- **Do** color icons, checkmarks, eyebrows, and mockup marks with Burnished Sand (#a86a2f).
- **Do** tint every shadow with `rgb(85 12 36)` and keep its opacity at or below 0.18.
- **Do** alternate paper and cream sections, and separate them with 1px hairlines (#ece1d9).
- **Do** use full pills (100px) for every button, tag, and chip, and 18px or 32px corners for content containers.
- **Do** pull display and headline tracking to -0.04em, and balance heading lines.
- **Do** set prices in Poppins 600 with tabular numerals.
- **Do** show the product as an HTML mockup with fictional data, tilted ±2–3° and cropped by its container's edge.
- **Do** keep the sand-light gradient on the framed hero band only, with one per page.
- **Do** give consent choices equal visual weight: both Ghost, same size, side by side.

### Don't:
- **Don't** use crimson for text, links, icons, borders, backgrounds, or decoration.
- **Don't** use pure black, cool greys, or Tailwind's default grey scales; Warm Ink (#1c1517) and Warm Charcoal (#62585a) cover every text need.
- **Don't** introduce green, amber, or red status colors in mockups; show state with sand depth, cloud, or an outline.
- **Don't** reach for spa or beauty-salon gloss: rose gold, glossy stock photos of faces, soft-focus aesthetics imagery.
- **Don't** use generic startup gradients: purple-blue washes, glassmorphism, floating 3D blobs.
- **Don't** load a Poppins weight above 600, or add a second typeface.
- **Don't** use filled or multi-color icons; the set is single-weight 1.6px line art.
- **Don't** use WhatsApp Green anywhere except the floating WhatsApp button.
- **Don't** put real patient names, photos, or data into any visual, ever.

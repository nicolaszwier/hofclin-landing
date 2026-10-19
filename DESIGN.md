---
name: Hofclin
description: Warm, precise marketing system for clinic software that keeps odontologia and harmonização orofacial in one prontuário.
colors:
  crimson: "#ae2351"
  crimson-hover: "#941c44"
  sand: "#ecba7c"
  sand-deep: "#a86a2f"
  sand-ink: "#8a5523"
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
    fontSize: "clamp(2.5rem, 4.2vw + 1rem, 4.5rem)"
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
  body-list:
    fontFamily: "Poppins, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
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
  split-gap: "80px"
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
  practice-switch:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "5px"
  practice-switch-thumb:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-ink}"
    rounded: "{rounded.pill}"
    height: "48px"
  pill-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip-highlight:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  chip-done:
    backgroundColor: "{colors.sand-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  chip-planned:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  chip-area-odonto:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.charcoal}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  chip-area-hof:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-ink}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  patient-record:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card-lg}"
  record-avatar:
    backgroundColor: "{colors.sand-soft}"
    textColor: "{colors.sand-ink}"
    rounded: "{rounded.pill}"
    size: "44px"
  preview-well:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.card-lg}"
    padding: "48px 40px 0"
  plan-card:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.card-lg}"
    padding: "40px"
  plan-card-highlighted:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card-lg}"
    padding: "40px"
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

Hofclin looks like a patient chart laid on warm paper. Everything is specific and exact: the faces of a tooth, the points and doses on a face, a lot number and an expiry date. Nothing feels sterile. Every neutral leans toward a warm red-brown, the surfaces alternate between white paper and cream, and every shadow is tinted toward crimson rather than grey. The product itself carries the persuasion. The pages show the real record as HTML previews built around one fictional patient, each cropped by the bottom edge of its cream well, as if a page were sliding out of a folder.

The mood is **warm, precise, and candid**. Warmth comes from the material: cream, sand, and a warm ink. Precision comes from tight display tracking, 1px hairlines, ruled lists, tabular prices, and single-weight line icons. Candor comes from what the system refuses to hide: the fine print under the price is set in legible charcoal at the same width as the plans, every preview says its data is fictional, and the consent banner gives Reject and Accept the same weight.

Components feel **warm and tactile**. Buttons are fully rounded pills that lift on a soft crimson-tinted shadow and press down 1px when clicked. Content sits on generous 32px corners or between hairline rules rather than inside boxes. Product previews are white sheets with a hairline edge. Each page has one atmospheric moment, a framed sand-light band at the top with the patient record rising out of its lower edge, and a deep ink band closes the page at the bottom.

The system explicitly rejects **spa or beauty-salon gloss** (rose gold, glossy stock photos of faces, soft-focus aesthetics imagery) and **generic startup gradients** (purple-blue washes, glassmorphism, floating 3D blobs).

**Key Characteristics:**
- Warm monochrome canvas: paper, cream, and cloud, with warm ink and charcoal text.
- One action color: Hofclin Crimson appears only on the primary CTA and in the logo.
- Burnished Sand marks everything that is information rather than action: icons, checkmarks, and the marks inside previews. Small sand-colored text steps down to Inked Sand.
- Poppins at 400, 500, and 600, with display tracking pulled to -0.04em. Headings stand alone, with no label above them.
- Pills for everything you can press or tag, 32px corners for everything that holds content, and hairline rules where a box would be too much.
- Product previews with one fictional patient serve as the imagery. There are no photographs.

## Colors

The palette is a warm monochrome with one action color (crimson) and one informational accent family (sand).

### Primary
- **Hofclin Crimson** (`crimson`): the fill of the primary CTA ("Comece a usar gratuitamente", "Começar grátis", "Testar o Pro grátis") and the main color of the logo. It is the same color as the app's primary, so the hand-off from landing to app feels like one product.
- **Pressed Crimson** (`crimson-hover`): the hover state of the primary button, and nothing else.

### Secondary
- **Warm Sand** (`sand`): the logo's second color, the base of the hero gradient, the icon on the checked practice-switch segment, the fill inside planned teeth and filler points in the charts, the harmonização bar in the agenda preview, and the low-opacity sparkle on the final CTA band. Never used for text.
- **Burnished Sand** (`sand-deep`): the same hue deepened until it reads at icon size. It colors every line icon, checkmark, flow arrow, legend swatch, toxin point and completed tooth in the charts, and "done" chips in the previews. It is a graphic color, not a text color.
- **Inked Sand** (`sand-ink`): Burnished Sand darkened until it holds at least 4.5:1 on paper, cream, and Sand Wash. It is the text color whenever sand has to be read: the "Mais completo" badge, planned and in-progress chips, harmonização area chips, the record avatar's initials, and "Preço sugerido" in the cost calculator.
- **Sand Wash** (`sand-soft`): the ground under the record avatar, the "Mais completo" badge, planned and harmonização chips, planned teeth, the small icon circles inside the Retornos preview, and the text-selection highlight.

### Neutral
- **Warm Ink** (`ink`): headings, primary text, the outline of the highlighted plan card, the focus ring, and the background of the final CTA band. It replaces pure black everywhere.
- **Warm Charcoal** (`charcoal`): secondary copy, subtitles, the fine print under the price, unchecked switch segments, inactive tour rows, and inactive nav links.
- **Mauve Slate** (`slate`): line art inside previews, such as the face outline on the faceograma, and the icons of inactive feature-tour rows.
- **Paper** (`paper`): the page canvas, the patient record sheet, preview sheets, the switch track, and the surface of elevated cards.
- **Cream** (`cream`): alternating section backgrounds (Especialidades, Segurança, Dúvidas, footer), preview wells, dose rows and tooth badges inside the record, and the standard plan card.
- **Cloud** (`cloud`): quiet fills inside previews, such as odontologia area chips, "Condição" chips, and the "Atendido" chip.
- **Hairline** (`hairline`): 1px dividers, card borders, record pane dividers, list rules, FAQ separators, and the nav border once the page scrolls.
- **Strong Hairline** (`hairline-strong`): ghost-button and pill-tag borders, the practice-switch track, the rule that opens a ruled list or the specialty diptych, outlined "shared" and "scheduled" chips, the odontologia bar in the agenda preview, and the round mobile-menu trigger.

### Third-party
- **WhatsApp Green** (`whatsapp`, `whatsapp-hover`): only on the floating WhatsApp button, which is currently switched off.

### Named Rules
**The One Action Color Rule.** Hofclin Crimson fills the primary CTA and appears in the logo, and nowhere else. It is never used for text, links, icons, borders, section backgrounds, or chart marks. If something is not a button that starts the Trial, it is not crimson.

**The Sand Marks Rule.** Information is marked in Burnished Sand and actions in Crimson. Icons, checkmarks, and preview marks use `sand-deep`. When sand has to be read as text, it uses `sand-ink`; sand is never body text.

**The Area Code Rule.** Wherever the two specialties appear side by side, odontologia is neutral (Cloud fill, Strong Hairline bar) and harmonização is sand (Sand Wash fill with Inked Sand text, Warm Sand bar). Something that belongs to both is outlined in Strong Hairline.

**The No Cold Grey Rule.** Every neutral carries the warm red-brown undertone. Pure black, cool greys, and blue-greys are never used, and neither are Tailwind's default `gray`, `zinc`, or `slate` scales.

## Typography

**Display Font:** Poppins (with ui-sans-serif, system-ui, -apple-system, Segoe UI)
**Body Font:** Poppins (same stack)

**Character:** A single geometric sans does all the work. At display sizes it is pulled tight to -0.04em so headlines read as confident blocks. At body sizes it relaxes to -0.01em. Only the 400, 500, and 600 weights ship (latin subset, self-hosted via `@fontsource/poppins`, with 600 preloaded).

### Hierarchy
- **Display** (`display`): the home hero H1 only, one per page. Its cap holds it to two balanced lines inside the 1200px column.
- **Display Small** (`display-sm`): H1s on feature pages, which carry longer, keyword-bearing titles.
- **Headline** (`headline`): section H2s, the final CTA, and feature-row titles.
- **Title** (`title`): plan H3s, specialty H3s, and feature-tour screen titles.
- **Price** (`price`): the plan amount, with tabular numerals. "R$" and "/mês" sit beside it at body sizes.
- **Body Large** (`body-lg`): hero and section subtitles, in charcoal on paper and cream and in 75% Warm Ink on the hero band. Feature-tour index rows use this size at weight 500.
- **Body** (`body`): default running text, definition-list descriptions, and the FAQ contact line.
- **Body List** (`body-list`): check-lists, feature points, FAQ answers (relaxed to 1.625 line-height), the practice-switch legend and segments on phones, record pane titles, and the guarantee titles. It is the size for anything read as a list rather than a paragraph.
- **Body Small** (`body-sm`): fine print, guarantee descriptions, footer links, and the consent banner.
- **Label** (`label`): pill-tag text in preview headers. The record's 13px meta lines share its size at weight 400.
- **Chip** (`chip`): status and area chips inside previews, plus the "Mais completo" and record specialty chips set at 12px.

### Named Rules
**The Tight Heading Rule.** Display and headline sizes always carry -0.04em tracking, and titles carry -0.035em. Flattening the tracking makes Poppins look generic.

**The Balanced Line Rule.** Headings use `text-wrap: balance` and paragraphs use `text-wrap: pretty`. No heading is left with a one-word last line.

**The Heading Speaks First Rule.** Nothing sits above an H1 or H2: no eyebrow, kicker, pill tag, or small label. The heading carries the section, and a subtitle may follow it. The only thing allowed above a page H1 is the breadcrumb, because it is navigation.

## Layout

The page is a centered column with a max width of 1200px and side gutters of 16px (32px from 768px up). Sections stack vertically with 80px of vertical padding, 112px from 768px up (128px for the feature tour and the finance section). Paper and cream sections alternate, and a cream section is usually edged with hairline borders.

Two framed bands bracket every marketing page. The **hero band** is inset from the viewport by 12px (16px from 768px up) rather than running full-bleed. It has rounded corners, carries the sand-light gradient, and centers the H1 (with a breadcrumb above it on feature pages), a subtitle, the practice switch on the home page, the CTA, and the "10 dias grátis · Cartão de crédito não obrigatório" reassurance line. The patient record then rises out of its lower edge: the band keeps deep bottom padding and the record pulls up over it with a negative top margin, so the sheet overlaps the band instead of sitting inside it. The **final CTA band** mirrors the hero at the foot of the page in Warm Ink with white text.

The hero is the only centered composition. Section headings align left by default, with the H2 and its subtitle capped at about 42rem and 56px before the content. Sections that explain one idea against its evidence use a **two-column split** from 1024px up: about 5fr for the heading column and 7fr for the content, with an 80px gap. The feature tour, security, and FAQ use it, and the tour and FAQ keep their left column sticky 128px from the top. Feature-page rows without a preview use the same split, with their points in two columns.

The **specialty diptych** sets odontologia and harmonização side by side under one Strong Hairline rule, divided by a vertical Strong Hairline rather than boxed in cards; on phones the divider becomes a horizontal rule. Feature pages use alternating halves: text and a check-list on one side, a cream preview well on the other, swapping sides from row to row. The pricing guarantees run as one ruled strip: one column on phones, two by two, then four across from 1024px, with hairline dividers between cells.

The navigation is sticky: 64px tall (72px on desktop), white at 85% opacity with a backdrop blur, and it gains a hairline bottom border after 8px of scroll. Below 1024px the links collapse into a `<details>` menu behind a round 40px trigger. Anchor jumps offset by 88px so headings clear the nav.

Breakpoints are Tailwind's defaults: 640px, 768px, and 1024px. Components that live at different widths respond to their container instead: the record panes and the odontograma choose their layout from their own width. Every layout must hold at 375px with no horizontal scroll. Wide legal tables scroll inside their own box.

## Elevation & Depth

Depth is mostly tonal: cream against paper, with 1px hairlines. Shadows are reserved for things that should feel lifted off the page, and every shadow is tinted with the crimson-brown `rgb(85 12 36)`, never neutral black.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 17px 37px 0 rgb(85 12 36 / 0.035), 0 67px 67px 0 rgb(85 12 36 / 0.03), 0 150px 90px 0 rgb(85 12 36 / 0.02)`): a large, near-invisible ambient lift for white sheets that sit over a band or on cream, such as the patient record and the highlighted Pro plan. Also used for the mobile menu sheet and the consent dialog.
- **Mock** (`box-shadow: 0 1px 2px 0 rgb(85 12 36 / 0.06), 0 12px 32px -8px rgb(85 12 36 / 0.12)`): product preview sheets. It is slightly crisper, so a preview reads as a separate piece of paper.
- **Button** (`box-shadow: 0 1px 2px 0 rgb(85 12 36 / 0.18), 0 3px 3px 0 rgb(85 12 36 / 0.12), 0 6px 4px 0 rgb(85 12 36 / 0.06), 0 11px 4px 0 rgb(85 12 36 / 0.01)`): the four-layer lift under filled buttons (primary, light, WhatsApp).
- **Hairline** (`box-shadow: 0 1px 2px 0 rgb(85 12 36 / 0.06)`): a whisper of separation for small elements, such as the practice-switch track and its thumb.

### Named Rules
**The Tinted Shadow Rule.** Every shadow uses `rgb(85 12 36 / ≤0.18)`. A grey or black shadow breaks the warmth of the page.

**The Tonal-First Rule.** Separate with cream and hairlines before reaching for a shadow. A cream well on a paper section needs no shadow, while a white sheet on a cream section or over the hero band gets the Card shadow.

## Shapes

The form language is soft and consistent. Anything you press or that labels something is a full pill (100px): buttons, the practice switch and its thumb, pill tags, chips, the record avatar, the round menu trigger, and the WhatsApp button. Anything that holds content is a rounded rectangle on a short scale: 8px for dose rows inside the record, 12px for consent options, 18px for preview sheets, the consent banner, and the legal draft note, 32px for the patient record, preview wells, plan cards, and the FAQ container, and 28px (40px from 768px up) for the hero and final CTA bands.

Borders are always 1px hairlines, and ruled lists stand in for boxes: the security definitions, the pricing guarantees, the feature-tour index, and the record history are separated by rules, not tiles. The only heavier outline is the Warm Ink border on the highlighted plan card. Previews are cropped by the bottom edge of their well, and a preview is never shown floating whole in empty space. Only the finance pair overlaps, with its upper sheet tilted 2°.

Icons are custom single-weight line drawings (1.6px stroke, round caps and joins, `currentColor`) at 14–26px. They sit inline beside the heading, term, or label they belong to. Filled icon variants are never used.

## Components

### Buttons
Warm, tactile pills that lift and press.
- **Shape:** full pill (100px), with label and optional arrow icon spaced 8px apart, never wrapping.
- **Primary:** Hofclin Crimson fill, white Poppins 500 text, the Button shadow. Large is `14px 28px` at 16px; medium (nav) is `10px 20px` at 15px.
- **Hover / Active / Focus:** the fill deepens to Pressed Crimson over 160ms ease, and on press the button drops 1px (`translateY(1px)`). Focus shows a 2px Warm Ink outline offset by 3px, the global focus style.
- **Ghost:** transparent with a Strong Hairline border and Warm Ink text. On hover the border darkens to Warm Ink. It is used for "Entrar", the Standard plan CTA, the 404 return link, and every consent button.
- **Light:** a white fill with the Button shadow for use on dark or gradient grounds. On hover it shifts to cream.
- **Arrow link:** Warm Ink Poppins 500 with a Strong Hairline underline offset 4px that darkens to ink on hover, followed by a 16px arrow. It is the secondary path out of a section ("Ver preços", "Conheça o prontuário odontológico").

### Practice Switch (signature component)
The home hero asks "O que a sua clínica faz?" and the answer recomposes the record below it.
- **Structure:** a native fieldset whose legend is the question (15px Poppins 500, 80% Warm Ink), over three equal radio segments: Odontologia, Harmonização, and As duas (checked by default). Phones show short labels (Odonto, HOF).
- **Track:** a white pill with a Strong Hairline border, 5px of inner padding, and the Hairline shadow. Segments are 48px tall (52px from 768px up), charcoal Poppins 500 with a Burnished Sand icon, and turn Warm Ink on hover.
- **Thumb:** a Sand Wash pill with a 1px inset Burnished Sand ring (3:1 or more against the white track) and the Hairline shadow slides under the checked segment. The checked label turns Inked Sand at Poppins 600. The selection reads as information, not as an action, so it stays light and never takes Warm Ink or crimson.
- **Focus:** the radio stays invisible and full-size over its segment; keyboard focus draws the global ink ring on the segment label.
- **Motion:** the thumb slides with a 280ms CSS transform transition on `cubic-bezier(0.16, 1, 0.3, 1)`, starting on the click frame. The subtitles above it share one grid cell and swap by visibility, so the switch never moves.

### Patient Record (signature component)
One fictional patient's prontuário (Marina Alves, 34), shared by every preview on the site so the odontograma, faceograma, history, anamnese, and products all describe one person.
- **Sheet:** white, 32px corners, hairline border, Card shadow. It overlaps the hero band's lower edge.
- **Patient bar:** a 44px Sand Wash avatar with Inked Sand initials, the name in Poppins 600, a 13px charcoal meta line that ends "dados fictícios", and specialty chips following the Area Code Rule.
- **Panes:** odontograma and faceograma side by side from 1024px, divided by a hairline, each with a 15px semibold title, a Burnished Sand icon, a chart, and a legend. Each pane is a size container: when one pane has the record to itself (from 760px of pane width) it opens a side list (procedures by tooth, or products with lot and expiry); below 420px the face stacks above its doses; below 430px the odontograma switches from two arch rows to four quadrant rows so tooth numbers stay at 11px or more.
- **History:** a ruled list of visits with date, title, detail, and an area chip, filtered to the chosen specialty.
- **State:** on the home page the checked radio drives every state through `:has()` on the hero root, on the same frame and without JavaScript. The specialty pages fix the state with `data-practice` on the record.
- **Motion:** the new layout applies immediately; the panes and the history then settle in with a 260ms Web Animation (opacity from 0.4 and a 6px rise, `cubic-bezier(0.16, 1, 0.3, 1)`) that never blocks input. Under reduced motion nothing animates.

### Feature Tour (signature component)
The rest of the record, one screen at a time, in the two-column split.
- **Index:** a sticky left column under the section heading: a ruled list (hairline rows, 16px padding) of 18px Poppins 500 charcoal labels, each with a Mauve Slate icon. The row whose screen sits in the middle band of the viewport (IntersectionObserver, -45% margins) turns Warm Ink with a Burnished Sand icon, and an arrow slides in from 6px to the left over 300ms. Hover shows the same state. The index is hidden below 1024px, where the screens simply stack.
- **Screens:** a Title H3, a body-lg charcoal paragraph, and a preview well.

### Preview Wells
A cream well with 32px corners and 32px top padding (48px from 768px up; 20px sides, 40px from 640px up) holds a preview sheet capped at 480px wide. The sheet is pushed 20px down so the well's bottom edge crops it; 20px of inner padding keeps its last row readable. Wells are `aria-hidden`, because the previews are illustrations.

### Product Previews
White sheets (18px corners, hairline border, Mock shadow) that rebuild real screens in HTML and SVG: the odontograma, faceograma, anamnese with its signature line, agenda, orçamento, insights, treatment sessions, applications, finance, and cost calculator. A preview header is a pill tag plus a charcoal meta line. All marks inside use the sand family over slate line art. All names and data are fictional, previews are `aria-hidden` or carry a descriptive label, and they are never screenshots of real patient records.

### Chips and Tags
- **Pill tag:** white, Strong Hairline border, 13px Poppins 500 Warm Ink with a Burnished Sand icon. It labels preview headers only ("Hoje", "Toxina botulínica", "Tratamento de canal · 16"), never page headings.
- **Status chips (inside previews):** 11px Poppins 500 pills. Done is Inked Sand with white text (6.2:1), planned is Sand Wash with Inked Sand text, in progress is outlined in Burnished Sand with Inked Sand text, and a recorded condition is Cloud with charcoal text. In the agenda, attended is Cloud with charcoal text and scheduled is outlined in Strong Hairline. State is shown through sand depth, never through green, amber, or red.
- **Area chips:** odontologia is Cloud with charcoal text, harmonização is Sand Wash with Inked Sand text, and shared is outlined in Strong Hairline.
- **Highlight chip:** Sand Wash with Inked Sand text ("Mais completo"), and only one per view.

### Dotted Lines
Meta text joined by " · " (age · since · dados fictícios, "1 concluído · 2 planejados", tooth · face). Each part keeps its trailing dot and never wraps inside itself, so a narrow line never starts with a dot.

### Ruled Lists
Where earlier versions used tiles, the system uses rules.
- **Definition list (security):** opens with a Strong Hairline rule; each row is a hairline-separated pair, 24px of vertical padding, with the term (Poppins 600, inline Burnished Sand icon) in a 15rem column and the charcoal description beside it.
- **Check-list:** Body List text with 18px Burnished Sand checkmarks, 12px apart, often opened by a hairline rule.
- **Guarantee strip:** one ruled band of four cells, each an icon, a semibold Body List title, and a Body Small charcoal line.

### Cards / Containers
- **Plan cards:** Standard is cream with a hairline border. Pro is white with a Warm Ink border and the Card shadow. Both are 32px corners with 40px padding (32px on phones), and the CTA is pinned to the bottom of each.
- **FAQ:** the questions sit in the split's right column in one white 32px container with hairline dividers between native `<details>` rows. The question sets in Poppins 500, the charcoal chevron rotates 180° when open, and the answer sets in Body List charcoal at 1.625 line-height. The sticky left column carries the H2 and a contact line with the support e-mail.

### Inputs / Fields
The landing has no text inputs; signup happens in the app. The form controls are the practice switch's radios and the consent dialog's checkboxes. Each checkbox sits in a 12px-cornered option card with a hairline border, 16px padding, a semibold title, and a charcoal description, and the checkbox is accented in Warm Ink.

### Navigation
The logo (horizontal SVG, 28–32px tall) sits on the left. Links in the center are 14px Poppins 500 charcoal and turn Warm Ink on hover or when they are the current page (`aria-current`). On the right are ghost "Entrar" and primary "Começar grátis". On mobile a round hairline trigger opens a full-width white sheet with stacked links and full-width buttons.

### Consent Banner
A white card with 18px corners and stacked Card and Mock shadows. It sits bottom-left on desktop (max 440px wide) and spans the bottom edge on mobile. **Reject and Accept are both Ghost buttons of equal size, side by side**, with "Personalizar" as an underlined text button below. Consent UI never uses the primary crimson button.

### Final CTA Band
A Warm Ink band with 28px corners (40px from 768px up). It holds a white headline, a subtitle in 75% white, the primary crimson CTA, and the reassurance line. A large Warm Sand sparkle at 25% opacity sits in the top-right corner, the only decorative mark in the system.

## Do's and Don'ts

### Do:
- **Do** reserve Hofclin Crimson (#ae2351) for the primary Trial CTA fill, with #941c44 on hover.
- **Do** color icons, checkmarks, and preview marks with Burnished Sand (#a86a2f), and set any sand-colored text in Inked Sand (#8a5523).
- **Do** tint every shadow with `rgb(85 12 36)` and keep its opacity at or below 0.18.
- **Do** alternate paper and cream sections, and separate them with 1px hairlines (#ece1d9).
- **Do** use full pills (100px) for every button, switch, tag, and chip, and 18px or 32px corners for content containers.
- **Do** pull display and headline tracking to -0.04em, and balance heading lines.
- **Do** left-align section headings, and keep centered composition for the hero band alone.
- **Do** set prices in Poppins 600 with tabular numerals.
- **Do** show the product as an HTML preview built from the one fictional patient, cropped by the bottom edge of its well.
- **Do** separate lists, definitions, and guarantees with hairline rules, with icons inline beside their term.
- **Do** code the two specialties the same way everywhere: odontologia neutral, harmonização sand.
- **Do** keep the sand-light gradient on the framed hero band only, with one per page.
- **Do** apply a state change on the frame it is chosen and animate only what settles after it (CSS transitions or a non-blocking Web Animation on `cubic-bezier(0.16, 1, 0.3, 1)`); never hold the page on a snapshot while a control waits to respond.
- **Do** give consent choices equal visual weight: both Ghost, same size, side by side.

### Don't:
- **Don't** use crimson for text, links, icons, borders, backgrounds, or decoration.
- **Don't** use pure black, cool greys, or Tailwind's default grey scales; Warm Ink (#1c1517) and Warm Charcoal (#62585a) cover every text need.
- **Don't** set text in Burnished Sand; it is under 4.5:1 on every ground in the palette.
- **Don't** put an eyebrow, kicker, pill tag, or small label above an H1 or H2.
- **Don't** lay out a section as a grid of icon tiles or equal icon cards; icons sit inline beside their heading or term.
- **Don't** introduce green, amber, or red status colors in previews; show state with sand depth, cloud, or an outline.
- **Don't** reach for spa or beauty-salon gloss: rose gold, glossy stock photos of faces, soft-focus aesthetics imagery.
- **Don't** use generic startup gradients: purple-blue washes, glassmorphism, floating 3D blobs.
- **Don't** load a Poppins weight above 600, or add a second typeface.
- **Don't** use filled or multi-color icons; the set is single-weight 1.6px line art.
- **Don't** use WhatsApp Green anywhere except the floating WhatsApp button.
- **Don't** put real patient names, photos, or data into any visual, ever.

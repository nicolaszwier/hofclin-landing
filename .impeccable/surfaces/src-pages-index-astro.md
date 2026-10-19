---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/odontologia.astro","src/pages/harmonizacao-orofacial.astro"]
---

# Surface brief: marketing pages (home, /odontologia, /harmonizacao-orofacial)

## Scope and mode
Persuade. Home is the primary target; the two specialty pages share its hero record, rows, pricing, FAQ and final CTA. Legal pages only inherit nav and footer.

## Audience, job, action
- Dentist-owners of small clinics doing odontologia + HOF, and solo HOF practitioners; odontology-only clinics stay welcome.
- Job: decide in seconds whether Hofclin fits *their* practice, then start the 10-day Trial (signup in the app).
- Proof: HTML previews of the real screens with one fictional patient (Marina Alves), labelled as fictional. No testimonials, logos or counts exist.
- The user asked that each specialty read as usable on its own as well as together.

## Constraints
- Elevation inside the established world (DESIGN.md); no new palette or face.
- Keep the odontograma/faceograma and the other previews; improve or drop individual ones as the layout needs.
- Copy keeps every existing claim; new lines only recombine confirmed facts.

## Direction contract
THESIS: The visitor tells the page what their clinic does (odontologia, harmonização or both) and one fictional patient's prontuário recomposes to match. It refuses the category default: a centered gradient hero over rows of equal icon cards.
OWN-WORLD: The Warm Clinical Record. Framed sand-light hero band, paper and cream alternation, warm ink, crimson only on Trial CTAs, Burnished Sand marks with a darker sand for small text, Poppins 400–600 at -0.04em, an ink-filled pill switch, a 32px record sheet on the crimson-tinted shadow, HTML previews with fictional data. No eyebrows, no icon-tile grids.
STORY: The visitor reads the headline, answers "O que a sua clínica faz?", watches Marina's record become theirs, learns each specialty works alone and together, then moves through anamnese, agenda, orçamentos, retornos, financeiro, segurança and price to the Trial CTA.
FIRST VIEWPORT: At 1440×900: nav; framed band; centered two-line H1 (~64px); a subtitle that follows the choice; legend plus a three-segment pill switch (As duas by default) centered near y 430; crimson CTA with the reassurance line under it; a full-width white record sheet rising out of the band near y 620, showing the patient bar and odontograma | faceograma panes; the shared history continues below the fold.
FORM: "Your practice, your record", position 5 of 7 on the ordered list; seed: seed:a818c7b6f135204d. Signature interaction: the switch morphs the record panes and filters the history through a 450ms view transition, with a CSS :has() fallback; the switch's ink pill slides between segments.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment
Clicking "Odontologia" or "Harmonização" and seeing the other map fold away while the history keeps only that specialty's visits; clicking "As duas" brings both back into one record.

## Unresolved
- Whether the switch choice should later carry into the signup link (it does not today; plans are not per specialty).

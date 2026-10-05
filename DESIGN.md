# DESIGN.md: Mantasha Noor portfolio

Written from the finished code (Phase 6). The Impeccable skill bundle could not install, so this was written by hand instead of `/impeccable document`.

## Tokens (src/index.css)
All colours are CSS variables, mapped to Tailwind via `@theme inline`. Light is the brand default; dark mode follows the viewer's system setting or `data-theme`.

| Token | Light | Dark | Use |
|---|---|---|---|
| `bg` | #fff7fa | #131116 | page |
| `surface` | #ffffff | #1c1920 | cards, form |
| `tint` / `tint-2` / `tint-3` | blush / lavender / baby blue | deep tints | soft card fills |
| `ink` | #141218 | #f7f1f5 | text, black buttons |
| `muted` | #5a5461 | #b8aebb | secondary text |
| `accent` | #c2456b | #ef8aa9 | the ONE accent: primary buttons, labels |
| `night` | #141218 | #0c0a0e | Reviews band, footer |
| `--grad` | pink > blush > baby blue > lavender | deep plum > navy | hero, order section, logo ring |

## Type
- Display: Cormorant Garamond 500/600 + 500 italic (emphasis = italic of the same family).
- Body: Outfit Variable.
- Section titles: `sectionTitle` in `src/lib/ui.js`.

## Shape
Cards and images 20px. Buttons and filter chips full pill. Inputs 12px.

## Components
Buttons come only from `btn` in `src/lib/ui.js` (primary, ink, ghost, smPrimary, smGhost).
Cards use a soft shadow and no border (Impeccable: no hairline + wide shadow). Images never zoom on hover; the card lifts instead.

## Sections (one page, in order)
Hero (centred copy between two sliding photo columns, butterflies, blossoms) > Why Choose Handmade (black band) > About (centred text + 4 cards) > Featured Works (6 strip, no prices) > Gallery (black, filters, Load More, Product Details popup) > My Journey (timeline) > Reviews > Contact > Footer (black).

## Type additions
Script: Great Vibes for the logo name and monogram signature only.
Text on black sections uses `accent-night` (#f29bb4), never `accent`.

## Motion (src/components/motion.jsx, index.css)
Welcome gate with Yes/No and circular reveal; butterflies released while scrolling down; marquee ribbon; scroll progress bar; back-to-top with progress ring; hero word-by-word reveal, mouse spotlight, twinkling sparkles, magnetic buttons, monogram ring draws itself, petals fall, photos fan in and float, parallax on scroll; section titles rise word by word and the flourish draws in; images wipe in from below; About portrait drifts inside its arch; blossoms sway; tilt cards; sliding active pill in nav and gallery filter; journey line fills as you scroll; spring pop on icons/steps; button shine on hover. Everything is off or static under prefers-reduced-motion.

## Z-index
nav 40, floating WhatsApp 45, mobile menu 50, lightbox 60.

## Content rules
No invented reviews or prices (data files hold placeholders). No em-dashes in visible copy.

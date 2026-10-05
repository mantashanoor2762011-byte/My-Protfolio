# Findings (Phase 3)

Sources: `impeccable detect src` (static), `impeccable detect <url>` at 1440x900 and 390x844 (rendered).
Impeccable skill bundle (critique/audit commands) could not be installed, so critique + audit were done by hand against PRODUCT.md and Impeccable's rules.

| # | Bucket | Severity | Finding | Conflicts with contract? | Action |
|---|---|---|---|---|---|
| 1 | color | minor | ai-color-palette x6: "cyan gradient background" (the pink/blue/lavender brand gradient) | YES. Gradient is the user's own reference swatch, kept as a deliberate risk | Waived: brand gradient specified by client |
| 2 | responsive | minor | body-text-viewport-edge: review card text off-screen right | No. Cards live in an intentional horizontal scroll-snap track | Waived: false positive on scroll track |
| 3 | structure | minor (advisory) | thin-border + wide-shadow x15 on service and gallery cards | No | Fixed: borders removed, soft shadow kept |
| 4 | motion | minor (advisory) | image-hover-transform x15 (image zoom on hover) | No | Fixed: images still; whole card lifts on hover instead |
| 5 | responsive | major | Mobile nav: "Order Now" visible <640px (hidden vs inline-flex conflict), logo name wrapped to 2 lines | No | Fixed: wrapper span controls visibility, logo nowrap |
| 6 | structure | minor | Hero headline ran to 3 lines on desktop | No | Fixed in build: 2 lines |
| 7 | structure | minor | Peacock photo had white screenshot border | No | Fixed: cropped source |

## Waived taste rule
- "No duplicate CTA intent": hero "Explore My Work" and service "View Work" are both portfolio intent. Both labels were specified in the client brief, and "View Work" also filters the gallery, so kept.

# Round 2 (after client mockup redesign)
| # | Bucket | Severity | Finding | Conflicts with contract? | Action |
|---|---|---|---|---|---|
| 8 | color | minor | ai-color-palette x13 (brand gradient now on more sections) | Yes (client gradient) | Waived |
| 9 | typography | minor | italic-serif-display on hero h1 | Yes (client mockup uses italic display) | Waived with reason |
| 10 | color | major | Low contrast on "Handmade With Love" pill (translucent over gradient) | No | Fixed: solid surface |
| 11 | responsive | minor | Journey/Order-process text started 30px off-screen before reveal (x-slide) | No | Fixed: reveal on y instead |
| 12 | color | major (manual audit) | Rose accent text on black cards ~3.5:1 | No | Fixed: lighter `accent-night` token for text on dark |
Final rendered scan: only waived findings remain at 1440 and 390 widths.

# Round 3 (more animation, client request)
| # | Bucket | Severity | Finding | Action |
|---|---|---|---|---|
| 13 | motion | major (own test) | Section heading word-reveal never fired (IntersectionObserver saw the clipped words as hidden) | Fixed: heading triggers, words follow via variants |
| 14 | motion | minor | marquee: infinite loop ribbon | Waived: one ribbon only, client asked for richer motion, pauses on hover, static with reduced motion |
| 15 | motion | blocker (client report) | Featured Works images stayed invisible: the wipe-reveal watched the clipped element itself, which the browser saw as 0% visible, so it never fired | Fixed: an unclipped wrapper triggers the reveal; verified Featured + all gallery cards at desktop and mobile |

# Round 4 (welcome gate + new hero, client request)
| # | Bucket | Severity | Finding | Action |
|---|---|---|---|---|
| 16 | motion | major (own test) | "No" answer took 1.2s to respond (exit reused the entry delay) | Fixed: exit has its own 0.25s transition |
| 17 | motion | major (own test) | Reduced motion: hero headline still faded in | Fixed: plain text when reduced motion is on |
| 18 | typography | minor | oversized-h1 (75px, 29vh) | Fixed: scaled down to 62-69px |
| 19 | structure | minor | cramped-padding: filter chips and pill buttons had 0 vertical padding | Fixed: py on all pill buttons |
| 20 | color | minor | dark-glow on hero/gate headline | Waived: client asked for a glowing headline (reference screenshot) |
| 21 | motion | minor | marquee: hero photo strips | Waived: sliding project photos requested by client |

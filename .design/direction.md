# Direction contract

- **Surface:** single-page portfolio + order site for a handmade artist (Mantasha Noor)
- **Lane:** brand
- **taste variant:** design-taste-frontend (v2)
- **Dials:** VARIANCE 7 / MOTION 5 / DENSITY 3
- **Design language (one sentence):** a soft pastel "stationery" world (pink-lavender-blue gradient from the reference swatch) anchored by true-black type and one black color-block, with calligraphic display type and generous whitespace so the handmade pieces carry the page.
- **References (2–3):** boutique stationery/wedding-invitation studios; Kinfolk-style editorial spacing; the user's gradient swatch (pink #FF8A9A → blush #FFC6D9 → baby blue #A8D8F0 → lavender #B9A6F7).
- **Type pairing:** display Cormorant Garamond (italic for emphasis; justified: calligraphy/manuscript craft is her core service) / body Outfit
- **Palette intent:** white + pale blush base, the brand gradient used only on the hero and the order section, near-black ink text (#141218, cool not espresso), ONE interactive accent: deep rose #C2456B (rose-gold feel). Peach only as a soft tint, never a second accent.
- **Motion intent:** ease-out fade/rise reveals on scroll (staggered), gentle card lift on hover, smooth-scroll nav, lightbox fade+scale. No parallax, no bounce, no infinite loops. Full prefers-reduced-motion fallback.
- **Shape rule:** cards and images 20px radius, buttons and filter chips full pill, inputs 12px.
- **Layout families (no repeats):** hero = split (copy left, image collage right); about = asymmetric two-column; services = bento of 6 mixed-size tiles; reviews = black color-block band with horizontal scroll-snap cards; gallery = filter chips + 2/3/4-col grid; orders = gradient band with form card + contact side panel; footer = black.
- **Deliberate risks we are keeping:** the pastel pink/lavender/blue gradient (user-specified, overrides the Lila rule, but used restrained); a serif display face; one black reviews band inside a light page (a single deliberate color block, plus the black footer).

## Do not
- No invented reviews, names, prices or counts. Data arrays with clear placeholders.
- No em-dashes in visible copy. No eyebrow labels beyond the hero's "Handmade With Love ♡" and at most two more on the page.
- No purple glow buttons, no neon, no glassmorphism everywhere, no bounce easing.
- No separate pages or routes. Section IDs + smooth scroll only.
- No random stock photos pretending to be her work; clearly labelled image slots until she supplies photos.
- Hero: max 1 primary + 1 secondary CTA (WhatsApp moves to a floating button), per taste-skill hero rule.

## Changelog
- 2026-10-01 created in Phase 1
- 2026-10-02 Phase 4-5: removed card borders (shadow only), removed image hover zoom; brand gradient + review-track findings waived with reasons. Dials unchanged: VARIANCE 7 / MOTION 5 / DENSITY 3 still describe what shipped.
- Do not (added): no hairline border together with a wide shadow; no image zoom on hover.
- 2026-10-02 REDIRECTION from client mockup: layout now follows the client's own design (MN monogram hero, Why Choose Handmade band, Featured Works, Services grid, dark Gallery, Journey timeline, Reviews, Custom Orders + Order Process, Contact, black footer). Script logo (Great Vibes), italic Cormorant hero, blossom sprigs. Dials now VARIANCE 6 / MOTION 7 / DENSITY 4 (client asked for rich animations).
- 2026-10-02 Client: removed Skills & Services section, removed prices from Featured Works, added 6 new photos, hero and featured now use different photos to cut repeats.
- 2026-10-02 Client: removed Custom Orders section. Order Now (nav, hero, Why band) scrolls to Contact; gallery/lightbox Order Now opens WhatsApp with the piece's details.
- 2026-10-02 Client: +4 photos, +2 videos (21 pieces). 'All' view interleaves categories.
- 2026-10-02 Client asked for better animations: intro curtain (once per session), category marquee, word-rise section titles, image wipe reveals, magnetic hero buttons, mouse spotlight + twinkles in hero, About image parallax, back-to-top with progress ring. MOTION dial now 8.
- 2026-10-02 Client: reviews filled with 4 customer reviews (Nimra x2, Fozia, Sadia) shown as a 2x2 grid; CTA 'Share Your Experience'.
- 2026-10-02 Client: welcome gate (Yes/No) on every visit; Yes opens the site through a circle growing from the button. Hero rebuilt: centred glowing headline, project photos sliding up (left) and down (right), one sliding row on mobile, butterflies and blossoms. Old one-time intro removed.
- 2026-10-02 Client: butterflies 1.7x larger (24-37px).
- 2026-10-02 Client: scrolling down releases butterflies that flutter up from the screen edges (max 6, off with reduced motion).
- 2026-10-02 Client: footer contact is now a row of 4 icon buttons (WhatsApp, Email, Instagram, TikTok) on the right with hover tooltips; icons under the logo removed.
- 2026-10-02 Client: footer compacted (desktop ~240px tall), quick links in rows of 3.
- 2026-10-02 Client: pink satin roses video moved from Bouquets to Gajry; +3 bouquet videos, +1 jewelry video (25 pieces); hero strip bouquet photo now red rose bouquet.
- 2026-10-02 Client: TikTok end cards trimmed from all videos; +1 jewelry video (26 pieces).
- 2026-10-02 Client: email links open Gmail compose in the browser on computers, mail app (mailto) on phones; WhatsApp/Instagram/TikTok open in a new tab everywhere.
- 2026-10-02 Client: +Alhamdulillah blue calligraphy, +black crystal mirror ring (28 pieces). Watermarked photos from other TikTok accounts held until client confirms ownership.
- 2026-10-02 Client gave no preference on watermarked photos: added a 'Design Ideas' filter (shown last in All) with photo credit, 'Ask for price', and a note in the popup; moved green gajray, tassel hoops, mehndi set there; Featured/hero now use her own gajray.
- 2026-10-02 Client: +3 calligraphy (MashaAllah, Kun Fayakun, maroon circle) = 38 pieces.
- 2026-10-02 Client: Design Ideas section deleted with all its photos/videos; gallery back to 28 pieces of her own work.
- 2026-10-02 Client: About image removed (centred text + cards). All photos, posters and videos colour-graded (white balance, levels, soft contrast, richer colour, sharpening). Photo cards get a champagne hairline, soft vignette and a light sweep on hover.

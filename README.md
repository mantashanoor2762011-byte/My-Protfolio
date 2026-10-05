# Mantasha Noor - Portfolio Website

One-page website (React + Vite + Tailwind CSS v4).

## Run it
```bash
npm install
npm run dev      # opens a local preview
npm run build    # makes the final site in dist/
```
Upload the `dist/` folder to Netlify, Vercel or any hosting.

## Where to change things
| What | File |
|---|---|
| WhatsApp, email, Instagram, TikTok, About Me text, Journey years | `src/data/site.js` |
| Gallery photos/videos, titles, **prices** (replace `Rs. XXX`), Featured Works, Product Details completion time | `src/data/gallery.js` |
| Reviews (replace placeholders with real reviews) | `src/data/reviews.js` |
| Services text and photos | `src/data/services.js` |
| Hero fanned photos | `src/components/Hero.jsx` (top of file) |
| Animations | `src/components/motion.jsx` and the bottom of `src/index.css` |
| Colours and fonts | `src/index.css` |

## Adding a new photo or video to the gallery
1. Put the file in `public/media/` (e.g. `public/media/new-bouquet.webp`).
2. Copy one item in `src/data/gallery.js` and change `src`, `title`, `category`, `price`, `description`.
   For a video use `type: 'video'` and also add a `poster` image.

## Design notes
- `PRODUCT.md`, `.design/direction.md`, `.design/findings.md`, `DESIGN.md`: the design brief, direction and review notes.

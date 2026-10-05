import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`            -> normal site in dist/ (deploy anywhere: Netlify, Vercel, cPanel)
// `vite build --mode single` -> one self-contained HTML file (used for the claude.ai preview)
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: mode === 'single'
    ? { outDir: 'dist-single', copyPublicDir: false, assetsInlineLimit: 100_000_000 }
    : { outDir: 'dist' },
}))

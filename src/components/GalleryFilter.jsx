import { motion } from 'motion/react'
import { galleryCategories } from '../data/gallery.js'

export default function GalleryFilter({ active, onChange, counts }) {
  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
      <div className="flex w-max gap-2 md:mx-auto md:w-auto md:flex-wrap md:justify-center" role="group" aria-label="Filter gallery by category">
        {galleryCategories.map((c) => {
          const on = active === c.id
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(c.id)}
              className={`relative isolate h-11 whitespace-nowrap rounded-full border px-5 py-2 text-[15px] transition-colors duration-200 active:scale-[0.98] ${
                on ? 'border-transparent text-[#141218]' : 'border-on-night/20 text-on-night hover:border-on-night/60'
              }`}
            >
              {on && (
                <motion.span
                  layoutId="gallery-chip"
                  className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(135deg,#ffb2bd,#cfc0fb)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {c.label}
              <span className={`ml-2 text-xs ${on ? 'text-[#141218]/70' : 'text-on-night-muted'}`}>{counts[c.id] ?? 0}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

import { forwardRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { MagnifyingGlassPlus, Play } from '@phosphor-icons/react'
import { RevealImage } from './motion.jsx'

const GalleryCard = forwardRef(function GalleryCard({ item, categoryLabel, onView, onOrder, index = 0 }, ref) {
  const reduce = useReducedMotion()
  const cover = item.type === 'video' ? item.poster : item.src
  return (
    <motion.article
      ref={ref}
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, delay: reduce ? 0 : (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-[20px] bg-night-2 ring-1 ring-[#f0d6b4]/15 transition duration-300 ease-out hover:-translate-y-1 hover:ring-[#f0d6b4]/40 hover:shadow-[0_24px_50px_-28px_rgb(240_180_200/0.35)]"
    >
      <button
        type="button"
        onClick={onView}
        className="photo-lux relative block aspect-[4/5] overflow-hidden"
        aria-label={`View ${item.title}${item.type === 'video' ? ' video' : ''}`}
      >
        <RevealImage className="size-full" imgClassName="size-full object-cover" delay={(index % 4) * 0.07} src={cover} alt={item.alt} loading="lazy" />
        <span className="absolute inset-0 grid place-items-center bg-[#0c0a0e]/0 transition duration-300 group-hover:bg-[#0c0a0e]/35">
          <span className="grid size-14 scale-75 place-items-center rounded-full bg-white/90 text-[#141218] opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
            {item.type === 'video' ? <Play size={22} weight="fill" /> : <MagnifyingGlassPlus size={22} />}
          </span>
        </span>
        {item.type === 'video' && (
          <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-white/90 text-[#141218] transition duration-300 group-hover:opacity-0" aria-hidden="true">
            <Play size={16} weight="fill" />
          </span>
        )}
      </button>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="text-[13px] text-accent-night">{categoryLabel}</p>
        <h3 className="mt-1 font-display text-xl font-medium leading-snug text-on-night md:text-[1.35rem]">{item.title}</h3>
        <p className="mt-1 text-sm text-on-night-muted">{item.price}</p>
        <div className="mt-auto grid grid-cols-1 gap-2 pt-4 sm:grid-cols-2">
          <button type="button" onClick={onView} className="inline-flex h-10 items-center py-2 justify-center rounded-full border border-on-night/25 text-sm font-medium text-on-night transition hover:border-on-night/70 active:scale-[0.98]">
            View
          </button>
          <button type="button" onClick={onOrder} className="inline-flex h-10 items-center py-2 justify-center rounded-full bg-accent text-sm font-medium text-on-accent transition hover:bg-accent-hover active:scale-[0.98]">
            Order Now
          </button>
        </div>
      </div>
    </motion.article>
  )
})

export default GalleryCard

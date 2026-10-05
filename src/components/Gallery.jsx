import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'
import GalleryFilter from './GalleryFilter.jsx'
import GalleryCard from './GalleryCard.jsx'
import Lightbox from './Lightbox.jsx'
import Blossom from './Blossom.jsx'
import { SectionHeading } from './motion.jsx'
import { categoryLabel, galleryItems } from '../data/gallery.js'
import { whatsappLink } from '../lib/contact.js'

const PAGE = 8

export default function Gallery({ filter, onFilterChange, onOrderItem }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [limit, setLimit] = useState(PAGE)

  useEffect(() => setLimit(PAGE), [filter])

  const filtered = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  )
  const visible = filtered.slice(0, limit)
  const counts = useMemo(() => {
    const c = { all: galleryItems.length }
    galleryItems.forEach((i) => (c[i.category] = (c[i.category] ?? 0) + 1))
    return c
  }, [])

  return (
    <section id="gallery" className="relative overflow-hidden bg-night py-24 text-on-night md:py-28">
      <Blossom className="absolute -left-4 top-6 w-28 opacity-90 md:w-36" />
      <Blossom flip className="absolute -right-4 top-24 w-24 opacity-80 md:w-32" style={{ animationDelay: '-4s' }} />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading dark title="My Gallery" subtitle="A collection of my handmade creations." />

        <div className="mt-10">
          <GalleryFilter active={filter} onChange={onFilterChange} counts={counts} />
        </div>

        {visible.length === 0 ? (
          <div className="mt-10 rounded-[20px] border border-dashed border-on-night/20 px-6 py-16 text-center">
            <p className="font-display text-3xl">New pieces coming soon</p>
            <p className="mx-auto mt-3 max-w-[44ch] text-on-night-muted">Ask me on WhatsApp for photos of my recent work in this category.</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex h-12 items-center py-2 rounded-full bg-on-night px-6 font-medium text-night">
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <motion.div layout className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item, i) => (
                <GalleryCard
                  key={item.id}
                  index={i}
                  item={item}
                  categoryLabel={categoryLabel(item.category)}
                  onView={() => setOpenIndex(i)}
                  onOrder={() => onOrderItem(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filtered.length > limit && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setLimit((l) => l + PAGE)}
              className="btn-shine inline-flex h-12 items-center py-2 gap-2 rounded-full bg-[linear-gradient(135deg,#ffb2bd,#cfc0fb)] px-7 text-[15px] font-medium text-[#141218] transition hover:brightness-105 active:scale-[0.98]"
            >
              Load More <CaretDown size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <Lightbox
        items={visible}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
        onOrder={(item) => {
          setOpenIndex(null)
          onOrderItem(item)
        }}
      />
    </section>
  )
}

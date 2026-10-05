import { ArrowUpRight } from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'
import { RevealImage, SectionHeading } from './motion.jsx'
import { categoryLabel, featuredIds, galleryItems } from '../data/gallery.js'

const featured = featuredIds.map((id) => galleryItems.find((g) => g.id === id)).filter(Boolean)

export default function FeaturedWorks({ onOpenCategory }) {
  return (
    <section aria-labelledby="featured-title" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
      <div id="featured-title">
        <SectionHeading title="Featured Works" subtitle="A glimpse of some of my favorite creations" />
      </div>
      <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6">
        {featured.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.07} className="w-[62%] shrink-0 snap-start sm:w-[40%] md:w-auto">
            <button
              type="button"
              onClick={() => onOpenCategory(item.category)}
              className="group block w-full overflow-hidden rounded-[20px] bg-surface text-left shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft"
            >
              <RevealImage
                delay={i * 0.08}
                className="photo-lux aspect-[4/5]"
                imgClassName="size-full object-cover"
                src={item.type === 'video' ? item.poster : item.src}
                alt={item.alt}
                loading="lazy"
              />
              <span className="flex items-center justify-between gap-2 p-4">
                <span className="block font-display text-xl leading-tight text-ink">{categoryLabel(item.category)}</span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-bg transition duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-on-accent">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

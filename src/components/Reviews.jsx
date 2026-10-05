import { Heart, Quotes } from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Blossom from './Blossom.jsx'
import { SectionHeading } from './motion.jsx'
import { reviews } from '../data/reviews.js'
import { whatsappLink } from '../lib/contact.js'
import { site } from '../data/site.js'

const reviewRequest = `Hello ${site.name},\n\nI would like to share a review of my order:\n\n`

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-24 md:py-28">
      <Blossom flip className="absolute -right-4 top-8 w-24 md:w-32" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading title="What My Customers Say" subtitle="Real people. Real experiences." />

        <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal as="li" key={i} delay={(i % 2) * 0.1} className="h-full">
              <TiltCard className="h-full" max={4}>
                <figure className="flex h-full flex-col items-center rounded-[20px] bg-surface p-7 text-center shadow-soft-sm">
                  <span className="grid size-14 place-items-center rounded-full bg-brand p-[1.5px]">
                    <span className="grid size-full place-items-center rounded-full bg-surface text-accent">
                      {r.placeholder ? <Heart size={22} weight="duotone" aria-hidden="true" /> : <Quotes size={22} weight="fill" aria-hidden="true" />}
                    </span>
                  </span>
                  <blockquote className={`mt-5 font-display text-[1.45rem] leading-snug ${r.placeholder ? 'italic text-muted' : 'text-ink'}`}>
                    {r.placeholder ? r.quote : `\u201C${r.quote}\u201D`}
                  </blockquote>
                  <figcaption className="mt-6">
                    <span className="inline-flex h-8 items-center rounded-full bg-ink px-4 text-sm font-medium text-bg">{r.name}</span>
                    <span className="mt-2 block text-sm text-muted">{r.detail}</span>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="text-lg text-muted">We’d love to hear from you ♡</p>
          <a
            href={whatsappLink(reviewRequest)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-5 inline-flex h-12 items-center rounded-full bg-ink px-7 py-3 text-[15px] font-medium text-bg transition hover:opacity-90 active:scale-[0.98]"
          >
            Share Your Experience
          </a>
        </Reveal>
      </div>
    </section>
  )
}

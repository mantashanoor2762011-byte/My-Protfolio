import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import Blossom from './Blossom.jsx'
import { SectionHeading } from './motion.jsx'
import { journey } from '../data/site.js'

export default function Journey() {
  const reduce = useReducedMotion()
  const listRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 55%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <section id="journey" className="relative overflow-hidden bg-brand-soft py-24 md:py-28">
      <Blossom className="absolute -left-4 bottom-4 w-28 md:w-40" />
      <Blossom flip className="absolute -right-4 top-20 w-24 md:w-32" style={{ animationDelay: '-2s' }} />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading title="My Journey" subtitle="From a small idea to something beautiful." />

        <ol ref={listRef} className="relative mt-14 space-y-6 pl-10 md:pl-14">
          {/* track + animated progress line */}
          <span aria-hidden="true" className="absolute bottom-2 left-[11px] top-2 w-[2px] rounded-full bg-accent/15 md:left-[19px]" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-2 left-[11px] top-2 w-[2px] origin-top rounded-full bg-[linear-gradient(#f3a0b7,#cfc0fb)] md:left-[19px]"
            style={{ scaleY: reduce ? 1 : scaleY }}
          />
          {journey.map((step, i) => (
            <motion.li
              key={i}
              className="relative"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute -left-10 top-6 grid size-6 place-items-center rounded-full bg-surface shadow-soft-sm md:-left-14 md:size-10"
                initial={reduce ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.15 }}
              >
                <span className="size-2.5 rounded-full bg-accent md:size-3.5" />
              </motion.span>
              <div className="rounded-[20px] bg-surface/85 p-5 shadow-soft-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-soft md:p-6">
                <p className="text-sm font-medium tracking-wide text-accent">{step.year}</p>
                <p className="mt-1.5 text-[17px] leading-relaxed text-ink">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

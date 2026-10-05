import { motion, useReducedMotion } from 'motion/react'
import { HandHeart, Heart, Palette, Sparkle } from '@phosphor-icons/react'
import Blossom from './Blossom.jsx'
import { whyHandmade } from '../data/site.js'
import { scrollToSection } from '../lib/scroll.js'

const icons = { heart: Heart, star: Sparkle, palette: Palette, hand: HandHeart }

export default function WhyHandmade() {
  const reduce = useReducedMotion()
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden bg-night text-on-night">
      <Blossom flip className="absolute -right-4 bottom-0 w-28 opacity-90 md:w-36" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <motion.h2
          id="why-title"
          initial={reduce ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[2.2rem] font-medium md:text-[2.6rem]"
        >
          Why Choose Handmade?
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.25fr] lg:gap-0">
          <ul className="contents">
            {whyHandmade.map((w, i) => {
              const Icon = icons[w.icon]
              return (
                <motion.li
                  key={w.title}
                  initial={reduce ? false : { opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center px-4 text-center lg:border-r lg:border-on-night/10"
                >
                  <motion.span
                    initial={reduce ? false : { scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.2 + i * 0.12 }}
                    className="grid size-16 place-items-center rounded-full bg-brand p-[1.5px]"
                  >
                    <span className="grid size-full place-items-center rounded-full bg-night transition duration-300 group-hover:bg-night-2">
                      <Icon size={28} weight="light" className="text-on-night transition duration-300 group-hover:scale-110" aria-hidden="true" />
                    </span>
                  </motion.span>
                  <h3 className="mt-4 font-medium">{w.title}</h3>
                  <p className="mt-1.5 max-w-[22ch] text-sm leading-relaxed text-on-night-muted">{w.text}</p>
                </motion.li>
              )
            })}
          </ul>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center text-center lg:items-start lg:pl-12 lg:text-left"
          >
            <p className="font-display text-[2rem] leading-tight">Have an idea?</p>
            <p className="font-display text-xl italic text-on-night/85">Let's make it real.</p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
              className="btn-shine mt-5 inline-flex h-12 items-center py-2 rounded-full bg-[linear-gradient(135deg,#ffb2bd,#c3e5f6)] px-6 text-[15px] font-medium text-[#141218] transition hover:brightness-105 active:scale-[0.98]"
            >
              Start Your Order
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

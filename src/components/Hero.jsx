import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { ArrowRight, Heart, Sparkle, WhatsappLogo } from '@phosphor-icons/react'
import Blossom from './Blossom.jsx'
import Butterflies from './Butterflies.jsx'
import { Magnetic, Petals, WordReveal } from './motion.jsx'
import { site } from '../data/site.js'
import { scrollToSection } from '../lib/scroll.js'
import { whatsappLink } from '../lib/contact.js'
import { btn } from '../lib/ui.js'

// Project photos that slide up (left) and down (right). Change them here.
const left = [
  { src: '/media/calligraphy-umrah-mubarak.webp', alt: 'Umrah Mubarak calligraphy' },
  { src: '/media/gajray-red-satin-poster.webp', alt: 'Red satin rose gajray' },
  { src: '/media/craft-peacock.webp', alt: 'Paper peacock wall hanging' },
  { src: '/media/jewelry-jhumka.webp', alt: 'Maroon bead jhumka' },
  { src: '/media/bouquet-paper-sunflowers.webp', alt: 'Paper sunflowers with bees' },
  { src: '/media/gajray-pink-wrist.webp', alt: 'Pink rose wrist gajray' },
]
const right = [
  { src: '/media/bouquet-red-rose-black-wrap-poster.webp', alt: 'Red rose bouquet in black wrapping' },
  { src: '/media/calligraphy-allah-red.webp', alt: 'Allah calligraphy in red' },
  { src: '/media/jewelry-mirror-ring.webp', alt: 'Red bead mirror ring' },
  { src: '/media/craft-butterfly-wall-hanging.webp', alt: 'Butterfly flower wall hanging' },
  { src: '/media/gajray-red-wrist.webp', alt: 'Red rose wrist gajray' },
  { src: '/media/calligraphy-al-hayy.webp', alt: 'Al-Hayy Al-Qayyum calligraphy' },
]
const ease = [0.16, 1, 0.3, 1]

function Strip({ images, direction, className = '', play }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`relative h-full overflow-hidden [mask-image:linear-gradient(transparent,#000_14%,#000_86%,transparent)] ${className}`}
      initial={reduce ? false : { opacity: 0, y: direction === 'up' ? 80 : -80 }}
      animate={play ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1.4, delay: 0.25, ease }}
    >
      <div className={direction === 'up' ? 'anim-strip-up' : 'anim-strip-down'}>
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 || undefined}>
            {images.map((img) => (
              <figure key={img.src} className="mb-4 overflow-hidden rounded-[20px] bg-surface p-1.5 shadow-soft">
                <img src={img.src} alt={copy === 0 ? img.alt : ''} loading="eager" className="aspect-[3/4] w-full rounded-[15px] object-cover" />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero({ play = true }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0.2])

  const mx = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 })
  const my = useSpring(useMotionValue(-400), { stiffness: 120, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(460px circle at ${mx}px ${my}px, rgb(255 255 255 / 0.45), transparent 70%)`

  const go = (id) => (e) => { e.preventDefault(); scrollToSection(id) }
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: play ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-brand"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - r.left)
        my.set(e.clientY - r.top)
      }}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: glow }} />
      <Petals />

      {/* Flowers */}
      <Blossom className="absolute -left-6 bottom-0 z-10 w-28 md:w-40" />
      <Blossom flip className="absolute -right-6 bottom-0 z-10 w-24 md:w-36" style={{ animationDelay: '-2.5s' }} />
      <Blossom className="absolute left-[24%] top-6 hidden w-20 rotate-[-20deg] opacity-80 lg:block" style={{ animationDelay: '-4s' }} />
      <Blossom flip className="absolute right-[24%] top-10 hidden w-16 rotate-[15deg] opacity-80 lg:block" style={{ animationDelay: '-1s' }} />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-5 md:px-8 lg:h-[calc(100dvh-72px)] lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)_minmax(0,1fr)] lg:gap-10">
        <Strip images={left} direction="up" play={play} className="hidden -rotate-2 lg:block" />

        {/* Centre content */}
        <motion.div style={{ y: contentY, opacity: fade }} className="relative z-10 flex flex-col items-center justify-center py-14 text-center lg:py-0">
          <motion.p {...rise(0.1)} className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface px-4 py-1.5 text-sm font-medium text-ink">
            Handmade With Love
            <motion.span
              animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}
              className="inline-flex text-accent"
            >
              <Heart size={15} weight="fill" aria-hidden="true" />
            </motion.span>
          </motion.p>

          <div className="relative mt-7">
            {[
              ['-left-6 -top-3', 18, '0s'], ['-right-4 top-2', 13, '-1.1s'], ['right-10 -bottom-4', 16, '-2s'], ['left-8 -bottom-2', 11, '-0.6s'],
            ].map(([pos, size, delay]) => (
              <Sparkle key={pos} size={size} weight="fill" aria-hidden="true" className={`anim-twinkle absolute ${pos} text-accent`} style={{ animationDelay: delay }} />
            ))}
            <WordReveal
              as="h1"
              play={play}
              text="Turning Creativity Into Something Beautiful"
              delay={0.25}
              className="text-glow block max-w-[16ch] font-display text-[2.9rem] font-medium italic leading-[1.04] tracking-[-0.015em] text-ink sm:text-[4rem] lg:max-w-[18ch] lg:text-[3.9rem] xl:text-[4.3rem]"
            />
          </div>

          <motion.p {...rise(0.85)} className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink/80">
            Handmade art, delicate details and creative pieces made with love by {site.name}.
          </motion.p>

          <motion.div {...rise(1)} className="mt-9 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <a href="#gallery" onClick={go('gallery')} className={`${btn.ink} btn-shine group`}>
                Explore My Work <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" onClick={go('contact')} className={`${btn.ghost} border-accent/40`}>
                Order Now
              </a>
            </Magnetic>
          </motion.div>
          <motion.div {...rise(1.15)} className="mt-4">
            <a
              href={whatsappLink(`Hello ${site.name}, `)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center py-2 gap-2 rounded-full border border-ink/10 bg-surface/85 pl-1.5 pr-4 text-sm font-medium text-ink transition hover:bg-surface active:scale-[0.98]"
            >
              <span className="anim-pulse grid size-8 place-items-center rounded-full bg-[#25D366] text-white">
                <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
              </span>
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <Strip images={right} direction="down" play={play} className="hidden rotate-2 lg:block" />
      </div>

      {/* Mobile and tablet: one sliding row of photos */}
      <div className="relative pb-12 lg:hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="anim-strip-x flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1 || undefined}>
              {[...left, ...right].map((img) => (
                <figure key={img.src} className="mr-3 w-32 shrink-0 overflow-hidden rounded-[18px] bg-surface p-1 shadow-soft sm:w-40">
                  <img src={img.src} alt={copy === 0 ? img.alt : ''} loading="lazy" className="aspect-[3/4] w-full rounded-[14px] object-cover" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Butterflies />
    </section>
  )
}

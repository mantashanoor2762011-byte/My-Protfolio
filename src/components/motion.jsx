import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]

// Headline that reveals word by word.
export function WordReveal({ text, as = 'span', className = '', delay = 0, stagger = 0.07, play = true }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{text}</Plain>
  }
  const Tag = motion[as]
  return (
    <Tag className={className} aria-label={text} initial="hidden" animate={play ? 'show' : 'hidden'}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%', opacity: 0, filter: 'blur(6px)' },
              show: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.9, delay: delay + i * stagger, ease } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  )
}

// A hand-drawn flourish that draws itself in when it scrolls into view.
export function Flourish({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 220 24" className={className} aria-hidden="true" focusable="false">
      <motion.path
        d="M4 14 C 40 2, 70 22, 104 12 S 150 2, 170 12 C 182 18, 196 16, 216 8"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="110" cy="12" r="3.2" fill="var(--accent)"
        initial={reduce ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, type: 'spring', stiffness: 300, damping: 18 }}
      />
    </svg>
  )
}

// Centered section heading used across the page.
export function SectionHeading({ title, subtitle, dark = false, className = '' }) {
  const reduce = useReducedMotion()
  const fade = (d) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.8, delay: d, ease },
  })
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <motion.h2
        aria-label={title}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.08 }}
        className={`font-display text-[2.6rem] font-medium leading-[1.08] tracking-[-0.01em] md:text-[3.6rem] ${dark ? 'text-on-night' : 'text-ink'}`}
      >
        {title.split(' ').map((w, i, arr) => (
          <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.1em] align-top">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '100%', rotate: 4, opacity: 0 },
                show: { y: '0%', rotate: 0, opacity: 1, transition: { duration: 0.8, ease } },
              }}
            >
              {w}
            </motion.span>
            {i < arr.length - 1 && '\u00A0'}
          </span>
        ))}
      </motion.h2>
      <Flourish className="mx-auto mt-2 h-5 w-44" />
      {subtitle && (
        <motion.p {...fade(0.15)} className={`mt-3 text-lg ${dark ? 'text-on-night-muted' : 'text-muted'}`}>
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

// Thin pink progress bar at the very top of the page.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[41] h-[3px] origin-left bg-brand"
      style={{ scaleX, top: 'env(safe-area-inset-top, 0px)' }}
    />
  )
}

// Falling petals for the hero. Hidden entirely with reduced motion.
const PETALS = [
  [6, 0, 13, 50, 420], [16, 4, 16, -40, 600], [27, 9, 12, 70, 380], [38, 2, 18, 30, 520], [49, 7, 14, -60, 460],
  [58, 11, 17, 40, 640], [67, 3, 13, -30, 400], [76, 8, 15, 60, 560], [85, 5, 19, -50, 480], [94, 12, 14, 20, 600],
]
export function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map(([left, delay, dur, drift, spin], i) => (
        <span
          key={i}
          className="anim-petal absolute top-0 block rounded-[60%_0_60%_0]"
          style={{
            left: `${left}%`,
            width: 10 + (i % 3) * 3,
            height: 8 + (i % 3) * 2,
            background: i % 2 ? '#f7b9ca' : '#fbd3df',
            '--delay': `${delay}s`, '--dur': `${dur}s`, '--drift': `${drift}px`, '--spin': `${spin}deg`,
          }}
        />
      ))}
    </div>
  )
}

// Image that is revealed by a soft wipe from the bottom when it scrolls into view.
// The OUTER span is what the browser watches (never clipped), so the reveal always fires.
export function RevealImage({ className = '', imgClassName = '', delay = 0, ...img }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <span className={`block overflow-hidden ${className}`}>
        <img {...img} className={imgClassName} />
      </span>
    )
  }
  return (
    <motion.span
      className={`relative block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.span
        className="absolute inset-0 block"
        variants={{
          hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
          show: { clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 1, delay, ease: [0.76, 0, 0.24, 1] } },
        }}
      >
        <motion.img
          {...img}
          className={imgClassName}
          variants={{
            hidden: { scale: 1.18 },
            show: { scale: 1, transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] } },
          }}
        />
      </motion.span>
    </motion.span>
  )
}

// Button/link that leans toward the mouse a little.
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const reduce = useReducedMotion()
  const x = useSpring(0, { stiffness: 220, damping: 15 })
  const y = useSpring(0, { stiffness: 220, damping: 15 })
  if (reduce) return <span className={`inline-flex ${className}`}>{children}</span>
  return (
    <motion.span
      className={`inline-flex ${className}`}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * strength)
        y.set((e.clientY - r.top - r.height / 2) * strength)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.span>
  )
}

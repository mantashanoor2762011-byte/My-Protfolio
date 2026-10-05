import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'motion/react'
import { Heart } from '@phosphor-icons/react'
import Blossom from './Blossom.jsx'
import Butterflies from './Butterflies.jsx'
import { Petals } from './motion.jsx'
import { site } from '../data/site.js'

const ease = [0.16, 1, 0.3, 1]

// Welcome screen: asks before opening the site. "Yes" opens the website through a
// growing circle that starts at the button.
export default function Gate({ onOpen, onDone }) {
  const reduce = useReducedMotion()
  const [declined, setDeclined] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const yesRef = useRef(null)
  const r = useMotionValue(0)
  const cx = useMotionValue(0)
  const cy = useMotionValue(0)
  const mask = useMotionTemplate`radial-gradient(circle at ${cx}px ${cy}px, transparent ${r}px, #000 calc(${r}px + 1.5px))`

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])
  useEffect(() => { yesRef.current?.focus({ preventScroll: true }) }, [declined])

  function open(e) {
    if (leaving) return
    setLeaving(true)
    onOpen()
    if (reduce) {
      setTimeout(onDone, 300)
      return
    }
    const b = e.currentTarget.getBoundingClientRect()
    const x = b.left + b.width / 2
    const y = b.top + b.height / 2
    cx.set(x); cy.set(y)
    const far = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    animate(r, far + 40, { duration: 1.3, ease: [0.76, 0, 0.24, 1], onComplete: onDone })
  }

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      className="fixed inset-0 z-[80] overflow-hidden bg-brand"
      style={leaving && !reduce ? { WebkitMaskImage: mask, maskImage: mask } : undefined}
      animate={leaving && reduce ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Petals />
      <Butterflies count={5} />
      <Blossom className="absolute -left-4 bottom-0 w-32 md:w-48" />
      <Blossom flip className="absolute -right-4 top-0 w-28 rotate-180 md:w-44" style={{ animationDelay: '-3s' }} />
      <Blossom flip className="absolute -right-6 bottom-0 w-24 md:w-36" style={{ animationDelay: '-1.5s' }} />

      <div className="relative grid h-full place-items-center px-6" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="flex max-w-xl flex-col items-center text-center">
          {/* Monogram ring draws itself */}
          <div className="relative grid size-32 place-items-center md:size-40">
            <svg viewBox="0 0 160 160" className="absolute inset-0 -rotate-90" aria-hidden="true">
              <motion.circle cx="80" cy="80" r="74" fill="none" stroke="var(--ink)" strokeWidth="1.3"
                initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
              <motion.circle cx="80" cy="80" r="66" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="2 6"
                initial={reduce ? false : { opacity: 0, rotate: -40 }} animate={{ opacity: 0.9, rotate: 0 }} transition={{ duration: 1.4, delay: 0.8 }} style={{ originX: '50%', originY: '50%' }} />
            </svg>
            <motion.span
              aria-hidden="true"
              className="font-display text-6xl font-semibold tracking-[-0.08em] text-ink md:text-7xl"
              initial={reduce ? false : { opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
            >
              MN
            </motion.span>
          </div>
          <motion.p
            className="mt-2 font-script text-5xl text-ink md:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
          >
            {site.name}
          </motion.p>

          <AnimatePresence mode="wait" initial={false}>
            {!declined ? (
              <motion.div
                key="ask"
                className="flex flex-col items-center"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
                transition={{ duration: 0.6, delay: 1.2, ease }}
              >
                <h2 id="gate-title" className="text-glow mt-8 font-display text-[2.1rem] font-medium italic leading-tight text-ink md:text-[2.8rem]">
                  Would you like to visit my website?
                </h2>
                <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-ink/75">
                  Step into a little world of handmade art, made with love.
                </p>
                <div className="mt-8 flex gap-3">
                  <button
                    ref={yesRef}
                    type="button"
                    onClick={open}
                    className="btn-shine inline-flex h-14 min-w-32 items-center py-3 justify-center gap-2 rounded-full bg-ink px-8 text-base font-medium text-bg shadow-soft transition hover:opacity-90 active:scale-[0.97]"
                  >
                    Yes <Heart size={18} weight="fill" className="text-accent-night" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeclined(true)}
                    className="inline-flex h-14 min-w-32 items-center py-3 justify-center rounded-full border border-ink/25 bg-surface/80 px-8 text-base font-medium text-ink transition hover:border-ink/60 active:scale-[0.97]"
                  >
                    No
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="no"
                className="flex flex-col items-center"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
                transition={{ duration: 0.5, ease }}
              >
                <h2 id="gate-title" className="text-glow mt-8 font-display text-[2.1rem] font-medium italic leading-tight text-ink md:text-[2.8rem]">
                  No problem ♡
                </h2>
                <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-ink/75">
                  Whenever you are ready, the door is open.
                </p>
                <button
                  ref={yesRef}
                  type="button"
                  onClick={open}
                  className="btn-shine mt-8 inline-flex h-14 items-center py-3 justify-center gap-2 rounded-full bg-ink px-8 text-base font-medium text-bg shadow-soft transition hover:opacity-90 active:scale-[0.97]"
                >
                  Yes, open it now <Heart size={18} weight="fill" className="text-accent-night" aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

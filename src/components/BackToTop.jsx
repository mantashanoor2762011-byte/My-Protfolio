import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { ArrowUp } from '@phosphor-icons/react'
import { scrollToSection } from '../lib/scroll.js'

// Appears after scrolling; the ring fills as you go down the page.
export default function BackToTop() {
  const reduce = useReducedMotion()
  const { scrollY, scrollYProgress } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700))

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
          className="fixed right-5 z-[45] grid size-12 place-items-center rounded-full bg-surface text-ink shadow-soft md:right-7"
          style={{ bottom: 'calc(5.25rem + env(safe-area-inset-bottom, 0px))' }}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
          whileHover={reduce ? undefined : { y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="24" cy="24" r="21" fill="none" stroke="var(--line)" strokeWidth="2.5" />
            <motion.circle cx="24" cy="24" r="21" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength: scrollYProgress }} />
          </svg>
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

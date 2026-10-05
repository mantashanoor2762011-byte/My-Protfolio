import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { Butterfly } from '@phosphor-icons/react'

const COLORS = ['#e47c98', '#b9a6f7', '#f3a0b7', '#8fc9ea', '#f6b3c6']
const MAX_ALIVE = 6
const GAP_MS = 650 // at most one new butterfly per 0.65s of scrolling

// Scrolling down releases butterflies that flutter up from the bottom of the screen.
export default function ScrollButterflies() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [flock, setFlock] = useState([])
  const last = useRef({ y: 0, t: 0, id: 0 })

  useMotionValueEvent(scrollY, 'change', (y) => {
    const now = performance.now()
    const goingDown = y > last.current.y + 2
    last.current.y = y
    if (reduce || !goingDown || y < 300 || now - last.current.t < GAP_MS) return
    last.current.t = now
    const id = ++last.current.id
    const side = Math.random() < 0.5 ? -1 : 1
    const b = {
      id,
      left: side < 0 ? 4 + Math.random() * 30 : 66 + Math.random() * 30, // stay near the edges, away from text
      size: 26 + Math.round(Math.random() * 16),
      color: COLORS[id % COLORS.length],
      dur: 6 + Math.random() * 3,
      drift: (40 + Math.random() * 80) * -side, // drift a little toward the centre
      tilt: -side * (10 + Math.random() * 14),
    }
    setFlock((f) => [...f.slice(-(MAX_ALIVE - 1)), b])
  })

  if (reduce) return null
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <AnimatePresence>
        {flock.map((b) => (
          <motion.span
            key={b.id}
            className="absolute bottom-0 block"
            style={{ left: `${b.left}%` }}
            initial={{ y: 40, x: 0, opacity: 0, scale: 0.5, rotate: b.tilt }}
            animate={{
              y: [40, -window.innerHeight * 0.35, -window.innerHeight * 0.7, -window.innerHeight * 1.08],
              x: [0, b.drift, b.drift * 0.2, b.drift * 1.2],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.85],
              rotate: [b.tilt, -b.tilt * 0.6, b.tilt * 0.8, -b.tilt * 0.4],
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: b.dur, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
            onAnimationComplete={() => setFlock((f) => f.filter((x) => x.id !== b.id))}
          >
            <span className="anim-flap block" style={{ animationDuration: `${0.26 + (b.id % 3) * 0.05}s` }}>
              <Butterfly size={b.size} weight="fill" style={{ color: b.color, filter: 'drop-shadow(0 4px 6px rgb(160 64 104 / .25))' }} />
            </span>
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

import { motion, useReducedMotion } from 'motion/react'
import { Butterfly } from '@phosphor-icons/react'

// Little butterflies drifting across their parent. Hidden with reduced motion.
const FLIGHTS = [
  { top: '14%', dur: 19, delay: 0, size: 37, color: '#e47c98', dir: 1 },
  { top: '30%', dur: 24, delay: 4, size: 27, color: '#b9a6f7', dir: -1 },
  { top: '58%', dur: 21, delay: 1.5, size: 34, color: '#f3a0b7', dir: 1 },
  { top: '74%', dur: 27, delay: 7, size: 24, color: '#8fc9ea', dir: -1 },
  { top: '42%', dur: 30, delay: 11, size: 31, color: '#e47c98', dir: 1 },
  { top: '86%', dur: 23, delay: 3, size: 26, color: '#b9a6f7', dir: 1 },
]

export default function Butterflies({ count = FLIGHTS.length, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return null
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {FLIGHTS.slice(0, count).map((f, i) => (
        <motion.span
          key={i}
          className="absolute left-0 block"
          style={{ top: f.top }}
          initial={{ x: f.dir > 0 ? '-8vw' : '108vw', opacity: 0 }}
          animate={{
            x: f.dir > 0 ? ['-8vw', '108vw'] : ['108vw', '-8vw'],
            y: [0, -36, 14, -28, 6, 0],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'linear' }}
        >
          <span className="block" style={{ transform: `rotate(${f.dir > 0 ? 18 : -18}deg)` }}>
            <span className="anim-flap block" style={{ animationDelay: `${-i * 0.07}s` }}>
              <Butterfly size={f.size} weight="fill" style={{ color: f.color }} />
            </span>
          </span>
        </motion.span>
      ))}
    </div>
  )
}

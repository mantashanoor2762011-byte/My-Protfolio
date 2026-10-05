import { motion, useReducedMotion } from 'motion/react'

// Fades and lifts content in once when it enters the viewport.
export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}

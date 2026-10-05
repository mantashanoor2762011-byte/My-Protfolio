import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'
import Logo from './Logo.jsx'
import { navItems } from '../data/site.js'
import { scrollToSection } from '../lib/scroll.js'
import { btn } from '../lib/ui.js'

function useActiveSection(ids) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

const ids = navItems.map((n) => n.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    // Let the mobile menu close first, then scroll.
    requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <header
      className="sticky z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md"
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8" aria-label="Main">
        <a href="#home" onClick={go('home')} aria-label="Mantasha Noor, back to top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={go(item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative isolate rounded-full px-3 py-2 text-[14.5px] transition-colors ${
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {active === item.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-tint" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <a href="#contact" onClick={go('contact')} className={`${btn.smPrimary} btn-shine`}>
              Order Now
            </a>
          </span>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line text-ink xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-line bg-bg px-5 pb-6 pt-2 shadow-soft xl:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={go(item.id)}
                    className={`flex items-center justify-between border-b border-line/70 py-3.5 font-display text-2xl ${
                      active === item.id ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={go('contact')} className={`${btn.primary} mt-5 w-full`}>
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

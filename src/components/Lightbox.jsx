import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { CaretLeft, CaretRight, Clock, PaintBrush, WhatsappLogo, X } from '@phosphor-icons/react'
import { categoryLabel, productDetails } from '../data/gallery.js'
import { itemEnquiry, whatsappLink } from '../lib/contact.js'

export default function Lightbox({ items, index, onIndexChange, onClose, onOrder }) {
  const reduce = useReducedMotion()
  const closeRef = useRef(null)
  const lastFocus = useRef(null)
  const open = index !== null && items[index]
  const item = open ? items[index] : null

  const step = (dir) => onIndexChange((i) => (i + dir + items.length) % items.length)

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lastFocus.current?.focus?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(open)])

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-[#0c0a0e]/80 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            className="relative flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[20px] bg-night text-on-night shadow-soft ring-1 ring-on-night/10 sm:max-h-[90dvh] sm:rounded-[20px]"
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
          >
            <div className="flex items-center justify-between border-b border-on-night/10 px-5 py-3 md:px-7">
              <p className="font-display text-2xl">Product Details</p>
              <button ref={closeRef} type="button" onClick={onClose} aria-label="Close"
                className="grid size-11 place-items-center rounded-full border border-on-night/25 transition hover:rotate-90 hover:border-on-night/70">
                <X size={18} />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 overflow-y-auto md:grid-cols-[1.1fr_1fr] md:overflow-hidden">
              <div className="relative flex items-center justify-center bg-[#0c0a0e]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={item.id}
                    className="flex w-full items-center justify-center"
                    initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.type === 'video' ? (
                      <video src={item.src} poster={item.poster} controls autoPlay playsInline
                        className="max-h-[52dvh] w-full object-contain md:h-[78dvh] md:max-h-[78dvh]">
                        Your browser cannot play this video.
                      </video>
                    ) : (
                      <img src={item.src} alt={item.alt} className="max-h-[52dvh] w-full object-contain md:h-[78dvh] md:max-h-[78dvh]" />
                    )}
                  </motion.div>
                </AnimatePresence>
                {items.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} aria-label="Previous piece"
                      className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#141218] transition hover:scale-105">
                      <CaretLeft size={20} />
                    </button>
                    <button type="button" onClick={() => step(1)} aria-label="Next piece"
                      className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#141218] transition hover:scale-105">
                      <CaretRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <motion.div
                key={item.id + '-info'}
                initial={reduce ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="flex flex-col p-6 md:overflow-y-auto md:p-8"
              >
                <h3 className="font-display text-[2.1rem] font-medium leading-tight">{item.title}</h3>
                <p className="mt-3 self-start rounded-full border border-accent-night/50 px-3 py-1 text-sm text-accent-night">
                  {categoryLabel(item.category)}
                </p>
                <p className="mt-4 text-xl">{item.price}</p>
                <p className="mt-4 leading-relaxed text-on-night-muted">{item.description}</p>
                <dl className="mt-6 space-y-3 border-t border-on-night/10 pt-5 text-sm">
                  <div className="flex gap-3">
                    <PaintBrush size={18} className="mt-0.5 shrink-0 text-accent-night" aria-hidden="true" />
                    <dt className="text-on-night-muted">Customization:</dt>
                    <dd>{productDetails.customization}</dd>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-accent-night" aria-hidden="true" />
                    <dt className="text-on-night-muted">Completion Time:</dt>
                    <dd>{productDetails.completion}</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3 md:mt-auto md:pt-8">
                  <button type="button" onClick={() => onOrder(item)}
                    className="btn-shine inline-flex h-12 items-center py-2 rounded-full bg-[linear-gradient(135deg,#ffb2bd,#cfc0fb)] px-6 text-[15px] font-medium text-[#141218] transition hover:brightness-105 active:scale-[0.98]">
                    Order Now
                  </button>
                  <a href={whatsappLink(itemEnquiry(item, categoryLabel(item.category)))} target="_blank" rel="noopener noreferrer"
                    className="inline-flex h-12 items-center py-2 gap-2 rounded-full border border-[#25D366]/70 px-6 text-[15px] font-medium text-on-night transition hover:bg-[#25D366]/10 active:scale-[0.98]">
                    <WhatsappLogo size={20} className="text-[#25D366]" /> Chat on WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

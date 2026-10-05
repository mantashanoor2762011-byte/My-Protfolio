import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { EnvelopeSimple, PaperPlaneTilt, WhatsappLogo } from '@phosphor-icons/react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import Blossom from './Blossom.jsx'
import { SectionHeading } from './motion.jsx'
import { site } from '../data/site.js'
import { emailLinkProps, whatsappLink } from '../lib/contact.js'

const input = (err) =>
  `w-full rounded-[12px] border bg-bg px-4 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/25 ${
    err ? 'border-accent' : 'border-line focus:border-accent'
  }`

export default function Contact() {
  const reduce = useReducedMotion()
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [ready, setReady] = useState(false)
  const set = (k) => (e) => { setV((s) => ({ ...s, [k]: e.target.value })); setErrors((er) => ({ ...er, [k]: undefined })); setReady(false) }

  const text = `Hello ${site.name},\n\n${v.message.trim()}\n\n${v.name.trim()}${v.email.trim() ? `\n${v.email.trim()}` : ''}`

  function submit(e) {
    e.preventDefault()
    const er = {}
    if (v.name.trim().length < 2) er.name = 'Please enter your name.'
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) er.email = 'This email address does not look right.'
    if (v.message.trim().length < 5) er.message = 'Please write a short message.'
    setErrors(er)
    if (Object.keys(er).length) {
      document.getElementById(`contact-${Object.keys(er)[0]}`)?.focus()
      return
    }
    setReady(true)
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  const cards = [
    { icon: WhatsappLogo, title: 'WhatsApp', value: site.whatsappDisplay, link: { href: whatsappLink(`Hello ${site.name}, `), target: '_blank', rel: 'noopener noreferrer' }, cta: 'Chat on WhatsApp', tone: 'bg-[#25D366] text-white' },
    { icon: EnvelopeSimple, title: 'Email', value: site.email, link: emailLinkProps('Hello Mantasha'), cta: 'Send Email', tone: 'bg-tint-2 text-accent' },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-soft py-24 md:py-28">
      <Blossom className="absolute -left-4 bottom-0 w-28 md:w-36" />
      <Blossom flip className="absolute -right-4 top-10 w-24 md:w-32" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          title="Let's Create Together"
          subtitle="Have an idea, want to work on a custom piece, or just want to say hello? Feel free to contact me."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map(({ icon: Icon, title, value, link, cta, tone }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1}>
              <TiltCard className="h-full" max={5}>
                <div className="flex h-full flex-col items-center rounded-[20px] bg-surface p-7 text-center shadow-soft-sm">
                  <span className={`grid size-14 place-items-center rounded-full ${tone}`}>
                    <Icon size={28} weight="fill" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-medium text-ink">{title}</p>
                  <p className="mt-1 break-all text-muted">{value}</p>
                  <a
                    {...link}
                    className="btn-shine mt-5 inline-flex h-11 items-center py-2 rounded-full bg-ink px-5 text-sm font-medium text-bg transition hover:opacity-90 active:scale-[0.98]"
                  >
                    {cta}
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <form noValidate onSubmit={submit} className="mt-8 grid gap-5 rounded-[20px] bg-surface p-6 shadow-soft-sm md:grid-cols-2 md:p-8" aria-label="Contact form">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-ink">Name <span className="text-accent" aria-hidden="true">*</span></label>
              <input id="contact-name" value={v.name} onChange={set('name')} autoComplete="name" placeholder="Your name"
                aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? 'contact-name-err' : undefined} className={`${input(errors.name)} h-12`} />
              {errors.name && <p id="contact-name-err" role="alert" className="text-sm text-accent">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm font-medium text-ink">Email <span className="font-normal text-muted">(optional)</span></label>
              <input id="contact-email" type="email" value={v.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com"
                aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? 'contact-email-err' : undefined} className={`${input(errors.email)} h-12`} />
              {errors.email && <p id="contact-email-err" role="alert" className="text-sm text-accent">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-ink">Message <span className="text-accent" aria-hidden="true">*</span></label>
              <textarea id="contact-message" rows={4} value={v.message} onChange={set('message')} placeholder="Your message"
                aria-invalid={errors.message ? true : undefined} aria-describedby={errors.message ? 'contact-message-err' : undefined} className={`${input(errors.message)} py-3`} />
              {errors.message && <p id="contact-message-err" role="alert" className="text-sm text-accent">{errors.message}</p>}
            </div>
            <div className="flex flex-wrap items-center gap-4 md:col-span-2">
              <button type="submit" className="btn-shine inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 py-3 text-[15px] font-medium text-bg transition hover:opacity-90 active:scale-[0.98]">
                <PaperPlaneTilt size={18} aria-hidden="true" /> Send Message
              </button>
              <a {...emailLinkProps(`Message from ${v.name || 'your website'}`, text)} className="text-sm text-ink underline underline-offset-4">
                or send it by email
              </a>
            </div>
            {ready && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[12px] bg-tint-3 px-4 py-3 text-sm text-ink md:col-span-2"
                role="status"
              >
                WhatsApp opened with your message. If it did not open,{' '}
                <a href={whatsappLink(text)} target="_blank" rel="noopener noreferrer" className="font-medium underline">tap here</a>.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

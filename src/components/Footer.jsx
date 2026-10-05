import { EnvelopeSimple, InstagramLogo, TiktokLogo, WhatsappLogo } from '@phosphor-icons/react'
import Logo from './Logo.jsx'
import Blossom from './Blossom.jsx'
import { navItems, site } from '../data/site.js'
import { emailLinkProps, whatsappLink } from '../lib/contact.js'
import { scrollToSection } from '../lib/scroll.js'

// Contact icons (footer, right column). Hover shows the detail as a tooltip.
const newTab = { target: '_blank', rel: 'noopener noreferrer' }
const getContacts = () => [
  { icon: WhatsappLogo, label: 'WhatsApp', detail: site.whatsappDisplay, link: { href: whatsappLink(`Hello ${site.name}, `), ...newTab } },
  { icon: EnvelopeSimple, label: 'Email', detail: site.email, link: emailLinkProps('Hello Mantasha') },
  { icon: InstagramLogo, label: 'Instagram', detail: `@${site.instagram.handle}`, link: { href: site.instagram.url, ...newTab } },
  { icon: TiktokLogo, label: 'TikTok', detail: `@${site.tiktok.handle}`, link: { href: site.tiktok.url, ...newTab } },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-on-night">
      <Blossom flip className="absolute -right-6 bottom-0 w-20 opacity-80 md:w-24" />
      <Blossom className="absolute -left-6 top-4 w-16 opacity-60 md:w-20" style={{ animationDelay: '-3s' }} />
      <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-5 pb-6 pt-12 md:grid-cols-[1.3fr_1.2fr_1fr] md:px-8">
        <div>
          <Logo onNight />
          <p className="mt-4 max-w-[34ch] font-display text-xl leading-snug text-on-night/90">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm text-on-night-muted">Quick Links</h2>
          <ul className="mt-4 grid max-w-xs grid-cols-3 gap-x-6 gap-y-3">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(n.id) }}
                  className="text-on-night/90 transition hover:text-on-night">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm text-on-night-muted">Contact</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {getContacts().map(({ icon: Icon, label, detail, link }) => (
              <li key={label} className="group relative">
                <a
                  {...link}
                  aria-label={`${label}: ${detail}`}
                  className="grid size-12 place-items-center rounded-full border border-on-night/20 transition duration-300 hover:-translate-y-1 hover:border-accent-night hover:text-accent-night focus-visible:-translate-y-1"
                >
                  <Icon size={21} aria-hidden="true" />
                </a>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 -translate-y-1 whitespace-nowrap rounded-full bg-on-night px-3 py-1 text-xs text-night opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                >
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-2 border-t border-on-night/10 px-5 py-4 text-sm text-on-night-muted md:px-8">
        © 2026 Mantasha Noor. All rights reserved. <span className="text-accent-night" aria-hidden="true">♡</span>
      </div>
    </footer>
  )
}

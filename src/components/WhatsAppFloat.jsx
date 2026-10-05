import { WhatsappLogo } from '@phosphor-icons/react'
import { whatsappLink } from '../lib/contact.js'
import { site } from '../data/site.js'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, `)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 z-[45] inline-flex h-14 items-center py-2 gap-2 rounded-full bg-ink px-4 text-bg shadow-soft ring-1 ring-bg/25 transition hover:opacity-90 active:scale-[0.98] md:right-6 md:px-5"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <WhatsappLogo size={26} weight="fill" aria-hidden="true" />
      <span className="hidden text-[15px] font-medium md:inline">Chat on WhatsApp</span>
    </a>
  )
}

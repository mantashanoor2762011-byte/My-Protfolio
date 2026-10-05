import { site } from '../data/site.js'

export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsappIntl}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailtoLink = (subject, body) => {
  const parts = []
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`)
  if (body) parts.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${site.email}${parts.length ? `?${parts.join('&')}` : ''}`
}

// Email: on phones open the mail app (Gmail app on most phones) through mailto;
// on computers open Gmail in the browser with a new message already addressed to you.
const isPhone = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

export const gmailLink = (subject, body) => {
  const q = [`view=cm`, `fs=1`, `to=${encodeURIComponent(site.email)}`]
  if (subject) q.push(`su=${encodeURIComponent(subject)}`)
  if (body) q.push(`body=${encodeURIComponent(body)}`)
  return `https://mail.google.com/mail/?${q.join('&')}`
}

// Returns props for an <a>: href plus target/rel when it opens a new tab.
export const emailLinkProps = (subject, body) =>
  isPhone()
    ? { href: mailtoLink(subject, body) }
    : { href: gmailLink(subject, body), target: '_blank', rel: 'noopener noreferrer' }

export const itemEnquiry = (item, categoryLabel) =>
  `Hello ${site.name},\n\nI saw "${item.title}" (${categoryLabel}) on your website and would like to order it or something similar.\n\nPlease let me know the price and details.\n\nThank you.`

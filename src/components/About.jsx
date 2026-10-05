import { Gift, HandHeart, Heart, Palette } from '@phosphor-icons/react'
import Blossom from './Blossom.jsx'
import Reveal from './Reveal.jsx'
import { SectionHeading } from './motion.jsx'
import { aboutText } from '../data/site.js'

const highlights = [
  { icon: Palette, title: 'Creative Artist', text: 'With a passion for art' },
  { icon: HandHeart, title: 'Handmade Work', text: 'Crafted with love' },
  { icon: Gift, title: 'Custom Orders', text: 'Designed for you' },
  { icon: Heart, title: 'Made With Love', text: 'Always' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-soft py-24 md:py-28">
      <Blossom className="absolute -left-4 bottom-0 w-28 md:w-36" />
      <Blossom flip className="absolute -right-4 top-10 w-24 opacity-80 md:w-32" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading title="About Me" />

        <Reveal className="mx-auto mt-10 max-w-[64ch] space-y-5 text-center text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
          {aboutText.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-ink/85' : 'font-display text-2xl italic text-ink/80 md:text-[1.7rem]'}>
              {p}
            </p>
          ))}
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={0.1 + i * 0.08}
              className="group rounded-[20px] bg-surface/80 p-5 text-center shadow-soft-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-tint transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={24} weight="duotone" className="text-accent" aria-hidden="true" />
              </span>
              <p className="mt-3 text-[15px] font-medium text-ink">{title}</p>
              <p className="mt-0.5 text-sm text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

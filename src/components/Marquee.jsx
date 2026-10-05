import { Flower } from '@phosphor-icons/react'

const words = ['Calligraphy', 'Craft Work', 'Bouquets', 'Jewelry', 'Gajry', 'Sketching', 'Custom Orders', 'Made With Love']

// One moving ribbon between the hero and the black band. Static with reduced motion.
export default function Marquee() {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center gap-8 whitespace-nowrap font-display text-2xl italic text-ink md:text-3xl">
          {w}
          <Flower size={22} weight="fill" className="text-accent" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="group relative overflow-hidden border-y border-ink/10 bg-surface py-4">
      <div className="anim-marquee flex w-max group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

import { site } from '../data/site.js'

export default function Logo({ onNight = false, size = 'md' }) {
  const big = size === 'lg'
  return (
    <span className="flex items-center gap-2.5">
      <span className={`relative grid place-items-center rounded-full bg-brand p-[1.5px] ${big ? 'size-16' : 'size-11'}`}>
        <span
          className={`grid size-full place-items-center rounded-full font-display font-semibold italic leading-none tracking-[-0.06em] ${
            onNight ? 'bg-night text-on-night' : 'bg-bg text-ink'
          } ${big ? 'text-[1.7rem]' : 'text-[1.15rem]'}`}
        >
          {site.initials}
        </span>
      </span>
      <span
        className={`whitespace-nowrap font-script leading-none ${onNight ? 'text-on-night' : 'text-ink'} ${
          big ? 'text-[2.6rem]' : 'text-[1.75rem] sm:text-[1.9rem]'
        }`}
      >
        {site.name}
      </span>
    </span>
  )
}

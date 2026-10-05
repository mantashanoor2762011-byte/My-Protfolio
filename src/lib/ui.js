// Shared class strings so every button on the page looks the same.
const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full py-2 font-medium transition duration-200 ease-out active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none'

export const btn = {
  primary: `${base} h-12 px-6 text-[15px] bg-accent text-on-accent shadow-soft-sm hover:bg-accent-hover`,
  ink: `${base} h-12 px-6 text-[15px] bg-ink text-bg hover:opacity-90`,
  ghost: `${base} h-12 px-6 text-[15px] border border-ink/20 bg-surface/70 text-ink hover:border-ink/50`,
  smPrimary: `${base} h-10 px-4 text-sm bg-accent text-on-accent hover:bg-accent-hover`,
  smGhost: `${base} h-10 px-4 text-sm border border-ink/15 text-ink hover:border-ink/45`,
}

export const sectionTitle = 'font-display text-[2.6rem] leading-[1.05] font-medium tracking-[-0.01em] md:text-6xl'

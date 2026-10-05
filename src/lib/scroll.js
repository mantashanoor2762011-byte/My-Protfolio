const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Smoothly scrolls to a section on the same page. No URL navigation.
export function scrollToSection(id) {
  const behavior = reduceMotion() ? 'auto' : 'smooth'
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
}

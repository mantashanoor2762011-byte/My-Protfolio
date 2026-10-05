import { useCallback, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import WhyHandmade from '../components/WhyHandmade.jsx'
import About from '../components/About.jsx'
import FeaturedWorks from '../components/FeaturedWorks.jsx'
import Gallery from '../components/Gallery.jsx'
import Journey from '../components/Journey.jsx'
import Reviews from '../components/Reviews.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat.jsx'
import Gate from '../components/Gate.jsx'
import Marquee from '../components/Marquee.jsx'
import BackToTop from '../components/BackToTop.jsx'
import ScrollButterflies from '../components/ScrollButterflies.jsx'
import { ScrollProgress } from '../components/motion.jsx'
import { scrollToSection } from '../lib/scroll.js'
import { categoryLabel } from '../data/gallery.js'
import { itemEnquiry, whatsappLink } from '../lib/contact.js'

// The whole website: one page. Every section is part of Home.
export default function Home() {
  const [filter, setFilter] = useState('all')
  const [opened, setOpened] = useState(false) // "Yes" pressed: site starts animating
  const [gateGone, setGateGone] = useState(false) // reveal finished

  const viewWork = useCallback((category) => {
    setFilter(category)
    scrollToSection('gallery')
  }, [])

  // "Order Now" on a gallery piece opens WhatsApp with that piece's details.
  const orderItem = useCallback((item) => {
    window.open(whatsappLink(itemEnquiry(item, categoryLabel(item.category))), '_blank', 'noopener')
  }, [])

  return (
    <>
      {!gateGone && <Gate onOpen={() => setOpened(true)} onDone={() => setGateGone(true)} />}
      <div inert={!opened ? true : undefined} aria-hidden={!opened || undefined}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero play={opened} />
          <Marquee />
          <WhyHandmade />
          <About />
          <FeaturedWorks onOpenCategory={viewWork} />
          <Gallery filter={filter} onFilterChange={setFilter} onOrderItem={orderItem} />
          <Journey />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        {gateGone && <ScrollButterflies />}
        {gateGone && <BackToTop />}
        {gateGone && <WhatsAppFloat />}
      </div>
    </>
  )
}

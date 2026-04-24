import Navbar     from '../components/Navbar'
import Hero        from '../components/Hero'
import Experience  from '../components/Experience'
import Amenities   from '../components/Amenities'
import Gallery     from '../components/Gallery'
import Reviews     from '../components/Reviews'
import CTA         from '../components/CTA'
import Footer      from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Amenities />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  )
}

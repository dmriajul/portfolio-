import Hero from '../sections/Hero.jsx'
import Strip from '../sections/Strip.jsx'
import About from '../sections/About.jsx'
import Skills from '../sections/Skills.jsx'
import Certifications from '../sections/Certifications.jsx'
import Projects from '../sections/Projects.jsx'
import Services from '../sections/Services.jsx'
import Experience from '../sections/Experience.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Contact from '../sections/Contact.jsx'
import HomeFaq from '../sections/HomeFaq.jsx'
import JsonLd from '../components/JsonLd.jsx'
import useSeo from '../hooks/useSeo.js'
import { homeGraph } from '../seo/schemas.js'
import { homeFaq } from '../data/homeFaq.js'

/**
 * Home page — the single portfolio URL.
 * Flow: Hero → About → Skills → Certifications → Projects →
 *       Services → Experience → Testimonials → Contact
 */
export default function Home() {
  useSeo({ path: '/' })

  return (
    <>
      {/* SEO / AEO / GEO structured data */}
      <JsonLd data={homeGraph(homeFaq)} />

      <Hero />
      <Strip />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Services />
      <Experience />
      <Testimonials />
      <HomeFaq />
      <Contact />
    </>
  )
}

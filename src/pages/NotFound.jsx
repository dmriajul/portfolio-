import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaHouse, FaWhatsapp } from 'react-icons/fa6'
import { services } from '../data/services.js'
import { whatsappLink } from '../data/site.js'
import useSeo from '../hooks/useSeo.js'

export default function NotFound() {
  useSeo({
    title: 'Page not found | Khandokar Riajul Islam',
    description: 'The page you were looking for does not exist. Browse services and case studies.',
    path: '/404',
  })

  return (
    <section className="notfound">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="notfound-code">404</p>
        <h1>This page does not exist</h1>
        <p>
          The link may be outdated. Try one of the service pages below, or go back to the full
          portfolio.
        </p>

        <div className="badge-wrap" style={{ justifyContent: 'center', marginTop: 22 }}>
          {services.map((s) => (
            <Link className="chip" key={s.slug} to={`/services/${s.slug}`}>
              <s.icon /> {s.shortName}
            </Link>
          ))}
        </div>

        <div className="notfound-actions">
          <Link to={{ pathname: '/', hash: '#home' }} className="btn btn-primary btn-lg">
            <FaHouse /> Back to Portfolio
          </Link>
          <Link to={{ pathname: '/', hash: '#contact' }} className="btn btn-outline btn-lg">
            Contact Me <FaArrowRight />
          </Link>
          <a
            className="btn btn-ghost btn-lg"
            href={whatsappLink('Hello, a link on your portfolio gave me a 404.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { FaArrowRight, FaCircleInfo } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

export default function Services() {
  const ordered = [...services].sort((a, b) => a.order - b.order)

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2 className="section-title">
            Six services, each with its own <span className="accent">dedicated page</span>
          </h2>
          <p className="section-sub">
            Every card opens a full service page listing the exact capabilities, the process I
            follow, what you receive, relevant campaign work and answers to the questions clients
            actually ask.
          </p>
        </div>

        <div className="grid grid-3">
          {ordered.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>

        <Reveal delay={0.1} y={18}>
          <div className="mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="text-muted" style={{ display: 'inline-flex', gap: 10, alignItems: 'flex-start', maxWidth: 620, fontSize: 14.4 }}>
              <FaCircleInfo style={{ color: 'var(--emerald-400)', marginTop: 4, flexShrink: 0 }} />
              <span>
                Applying for a specific role? Send the matching page — for a Social Media Manager
                position,{' '}
                <Link to="/services/social-media-marketing" style={{ color: 'var(--emerald-300)', fontWeight: 700 }}>
                  the Social Media Marketing page
                </Link>{' '}
                covers organic management, content strategy, Meta Ads, retargeting, testing,
                analytics and reporting in one place.
              </span>
            </p>

            <Link to="/services/social-media-marketing" className="btn btn-primary">
              Explore Social Media Marketing <FaArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

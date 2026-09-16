import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaChevronRight,
  FaCircleCheck,
  FaClipboardList,
  FaDiagramProject,
  FaCircleQuestion,
  FaRoute,
  FaCalendarCheck,
  FaEnvelope,
  FaWhatsapp,
  FaLocationDot,
} from 'react-icons/fa6'
import { FaTools } from 'react-icons/fa'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Faq from '../components/Faq.jsx'
import ContactButtons from '../components/ContactButtons.jsx'
import QuickAnswers from '../components/QuickAnswers.jsx'
import AuthorBox from '../components/AuthorBox.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { serviceGraph } from '../seo/schemas.js'
import useSeo from '../hooks/useSeo.js'
import NotFound from './NotFound.jsx'
import { services, getService } from '../data/services.js'
import { projectsForService } from '../data/projects.js'
import site, { bookingLink, whatsappLink, mailtoLink } from '../data/site.js'

/**
 * Dedicated service detail page.
 * URL: /services/:slug   e.g. /services/social-media-marketing
 * Aliases (e.g. /services/smm) are redirected in App.jsx.
 */
export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  const relatedProjects = service ? projectsForService(service.slug) : []
  const otherServices = services.filter((s) => s.slug !== service?.slug)
  const capabilityCount = service
    ? service.capabilityGroups.reduce((n, g) => n + g.items.length, 0)
    : 0
  const path = service ? `/services/${service.slug}` : '/404'

  // Hooks must run unconditionally, so SEO is resolved before the guard below.
  useSeo({
    title: service ? service.meta.title : `Service not found | ${site.name}`,
    description: service
      ? service.meta.description
      : 'The service page you requested does not exist. Browse the available marketing services.',
    path,
  })

  // Unknown slug → render the 404 page inside the same layout
  if (!service) return <NotFound />

  return (
    <article className="service-page">
      {/* SEO / AEO / GEO structured data for this service page */}
      <JsonLd data={serviceGraph(service, path)} />
      {/* ---------------- Sub-nav: breadcrumb + service switcher ---------------- */}
      <div className="sd-subnav">
        <div className="container sd-subnav-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight />
            <Link to={{ pathname: '/', hash: '#services' }}>Services</Link>
            <FaChevronRight />
            <span className="current">{service.name}</span>
          </nav>

          <div className="sd-switcher" role="tablist" aria-label="All services">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`sd-pill${s.slug === service.slug ? ' active' : ''}`}
                aria-current={s.slug === service.slug ? 'page' : undefined}
              >
                <s.icon /> {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- Hero ---------------- */}
      <header className={`sd-hero${service.accent === 'gold' ? ' gold' : ''}`}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`eyebrow${service.accent === 'gold' ? ' gold' : ''}`}>
              {service.hero.eyebrow} · {capabilityCount} capabilities
            </span>
          </motion.div>

          <div className="sd-hero-icon" aria-hidden="true">
            <service.icon />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {service.hero.title}
          </motion.h1>

          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {service.tagline}
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {service.hero.subtitle}
          </motion.p>

          <div className="sd-highlights">
            {service.hero.highlights.map((h, i) => (
              <motion.div
                className="sd-highlight"
                key={h.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              >
                <b>{h.value}</b>
                <span>{h.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <ContactButtons service={service} size="btn-lg" />
          </motion.div>
        </div>
      </header>

      {/* ---------------- Quick answers (AEO) ---------------- */}
      <section className="section qa-section">
        <div className="container">
          <QuickAnswers items={service.quickAnswers} />
        </div>
      </section>

      {/* ---------------- Intro ---------------- */}
      <section className="section" style={{ paddingTop: 'clamp(30px,4vw,52px)' }}>
        <div className="container">
          <div className="sd-intro">
            <Reveal x={-22} y={0}>
              <div className="section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Overview</span>
                <h2 className="section-title">
                  What my <span className="accent">{service.shortName}</span> work actually covers
                </h2>
              </div>
            </Reveal>

            <Reveal x={22} y={0} delay={0.06}>
              <div className="sd-intro-text">
                {service.intro.map((p) => (
                  <p key={p.slice(0, 42)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-4">
            <AuthorBox />
          </div>
        </div>
      </section>

      {/* ---------------- Capabilities ---------------- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-title">
              {capabilityCount} things included in {service.shortName}
            </h2>
            <p className="section-sub">
              Grouped by discipline so you can see exactly which parts of the channel are handled —
              and hand this page straight to a hiring manager.
            </p>
          </div>

          <div className="grid grid-2">
            {service.capabilityGroups.map((group, i) => {
              const GroupIcon = group.icon
              return (
                <Reveal key={group.title} delay={i * 0.05} y={26}>
                  <div className="cap-group">
                    <div className="cap-group-head">
                      <span className="cap-group-icon" aria-hidden="true">
                        <GroupIcon />
                      </span>
                      <div>
                        <h3>{group.title}</h3>
                        {group.description && <p>{group.description}</p>}
                      </div>
                      <span className="cap-count">{group.items.length}</span>
                    </div>

                    <div className="cap-items">
                      {group.items.map((item) => (
                        <div className="cap-item" key={item.name}>
                          <span className="cap-item-dot" aria-hidden="true">
                            <FaCircleCheck />
                          </span>
                          <div>
                            <b>{item.name}</b>
                            {item.detail && <p>{item.detail}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow gold">Process</span>
            <h2 className="section-title">How the engagement runs</h2>
            <p className="section-sub">
              The same sequence every time — so you always know what happens next and what you will
              receive.
            </p>
          </div>

          <div className="process-grid">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} y={24}>
                <div className="process-step">
                  <span className="process-num" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>
                    <span className="idx" aria-hidden="true">
                      {i + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Deliverables + Tools ---------------- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What you get</span>
            <h2 className="section-title">Deliverables &amp; tools</h2>
          </div>

          <div className="split-grid">
            <Reveal x={-22} y={0}>
              <div className="panel">
                <div className="panel-head">
                  <FaClipboardList />
                  <h3>Deliverables</h3>
                </div>
                <ul className="deliverable-list">
                  {service.deliverables.map((d) => (
                    <li key={d}>
                      <FaCircleCheck /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal x={22} y={0} delay={0.06}>
              <div className="panel">
                <div className="panel-head">
                  <FaTools />
                  <h3>Tools I work in</h3>
                </div>
                <div className="tool-chips">
                  {service.tools.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <hr className="divider mt-3" />

                <div className="panel-head" style={{ marginTop: 22 }}>
                  <FaRoute />
                  <h3>Engagement models</h3>
                </div>
                <ul className="deliverable-list">
                  <li>
                    <FaCircleCheck /> Monthly retainer — full ownership of the channel
                  </li>
                  <li>
                    <FaCircleCheck /> Project basis — audits, setups and one-off builds
                  </li>
                  <li>
                    <FaCircleCheck /> In-house support — I work alongside your team as the specialist
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Related work ---------------- */}
      {relatedProjects.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Relevant Work</span>
              <h2 className="section-title">
                {service.shortName} campaigns with <span className="accent">documented results</span>
              </h2>
              <p className="section-sub">
                Accounts where this service was delivered. Every figure is taken directly from
                platform exports — Meta Ads Manager, Google Ads, Google Search Console and GA4 —
                not estimated.
              </p>
            </div>

            <div className="grid grid-2">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>

            <Reveal delay={0.1} y={16}>
              <div className="mt-4 text-center">
                <Link to={{ pathname: '/', hash: '#projects' }} className="btn btn-outline">
                  <FaDiagramProject /> See all case studies
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- FAQ ---------------- */}
      {service.faqs?.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow gold">FAQ</span>
              <h2 className="section-title">
                <FaCircleQuestion style={{ verticalAlign: '-4px', marginRight: 10 }} />
                Questions clients ask about {service.shortName}
              </h2>
            </div>

            <Faq items={service.faqs} />
          </div>
        </section>
      )}

      {/* ---------------- CTA ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal y={26}>
            <div className="sd-cta">
              <h2>{service.cta.heading}</h2>
              <p>{service.cta.text}</p>

              <div className="sd-cta-buttons">
                <a
                  className="btn btn-gold btn-lg"
                  href={bookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCalendarCheck /> Book a Call
                </a>
                <a
                  className="btn btn-primary btn-lg"
                  href={whatsappLink(
                    `Hello ${site.name}, I would like to start with your ${service.name} service.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp Me
                </a>
                <a className="btn btn-outline btn-lg" href={mailtoLink(`${service.name} inquiry`)}>
                  <FaEnvelope /> {site.email}
                </a>
              </div>

              <div className="sd-cta-meta">
                <span>
                  <FaLocationDot /> {site.location} · Remote worldwide
                </span>
                <span>
                  <FaWhatsapp /> {site.phoneDisplay}
                </span>
                <span>
                  <FaEnvelope /> Replies within a few hours
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Other services ---------------- */}
      <section className="section section-alt" style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Explore More</span>
            <h2 className="section-title">Other services</h2>
            <p className="section-sub">
              {service.shortName} rarely works alone — these are the channels it is usually combined
              with.
            </p>
          </div>

          <div className="grid grid-3">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05} y={22}>
                <Link to={`/services/${s.slug}`} className="other-service">
                  <span className="ic" aria-hidden="true">
                    <s.icon />
                  </span>
                  <span>
                    <b>{s.name}</b>
                    <span>{s.cardSubtitle}</span>
                  </span>
                  <FaArrowRight className="arrow" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} y={16}>
            <div className="mt-4 text-center">
              <Link to={{ pathname: '/', hash: '#home' }} className="btn btn-ghost">
                Back to full portfolio <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  )
}

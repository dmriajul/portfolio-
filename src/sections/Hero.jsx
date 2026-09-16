import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCalendarCheck,
  FaArrowRight,
  FaDownload,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import Avatar from '../components/Avatar.jsx'
import Reveal from '../components/Reveal.jsx'
import { site, bookingLink, mailtoLink } from '../data/site.js'

const heroStats = [
  { value: '174K', label: 'Organic impressions driven' },
  { value: '$0.027', label: 'Lowest cost per result' },
  { value: '72+', label: 'Ad campaigns managed' },
  { value: '344', label: 'Sales in a 7-day launch' },
]

export default function Hero() {
  const [resumeState, setResumeState] = useState('idle') // idle | checking | missing

  /**
   * 404-safe resume download: HEAD-check the file first.
   * If the PDF is not deployed yet we show an inline notice with an
   * email fallback instead of sending visitors to a 404 page.
   */
  const handleResume = async () => {
    setResumeState('checking')
    try {
      const res = await fetch(site.resumeUrl, { method: 'HEAD' })
      if (res.ok) {
        window.open(site.resumeUrl, '_blank', 'noopener')
        setResumeState('idle')
      } else {
        setResumeState('missing')
      }
    } catch {
      setResumeState('missing')
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* ---------------- Left ---------------- */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero-status">
                <span className="pulse" aria-hidden="true" />
                {site.availability}
              </span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              <span className="name-line">{site.name}</span>
              <span className="line-2">{site.role}</span>
            </motion.h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              I run the full social media ecosystem — strategy, content planning, organic growth,
              Meta &amp; Google Ads, creative testing and analytics — and I report it with real
              campaign numbers, not adjectives.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <a
                className="btn btn-gold btn-lg"
                href={bookingLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarCheck /> Book a Call
              </a>

              <Link to="/services/social-media-marketing" className="btn btn-primary btn-lg">
                Social Media Marketing <FaArrowRight />
              </Link>

              <button type="button" className="btn btn-ghost btn-lg" onClick={handleResume}>
                <FaDownload />
                {resumeState === 'checking' ? 'Checking…' : 'Download Resume'}
              </button>
            </motion.div>

            {resumeState === 'missing' && (
              <motion.p
                className="resume-note"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
              >
                The resume PDF is not uploaded to this deployment yet.{' '}
                <a href={mailtoLink('Resume request')}>Request it by email</a> and I will send it
                right away.
              </motion.p>
            )}

            <motion.div
              className="hero-contact-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                <FaPhoneAlt /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`}>
                <FaEnvelope /> {site.email}
              </a>
              <a href={site.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe /> {site.websiteDisplay}
              </a>
              <span>
                <FaMapMarkerAlt /> {site.location}
              </span>
            </motion.div>
          </div>

          {/* ---------------- Right ---------------- */}
          <Reveal className="hero-visual" x={34} y={0} delay={0.1}>
            <div className="avatar-frame">
              <Avatar initials="KR" />
              <span className="avatar-badge">
                <FaCalendarCheck /> {site.roleAlt}
              </span>
            </div>

            <div className="hero-stat-grid">
              {heroStats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

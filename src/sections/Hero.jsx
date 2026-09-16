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
  FaWhatsapp,
} from 'react-icons/fa'
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import Avatar from '../components/Avatar.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import RotatingText from '../components/RotatingText.jsx'
import site, { bookingLink, mailtoLink, whatsappLink } from '../data/site.js'

const socialIcons = { linkedin: FaLinkedinIn, facebook: FaFacebookF, x: FaXTwitter, website: FaGlobe }

const ROTATING_ROLES = [
  'Performance Marketing Specialist',
  'Social Media Marketing Specialist',
  'Meta Ads & Google Ads Specialist',
  'SEO & Content Strategist',
  'GA4 / GTM Analytics Practitioner',
]

const heroStats = [
  { value: 174, suffix: 'K', label: 'Organic impressions driven', decimals: 0 },
  { value: 0.027, prefix: '$', label: 'Lowest cost per result', decimals: 3 },
  { value: 72, suffix: '+', label: 'Ad campaigns managed', decimals: 0 },
  { value: 344, suffix: '', label: 'Sales in a 7-day launch', decimals: 0 },
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
      {/* animated aurora orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

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
              <span className="line-2">
                <RotatingText words={ROTATING_ROLES} />
              </span>
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

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              aria-label="Social media profiles"
            >
              {site.socials.map((soc) => {
                const Icon = socialIcons[soc.id] || FaGlobe
                return (
                  <a
                    key={soc.id}
                    className="social-circle"
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    title={soc.label}
                  >
                    <Icon />
                  </a>
                )
              })}
              <a
                className="social-circle"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
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
                  <b>
                    <CountUp
                      value={s.value}
                      suffix={s.suffix || ''}
                      prefix={s.prefix || ''}
                      decimals={s.decimals || 0}
                    />
                  </b>
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

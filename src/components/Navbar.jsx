import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaTimes, FaCalendarCheck, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { navLinks, site, bookingLink } from '../data/site.js'
import { services } from '../data/services.js'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'services', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')
  const location = useLocation()

  /* Shrink + blur the bar once the page is scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* Close the menu whenever the route changes */
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /* Scroll-spy: highlight the section currently in view (home page only) */
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('')
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveHash(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.15, 0.5, 1] }
    )

    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  const isActive = (hash) => location.pathname === '/' && activeHash === hash

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label={`${site.name} — home`}>
            <span className="nav-logo-mark">R</span>
            <span>
              {site.brand}
              <span className="suffix">{site.brandSuffix}</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={{ pathname: '/', hash: l.hash }}
                className={`nav-link${isActive(l.hash) ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="btn btn-gold btn-sm"
              href={bookingLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCalendarCheck /> Book a Call
            </a>

            <button
              type="button"
              className="nav-burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045 }}
                >
                  <Link to={{ pathname: '/', hash: l.hash }} className="mobile-menu-link">
                    {l.label}
                    <span className="idx">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <p className="mobile-services-title">Services</p>
            <div className="mobile-services">
              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                >
                  <Link to={`/services/${s.slug}`} className="chip">
                    <s.icon /> {s.shortName}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mobile-menu-cta">
              <a
                className="btn btn-gold btn-lg btn-block"
                href={bookingLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarCheck /> Book a Call
              </a>
              <Link to={{ pathname: '/', hash: '#contact' }} className="btn btn-outline btn-lg btn-block">
                Get Free Consultation <FaArrowRight />
              </Link>

              <div className="mobile-menu-contact">
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  <FaPhoneAlt /> {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`}>
                  <FaEnvelope /> {site.email}
                </a>
                <span>
                  <FaMapMarkerAlt /> {site.location}
                </span>
              </div>

              <div className="footer-socials" style={{ marginTop: 18 }}>
                <a
                  className="footer-social"
                  href="https://www.linkedin.com/in/khandokarriajulislam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="footer-social"
                  href="https://www.facebook.com/khandokarriajulislambappy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="footer-social"
                  href="https://x.com/RiajulKhandoker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { Link } from 'react-router-dom'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaGlobe,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa6'
import { site, navLinks } from '../data/site.js'
import { services } from '../data/services.js'

const socialIcons = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  x: FaXTwitter,
  website: FaGlobe,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <span className="nav-logo-mark">R</span>
              <span>
                {site.brand}
                <span className="suffix">{site.brandSuffix}</span>
              </span>
            </Link>
            <p>
              {site.role} — social media marketing, Meta &amp; Google Ads, SEO, analytics and
              conversion optimization. Real campaign data, transparent reporting, and strategies
              built to scale.
            </p>

            <div className="footer-socials">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.id] || FaGlobe
                return (
                  <a
                    key={s.id}
                    className="footer-social"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <Icon />
                  </a>
                )
              })}
              <a
                className="footer-social"
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-list">
              {navLinks.map((l) => (
                <Link key={l.label} to={{ pathname: '/', hash: l.hash }}>
                  <FaArrowRight /> {l.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-list">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>
                  <s.icon /> {s.shortName}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social Media — heading corrected from "Contact" */}
          <nav aria-label="Social media">
            <h3 className="footer-heading">Social Media</h3>
            <div className="footer-list">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.id] || FaGlobe
                return (
                  <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer">
                    <Icon /> {s.label}
                  </a>
                )
              })}
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href={`mailto:${site.email}`}>
                <FaEnvelope /> {site.email}
              </a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {site.name}. Built for scale &amp; conversions.
          </p>
          <div className="footer-bottom-links">
            <a href={site.website} target="_blank" rel="noopener noreferrer">
              {site.websiteDisplay}
            </a>
            <Link to={{ pathname: '/', hash: '#projects' }}>Case Studies</Link>
            <Link to="/services/social-media-marketing">
              <FaStar style={{ display: 'inline', verticalAlign: '-2px' }} /> Social Media Marketing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGlobe,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCalendarCheck,
} from 'react-icons/fa'
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import site, { whatsappLink, mailtoLink, bookingLink } from '../data/site.js'

const isKeyConfigured = site.web3formsKey && site.web3formsKey !== 'YOUR_ACCESS_KEY_HERE'

export default function Contact() {
  const [status, setStatus] = useState(null) // {type:'ok'|'err', msg}
  const [sending, setSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!isKeyConfigured) {
      setStatus({
        type: 'err',
        msg: 'The contact form is not connected yet (Web3Forms access key is missing). Please email or WhatsApp me directly — both buttons are right above.',
      })
      return
    }

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setSending(true)
    setStatus(null)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, access_key: site.web3formsKey, from_name: site.name }),
      })
      const json = await res.json()

      if (json.success) {
        setStatus({ type: 'ok', msg: 'Thank you — your message is on its way. I usually reply within a few hours.' })
        form.reset()
      } else {
        setStatus({ type: 'err', msg: json.message || 'Something went wrong. Please try WhatsApp or email instead.' })
      }
    } catch {
      setStatus({ type: 'err', msg: 'Network error while sending. Please email or WhatsApp me directly.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s talk about your growth</h2>
          <p className="section-sub">
            Tell me what you sell, what you have tried, and what result you need. You will get a
            straight answer about whether I am the right person for it.
          </p>
        </div>

        <div className="contact-grid">
          {/* ---- Direct channels ---- */}
          <Reveal x={-24} y={0}>
            <div className="contact-cards">
              <a className="contact-card" href={`mailto:${site.email}`}>
                <span className="contact-icon">
                  <FaEnvelope />
                </span>
                <span>
                  <b>Email</b>
                  <span>{site.email}</span>
                </span>
              </a>

              <a className="contact-card" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                <span className="contact-icon">
                  <FaPhoneAlt />
                </span>
                <span>
                  <b>Phone</b>
                  <span>{site.phoneDisplay}</span>
                </span>
              </a>

              <a
                className="contact-card"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">
                  <FaWhatsapp />
                </span>
                <span>
                  <b>WhatsApp</b>
                  <span>Fastest reply — message me anytime</span>
                </span>
              </a>

              <a className="contact-card" href={site.website} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">
                  <FaGlobe />
                </span>
                <span>
                  <b>Website</b>
                  <span>{site.websiteDisplay}</span>
                </span>
              </a>

              <div className="contact-card">
                <span className="contact-icon">
                  <FaMapMarkerAlt />
                </span>
                <span>
                  <b>Location</b>
                  <span>{site.location} — working remotely worldwide</span>
                </span>
              </div>

              <a
                className="btn btn-gold btn-block mt-2"
                href={bookingLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarCheck /> Book a Call
              </a>

              <div className="hero-socials contact-socials" aria-label="Social media profiles">
                {site.socials.map((soc) => {
                  const Icon = { linkedin: FaLinkedinIn, facebook: FaFacebookF, x: FaXTwitter, website: FaGlobe }[soc.id] || FaGlobe
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
              </div>
            </div>
          </Reveal>

          {/* ---- Form ---- */}
          <Reveal x={24} y={0} delay={0.06}>
            <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-name">Your name</label>
                  <input id="c-name" name="name" type="text" required placeholder="Full name" />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="c-service">Service needed</label>
                  <select id="c-service" name="service" defaultValue="Social Media Marketing">
                    <option>Social Media Marketing</option>
                    <option>Meta Ads</option>
                    <option>Google Ads</option>
                    <option>SEO</option>
                    <option>Analytics &amp; Tracking</option>
                    <option>Conversion Rate Optimization</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="c-budget">Monthly budget</label>
                  <select id="c-budget" name="budget" defaultValue="Not decided yet">
                    <option>Not decided yet</option>
                    <option>Under $300</option>
                    <option>$300 – $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="c-message">Project details</label>
                <textarea
                  id="c-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="What do you sell, which channels have you tried, and what result do you need?"
                />
              </div>

              <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message'} <FaPaperPlane />
              </button>

              {status && (
                <p className={`form-status ${status.type === 'ok' ? 'ok' : 'err'}`} role="status">
                  {status.msg}
                </p>
              )}

              <p className="form-note">
                Prefer to skip the form?{' '}
                <a href={mailtoLink()} style={{ color: 'var(--emerald-300)', fontWeight: 700 }}>
                  Email me
                </a>{' '}
                or{' '}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--emerald-300)', fontWeight: 700 }}
                >
                  message on WhatsApp
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

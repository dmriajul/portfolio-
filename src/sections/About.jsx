import { FaAward, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe, FaCalendarCheck, FaDownload } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { skillBadges } from '../data/skills.js'
import { aboutStats } from '../data/experience.js'
import site, { bookingLink, mailtoLink } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            Marketing that is measured in <span className="accent">campaign data</span>, not claims
          </h2>
        </div>

        <div className="about-grid">
          {/* ---- Info panel ---- */}
          <Reveal x={-26} y={0}>
            <aside className="about-panel">
              <h3>{site.name}</h3>
              <p className="role">{site.role}</p>

              <div className="about-info">
                <div>
                  <FaMapMarkerAlt /> <span><b>Location:</b> {site.location} (Remote worldwide)</span>
                </div>
                <div>
                  <FaEnvelope /> <span><b>Email:</b> {site.email}</span>
                </div>
                <div>
                  <FaPhoneAlt /> <span><b>Phone:</b> {site.phoneDisplay}</span>
                </div>
                <div>
                  <FaGlobe /> <span><b>Website:</b> {site.websiteDisplay}</span>
                </div>
                <div>
                  <FaAward /> <span><b>Focus:</b> Organic + Paid social, SEO, analytics</span>
                </div>
                <div>
                  <FaCalendarCheck /> <span><b>Availability:</b> {site.availability}</span>
                </div>
              </div>

              <div className="about-panel-actions">
                <a
                  className="btn btn-gold btn-block"
                  href={bookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCalendarCheck /> Book a Call
                </a>
                <a className="btn btn-outline btn-block" href={mailtoLink('Project inquiry')}>
                  <FaEnvelope /> Send an Email
                </a>
                <a className="btn btn-ghost btn-block" href={site.resumeUrl} download>
                  <FaDownload /> Download Resume
                </a>
              </div>
            </aside>
          </Reveal>

          {/* ---- Text ---- */}
          <div>
            <Reveal>
              <div className="about-text">
                <p>
                  I am <strong>Khandokar Riajul Islam</strong>, a performance marketing specialist with
                  {site.yearsExperience} years in digital marketing, working with brands in Bangladesh,
                  Europe and the US. My work sits where organic
                  and paid meet: <strong>social media strategy and content planning</strong> on one
                  side, <strong>Meta Ads, Google Ads and SEO</strong> on the other, with{' '}
                  <strong>GA4, GTM and reporting</strong> underneath both.
                </p>
                <p>
                  That combination matters because it removes the usual excuse. When a social
                  campaign underperforms, I do not have to guess whether the problem is the
                  creative, the audience, the landing page or the tracking — I can see it in the
                  data and fix the specific layer.
                </p>
                <p>
                  The results on this site are real numbers pulled from actual accounts: 174K
                  organic impressions and an 8.5 average position for Riajul Tech, 72+ campaigns at
                  $0.004 CPC for Foring Group, 860+ messaging conversations at $0.05 per result for
                  ZR Fashion, 344 sales in the first 7 days for Salient Shop, and 214K reach at
                  €1.40 CPM for Spreka.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="about-stats">
                {aboutStats.map((s) => (
                  <div className="about-stat" key={s.label}>
                    <b>
                      <CountUp value={s.value} suffix={s.suffix || ''} />
                    </b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="badge-wrap">
                {skillBadges.map((b) => (
                  <span className="chip" key={b}>
                    <FaCircleCheck /> {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

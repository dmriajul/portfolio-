import { FaQuoteLeft, FaChartLine } from 'react-icons/fa6'
import { testimonials } from '../data/testimonials.js'

const initialsOf = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || 'C'

function QuoteCard({ t }) {
  return (
    <article className="quote-card">
      <FaQuoteLeft className="quote-mark" aria-hidden="true" />
      <blockquote>“{t.quote}”</blockquote>

      {t.result && (
        <span className="quote-result">
          <FaChartLine /> {t.result}
        </span>
      )}

      <div className="quote-foot">
        <span className="quote-avatar" aria-hidden="true">
          {initialsOf(t.name)}
        </span>
        <div>
          <b>{t.name}</b>
          <span>
            {t.title}
            {t.company ? ` · ${t.company}` : ''}
          </span>
        </div>
      </div>
    </article>
  )
}

/**
 * Client feedback — two infinite marquee rows (opposite directions)
 * so all seven real testimonials stay visible without a tall grid.
 */
export default function Testimonials() {
  if (!testimonials.length) return null

  const baseA = testimonials.slice(0, 4)
  const baseB = testimonials.slice(4)

  // A seamless loop needs: set wider than the viewport, repeated exactly twice.
  const setA = [...baseA, ...baseA]
  const setB = [...baseB, ...baseB]
  const rowA = [...setA, ...setA]
  const rowB = [...setB, ...setB]

  return (
    <section id="testimonials" className="section section-alt testimonials-section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow gold">Client Feedback</span>
          <h2 className="section-title">Trusted by clients in Bangladesh, EU &amp; US</h2>
          <p className="section-sub">
            Real feedback from founders and marketing leads — each paired with the campaign result
            it came from.
          </p>
        </div>
      </div>

      <div className="quote-marquee" aria-label="Client testimonials">
        <div className="quote-track row-a">
          {[...rowA, ...rowA].map((t, i) => (
            <div className="quote-cell" key={`a-${i}`}>
              <QuoteCard t={t} />
            </div>
          ))}
        </div>
        <div className="quote-track row-b">
          {[...rowB, ...rowB, ...rowB].map((t, i) => (
            <div className="quote-cell" key={`b-${i}`}>
              <QuoteCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

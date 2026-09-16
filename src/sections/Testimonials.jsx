import { FaQuoteLeft, FaChartLine } from 'react-icons/fa6'
import Reveal from '../components/Reveal.jsx'
import { testimonials } from '../data/testimonials.js'

const initialsOf = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || 'C'

export default function Testimonials() {
  if (!testimonials.length) return null

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow gold">Client Feedback</span>
          <h2 className="section-title">What working together looked like</h2>
          <p className="section-sub">
            Feedback from client engagements — each one paired with the campaign result it produced.
          </p>
        </div>

        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={i * 0.08} y={26}>
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
                      {t.service ? ` · ${t.service}` : ''}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FaBolt } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'

/**
 * AEO "quick answer" box: short, direct, extractable answers placed at the
 * top of a service page so answer engines (Google AI Overviews, ChatGPT,
 * Perplexity) and skimming humans get the essentials immediately.
 *
 * items: [{ q, a }]
 */
export default function QuickAnswers({ items = [], title = 'Quick answers' }) {
  if (!items.length) return null

  return (
    <Reveal y={20}>
      <section className="quick-answers" aria-label={title}>
        <h2 className="qa-title">
          <FaBolt /> {title}
        </h2>
        <dl className="qa-list">
          {items.map((item) => (
            <div className="qa-item" key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Reveal>
  )
}

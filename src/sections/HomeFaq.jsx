import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import { homeFaq } from '../data/homeFaq.js'

/** AEO-friendly FAQ block: direct answers, also published as FAQPage schema. */
export default function HomeFaq() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow gold">FAQ</span>
          <h2 className="section-title">Straight answers, before you ask</h2>
          <p className="section-sub">
            The questions clients and hiring managers ask most — answered directly.
          </p>
        </div>

        <Reveal y={20}>
          <Faq items={homeFaq} />
        </Reveal>
      </div>
    </section>
  )
}

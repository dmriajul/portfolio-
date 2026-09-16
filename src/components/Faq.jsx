import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Reveal from './Reveal.jsx'

/** Accessible accordion used for service page FAQs. */
export default function Faq({ items = [] }) {
  const [open, setOpen] = useState(0)

  if (!items.length) return null

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <Reveal key={item.q} delay={i * 0.04} y={16}>
            <div className={`faq-item${isOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <FaChevronDown />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

import { site, whatsappLink, mailtoLink } from '../data/site.js'
import { FaCalendarCheck, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { bookingLink } from '../data/site.js'

/**
 * The CTA trio used on service pages (and anywhere else a
 * "talk to me" action is needed): Book a Call · Email · WhatsApp.
 */
export default function ContactButtons({
  service,
  size = '',
  showEmail = true,
  showWhatsapp = true,
  className = 'sd-cta-row',
}) {
  const svcName = service ? service.name : 'marketing'
  const cls = size ? `btn ${size}` : 'btn'

  return (
    <div className={className}>
      <a
        className={`${cls} btn-gold`}
        href={bookingLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCalendarCheck /> Book a Call
      </a>

      {showWhatsapp && (
        <a
          className={`${cls} btn-primary`}
          href={whatsappLink(
            `Hello ${site.name}, I visited your ${svcName} service page and would like to discuss my project.`
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      )}

      {showEmail && (
        <a
          className={`${cls} btn-outline`}
          href={mailtoLink(
            `${svcName} inquiry — from portfolio`,
            `Hello ${site.name},\n\nI found your ${svcName} service page and would like to discuss a project.\n\nMy business:\nCurrent situation:\nGoal:\n\nThanks`
          )}
        >
          <FaEnvelope /> Email Me
        </a>
      )}
    </div>
  )
}

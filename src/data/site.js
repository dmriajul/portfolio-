/**
 * Central site / contact configuration.
 * Update these values here — every section and every service page reads from this file.
 */

export const site = {
  name: 'Khandokar Riajul Islam',
  shortName: 'Riajul',
  role: 'Performance Marketing Specialist',
  roleAlt: 'Social Media Marketing Specialist',
  location: 'Khulna, Bangladesh',
  availability: 'Available for Remote Projects (US / EU / BD)',
  brand: 'Riajul',
  brandSuffix: '.Marketing',

  /** Headline claims — kept in one place so every section stays consistent. */
  yearsExperience: '5+',
  yearsManaging: '3+',
  certificationCount: '10+',

  email: 'khandokarriajulislam@gmail.com',
  phone: '+8801954447017',
  phoneDisplay: '+880 1954 447017',
  whatsapp: '8801707302038',
  whatsappDisplay: '+880 1707 302038',
  website: 'https://riajultech.com',
  websiteDisplay: 'riajultech.com',
  portfolioUrl: 'https://portfolio.riajultech.com',

  /** Real booking link (Calendly). */
  bookingUrl: 'https://calendly.com/khandokarriajulislam/30min',

  /** Resume PDF lives in /public/resume and is HEAD-checked before download. */
  resumeUrl: '/resume/Khandokar_Riajul_Islam_Resume.pdf',

  profileImage: '/profile.jpg',

  /** Web3Forms access key for the Contact section form. TODO: replace with your real key. */
  web3formsKey: 'YOUR_ACCESS_KEY_HERE',

  /** Date shown as "last reviewed" for EEAT freshness signals. */
  contentUpdated: '2026-09-16',

  socials: [
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/khandokarriajulislam/' },
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/khandokarriajulislambappy/' },
    { id: 'x', label: 'X (Twitter)', url: 'https://x.com/RiajulKhandoker' },
    { id: 'website', label: 'Website', url: 'https://riajultech.com' },
  ],
}

export const whatsappLink = (message) => {
  const text = message || `Hello ${site.name}, I found your portfolio and would like to discuss a project.`
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

/** "Book a Call" — uses the real booking link when configured, otherwise WhatsApp. */
export const bookingLink = () =>
  site.bookingUrl ||
  whatsappLink(
    `Hello ${site.name}, I would like to book a call to discuss social media / performance marketing for my brand.`
  )

export const mailtoLink = (subject, body) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject || 'Project inquiry')}&body=${encodeURIComponent(
    body || `Hello ${site.name},\n\nI came across your portfolio and would like to discuss a project.\n\nThanks`
  )}`

export const navLinks = [
  { label: 'Home', to: '/', hash: '#home' },
  { label: 'About', to: '/', hash: '#about' },
  { label: 'Skills', to: '/', hash: '#skills' },
  { label: 'Projects', to: '/', hash: '#projects' },
  { label: 'Services', to: '/', hash: '#services' },
  { label: 'Contact', to: '/', hash: '#contact' },
]

export default site

import site from '../data/site.js'
import { services } from '../data/services.js'
import { certifications } from '../data/certifications.js'

const BASE = site.portfolioUrl.replace(/\/$/, '')
const url = (path) => `${BASE}${path}`

/** schema.org Person — the EEAT core: who the author is, credentials, sameAs. */
export const personSchema = () => ({
  '@type': 'Person',
  '@id': `${BASE}/#person`,
  name: site.name,
  givenName: 'Khandokar Riajul',
  familyName: 'Islam',
  jobTitle: site.role,
  description:
    'Performance marketing specialist in Khulna, Bangladesh. Social media marketing, Meta Ads, Google Ads, SEO, GA4/GTM analytics and conversion optimization with documented campaign results.',
  url: BASE,
  image: url(site.profileImage),
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Khulna',
    addressCountry: 'BD',
  },
  sameAs: site.socials.map((s) => s.url),
  knowsAbout: [
    'Social Media Marketing',
    'Meta Ads',
    'Google Ads',
    'Search Engine Optimization',
    'Google Analytics 4',
    'Google Tag Manager',
    'Conversion Rate Optimization',
    'Content Strategy',
    'Affiliate Marketing',
    'Lead Generation',
  ],
  hasCredential: certifications.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c.name,
    recognizedBy: { '@type': 'Organization', name: c.issuer },
  })),
  worksFor: { '@type': 'Organization', name: 'Riajul Tech', url: site.website },
})

export const webSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: `${site.name} | ${site.role}`,
  description:
    'Portfolio of Khandokar Riajul Islam — social media marketing, Meta Ads, Google Ads, SEO, analytics and CRO, with dedicated service pages and real campaign case studies.',
  publisher: { '@id': `${BASE}/#person` },
  inLanguage: 'en',
})

export const organizationSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': `${BASE}/#service-provider`,
  name: `${site.name} — ${site.role}`,
  url: BASE,
  image: url(site.profileImage),
  email: site.email,
  telephone: site.phone,
  priceRange: '$$',
  areaServed: ['BD', 'US', 'EU', 'Worldwide'],
  founder: { '@id': `${BASE}/#person` },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        url: url(`/services/${s.slug}`),
        description: s.summary,
      },
    })),
  },
})

export const faqSchema = (items = []) => ({
  '@type': 'FAQPage',
  '@id': `${BASE}/#faq`,
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

/** Service page: Service + FAQ + Breadcrumb, all tied to the Person. */
export const servicePageSchema = (service, path) => {
  const pageUrl = url(path)
  return [
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: service.name,
      serviceType: service.name,
      description: service.meta.description,
      url: pageUrl,
      provider: { '@id': `${BASE}/#person` },
      areaServed: ['BD', 'US', 'EU', 'Worldwide'],
      slogan: service.tagline,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} capabilities`,
        itemListElement: service.capabilityGroups.map((g) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: g.title,
            description: g.items.map((i) => i.name).join(', '),
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: [...(service.quickAnswers || []), ...(service.faqs || [])].map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/#services` },
        { '@type': 'ListItem', position: 3, name: service.name, item: pageUrl },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: service.meta.title,
      description: service.meta.description,
      about: { '@id': `${pageUrl}#service` },
      author: { '@id': `${BASE}/#person` },
      dateModified: site.contentUpdated,
      inLanguage: 'en',
      isPartOf: { '@id': `${BASE}/#website` },
    },
  ]
}

export const homeGraph = (homeFaqItems) => ({
  '@context': 'https://schema.org',
  '@graph': [
    personSchema(),
    webSiteSchema(),
    organizationSchema(),
    faqSchema(homeFaqItems),
    {
      '@type': 'WebPage',
      '@id': BASE,
      url: BASE,
      name: `${site.name} | ${site.role}`,
      about: { '@id': `${BASE}/#service-provider` },
      author: { '@id': `${BASE}/#person` },
      dateModified: site.contentUpdated,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.hero-title', '.hero-sub'] },
    },
  ],
})

export const serviceGraph = (service, path) => ({
  '@context': 'https://schema.org',
  '@graph': [personSchema(), webSiteSchema(), ...servicePageSchema(service, path)],
})

/**
 * Certifications & education — taken from the resume and the public
 * learning record (Google, Meta, Coursera, HubSpot, SEMrush, Simplilearn).
 * Provider logos live in /public/certifications/.
 */

export const certProviders = [
  {
    id: 'google',
    name: 'Google',
    logo: '/certifications/google.png',
    focus: 'Analytics, advertising & tracking',
    items: [
      'Google Analytics 4 (GA4)',
      'Google Ads',
      'Google Tag Manager',
      'Google Analytics Certification',
    ],
  },
  {
    id: 'meta',
    name: 'Meta',
    logo: '/certifications/meta.png',
    focus: 'Meta advertising & social media marketing',
    items: ['Meta Ads', 'Facebook Marketing', 'Social Media Marketing', 'Meta Marketing Certification'],
  },
  {
    id: 'coursera',
    name: 'Coursera',
    logo: '/certifications/coursera.png',
    focus: 'Performance marketing fundamentals',
    items: [
      'Google Ads for Beginners',
      'Building a Business Presence with Facebook Marketing',
      'Social Media Marketing',
    ],
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    logo: '/certifications/hubspot.png',
    focus: 'Digital, inbound & content marketing',
    items: ['Digital Marketing', 'Inbound Marketing', 'Content Marketing'],
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    logo: '/certifications/semrush.png',
    focus: 'SEO, keyword research & content strategy',
    items: ['SEO', 'Content Marketing', 'Keyword Research'],
  },
  {
    id: 'simplilearn',
    name: 'Simplilearn',
    logo: '/certifications/simplilearn.png',
    focus: 'Facebook advertising & campaign management',
    items: ['Facebook Marketing & Advertising', 'Campaign Strategy', 'Social Media Advertising'],
  },
]

/** Flat list used for schema.org hasCredential and quick counts. */
export const certifications = certProviders.flatMap((p) =>
  p.items.map((item) => ({ name: item, issuer: p.name }))
)

export const education = [
  {
    degree: 'Bachelor of Social Science (B.S.S), Political Science',
    institute: 'National University, Bangladesh',
    period: '2019 – 2022',
    result: '2nd Class',
  },
  {
    degree: 'Higher Secondary Certificate (HSC), Humanities',
    institute: 'Khan Jahan Ali Ideal College, Khulna',
    period: '2017 – 2018',
    result: 'GPA 3.08',
  },
  {
    degree: 'Secondary School Certificate (SSC), Science',
    institute: 'Shiromoni Secondary School, Khulna',
    period: '',
    result: 'GPA 3.17',
  },
]

export default certProviders

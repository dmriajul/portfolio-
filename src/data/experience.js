/**
 * Work experience — mirrors the resume (public/resume/Khandokar_Riajul_Islam_Resume.pdf)
 * and the published professional history. Metrics are pulled from the
 * platforms (Meta Ads Manager, Google Search Console, GA4).
 */
export const experience = [
  {
    role: 'Founder & SEO Content Strategist',
    company: 'Riajul Tech (riajultech.com)',
    location: 'Remote — Khulna, Bangladesh',
    period: 'Jan 2024 – Present',
    current: true,
    summary:
      'Built a US-targeted affiliate-authority publication from scratch and grew it with organic SEO, technical optimization and a full affiliate monetization stack.',
    highlights: [
      '174K impressions and 684 organic clicks within 3 months (Google Search Console), avg. position 8.5 across 1,000+ queries',
      "Ranks for commercial keywords: 'best travel mouse' (1,824 impressions, 76 clicks), 'travel mouse' (1,824 impressions), 'desk setup 2026' (695 impressions) — no paid traffic",
      'Manages the full affiliate stack: Amazon Associates (US/UK/CA), Awin, CJ Affiliate and Impact',
      'Runs Meta Ads and Pinterest Ads targeting US home-office professionals; all performance tracked in GA4',
    ],
    skills: ['SEO', 'Content Strategy', 'GA4', 'Affiliate Marketing', 'Meta Ads', 'Pinterest Ads'],
  },
  {
    role: 'Freelance Facebook Ads Consultant',
    company: 'ZR Fashion · Salient Shop · Rong Bahari · Where House',
    location: 'Remote',
    period: '2024 – 2025',
    current: false,
    summary:
      'Managed Facebook Ads for four independent e-commerce and fashion brands on $200–$650 monthly budgets per client, consistently holding cost-per-messaging-conversation between $0.03 and $0.10.',
    highlights: [
      'ZR Fashion: 860+ customer messaging conversations across 6 product campaigns at $0.05/result — well below the BD market benchmark',
      'Salient Shop: 344 wallet sales in the first 7 days of launch; CTR 2.28%, cost per result $0.98',
      'Rong Bahari: 347 conversations at $0.027/result on a beauty/apparel campaign — lowest CPA across all client accounts',
    ],
    skills: ['Meta Ads', 'Messaging Campaigns', 'Creative Testing', 'Budget Control'],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Foring Group of Companies (Foring Fly · Foring Homes · iTrade Links)',
    location: 'Motijheel, Dhaka',
    period: 'Nov 2024 – Dec 2025',
    current: false,
    summary:
      'Owned paid media and social for three brands — travel & tourism, real estate and e-commerce — running Facebook, Google and Instagram campaigns in parallel.',
    highlights: [
      '72+ campaigns across Facebook, Google and Instagram with lead costs of $0.13–$0.34 per result',
      'iTrade Links motorcycle accessory ad: 106,723 impressions at $0.23 CPM, 5.88% CTR and $0.004 CPC on $24.75 spend',
      'Tracked KPIs in Google Analytics and Meta Insights; coordinated multi-brand social content calendars with creative and sales teams',
    ],
    skills: ['Meta Ads', 'Google Ads', 'Multi-brand Strategy', 'Content Calendars', 'Reporting'],
  },
  {
    role: 'Digital Marketing Executive',
    company: 'DmandFly',
    location: 'Kamrangirchar, Dhaka',
    period: 'Aug 2024 – Nov 2024',
    current: false,
    summary:
      'Handled SEO, social media and paid advertising end to end — keyword research, on-page optimization, campaign launch and ROI monitoring.',
    highlights: [
      'Improved organic rankings through keyword research and on-page optimization',
      'Launched and managed Facebook & Google Ads campaigns',
      'Monitored and optimized campaign ROI with Google Analytics and Facebook Insights',
    ],
    skills: ['SEO', 'Social Media', 'Meta Ads', 'Google Ads', 'Analytics'],
  },
  {
    role: 'Lead Generation Specialist',
    company: 'Lifeboat SEO (Freelance)',
    location: 'Remote',
    period: 'Jan 2023 – Jul 2024',
    current: false,
    summary:
      'Sourced and qualified B2B leads for international clients and built the outreach infrastructure around them.',
    highlights: [
      'Sourced and qualified B2B leads with LinkedIn Sales Navigator and Apollo.io across multiple industries and regions',
      'Built automated email sequences in HubSpot and Mailchimp',
      'Managed CRM segmentation to improve lead handoff and pipeline efficiency',
    ],
    skills: ['Lead Generation', 'Apollo.io', 'LinkedIn Sales Navigator', 'HubSpot', 'Mailchimp'],
  },
]

/** Headline numbers shown in About / hero bento. */
export const aboutStats = [
  { value: 5, suffix: '+', label: 'Years in digital marketing' },
  { value: 10, suffix: '+', label: 'Professional certifications' },
  { value: 7, suffix: '+', label: 'Brands with documented results' },
  { value: 174, suffix: 'K', label: 'Organic impressions driven' },
]

export default experience

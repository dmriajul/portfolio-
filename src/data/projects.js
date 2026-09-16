/**
 * Real campaign results — case-study style.
 * Only confirmed numbers are used here (no generic "higher CTR / better ROAS" claims).
 */

export const projects = [
  {
    slug: 'riajul-tech',
    name: 'Riajul Tech',
    category: 'Organic Search Growth',
    services: ['seo', 'analytics'],
    summary:
      'Own tech content asset grown through topic-cluster content, technical SEO and Search Console-led iteration — building commercial keyword visibility rather than vanity traffic.',
    approach: [
      'Keyword universe mapped from Search Console query data (1,000+ queries tracked)',
      'Topic clusters built around commercial intent, not just volume',
      'Technical SEO: crawl, index coverage, internal linking and content refresh cycle',
      'Search Console monitored weekly to promote rising queries into dedicated pages',
    ],
    metrics: [
      { value: '174K', label: 'Organic impressions' },
      { value: '684', label: 'Organic clicks' },
      { value: '8.5', label: 'Average position' },
      { value: '1,000+', label: 'Queries tracked' },
    ],
    tags: ['SEO', 'Content Strategy', 'Search Console'],
  },
  {
    slug: 'foring-group',
    name: 'Foring Group',
    category: 'Multi-Channel Paid Media',
    services: ['meta-ads', 'google-ads', 'social-media-marketing'],
    summary:
      'High-volume, low-budget testing operation across Facebook, Instagram and Google — 72+ campaigns run to find the cheapest reliable lead flow instead of scaling one lucky ad set.',
    approach: [
      '72+ campaigns structured for rapid creative and audience testing',
      'Facebook + Instagram + Google Ads running in parallel with shared learning',
      'Bid and budget controlled tightly to keep CPC at $0.004 while testing',
      'Lead cost band tracked per campaign to identify the repeatable winner',
    ],
    metrics: [
      { value: '72+', label: 'Campaigns run' },
      { value: '106,723', label: 'Impressions' },
      { value: '5.88%', label: 'CTR' },
      { value: '$0.004', label: 'CPC' },
      { value: '$24.75', label: 'Total spend' },
      { value: '$0.13–$0.34', label: 'Lead cost range' },
    ],
    tags: ['Meta Ads', 'Google Ads', 'Lead Generation'],
  },
  {
    slug: 'zr-fashion',
    name: 'ZR Fashion',
    category: 'Conversation-Driven Commerce',
    services: ['meta-ads', 'social-media-marketing'],
    summary:
      'Fashion brand optimized for messaging conversions — six product campaigns built around inbox conversations, which is how this market actually buys.',
    approach: [
      '6 product-level campaigns, each with its own creative and audience',
      'Objective chosen for messaging conversations, not cheap clicks',
      'Creative rotation to prevent frequency fatigue on a narrow audience',
      'Cost per result held at $0.05 while scaling conversation volume',
    ],
    metrics: [
      { value: '860+', label: 'Messaging conversations' },
      { value: '6', label: 'Product campaigns' },
      { value: '$0.05', label: 'Cost per result' },
    ],
    tags: ['Meta Ads', 'Instagram', 'Messaging Campaigns'],
  },
  {
    slug: 'salient-shop',
    name: 'Salient Shop',
    category: 'E-commerce Launch',
    services: ['meta-ads', 'social-media-marketing', 'cro'],
    summary:
      'Store launch pushed to 344 sales in the first 7 days — a fast, conversion-focused paid push with landing page and offer changes made inside the same week.',
    approach: [
      'Launch window planned as a 7-day sprint with daily budget and creative review',
      'Ad creative matched to the landing page offer to reduce drop-off',
      'CTR and cost/result monitored daily, underperformers cut within 24 hours',
      'Checkout and offer friction removed as data came in (CRO loop)',
    ],
    metrics: [
      { value: '344', label: 'Sales in first 7 days' },
      { value: '2.28%', label: 'CTR' },
      { value: '$0.98', label: 'Cost per result' },
    ],
    tags: ['Meta Ads', 'E-commerce', 'Conversion Optimization'],
  },
  {
    slug: 'rong-bahari',
    name: 'Rong Bahari',
    category: 'Low-Cost Lead Engine',
    services: ['meta-ads', 'social-media-marketing'],
    summary:
      'A lean messaging campaign that turned a very small budget into 347 conversations at $0.027 per result — proof that offer and creative beat budget size.',
    approach: [
      'Single clear offer with a low-friction conversation CTA',
      'Audience kept broad, letting Meta delivery find the cheapest conversations',
      'Creative tested against each other, winner scaled rather than budget raised',
      'Response handling aligned with ad promise so conversations stayed qualified',
    ],
    metrics: [
      { value: '347', label: 'Conversations' },
      { value: '$0.027', label: 'Cost per result' },
    ],
    tags: ['Meta Ads', 'Messaging', 'Budget Efficiency'],
  },
  {
    slug: 'spreka',
    name: 'Spreka',
    category: 'European Brand Reach',
    services: ['meta-ads', 'social-media-marketing'],
    summary:
      'EU-market campaign managed for reach efficiency — 214K reach on €560.53 spend with CPM and page-visit cost controlled well below typical regional benchmarks.',
    approach: [
      'Reach objective used deliberately, with frequency capped to avoid waste',
      'Creative localized for a European audience instead of reusing BD creative',
      'CPM monitored as the primary efficiency signal (€1.40 achieved)',
      'Profile and page visits tracked as the mid-funnel conversion goal',
    ],
    metrics: [
      { value: '214K', label: 'Reach' },
      { value: '€560.53', label: 'Total spend' },
      { value: '€1.40', label: 'CPM' },
      { value: '€0.23', label: 'Cost per page/profile visit' },
    ],
    tags: ['Meta Ads', 'Reach Campaigns', 'EU Market'],
  },
  {
    slug: 'dmandfly',
    name: 'DmandFly',
    category: 'Full-Funnel Growth',
    services: ['seo', 'social-media-marketing', 'meta-ads', 'google-ads', 'analytics'],
    summary:
      'Ongoing full-funnel engagement combining SEO, social media management, Facebook and Google Ads — with every channel decision driven by analytics rather than assumption.',
    approach: [
      'SEO and paid media planned together so organic and paid keyword data inform each other',
      'Social media presence maintained alongside paid campaigns',
      'Facebook Ads + Google Ads managed as one acquisition system',
      'Analytics-based optimization: tracking reviewed first, then budget reallocated',
    ],
    metrics: [
      { value: 'SEO', label: 'Organic search' },
      { value: 'Social', label: 'Media management' },
      { value: 'FB + Google', label: 'Paid channels' },
      { value: 'Analytics', label: 'Based optimization' },
    ],
    tags: ['SEO', 'Social Media', 'Meta Ads', 'Google Ads', 'Analytics'],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

/** Projects relevant to a given service slug. */
export const projectsForService = (serviceSlug) =>
  projects.filter((p) => p.services.includes(serviceSlug))

export default projects

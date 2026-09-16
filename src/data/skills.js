import { FaBullhorn, FaSearch, FaChartLine, FaPenNib, FaTools, FaEnvelopeOpenText, FaRobot } from 'react-icons/fa'

/** Skill groups shown in the Skills section (mirrors resume + live portfolio). */
export const skillGroups = [
  {
    title: 'Paid Advertising',
    icon: FaBullhorn,
    skills: [
      'Facebook & Instagram Ads',
      'Google Ads (Search, Display, Shopping, PMax, YouTube)',
      'Pinterest Ads',
      'Meta Business Manager',
      'Retargeting & Custom Audiences',
      'Lookalike Audiences',
      'Creative & A/B Testing',
      'Budget & Bid Strategy',
    ],
  },
  {
    title: 'Social Media & Content',
    icon: FaPenNib,
    skills: [
      'Social Media Strategy',
      'Content Pillars & Monthly Calendar',
      'Instagram Content Strategy',
      'Carousel & Reels Planning',
      'Caption & Copywriting',
      'Hashtag Strategy',
      'Community Engagement',
      'Audience & Competitor Research',
    ],
  },
  {
    title: 'SEO & Content',
    icon: FaSearch,
    skills: [
      'Technical & On-Page SEO',
      'Keyword Research & Intent Mapping',
      'Topic Clusters / Silo Architecture',
      'Schema Markup (Product / Review / FAQPage)',
      'Google Search Console',
      'Rank Math SEO',
      'Content Optimization & Refresh',
      'Local SEO',
    ],
  },
  {
    title: 'Analytics & Tracking',
    icon: FaChartLine,
    skills: [
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM)',
      'Meta Pixel & Conversions API',
      'Event Tracking Plans',
      'Conversion Tracking',
      'UTM Strategy',
      'Looker Studio Dashboards',
      'Funnel & Drop-off Analysis',
    ],
  },
  {
    title: 'Conversion Optimization',
    icon: FaTools,
    skills: [
      'Landing Page Audits',
      'A/B Testing',
      'CTA & Offer Optimization',
      'Form & Funnel Analysis',
      'Heatmap / Session Review',
      'Page Speed & UX Review',
    ],
  },
  {
    title: 'Affiliate & Email',
    icon: FaEnvelopeOpenText,
    skills: [
      'Amazon Associates (US/UK/CA)',
      'Awin · CJ Affiliate · Impact',
      'HubSpot & Mailchimp Sequences',
      'CRM Segmentation',
      'B2B Lead Generation',
      'Apollo.io & LinkedIn Sales Navigator',
    ],
  },
  {
    title: 'AI Marketing & Technical',
    icon: FaRobot,
    skills: [
      'ChatGPT · Gemini · Claude · Perplexity',
      'Canva AI',
      'AI-assisted content & campaign workflows',
      'WordPress · GeneratePress · Elementor',
      'CSS · Responsive Builds',
      'ThirstyAffiliates · robots.txt · llms.txt',
    ],
  },
]

/** Compact badge list used in About and Hero. */
export const skillBadges = [
  'Meta Ads',
  'Google Ads',
  'Social Media Marketing',
  'SEO',
  'GA4 & GTM',
  'Content Strategy',
  'Retargeting',
  'A/B Testing',
  'CRO',
  'Pinterest Ads',
  'Affiliate Marketing',
  'AI Marketing Tools',
]

export default skillGroups

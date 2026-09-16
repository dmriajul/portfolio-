import { FaBullhorn, FaSearch, FaChartLine, FaPenNib, FaTools } from 'react-icons/fa'

/** Skill groups shown in the Skills section. */
export const skillGroups = [
  {
    title: 'Paid Media',
    icon: FaBullhorn,
    skills: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads (Search, Shopping, PMax)',
      'Retargeting & Custom Audiences',
      'Lookalike Audiences',
      'Creative & A/B Testing',
      'Campaign Optimization',
      'Budget & Bid Strategy',
      'Lead Generation Campaigns',
      'E-commerce Campaigns',
    ],
  },
  {
    title: 'Organic & SEO',
    icon: FaSearch,
    skills: [
      'Technical SEO',
      'Keyword & Intent Research',
      'Topic Clusters / Silo Architecture',
      'On-Page Optimization',
      'Internal Linking',
      'Local SEO',
      'Google Search Console',
      'Content Refresh Strategy',
    ],
  },
  {
    title: 'Social Media & Content',
    icon: FaPenNib,
    skills: [
      'Social Media Strategy',
      'Content Pillars',
      'Monthly Content Calendar',
      'Instagram Content Strategy',
      'Carousel & Reels Planning',
      'Caption & Copywriting',
      'Hashtag Strategy',
      'Community Engagement',
      'Audience & Competitor Research',
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
      'UTM Strategy',
      'Looker Studio Dashboards',
      'Funnel & Drop-off Analysis',
      'Attribution Review',
    ],
  },
  {
    title: 'Conversion & Tools',
    icon: FaTools,
    skills: [
      'Conversion Rate Optimization',
      'Landing Page Audits',
      'A/B Testing',
      'CTA & Offer Optimization',
      'Meta Business Suite',
      'Canva & CapCut',
      'Notion / Google Sheets',
      'Screaming Frog / Site Audits',
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
  'Analytics & Reporting',
]

export default skillGroups

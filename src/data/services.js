import {
  FaHashtag,
  FaFacebookF,
  FaGoogle,
  FaSearch,
  FaChartLine,
  FaMousePointer,
  FaUsers,
  FaPenNib,
  FaCalendarAlt,
  FaBullseye,
  FaCogs,
  FaChartPie,
  FaFlask,
  FaClipboardList,
  FaRocket,
  FaLayerGroup,
  FaCode,
  FaDatabase,
  FaFileInvoiceDollar,
  FaEye,
  FaGlobe,
  FaTools,
  FaMoneyBillWave,
} from 'react-icons/fa'

/**
 * Service catalogue.
 * Each entry powers BOTH the card on the home page and the dedicated
 * detail page at /services/<slug>.
 */
export const services = [
  /* ------------------------------------------------------------------ */
  /* 1. SOCIAL MEDIA MARKETING                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: 'social-media-marketing',
    aliases: ['smm', 'social-media'],
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    cardTitle: 'Social Media Marketing',
    cardSubtitle: 'Organic + Paid Social Media',
    icon: FaHashtag,
    accent: 'emerald',
    order: 1,

    tagline:
      'I run the whole social media ecosystem — strategy, content planning, organic growth, paid campaigns, creative direction and analytics — not just the ads.',
    summary:
      'Social media strategy, content pillars and monthly calendars on the organic side, plus Meta Ads campaign management, retargeting and creative testing on the paid side — measured with real reporting every month.',

    meta: {
      title: 'Social Media Marketing Services | Khandokar Riajul Islam',
      description:
        'Social Media Marketing by Khandokar Riajul Islam: organic social media management, content strategy and calendars, Facebook & Instagram management, Meta Ads, retargeting, A/B testing, GA4 tracking and monthly performance reports.',
    },

    hero: {
      eyebrow: 'Service',
      title: 'Social Media Marketing',
      subtitle:
        'Organic and paid social managed as one system — so your content builds the brand and your ads scale what already works.',
      highlights: [
        { value: '860+', label: 'Messaging conversations — ZR Fashion' },
        { value: '$0.027', label: 'Cost per result — Rong Bahari' },
        { value: '214K', label: 'Reach at €1.40 CPM — Spreka' },
        { value: '344', label: 'Sales in first 7 days — Salient Shop' },
      ],
    },

    intro: [
      'Most brands treat social media as posting plus boosting. That produces activity, not growth. I run social media as a complete system: audience research and competitor research define the strategy, content pillars and a monthly calendar keep publishing consistent, and Meta Ads scale the formats that already proved themselves organically.',
      'On the organic side you get Facebook and Instagram management, content strategy, carousel and Reels planning, captions and hashtag strategy, plus genuine community engagement. On the paid side you get campaign management, retargeting, creative testing and A/B testing with budget under constant control.',
      'Everything is measured. Monthly performance reports cover reach, engagement, follower growth, spend, cost per result and the specific actions for next month — with GA4 and GTM tracking set up wherever platform metrics alone are not enough.',
    ],

    capabilityGroups: [
      {
        title: 'Organic Social Media Management',
        icon: FaUsers,
        description: 'Day-to-day ownership of your social presence across platforms.',
        items: [
          {
            name: 'Organic Social Media Management',
            detail:
              'End-to-end ownership of your social presence — planning, publishing, engagement and continuous improvement, without you having to manage it.',
          },
          {
            name: 'Facebook & Instagram Management',
            detail:
              'Page and profile setup, bio and link structure, Highlights, publishing cadence and consistent brand presentation across both platforms.',
          },
          {
            name: 'Community Engagement',
            detail:
              'Comment and DM handling, conversation starters and relationship building that turn passive followers into an audience that actually responds.',
          },
          {
            name: 'Content Performance Analysis',
            detail:
              'Post-level review of what worked and why — reach, saves, shares, profile visits and messages — feeding straight into the next month plan.',
          },
        ],
      },
      {
        title: 'Paid Social Media / Meta Ads',
        icon: FaFacebookF,
        description: 'Meta Ads managed as an acquisition system, not a boost button.',
        items: [
          {
            name: 'Paid Social Media / Meta Ads',
            detail:
              'Full Meta Ads management — campaign setup, budget allocation, targeting and daily optimization aimed at a defined cost per result.',
          },
          {
            name: 'Meta Ads Campaign Management',
            detail:
              'Campaigns structured by funnel stage: awareness, traffic, engagement, messaging and conversion — each with its own objective, audience and budget.',
          },
          {
            name: 'Campaign Optimization',
            detail:
              'Bid, budget, placement and creative decisions made from data and reviewed continuously, instead of set-and-forget.',
          },
          {
            name: 'Retargeting',
            detail:
              'Custom audiences built from engagement, website visitors, video viewers and customer lists, so warm traffic is converted rather than bought again.',
          },
          {
            name: 'Creative Testing',
            detail:
              'Systematic testing of hooks, angles, formats and offers to find the creative that can carry the account at scale.',
          },
          {
            name: 'A/B Testing',
            detail:
              'Controlled experiments changing one variable at a time, so results are readable, repeatable and safe to scale on.',
          },
        ],
      },
      {
        title: 'Strategy & Planning',
        icon: FaBullseye,
        description: 'The thinking layer that makes the content and ads coherent.',
        items: [
          {
            name: 'Social Media Strategy',
            detail:
              'A documented strategy covering positioning, target audience, the role each platform plays in your funnel, and the KPIs it is judged on.',
          },
          {
            name: 'Content Strategy',
            detail:
              'What you post, why you post it, and how each piece moves a follower one step closer to becoming a customer.',
          },
          {
            name: 'Content Pillars',
            detail:
              'Three to six defined pillars that keep your content focused, consistent and instantly recognizable as your brand.',
          },
        ],
      },
      {
        title: 'Content Planning & Production Direction',
        icon: FaCalendarAlt,
        description: 'Formats, calendars and copy planned a month ahead.',
        items: [
          {
            name: 'Monthly Content Calendar',
            detail:
              'A planned, dated calendar covering format, angle, caption direction, publishing days and any campaign or offer tie-ins.',
          },
          {
            name: 'Instagram Content Strategy',
            detail:
              'Feed, Stories, Reels and Highlights planned as one connected system instead of four separate afterthoughts.',
          },
          {
            name: 'Carousel Content',
            detail:
              'Multi-slide educational and storytelling carousels structured for saves and shares — the highest-value organic format on Instagram.',
          },
          {
            name: 'Static Post Strategy',
            detail:
              'Single-image posts designed for clarity, offer communication and brand consistency where a carousel adds nothing.',
          },
          {
            name: 'Reels / Short-form Video Strategy',
            detail:
              'Hook-first short-form planning: scripting direction, retention structure, and only the trends that genuinely fit your brand.',
          },
          {
            name: 'Caption & Copywriting',
            detail:
              'Captions written for the platform — hook, value, call to action — in your brand voice, not generic filler.',
          },
          {
            name: 'Hashtag Strategy',
            detail:
              'Research-based hashtag sets organized by content type and reach tier, reviewed against actual performance rather than habit.',
          },
        ],
      },
      {
        title: 'Audience & Competitor Research',
        icon: FaEye,
        description: 'Research first, so content and targeting are not guesses.',
        items: [
          {
            name: 'Audience Research',
            detail:
              'Who your customers are, what they actually need, what language they use and what stops them buying — the input for both content and targeting.',
          },
          {
            name: 'Competitor Research',
            detail:
              'What competitors post, which of their content earns traction, where they over-invest, and the gaps your brand can own.',
          },
        ],
      },
      {
        title: 'Analytics, Tracking & Reporting',
        icon: FaChartPie,
        description: 'Measurement that connects social activity to business results.',
        items: [
          {
            name: 'Analytics & Reporting',
            detail:
              'Clear reporting that ties reach, engagement and ad spend to conversations, leads and sales — not just vanity numbers.',
          },
          {
            name: 'GA4 / GTM Tracking (where required)',
            detail:
              'GA4 events and Google Tag Manager configured whenever social traffic must be measured beyond platform-reported metrics.',
          },
          {
            name: 'Monthly Performance Reports',
            detail:
              'A monthly report covering organic growth, engagement, ad spend, cost per result, learnings from tests, and the actions planned for next month.',
          },
        ],
      },
      {
        title: 'Conversion',
        icon: FaMousePointer,
        description: 'Every post has a job to do.',
        items: [
          {
            name: 'CTA & Conversion Strategy',
            detail:
              'Every post and ad is built with a defined next step — profile visit, message, lead form or purchase — and a CTA that matches it.',
          },
        ],
      },
    ],

    process: [
      {
        title: 'Discovery & Audit',
        description:
          'I review your current accounts, past performance, audience and competitors, then we agree what social media has to deliver for the business: conversations, leads, sales or brand reach.',
      },
      {
        title: 'Strategy & Content Pillars',
        description:
          'Audience and competitor research is turned into positioning, three to six content pillars, a platform plan and the KPIs each channel will be measured against.',
      },
      {
        title: 'Content Calendar & Creative Direction',
        description:
          'A monthly calendar covering carousels, static posts, Reels and Stories, with caption direction, hashtag sets and hooks briefed so production is fast and consistent.',
      },
      {
        title: 'Publishing & Community Engagement',
        description:
          'Content goes out on schedule, comments and messages are handled, and engagement patterns are watched for the formats your audience actually rewards.',
      },
      {
        title: 'Paid Social & Testing',
        description:
          'Meta Ads campaigns launch around the strongest organic formats, with retargeting audiences, creative tests and A/B tests running under controlled budget.',
      },
      {
        title: 'Reporting & Optimization',
        description:
          'A monthly performance report summarises results and learnings, and next month calendar and ad plan are adjusted based on what the data proved.',
      },
    ],

    deliverables: [
      'Social media strategy & positioning document',
      'Content pillars and platform plan',
      'Monthly content calendar (Feed, Reels, Stories, Carousels)',
      'Captions, hooks and hashtag sets',
      'Creative direction briefs for design / video',
      'Meta Ads campaign structure & budget plan',
      'Custom and lookalike retargeting audiences',
      'Creative and A/B test log with conclusions',
      'GA4 / GTM tracking where required',
      'Monthly performance report with next-month actions',
    ],

    tools: [
      'Meta Business Suite',
      'Meta Ads Manager',
      'Meta Business Manager',
      'Meta Pixel & Conversions API',
      'Instagram Insights',
      'Google Analytics 4',
      'Google Tag Manager',
      'Looker Studio',
      'Canva',
      'CapCut',
      'Notion / Google Sheets',
    ],

    faqs: [
      {
        q: 'Do you handle both organic and paid social media?',
        a: 'Yes — that is the core of this service. Organic builds the brand, the audience and a library of proven creative; paid scales whatever already works. Running them separately is why most social budgets stall.',
      },
      {
        q: 'Who designs the visuals and edits the videos?',
        a: 'Content strategy, calendars, captions, hooks, formats and creative direction are mine. Graphic design and video editing are either produced by your team from my briefs, or arranged with a designer I work with — you always know upfront which model we are using.',
      },
      {
        q: 'How quickly will I see results?',
        a: 'Paid social can produce conversations or leads within the first week — for example Rong Bahari reached 347 conversations at $0.027 per result, and Salient Shop generated 344 sales in its first 7 days. Organic growth compounds and is realistically judged over a 90-day window.',
      },
      {
        q: 'What do you need from me to start?',
        a: 'Access to Business Manager, your page and ad account, any past performance reports, brand assets, and one 30–45 minute call per month. Everything else is handled on my side.',
      },
      {
        q: 'Which markets and industries have you worked in?',
        a: 'Fashion and e-commerce (ZR Fashion, Salient Shop), service and lead-gen brands (Foring Group, Rong Bahari), tech (DmandFly, Riajul Tech) and European markets (Spreka). The method adapts; the measurement discipline does not.',
      },
    ],

    cta: {
      heading: 'Ready to treat social media as a growth channel?',
      text: 'Book a call and I will review your current accounts and tell you exactly what I would change first — organic, paid, or both.',
    },
  },

  /* ------------------------------------------------------------------ */
  /* 2. META ADS                                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: 'meta-ads',
    aliases: ['facebook-ads', 'paid-social'],
    name: 'Meta Ads Management',
    shortName: 'Meta Ads',
    cardTitle: 'Meta Ads Management',
    cardSubtitle: 'Facebook & Instagram Paid Campaigns',
    icon: FaFacebookF,
    accent: 'emerald',
    order: 2,

    tagline:
      'Meta Ads built on tracking, structure and testing — with cost per result controlled daily instead of hoped for.',
    summary:
      'Pixel and Conversions API setup, funnel-structured campaigns, retargeting audiences, creative and A/B testing, and daily optimization aimed at a specific cost per result.',

    meta: {
      title: 'Meta Ads Management Services | Khandokar Riajul Islam',
      description:
        'Meta Ads management by Khandokar Riajul Islam: Pixel & Conversions API setup, campaign structure, custom and lookalike audiences, retargeting, creative testing, scaling and monthly reporting.',
    },

    hero: {
      eyebrow: 'Service',
      title: 'Meta Ads Management',
      subtitle:
        'Facebook and Instagram campaigns managed for measurable cost per result — from tracking setup to scaling.',
      highlights: [
        { value: '$0.05', label: 'Cost per result — ZR Fashion' },
        { value: '347', label: 'Conversations at $0.027 — Rong Bahari' },
        { value: '€1.40', label: 'CPM on 214K reach — Spreka' },
        { value: '72+', label: 'Campaigns run — Foring Group' },
      ],
    },

    intro: [
      'Cheap results do not come from a secret audience. They come from correct tracking, a campaign structure that matches the funnel, enough creative variation to test properly, and the discipline to cut what is not working within 24 hours.',
      'I set up the foundation first — Pixel, Conversions API, events, domain verification — then build campaigns by objective and funnel stage. Audiences include retargeting from engagement, video views, site visitors and customer lists, plus lookalikes built from real converters.',
      'From there it is a testing operation: hooks, angles, formats and offers tested against each other, budgets shifted toward winners, and results reported monthly with cost per result front and centre.',
    ],

    capabilityGroups: [
      {
        title: 'Tracking & Account Foundation',
        icon: FaCode,
        description: 'Nothing is scaled before measurement is correct.',
        items: [
          { name: 'Meta Pixel & Conversions API', detail: 'Pixel plus server-side CAPI so events survive ad blockers and iOS restrictions.' },
          { name: 'Event Configuration', detail: 'Purchase, Lead, Initiate Checkout, Contact and custom events mapped to your real funnel.' },
          { name: 'Business Manager & Asset Setup', detail: 'Pages, ad accounts, domains, catalogues and permissions structured properly from day one.' },
          { name: 'Domain Verification & Aggregated Events', detail: 'Configuration completed so campaigns are not limited by default restrictions.' },
          { name: 'GA4 / GTM Integration', detail: 'Meta events cross-checked against GA4 so platform numbers and site numbers agree.' },
        ],
      },
      {
        title: 'Campaign Strategy & Structure',
        icon: FaLayerGroup,
        description: 'Structure by funnel stage, not by whatever was easiest to launch.',
        items: [
          { name: 'Campaign Structure Design', detail: 'Awareness, traffic, engagement, messaging and conversion campaigns separated with clear budgets.' },
          { name: 'Objective Selection', detail: 'Objective chosen for the result you actually want — conversations, leads or purchases — not cheap clicks.' },
          { name: 'Budget Allocation (CBO / ABO)', detail: 'Budget distribution decided per test phase, then consolidated once winners are known.' },
          { name: 'Placement Strategy', detail: 'Feed, Reels, Stories, Marketplace and Audience Network evaluated on cost, not left fully automatic by default.' },
          { name: 'Advantage+ vs Manual', detail: 'Automated buying used where it helps, manual control kept where structure matters.' },
        ],
      },
      {
        title: 'Targeting & Audiences',
        icon: FaUsers,
        description: 'Warm traffic converted first, cold traffic scaled second.',
        items: [
          { name: 'Custom Audiences', detail: 'Engagement, video viewers, website visitors, lead form openers and customer lists.' },
          { name: 'Retargeting Windows', detail: 'Layered windows (3, 7, 14, 30 day) so follow-up spend matches buying intent.' },
          { name: 'Lookalike Audiences', detail: 'Built from real converters and high-value customers, tested against broad targeting.' },
          { name: 'Interest & Behavior Layering', detail: 'Used deliberately and tested against broad delivery instead of stacked blindly.' },
          { name: 'Exclusion Logic', detail: 'Purchasers and existing customers excluded so budget is never wasted re-acquiring them.' },
        ],
      },
      {
        title: 'Creative & Testing',
        icon: FaFlask,
        description: 'Creative is the biggest lever in Meta Ads — it is tested like one.',
        items: [
          { name: 'Creative Testing Framework', detail: 'Hooks, angles, formats and offers tested in a planned rotation with a written conclusion for each.' },
          { name: 'A/B Testing', detail: 'One variable changed at a time so the result is attributable and repeatable.' },
          { name: 'UGC & Static vs Video', detail: 'Format mix tested per audience; what wins for fashion rarely wins for services.' },
          { name: 'Frequency & Fatigue Management', detail: 'Frequency monitored and creative refreshed before performance decays.' },
          { name: 'Ad Copy Variants', detail: 'Primary text and headlines written for the hook, the objection and the CTA separately.' },
        ],
      },
      {
        title: 'Optimization & Scaling',
        icon: FaRocket,
        description: 'Cut fast, scale carefully.',
        items: [
          { name: 'Daily Campaign Optimization', detail: 'Underperformers paused within 24 hours; winners given room to exit the learning phase.' },
          { name: 'Bid Strategy', detail: 'Lowest cost, cost cap or bid cap selected based on how predictable your result value is.' },
          { name: 'Vertical & Horizontal Scaling', detail: 'Budget increases staged, or winning creative duplicated into new audiences, to avoid resetting learning.' },
          { name: 'Cost Per Result Control', detail: 'A target cost per result is agreed upfront and defended as budget grows.' },
        ],
      },
      {
        title: 'Reporting',
        icon: FaChartPie,
        description: 'Numbers you can act on, in plain language.',
        items: [
          { name: 'Meta Ads Reporting', detail: 'Spend, impressions, CTR, CPC, CPM, results and cost per result — with month-on-month comparison.' },
          { name: 'Looker Studio Dashboards', detail: 'Live dashboards where you want to self-serve instead of waiting for a report.' },
          { name: 'Monthly Performance Reports', detail: 'Results, test conclusions, and the plan and budget recommendation for next month.' },
        ],
      },
    ],

    process: [
      { title: 'Tracking Audit', description: 'Pixel, CAPI, events and GA4 checked first. If measurement is wrong, nothing after this point can be trusted.' },
      { title: 'Offer & Funnel Definition', description: 'We agree the result being bought — message, lead or purchase — and the target cost per result.' },
      { title: 'Campaign Build', description: 'Campaign structure, audiences, retargeting layers, placements and budget split set up for the first test phase.' },
      { title: 'Creative Testing', description: 'Multiple hooks, angles and formats launched together, reviewed daily, with losers cut early.' },
      { title: 'Optimization & Scaling', description: 'Winning combinations receive staged budget increases while cost per result is held.' },
      { title: 'Reporting & Next Steps', description: 'Monthly report covering results, test learnings, and the plan for the following month.' },
    ],

    deliverables: [
      'Pixel + Conversions API setup and event mapping',
      'Campaign structure and budget plan',
      'Custom, retargeting and lookalike audiences',
      'Creative testing plan and test log',
      'Ad copy variants (primary text, headlines, CTAs)',
      'Weekly optimization notes',
      'Monthly performance report',
      'Looker Studio dashboard (optional)',
    ],

    tools: ['Meta Ads Manager', 'Meta Pixel & CAPI', 'Google Tag Manager', 'GA4', 'Looker Studio', 'Canva', 'CapCut', 'Google Sheets'],

    faqs: [
      {
        q: 'What budget do I need to start?',
        a: 'It depends on the result you are buying. Lead and messaging campaigns can be tested from very small budgets — Foring Group generated leads at $0.13–$0.34 on $24.75 of spend. Purchase-focused e-commerce campaigns need enough budget to exit the learning phase, which we calculate before launching.',
      },
      {
        q: 'How do you decide what creative to test?',
        a: 'From your best organic content, competitor research and audience objections. Formats that already earned saves, shares or messages organically are the first candidates for paid testing — which is exactly why organic and paid should be run together.',
      },
      {
        q: 'Will you work with my existing ad account?',
        a: 'Yes. I audit the existing account first — structure, tracking, past creative performance and wasted spend — and rebuild only what needs rebuilding. Historical data is an asset.',
      },
      {
        q: 'How often will I hear from you?',
        a: 'Campaigns are checked daily. You get a summary of major changes when they happen and a full report at the end of every month.',
      },
    ],

    cta: {
      heading: 'Want your Meta Ads audited before you spend more?',
      text: 'Book a call and I will review your ad account, tracking and creative, then tell you what I would fix first.',
    },
  },

  /* ------------------------------------------------------------------ */
  /* 3. GOOGLE ADS                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: 'google-ads',
    aliases: ['ppc', 'search-ads'],
    name: 'Google Ads Management',
    shortName: 'Google Ads',
    cardTitle: 'Google Ads Management',
    cardSubtitle: 'Search, Shopping & Performance Max',
    icon: FaGoogle,
    accent: 'gold',
    order: 3,

    tagline:
      'High-intent search traffic bought efficiently — keyword strategy, ad copy, Quality Score and conversion tracking handled properly.',
    summary:
      'Search campaigns, Shopping and Performance Max setup, keyword and match type strategy, negative keyword control, RSA ad copy, bidding strategy and conversion tracking tied to GA4.',

    meta: {
      title: 'Google Ads Management Services | Khandokar Riajul Islam',
      description:
        'Google Ads management by Khandokar Riajul Islam: Search campaigns, Shopping and Performance Max, keyword research, match types, negative keywords, ad copy, bidding strategy and conversion tracking.',
    },

    hero: {
      eyebrow: 'Service',
      title: 'Google Ads Management',
      subtitle:
        'Capture demand that already exists — with keyword strategy, ad copy and tracking that keep cost per click and cost per lead under control.',
      highlights: [
        { value: '$0.004', label: 'CPC achieved — Foring Group' },
        { value: '5.88%', label: 'CTR — Foring Group' },
        { value: '106,723', label: 'Impressions on $24.75 spend' },
        { value: '$0.13–$0.34', label: 'Lead cost range' },
      ],
    },

    intro: [
      'Google Ads is where intent already exists — the job is to appear for the right queries, at the right price, with copy that earns the click and a landing page that earns the conversion.',
      'My approach is structural: keyword research grouped into tightly themed ad groups, match types controlled rather than left broad, negative keyword lists built from real search term reports, and ad copy written as proper Responsive Search Ads with asset coverage.',
      'Conversion tracking is set up and verified against GA4 before budget is spent, so bidding strategies have accurate data to learn from. Then it is iterative — search terms mined weekly, Quality Score improved, budgets shifted toward the queries that convert.',
    ],

    capabilityGroups: [
      {
        title: 'Account & Conversion Tracking',
        icon: FaCode,
        description: 'Bidding strategies are only as good as the conversions they can see.',
        items: [
          { name: 'Google Ads Account Structure', detail: 'Campaigns and ad groups organized by intent and theme, not by convenience.' },
          { name: 'Conversion Tracking Setup', detail: 'Purchases, leads, calls and form submissions tracked with correct values and counting rules.' },
          { name: 'GA4 + Google Ads Linking', detail: 'Audiences, conversions and attribution shared between GA4 and Google Ads.' },
          { name: 'Google Tag Manager Configuration', detail: 'Tags, triggers and variables managed in GTM so tracking survives site changes.' },
          { name: 'Enhanced Conversions', detail: 'First-party data enabled where possible to recover signal lost to consent and privacy changes.' },
        ],
      },
      {
        title: 'Search Campaigns',
        icon: FaSearch,
        description: 'The highest-intent channel, managed with discipline.',
        items: [
          { name: 'Keyword Research', detail: 'Commercial and high-intent queries identified and grouped by theme and funnel stage.' },
          { name: 'Match Type Strategy', detail: 'Exact, phrase and broad used deliberately, each with its own control and negative list.' },
          { name: 'Negative Keyword Management', detail: 'Negative lists built from search term reports to stop irrelevant spend every week.' },
          { name: 'Ad Copy & RSA Writing', detail: 'Headlines and descriptions written for query match, benefit and CTA, with full asset coverage for Ad Strength.' },
          { name: 'Ad Assets / Extensions', detail: 'Sitelinks, callouts, structured snippets, call and location assets configured.' },
          { name: 'Quality Score Improvement', detail: 'Keyword-to-ad-to-landing-page alignment improved to lower CPC without lowering position.' },
          { name: 'Search Term Mining', detail: 'Weekly review of real queries to find new keywords, new negatives and new ad angles.' },
        ],
      },
      {
        title: 'Shopping & Performance Max',
        icon: FaMoneyBillWave,
        description: 'Product-led campaigns for e-commerce brands.',
        items: [
          { name: 'Google Merchant Center / Feed Setup', detail: 'Product feed built and cleaned so titles, images and attributes actually serve the query.' },
          { name: 'Feed Optimization', detail: 'Product titles and attributes rewritten for search relevance, which is where Shopping performance is won.' },
          { name: 'Performance Max Structure', detail: 'Asset groups segmented by product category and audience signal, instead of one giant PMax campaign.' },
          { name: 'Product Segmentation', detail: 'Best sellers, margin winners and slow movers separated so budget follows profit.' },
        ],
      },
      {
        title: 'Display, YouTube & Remarketing',
        icon: FaEye,
        description: 'Mid and upper funnel, used with a reason.',
        items: [
          { name: 'Display Campaigns', detail: 'Placement-controlled display with strict negatives, used for remarketing rather than cold reach.' },
          { name: 'Remarketing Lists (RLSA)', detail: 'Search bids adjusted for users who already know the brand.' },
          { name: 'YouTube Campaigns', detail: 'In-stream and in-feed video campaigns with audience and topic targeting.' },
        ],
      },
      {
        title: 'Bidding, Budget & Measurement',
        icon: FaCogs,
        description: 'Spend directed by data, reviewed continuously.',
        items: [
          { name: 'Bidding Strategy Selection', detail: 'Maximize Clicks, tCPA, tROAS or Maximize Conversions chosen based on data volume and value consistency.' },
          { name: 'Budget Allocation', detail: 'Budget moved between campaigns and ad groups toward the queries that convert.' },
          { name: 'Geo, Device & Ad Schedule', detail: 'Location, device and dayparting adjusted from performance rather than left flat.' },
          { name: 'Impression Share & Auction Insights', detail: 'Lost IS to rank vs budget diagnosed so the fix is budget, bids, or Quality Score — not guessing.' },
          { name: 'Monthly Reporting', detail: 'Spend, clicks, CPC, CTR, conversions, cost per conversion and search term insights reported monthly.' },
        ],
      },
    ],

    process: [
      { title: 'Conversion Tracking Audit', description: 'Tags, conversions and GA4 linking verified. Bidding strategies are only enabled once the data is trustworthy.' },
      { title: 'Keyword & Intent Research', description: 'Queries researched and grouped by commercial intent, with an initial negative keyword list built before launch.' },
      { title: 'Campaign Build', description: 'Ad groups, RSAs, assets, match types, geo, device and schedule configured with a clear budget split.' },
      { title: 'Launch & Learning Phase', description: 'Campaigns launched with realistic expectations, monitored daily, and search terms mined from week one.' },
      { title: 'Optimization', description: 'Negatives added, bids and budgets shifted, ad copy iterated, Quality Score improved.' },
      { title: 'Scale & Report', description: 'Winning themes expanded into new campaigns or PMax, with a monthly report and next-month plan.' },
    ],

    deliverables: [
      'Conversion tracking + GA4/GTM verification',
      'Keyword research and match type plan',
      'Negative keyword lists (shared + campaign level)',
      'Responsive Search Ads copy and assets',
      'Merchant Center feed optimization (where relevant)',
      'Performance Max asset groups (where relevant)',
      'Bidding and budget strategy',
      'Weekly search term review notes',
      'Monthly performance report',
    ],

    tools: ['Google Ads', 'Google Merchant Center', 'Google Tag Manager', 'GA4', 'Google Search Console', 'Keyword Planner', 'Looker Studio', 'Google Sheets'],

    faqs: [
      {
        q: 'Google Ads or Meta Ads first?',
        a: 'Google captures existing demand, Meta creates it. If people are already searching for your product, Google Ads usually produces the fastest qualified leads. If your product needs explaining, Meta comes first. Many brands — like Foring Group and DmandFly — run both.',
      },
      {
        q: 'Can you fix an existing Google Ads account?',
        a: 'Yes. Most accounts lose money to broad match without negatives, weak ad-to-keyword relevance and untracked conversions. I audit those first — often a rebuild of structure and negatives is enough to cut cost per lead significantly.',
      },
      {
        q: 'Do you handle Performance Max?',
        a: 'Yes, but with structure: segmented asset groups, brand and non-brand control, feed quality work, and search themes where available. PMax rewards good inputs and hides poor ones, so the feed and tracking matter more than the campaign itself.',
      },
    ],

    cta: {
      heading: 'Is your Google Ads budget going to the right queries?',
      text: 'Book a call and I will review your search terms, negatives and tracking — and show you where spend is leaking.',
    },
  },

  /* ------------------------------------------------------------------ */
  /* 4. SEO                                                             */
  /* ------------------------------------------------------------------ */
  {
    slug: 'seo',
    aliases: ['search-engine-optimization', 'organic-search'],
    name: 'Search Engine Optimization',
    shortName: 'SEO',
    cardTitle: 'Search Engine Optimization',
    cardSubtitle: 'Technical, On-Page & Content SEO',
    icon: FaSearch,
    accent: 'gold',
    order: 4,

    tagline:
      'Organic visibility built on technical foundations, intent-mapped content and Search Console data — not on publishing volume alone.',
    summary:
      'Technical SEO audits, keyword and topic cluster research, on-page optimization, content strategy, internal linking, local SEO and Search Console-led reporting.',

    meta: {
      title: 'SEO Services | Khandokar Riajul Islam',
      description:
        'SEO services by Khandokar Riajul Islam: technical SEO audits, keyword research, topic clusters, on-page optimization, content strategy, internal linking, Core Web Vitals and Search Console reporting.',
    },

    hero: {
      eyebrow: 'Service',
      title: 'Search Engine Optimization',
      subtitle:
        'Grow organic traffic that converts — technical foundations, intent-mapped content and continuous Search Console-led optimization.',
      highlights: [
        { value: '174K', label: 'Organic impressions — Riajul Tech' },
        { value: '684', label: 'Organic clicks' },
        { value: '8.5', label: 'Average position' },
        { value: '1,000+', label: 'Queries tracked' },
      ],
    },

    intro: [
      'SEO fails in two predictable ways: content published without technical foundations, or technically clean sites with content that does not match search intent. Both need to be right.',
      'I start with a technical audit — crawlability, index coverage, speed, Core Web Vitals, duplicate and canonical issues, structured data. Then keyword research is mapped by intent into topic clusters, so each page targets one clear job and pages support each other through internal links.',
      'From there it becomes an operating rhythm: Search Console query data reviewed continuously, rising queries promoted into dedicated pages, decaying pages refreshed, and results reported monthly with impressions, clicks and average position — the same discipline that took Riajul Tech to 174K impressions and an 8.5 average position across 1,000+ tracked queries.',
    ],

    capabilityGroups: [
      {
        title: 'Technical SEO',
        icon: FaTools,
        description: 'The foundation — without it, content cannot rank.',
        items: [
          { name: 'Crawl & Index Audit', detail: 'Crawlability, index coverage, orphan pages and wasted crawl budget identified and fixed.' },
          { name: 'Site Speed & Core Web Vitals', detail: 'LCP, INP and CLS diagnosed with concrete fixes for images, scripts and rendering.' },
          { name: 'Mobile Usability', detail: 'Mobile-first indexing requirements checked across templates and content types.' },
          { name: 'XML Sitemap & robots.txt', detail: 'Sitemap structure and crawl directives configured correctly for the site type.' },
          { name: 'Canonical & Duplicate Handling', detail: 'Duplicate content, parameter URLs and pagination resolved with canonical logic.' },
          { name: 'Structured Data / Schema', detail: 'Organization, Article, Product, FAQ and Breadcrumb schema implemented where relevant.' },
          { name: 'Internal Linking Architecture', detail: 'Silo and cluster linking planned so authority flows to the pages that need to rank.' },
          { name: 'Hreflang (where required)', detail: 'Multi-language and multi-region targeting configured correctly.' },
        ],
      },
      {
        title: 'Keyword & Topic Research',
        icon: FaBullseye,
        description: 'What to target, and what each page is supposed to win.',
        items: [
          { name: 'Keyword Research', detail: 'Queries researched and prioritized by intent, difficulty and commercial value — not volume alone.' },
          { name: 'Search Intent Mapping', detail: 'Every target keyword assigned an intent and a page type: informational, comparison, commercial or transactional.' },
          { name: 'Topic Clusters & Silo Architecture', detail: 'Pillar pages supported by cluster content, grouped so Google can understand topical authority.' },
          { name: 'Competitor Keyword Gap Analysis', detail: 'Queries competitors rank for and you do not, prioritized by effort vs return.' },
          { name: 'Search Console Query Mining', detail: 'Real query data used to find rising terms, cannibalization and near-miss pages worth pushing.' },
        ],
      },
      {
        title: 'On-Page Optimization',
        icon: FaPenNib,
        description: 'Every page optimized for one clear job.',
        items: [
          { name: 'Title & Meta Description Optimization', detail: 'Written for both ranking relevance and click-through rate in the SERP.' },
          { name: 'Heading & Content Structure', detail: 'H-tag hierarchy, sections and semantic coverage aligned to the query.' },
          { name: 'Content Optimization & Refresh', detail: 'Existing pages updated against current SERPs instead of left to decay.' },
          { name: 'URL Structure', detail: 'Clean, stable, keyword-informed URL patterns that survive site changes.' },
          { name: 'Image Optimization', detail: 'Alt text, file naming, compression and format handled for both SEO and speed.' },
        ],
      },
      {
        title: 'Content Strategy',
        icon: FaClipboardList,
        description: 'Publishing with a plan, not a quota.',
        items: [
          { name: 'Content Planning & Roadmap', detail: 'A prioritized publishing roadmap tied to commercial goals, not just traffic.' },
          { name: 'Content Briefs', detail: 'Briefs covering intent, target queries, structure, internal links and entities for each page.' },
          { name: 'Editorial Calendar', detail: 'Content scheduled alongside product launches, campaigns and seasonality.' },
          { name: 'E-E-A-T Signals', detail: 'Authorship, sourcing, trust and expertise signals strengthened on the page and site level.' },
        ],
      },
      {
        title: 'Authority & Local SEO',
        icon: FaGlobe,
        description: 'Off-page and location-based visibility.',
        items: [
          { name: 'Link Building & Digital PR', detail: 'Relevant, editorially earned links pursued through outreach and linkable assets — not spam networks.' },
          { name: 'Local SEO', detail: 'Google Business Profile optimization, local landing pages and NAP consistency.' },
          { name: 'Citation & Directory Cleanup', detail: 'Inconsistent or low-quality listings identified and corrected.' },
        ],
      },
      {
        title: 'Measurement & Reporting',
        icon: FaChartLine,
        description: 'SEO reported in numbers, not adjectives.',
        items: [
          { name: 'Google Search Console Management', detail: 'Impressions, clicks, average position and query-level trends monitored continuously.' },
          { name: 'GA4 Organic Reporting', detail: 'Organic sessions, engagement and conversions separated from paid traffic.' },
          { name: 'Rank & Visibility Tracking', detail: 'Target keyword positions and overall visibility tracked over time.' },
          { name: 'Monthly SEO Reports', detail: 'Performance, work completed, issues fixed and the priorities for next month.' },
        ],
      },
    ],

    process: [
      { title: 'Technical Audit', description: 'Crawl, index, speed, Core Web Vitals, duplicates and structured data reviewed and prioritized into a fix list.' },
      { title: 'Keyword & Intent Research', description: 'Query universe mapped by intent and commercial value, grouped into clusters with a page assigned to each.' },
      { title: 'On-Page Optimization', description: 'Existing high-potential pages optimized first — they are usually the fastest wins available.' },
      { title: 'Content Production', description: 'New pillar and cluster content published from briefs, with internal linking built in from the start.' },
      { title: 'Authority Building', description: 'Digital PR and outreach pursued for the pages that matter most, alongside local SEO where relevant.' },
      { title: 'Monitor, Refresh & Report', description: 'Search Console reviewed continuously; rising queries promoted, decaying pages refreshed, results reported monthly.' },
    ],

    deliverables: [
      'Technical SEO audit with prioritized fix list',
      'Keyword research and intent map',
      'Topic cluster / silo architecture plan',
      'On-page optimization for priority pages',
      'Content briefs and editorial roadmap',
      'Internal linking plan',
      'Schema / structured data implementation list',
      'Search Console + GA4 monitoring',
      'Monthly SEO report',
    ],

    tools: ['Google Search Console', 'GA4', 'Google Keyword Planner', 'Ahrefs / Semrush', 'Screaming Frog', 'PageSpeed Insights', 'Looker Studio', 'Google Sheets'],

    faqs: [
      {
        q: 'How long does SEO take?',
        a: 'Technical fixes and on-page optimization of existing pages can move rankings within weeks. New content typically takes 3–6 months to reach meaningful positions, and competitive commercial queries longer. Riajul Tech reached 174K impressions with an 8.5 average position through consistent iteration, not a single push.',
      },
      {
        q: 'Do you guarantee rankings?',
        a: 'No — nobody honest can, because the algorithm and your competitors are outside my control. What I guarantee is the work: audits completed, optimizations implemented, content published to brief, and reporting in real Search Console numbers every month.',
      },
      {
        q: 'Do you write the content too?',
        a: 'I produce the keyword research, content briefs, structure, on-page optimization and internal linking. Writing is either done by you or your writer from my briefs, or arranged with a writer I work with. Brief-led content consistently outperforms generic content.',
      },
      {
        q: 'SEO or Google Ads?',
        a: 'Ads buy visibility now; SEO builds an asset that keeps paying. If budget allows, they work best together — ad search term data reveals which queries convert, and that becomes your SEO priority list. That is exactly how DmandFly is run.',
      },
    ],

    cta: {
      heading: 'Want to know what is holding your organic traffic back?',
      text: 'Book a call and I will review your site, Search Console data and content — and give you a prioritized fix list.',
    },
  },

  /* ------------------------------------------------------------------ */
  /* 5. ANALYTICS & TRACKING                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: 'analytics',
    aliases: ['ga4', 'tracking', 'data-analytics'],
    name: 'Analytics & Tracking',
    shortName: 'Analytics',
    cardTitle: 'Analytics & Tracking',
    cardSubtitle: 'GA4, GTM & Marketing Measurement',
    icon: FaChartLine,
    accent: 'emerald',
    order: 5,

    tagline:
      'If the tracking is wrong, every marketing decision built on it is wrong. I fix the data first.',
    summary:
      'GA4 and GTM setup, event and conversion tracking, Meta Pixel and Conversions API, UTM strategy, Looker Studio dashboards and monthly reporting across channels.',

    meta: {
      title: 'Analytics & Tracking Services (GA4, GTM) | Khandokar Riajul Islam',
      description:
        'Analytics and tracking by Khandokar Riajul Islam: GA4 setup, Google Tag Manager, event and conversion tracking, Meta Pixel & CAPI, UTM strategy, Looker Studio dashboards and reporting.',
    },

    hero: {
      eyebrow: 'Service',
      title: 'Analytics & Tracking',
      subtitle:
        'GA4, GTM and ad platform tracking set up correctly — so budget decisions are made from data instead of opinion.',
      highlights: [
        { value: 'GA4', label: 'Setup & event tracking' },
        { value: 'GTM', label: 'Server + browser tags' },
        { value: 'Pixel + CAPI', label: 'Meta measurement' },
        { value: '1,000+', label: 'Queries monitored — Riajul Tech' },
      ],
    },

    intro: [
      'Most marketing accounts are not underperforming — they are unmeasured. Conversions fire twice, events never fire at all, UTM tags are inconsistent, and every channel reports a different version of the truth.',
      'I set up measurement as a system: an event tracking plan that defines every action worth counting, GA4 configured with meaningful events and conversions, GTM managing tags and the data layer, Meta Pixel and Conversions API aligned with it, and a UTM naming convention that makes channel reporting comparable.',
      'Then the data is made usable — Looker Studio dashboards and monthly reports that show which channels, campaigns and creative actually produced results, so budget moves toward what works.',
    ],

    capabilityGroups: [
      {
        title: 'Tracking Implementation',
        icon: FaCode,
        description: 'Tags, events and conversions configured properly.',
        items: [
          { name: 'GA4 Property Setup', detail: 'Property, data streams, internal traffic filters, cross-domain and session configuration handled correctly.' },
          { name: 'Google Tag Manager', detail: 'Container, tags, triggers and variables managed centrally so tracking survives site redesigns.' },
          { name: 'Event Tracking Plan', detail: 'A written plan defining every meaningful event, its parameters and its business meaning — before any tag is built.' },
          { name: 'Conversion / Key Event Setup', detail: 'Purchases, leads, form submissions, calls and messages marked as conversions with correct values.' },
          { name: 'Meta Pixel & Conversions API', detail: 'Browser and server-side events configured and deduplicated against GA4.' },
          { name: 'Google Ads Conversion Tracking', detail: 'Ad conversions linked and validated so bidding strategies learn from real data.' },
          { name: 'Data Layer Design', detail: 'A structured data layer so ecommerce and custom events pass reliable values.' },
          { name: 'Cross-Domain & Subdomain Tracking', detail: 'Sessions kept intact across domains, subdomains and checkout providers.' },
        ],
      },
      {
        title: 'Data Structure & Hygiene',
        icon: FaDatabase,
        description: 'Consistency is what makes reporting possible.',
        items: [
          { name: 'UTM Strategy & Naming Conventions', detail: 'A documented convention for source, medium, campaign and content so channel data stays comparable.' },
          { name: 'Custom Dimensions & Parameters', detail: 'Business-specific parameters captured and surfaced in reporting.' },
          { name: 'Funnel Definition', detail: 'Funnel steps defined explicitly so drop-off can be measured instead of assumed.' },
          { name: 'Data Quality Audits', detail: 'Duplicate, missing or inflated events found and fixed — usually the biggest hidden problem in an account.' },
          { name: 'Consent & Privacy Handling', detail: 'Consent mode and tag firing configured to respect user choice without losing unnecessary signal.' },
        ],
      },
      {
        title: 'Analysis',
        icon: FaChartPie,
        description: 'Turning tracked data into decisions.',
        items: [
          { name: 'Channel Performance Analysis', detail: 'Organic, paid social, paid search, direct and referral compared on cost and contribution.' },
          { name: 'Funnel & Drop-off Analysis', detail: 'Where users abandon the journey identified, so CRO work targets the real leak.' },
          { name: 'Campaign & Creative Analysis', detail: 'Performance broken down to campaign, ad set and creative level to guide budget shifts.' },
          { name: 'Search Console Analysis', detail: 'Impressions, clicks, average position and query trends used to direct SEO priorities.' },
          { name: 'Attribution Review', detail: 'Attribution models compared so credit is not given to whichever channel reported last.' },
          { name: 'Anomaly Detection', detail: 'Sudden traffic or conversion changes spotted early — tracking breaks, not just performance dips.' },
        ],
      },
      {
        title: 'Dashboards & Reporting',
        icon: FaFileInvoiceDollar,
        description: 'Reporting you will actually read.',
        items: [
          { name: 'Looker Studio Dashboards', detail: 'Live dashboards combining GA4, Search Console and ad platform data in one view.' },
          { name: 'KPI Definition', detail: 'Agreement on the small number of metrics that matter for your business, and how they are calculated.' },
          { name: 'Monthly Performance Reports', detail: 'Cross-channel results, insights and recommended actions delivered monthly.' },
          { name: 'Automated Reporting', detail: 'Scheduled reports so nobody has to build the same spreadsheet twice.' },
        ],
      },
    ],

    process: [
      { title: 'Tracking Audit', description: 'Existing tags, events, conversions and UTMs reviewed; duplicate and missing data identified.' },
      { title: 'Event Tracking Plan', description: 'A written plan of every event, parameter and conversion that matters to your business.' },
      { title: 'Implementation', description: 'GA4, GTM, Pixel/CAPI and Google Ads tracking built and deployed from that plan.' },
      { title: 'Validation', description: 'Every event tested with DebugView, Tag Assistant and Test Events — including values and deduplication.' },
      { title: 'Dashboards', description: 'Looker Studio dashboards built so the data is visible without logging into five platforms.' },
      { title: 'Ongoing Analysis', description: 'Monthly reporting plus continuous monitoring for anomalies and new optimization opportunities.' },
    ],

    deliverables: [
      'Tracking audit document',
      'Event tracking plan',
      'GA4 property + GTM container configuration',
      'Meta Pixel & Conversions API setup',
      'Google Ads conversion tracking validation',
      'UTM naming convention document',
      'Looker Studio dashboard',
      'Monthly cross-channel performance report',
    ],

    tools: ['GA4', 'Google Tag Manager', 'Looker Studio', 'Meta Events Manager', 'Google Search Console', 'Google Ads', 'Tag Assistant / DebugView', 'Google Sheets'],

    faqs: [
      {
        q: 'Why does my ad platform report more conversions than GA4?',
        a: 'Because they measure differently — ad platforms use longer attribution windows, cross-device modelling and click plus view-through credit, while GA4 records what it can directly observe. Neither is "wrong"; you need both configured correctly and a documented rule for which number drives which decision.',
      },
      {
        q: 'Is tracking setup a one-time job?',
        a: 'Implementation is, but validation is not. Every site redesign, new landing page or checkout change can silently break events, so I re-validate after changes and monitor for anomalies.',
      },
      {
        q: 'Do I need analytics if my budget is small?',
        a: 'Especially then. A small budget cannot afford spend going to untracked or misattributed campaigns — the difference between $0.05 and $0.50 per result is only visible with correct tracking.',
      },
    ],

    cta: {
      heading: 'Do you actually trust your marketing numbers?',
      text: 'Book a call and I will audit your GA4, GTM and pixel setup — and show you what your reports are missing.',
    },
  },

  /* ------------------------------------------------------------------ */
  /* 6. CONVERSION RATE OPTIMIZATION                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: 'cro',
    aliases: ['conversion-rate-optimization', 'conversion-optimization', 'landing-page'],
    name: 'Conversion Rate Optimization',
    shortName: 'CRO',
    cardTitle: 'Conversion Rate Optimization',
    cardSubtitle: 'Landing Pages, Funnels & A/B Testing',
    icon: FaMousePointer,
    accent: 'gold',
    order: 6,

    tagline:
      'More revenue from the traffic you already pay for — by removing the friction that stops people converting.',
    summary:
      'Landing page and funnel audits, heatmap and session analysis, hypothesis-driven A/B testing, form and CTA optimization, and conversion reporting tied to GA4.',

    meta: {
      title: 'Conversion Rate Optimization (CRO) Services | Khandokar Riajul Islam',
      description:
        'CRO by Khandokar Riajul Islam: landing page audits, funnel analysis, heatmap and session recording review, A/B testing, form and CTA optimization and conversion reporting.',
    },

    hero: {
      eyebrow: 'Service',
      title: 'Conversion Rate Optimization',
      subtitle:
        'Turn more of your existing traffic into leads and sales — through audits, testing and friction removal.',
      highlights: [
        { value: '344', label: 'Sales in first 7 days — Salient Shop' },
        { value: '2.28%', label: 'CTR with matched landing offer' },
        { value: '$0.98', label: 'Cost per result held while scaling' },
        { value: '860+', label: 'Conversations from low-friction CTAs — ZR Fashion' },
      ],
    },

    intro: [
      'Raising ad budgets is the expensive way to grow. Improving what happens after the click is the efficient way — the same traffic, the same spend, more conversions.',
      'I start with evidence: landing page and funnel audits, GA4 funnel drop-off data, heatmap and session recordings, and the match between ad promise and page reality. Most losses come from a handful of predictable problems — unclear offer, message mismatch, too many form fields, slow load, weak trust signals, or a CTA that asks for more commitment than the traffic is ready to give.',
      'Each problem becomes a prioritized hypothesis, tested with A/B experiments where traffic allows, or implemented directly where the evidence is already conclusive. Salient Shop is the pattern in practice: 344 sales in the first 7 days came from changing the offer, page and creative inside the same week, not from spending more.',
    ],

    capabilityGroups: [
      {
        title: 'Audit & Research',
        icon: FaEye,
        description: 'Evidence before opinions.',
        items: [
          { name: 'Landing Page Audit', detail: 'Offer clarity, headline, above-the-fold message, proof, CTA and friction reviewed point by point.' },
          { name: 'Funnel Analysis', detail: 'Every step from click to conversion mapped in GA4, with drop-off quantified at each stage.' },
          { name: 'Heatmap & Session Recording Review', detail: 'Real user behaviour examined for scroll depth, rage clicks, dead clicks and hesitation.' },
          { name: 'Ad-to-Page Message Match', detail: 'The promise in the ad compared with what the page actually says — the most common conversion killer.' },
          { name: 'Form Analysis', detail: 'Field count, labels, validation errors and abandonment reviewed against completion rate.' },
          { name: 'Page Speed & UX Review', detail: 'Load performance and mobile usability checked, since speed losses are conversion losses.' },
          { name: 'Competitor Conversion Review', detail: 'How competing offers structure pages, proof and CTAs — and what your audience expects.' },
        ],
      },
      {
        title: 'Hypothesis & Testing',
        icon: FaFlask,
        description: 'Changes justified by data, not preference.',
        items: [
          { name: 'Hypothesis Prioritization', detail: 'Opportunities scored by potential impact, confidence and effort so testing starts where it pays most.' },
          { name: 'A/B Testing', detail: 'One variable changed per test, with sample size and runtime planned before launch.' },
          { name: 'Test Planning & Documentation', detail: 'Every test documented with hypothesis, change, result and conclusion — building an institutional learning log.' },
          { name: 'Headline & Copy Testing', detail: 'Value proposition, subheadline and CTA copy tested against each other.' },
          { name: 'Offer & Pricing Tests', detail: 'Bundles, guarantees, discounts and payment framing tested where the business allows.' },
          { name: 'Layout & Section Order Tests', detail: 'Proof, features and objection-handling reordered based on where users actually drop.' },
        ],
      },
      {
        title: 'Implementation',
        icon: FaCogs,
        description: 'Fixes applied where evidence is already conclusive.',
        items: [
          { name: 'Landing Page Structure', detail: 'Page restructured for one clear next step: headline, offer, proof, objection handling, CTA.' },
          { name: 'Form Field Optimization', detail: 'Fields reduced to what is genuinely necessary, with better labels and inline validation.' },
          { name: 'CTA Optimization', detail: 'CTA wording, placement, contrast and commitment level matched to traffic temperature.' },
          { name: 'Trust & Social Proof Placement', detail: 'Reviews, guarantees, security signals and proof positioned where hesitation actually happens.' },
          { name: 'Mobile Conversion Optimization', detail: 'Mobile experience optimized separately — it is usually the majority of paid traffic.' },
          { name: 'Checkout Friction Removal', detail: 'Steps, surprises and distractions removed from the path to purchase.' },
        ],
      },
      {
        title: 'Measurement',
        icon: FaChartLine,
        description: 'Every change judged on revenue, not aesthetics.',
        items: [
          { name: 'Conversion Rate Tracking', detail: 'GA4 conversion events and funnels configured so rate changes are measurable per page and channel.' },
          { name: 'Revenue Per Visitor / Value Tracking', detail: 'Value-based measurement so a "worse" conversion rate that earns more is recognized as a win.' },
          { name: 'Test Reporting', detail: 'Results reported with statistical context and a clear decision: ship, iterate or discard.' },
          { name: 'Continuous Optimization Loop', detail: 'A rolling queue of hypotheses so improvement continues after the initial audit.' },
        ],
      },
    ],

    process: [
      { title: 'Data Collection', description: 'GA4 funnels, heatmaps, session recordings, ad data and Search Console reviewed to find where value is lost.' },
      { title: 'Audit & Opportunity List', description: 'Findings documented and turned into a prioritized list of conversion opportunities.' },
      { title: 'Hypothesis Development', description: 'Each opportunity written as a testable hypothesis with expected impact and effort scored.' },
      { title: 'Implementation & Testing', description: 'High-confidence fixes shipped directly; uncertain ones tested as A/B experiments with planned runtime.' },
      { title: 'Analysis & Decision', description: 'Results analysed, winners shipped, losers documented so the same mistake is never repeated.' },
      { title: 'Iterate', description: 'The queue is refreshed monthly — CRO is a loop, not a project with an end date.' },
    ],

    deliverables: [
      'Landing page & funnel audit document',
      'Prioritized conversion opportunity list',
      'Hypothesis and test plan',
      'A/B test setup and documentation',
      'Copy, CTA and form recommendations',
      'GA4 conversion and funnel configuration',
      'Test results report with decisions',
      'Rolling monthly optimization queue',
    ],

    tools: ['GA4', 'Google Tag Manager', 'Meta Ads Manager', 'Hotjar / Microsoft Clarity', 'Looker Studio', 'Figma', 'Google Optimize alternatives (A/B platforms)', 'Google Sheets'],

    faqs: [
      {
        q: 'How much traffic do I need for A/B testing?',
        a: 'Roughly a few hundred conversions per month per variant for a reliable test. Below that, we run high-confidence changes based on audit evidence, session recordings and funnel data instead of formal split tests — which is often the better use of a small budget.',
      },
      {
        q: 'Will you redesign my landing page?',
        a: 'I provide the structure, copy direction, CTA strategy and specific change list, and work with your developer or designer to implement. Where no team exists, I can arrange implementation. The audit and the hypothesis are always mine.',
      },
      {
        q: 'CRO or more ad budget?',
        a: 'CRO first, usually. If your page converts 1% instead of 2%, doubling the budget doubles the waste. Fix the conversion rate, then scale spend into a page that can absorb it.',
      },
      {
        q: 'How is success measured?',
        a: 'On conversion rate, cost per result and revenue per visitor — reported before and after each change. Aesthetic preference is never accepted as evidence, mine or yours.',
      },
    ],

    cta: {
      heading: 'Paying for traffic that does not convert?',
      text: 'Book a call and I will audit your landing page and funnel — you will get a prioritized list of what to fix first.',
    },
  },
]

/* -------------------------------------------------------------------- */
/* Helpers                                                              */
/* -------------------------------------------------------------------- */

export const getService = (slugOrAlias) =>
  services.find(
    (s) => s.slug === slugOrAlias || (s.aliases || []).includes(slugOrAlias)
  )

/** Canonical slug for a possibly-aliased URL segment (e.g. "smm" -> "social-media-marketing"). */
export const canonicalServiceSlug = (slugOrAlias) => {
  const s = getService(slugOrAlias)
  return s ? s.slug : null
}

export const servicesForNav = services.map((s) => ({ slug: s.slug, name: s.name, shortName: s.shortName }))

export default services

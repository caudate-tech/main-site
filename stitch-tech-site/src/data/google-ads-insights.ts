/**
 * Structured data from Insights G Ads Digital Marketing.md
 * and Google Ads & Performance Marketing Service.txt.
 *
 * Single source of truth for Google Ads depth on the paid-media page
 * and the Targeted Impulse pillar in digital-marketing-products.ts.
 */

export type PlaybookPhase = {
  number: number;
  title: string;
  steps: string[];
};

export type GoogleAdsChannel = {
  name: string;
  description: string;
  icon: string;
};

export type BiddingStrategy = {
  name: string;
  description: string;
};

export type KPI = {
  abbr: string;
  label: string;
};

export type OnboardingStep = {
  step: number;
  title: string;
  icon: string;
  items: string[];
};

export type ComplianceGroup = {
  heading: string;
  icon: string;
  items: string[];
};

export type Deliverable = {
  label: string;
  icon: string;
};

export type PricingTeaser = {
  startingFrom: string;
  label: string;
  note: string;
};

/* ── Service lines ── */

export const googleAdsServiceLines = [
  'PPC Management',
  'Google Ads Management',
  'Performance Marketing',
  'E-Commerce Ads (Shopping + PMax)',
  'Lead Generation Campaigns',
  'A/B Testing & Optimization',
  'Smart Bidding Strategies',
  'Keyword & Audience Planning',
  'Budget & ROI Management',
  'Funnel Strategy & Performance Planning',
  'Competitor Research',
  'Account Setup, Audit & Scaling',
];

/* ── Why choose Caudate ── */

export const whyChooseUs = [
  { title: 'Data-Driven Strategy', icon: 'query_stats' },
  { title: 'ROI-Focused Execution', icon: 'paid' },
  { title: 'Advanced Automation (Smart Bidding)', icon: 'smart_toy' },
  { title: 'Full-Funnel Expertise', icon: 'conversion_path' },
  { title: '100% Google Ads Policy Compliant', icon: 'verified' },
];

/* ── Client onboarding ── */

export const onboardingSteps: OnboardingStep[] = [
  {
    step: 1,
    title: 'Requirement Gathering',
    icon: 'assignment',
    items: [
      'Business understanding & model analysis',
      'Target audience identification',
      'Define KPIs (Leads, Sales, ROAS, CPA)',
      'Competitor overview',
    ],
  },
  {
    step: 2,
    title: 'Account Access',
    icon: 'key',
    items: [
      'Google Ads access (Admin in initial stage)',
      'GA4 & Tag Manager access',
      'Website backend (optional)',
    ],
  },
];

/* ── Compliance & risk ── */

export const complianceChecklist: ComplianceGroup[] = [
  {
    heading: 'Required Elements',
    icon: 'checklist',
    items: [
      'Clear business identity (About Us, branding)',
      'Contact details (Email / Phone)',
      'Privacy Policy',
      'Terms & Conditions',
      'Secure website (HTTPS)',
      'Mobile-friendly & fast loading',
    ],
  },
  {
    heading: 'Compliance Checks',
    icon: 'policy',
    items: [
      'No misleading claims',
      'No fake offers or clickbait',
      'No restricted or unsafe content',
      'Landing page matches ad content',
    ],
  },
];

export const riskManagement = [
  { label: 'Policy violations', icon: 'gpp_bad' },
  { label: 'Conversion tracking errors', icon: 'bug_report' },
  { label: 'Budget overspending', icon: 'money_off' },
  { label: 'Low-quality traffic', icon: 'block' },
  { label: 'IP exclusions', icon: 'vpn_lock' },
  { label: 'Bot traffic', icon: 'smart_toy' },
];

/* ── Deliverables ── */

export const deliverables: Deliverable[] = [
  { label: 'Fully structured ad account', icon: 'account_tree' },
  { label: 'Live optimized campaigns', icon: 'campaign' },
  { label: 'Performance reports', icon: 'assessment' },
  { label: 'Strategy roadmap', icon: 'map' },
  { label: 'Continuous optimization', icon: 'autorenew' },
];

/* ── Pricing teaser ── */

export const pricingTeaser: PricingTeaser = {
  startingFrom: '$300',
  label: 'Setup + management',
  note: 'Based on ad spend and account complexity',
};

/* ── 10-phase playbook ── */

export const playbookPhases: PlaybookPhase[] = [
  {
    number: 1,
    title: 'Discovery & Business Understanding',
    steps: [
      'Business model analysis (E-Commerce, Lead Gen, Service-Based)',
      'Define KPIs — leads, sales, ROAS, CPA, CTR',
      'Target audience identification',
      'Competitor analysis',
      'Funnel mapping (Awareness → Consideration → Conversion)',
    ],
  },
  {
    number: 2,
    title: 'Market Research & Strategy Planning',
    steps: [
      'Keyword research & planning',
      'Audience segmentation (Custom, In-Market, Remarketing)',
      'Competitor benchmarking',
      'Budget allocation strategy',
      'Channel selection — Search, Display, YouTube, Shopping, PMax, Demand Gen',
    ],
  },
  {
    number: 3,
    title: 'Account Setup & Structure',
    steps: [
      'Google Ads account creation or audit',
      'Conversion tracking setup (GA4 + GTM)',
      'Campaign structure design by funnel stage',
      'Ad group segmentation',
      'Keyword match type strategy',
      'Negative keyword setup',
      'Performance Planning',
      'Budget Planning',
      'Content Suitability review',
      'Brand, Content & IP Exclusions',
    ],
  },
  {
    number: 4,
    title: 'Campaign Creation & Execution',
    steps: [
      'Search Campaigns — high-intent traffic',
      'Display Campaigns — brand awareness & remarketing',
      'Shopping Campaigns — e-commerce growth',
      'Performance Max — full-funnel automation',
      'Demand Gen Campaigns — YouTube + Discovery',
      'High-converting ad copies with A/B testing',
      'Creative strategy — headlines, descriptions, CTAs',
      'AI Max (Beta) — next-gen campaign automation',
      'Smart and Manual Bidding selection',
    ],
  },
  {
    number: 5,
    title: 'Smart Bidding & Budget Optimization',
    steps: [
      'Maximize Conversions',
      'Target CPA',
      'Target ROAS',
      'Enhanced CPC',
      'Manual CPC for granular control',
      'Maximize Clicks for traffic goals',
      'Daily & monthly budget pacing',
      'Performance-based budget reallocation',
      'Scaling high-performing campaigns',
    ],
  },
  {
    number: 6,
    title: 'Conversion Tracking & ROI Measurement',
    steps: [
      'Google Tag Manager integration',
      'GA4 event tracking',
      'Enhanced Conversions for better ROI and ROAS',
      'Conversion APIs (if applicable)',
      'CPA, ROAS, conversion rate, and CTR measurement',
    ],
  },
  {
    number: 7,
    title: 'Continuous Optimization',
    steps: [
      'Bid adjustments (daily / weekly)',
      'Keyword optimization — add, remove, negate',
      'Audience refinement',
      'Ad copy testing (A/B)',
      'Device, location, and time-of-day optimization',
    ],
  },
  {
    number: 8,
    title: 'Performance Marketing & Scaling',
    steps: [
      'Identify winning campaigns',
      'Increase budget strategically',
      'Expand keyword targeting',
      'Launch new audience segments',
      'Cross-channel expansion',
    ],
  },
  {
    number: 9,
    title: 'Reporting & Insights',
    steps: [
      'Weekly / monthly performance reports',
      'Campaign insights & trends',
      'ROI analysis',
      'Actionable recommendations',
    ],
  },
  {
    number: 10,
    title: 'Advanced Services',
    steps: [
      'Performance Planning',
      'Reach Planning',
      'Funnel Optimization',
      'Competitor Research',
      'Account Audits & Recovery',
      'Landing Page Suggestions (CRO-focused)',
    ],
  },
];

/* ── Google Ads channels ── */

export const googleAdsChannels: GoogleAdsChannel[] = [
  {
    name: 'Search',
    description: 'High-intent keyword targeting on Google Search.',
    icon: 'search',
  },
  {
    name: 'Display',
    description: 'Brand awareness and remarketing across the Google Display Network.',
    icon: 'web_stories',
  },
  {
    name: 'YouTube',
    description: 'Video ads for storytelling and consideration-stage engagement.',
    icon: 'smart_display',
  },
  {
    name: 'Shopping',
    description: 'Product-feed campaigns that drive e-commerce revenue.',
    icon: 'shopping_bag',
  },
  {
    name: 'Performance Max',
    description: 'Full-funnel AI-driven campaigns across all Google surfaces.',
    icon: 'rocket_launch',
  },
  {
    name: 'Demand Gen',
    description: 'Discovery + YouTube placements for demand creation.',
    icon: 'trending_up',
  },
];

/* ── Bidding strategies ── */

export const biddingStrategies: BiddingStrategy[] = [
  { name: 'Maximize Conversions', description: 'Get the most conversions within your budget.' },
  { name: 'Target CPA', description: 'Optimize bids to hit a specific cost-per-acquisition.' },
  { name: 'Target ROAS', description: 'Hit a target return on ad spend automatically.' },
  { name: 'Enhanced CPC', description: 'Adjust manual bids to increase conversion likelihood.' },
  { name: 'Manual CPC', description: 'Full control over individual keyword bids.' },
  { name: 'Maximize Clicks', description: 'Drive maximum traffic within your daily budget.' },
];

/* ── KPIs we measure ── */

export const kpis: KPI[] = [
  { abbr: 'CPA', label: 'Cost Per Acquisition' },
  { abbr: 'ROAS', label: 'Return On Ad Spend' },
  { abbr: 'CVR', label: 'Conversion Rate' },
  { abbr: 'CTR', label: 'Click-Through Rate' },
];

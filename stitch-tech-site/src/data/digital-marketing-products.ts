/** Combined digital marketing suite — aligned with digital-marketing-products.md */

export type DigitalMarketingBullet = {
  title: string;
  description: string;
};

export type DigitalMarketingPillar = {
  id: string;
  name: string;
  bracket: string;
  tagline: string;
  icon: string;
  /** Optional deep-dive page on the site */
  exploreHref?: string;
  exploreLabel?: string;
  bullets: DigitalMarketingBullet[];
};

export const digitalMarketingIntro = {
  eyebrow: 'Combined Digital Marketing Suite',
  description:
    'Six integrated practice areas—from strategy and generative search to paid media, web experience, and lifecycle automation.',
};

export const digitalMarketingPillars: DigitalMarketingPillar[] = [
  {
    id: 'dm-strategic-core',
    name: 'Caudate Strategic Core',
    bracket: 'Consulting & Planning',
    tagline: 'The logic center for your marketing efforts.',
    icon: 'insights',
    exploreHref: '/services/consulting',
    exploreLabel: 'Consulting',
    bullets: [
      {
        title: 'The Growth Roadmap',
        description:
          'A data-backed, 12-month execution plan tailored to tech enterprises.',
      },
      {
        title: 'Competitive Intelligence',
        description:
          'Deep-dive analysis of your market rivals to find gaps in their positioning.',
      },
      {
        title: 'Messaging & Persona Development',
        description:
          'Defining the exact voice that resonates with technical buyers and C-suite decision-makers.',
      },
    ],
  },
  {
    id: 'dm-search-authority',
    name: 'Caudate Search Authority',
    bracket: 'SEO & AI Optimization',
    tagline:
      'Ensuring your brand is the first "Signal" found by humans and machines.',
    icon: 'travel_explore',
    exploreHref: '/services/seo',
    exploreLabel: 'SEO',
    bullets: [
      {
        title: 'Caudate Generative Search (GEO)',
        description:
          'The next evolution of SEO. We optimize your content so AI engines (ChatGPT, Claude, Perplexity) recommend your brand.',
      },
      {
        title: 'Technical & Global SEO',
        description:
          'Heavy-duty optimization for complex B2B sites to dominate high-intent keywords like "SAP Support" or "Cloud Migration."',
      },
      {
        title: 'Caudate Proximity (Local SEO)',
        description:
          'Dominating regional tech hubs so your offices and local services stay highly visible.',
      },
      {
        title: 'Search Analytics & Attribution',
        description:
          'Advanced tracking to see exactly which keywords drive actual revenue.',
      },
    ],
  },
  {
    id: 'dm-resonance',
    name: 'Caudate Resonance',
    bracket: 'Content & Social Pulse',
    tagline:
      'Building brand authority through consistent, high-value communication.',
    icon: 'forum',
    exploreHref: '/services/content-strategy',
    exploreLabel: 'Content strategy',
    bullets: [
      {
        title: 'Synaptic Content Marketing',
        description:
          'Whitepapers, technical blogs, and case studies that solve complex problems for your audience.',
      },
      {
        title: 'Caudate Social Pulse',
        description:
          'Fully managed social (LinkedIn, X, etc.) so your brand stays top of mind.',
      },
      {
        title: 'Video Storytelling',
        description:
          'High-production video that simplifies complex technical products for faster buyer understanding.',
      },
    ],
  },
  {
    id: 'dm-targeted-impulse',
    name: 'Caudate Targeted Impulse',
    bracket: 'Paid Media & Lead Gen',
    tagline: 'Driving immediate traffic through high-precision stimulation.',
    icon: 'ads_click',
    exploreHref: '/services/paid-media',
    exploreLabel: 'Paid media',
    bullets: [
      {
        title: 'Caudate Precision (ABM)',
        description:
          'Account-Based Marketing for your must-win accounts with personalized ads and content.',
      },
      {
        title: 'B2B Paid Search (PPC)',
        description:
          'High-spend Google Ads with a focus on cost-per-lead and lead quality.',
      },
      {
        title: 'Paid Social Advertising',
        description:
          'Strategic placements on LinkedIn and industry platforms to reach the right job titles.',
      },
      {
        title: 'Google Ads — Full-Channel Playbook',
        description:
          'Search, Display, YouTube, Shopping, PMax, and Demand Gen — with Smart Bidding, GA4/GTM tracking, and a 10-phase execution framework from discovery through scaling.',
      },
      {
        title: 'E-Commerce & Lead Gen Campaigns',
        description:
          'Shopping + Performance Max for revenue, plus dedicated lead-gen funnels with CPA and ROAS measurement.',
      },
    ],
  },
  {
    id: 'dm-interface',
    name: 'Caudate Interface',
    bracket: 'Web, UX & Commerce',
    tagline: 'Your primary digital touchpoint for customer conversion.',
    icon: 'web',
    exploreHref: '/contact',
    exploreLabel: 'Discuss web & UX',
    bullets: [
      {
        title: 'Conversion-Optimized Web Design',
        description:
          'Enterprise-grade sites that act as 24/7 lead generation machines.',
      },
      {
        title: 'Caudate Commerce',
        description:
          'Specialized UX/UI and development for B2B eCommerce and digital transactions.',
      },
      {
        title: 'Performance Hosting',
        description:
          'Scalable, secure, fast hosting for high-stakes enterprise traffic.',
      },
    ],
  },
  {
    id: 'dm-lifecycle-connect',
    name: 'Caudate Lifecycle Connect',
    bracket: 'Automation & Nurture',
    tagline: 'Maintaining the relationship loop from lead to loyalty.',
    icon: 'autorenew',
    exploreHref: '/contact',
    exploreLabel: 'Automation & nurture',
    bullets: [
      {
        title: 'Marketing Automation',
        description:
          'Complex workflows in HubSpot, Marketo, or Pardot so no lead is forgotten.',
      },
      {
        title: 'Sales Enablement',
        description:
          'Templates and data insights so your team closes deals faster.',
      },
      {
        title: 'Email Marketing',
        description:
          'Segmented campaigns that nurture prospects through long B2B cycles.',
      },
    ],
  },
];

/** Service portfolio aligned with SAP-Products.md */

export type PortfolioBullet = {
  title: string;
  description: string;
};

export type PortfolioOffering = {
  name: string;
  badge?: string;
  description: string;
  bullets: PortfolioBullet[];
};

export type PortfolioPillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  offerings: PortfolioOffering[];
};

export type PlatformRow = {
  category: string;
  coverage: string;
};

export const portfolioIntro = {
  eyebrow: 'Caudate Technologies',
  title: 'The Nervous System of Enterprise Efficiency and Growth',
  body:
    'Caudate Technologies provides a unified approach to business health. We maintain the "internal nervous system" of your company, your ERP and IT infrastructure, while optimizing the "external signals" that drive your market growth.',
};

export const portfolioPillars: PortfolioPillar[] = [
  {
    id: 'enterprise-sap',
    title: 'Enterprise Infrastructure & SAP Support',
    subtitle: 'High-performance alternatives to traditional vendor maintenance.',
    description:
      'Providing high-performance alternatives to traditional vendor maintenance.',
    icon: 'dns',
    offerings: [
      {
        name: 'Caudate Adaptive Support',
        description:
          'Our flagship third-party maintenance service designed to replace or augment standard SAP-provided support at a 60% lower cost.',
        bullets: [
          {
            title: 'Support for Custom Code',
            description:
              "Full break/fix support for the customizations the original vendor won't touch.",
          },
          {
            title: 'Caudate Global Compliance',
            description:
              'Tailored updates for global tax, legal, and regulatory changes, ensuring your system is always audit-ready.',
          },
          {
            title: 'Caudate Sentry (Security)',
            description:
              'Proactive, full-stack security and vulnerability management. We provide virtual patching to protect legacy systems that are no longer supported by the vendor.',
          },
        ],
      },
      {
        name: 'Caudate Managed Services',
        description:
          'Offload the daily technical management of your SAP landscape to our dedicated experts.',
        bullets: [
          {
            title: 'Caudate Watch',
            description:
              '24/7 proactive system monitoring, health checks, and performance logging.',
          },
          {
            title: 'Caudate Foundation',
            description:
              'Full Basis administration, change management, and technical landscape management.',
          },
          {
            title: 'Caudate Talent Bridge',
            description:
              'On-demand staff augmentation, providing senior-level functional and technical experts to fill internal gaps.',
          },
        ],
      },
      {
        name: 'Caudate Expert Solutions',
        description:
          'Strategic project-based services for complex technical transitions.',
        bullets: [
          {
            title: 'Caudate Velocity',
            description:
              'A proven framework for cloud migrations (AWS, Azure, GCP) and SAP modernization (S/4HANA transitions).',
          },
          {
            title: 'Caudate Synapse (Interoperability)',
            description:
              'Ensuring your core ERP stays connected to modern third-party apps, browsers, and API integrations.',
          },
          {
            title: 'Caudate Data Matrix',
            description:
              'Specialized database services for SAP HANA, Sybase, Oracle, and MaxDB.',
          },
        ],
      },
    ],
  },
  {
    id: 'pipeline-growth',
    title: 'Behavioral Intelligence & Pipeline Growth',
    subtitle: 'Engineering rigor for predictable revenue.',
    description:
      'Applying engineering rigor to sales and marketing to drive predictable revenue.',
    icon: 'hub',
    offerings: [
      {
        name: 'Caudate Signal Mapping',
        badge: 'Targeted Messaging Discovery · $6,000/Engagement',
        description:
          'We map the behavioral "nerve centers" of your target audience. We don\'t guess what your buyers want; we find out through data.',
        bullets: [
          {
            title: '3 ICP Profiles',
            description: 'Deep analysis of three Ideal Customer Profiles.',
          },
          {
            title: '4 Messaging Angles per ICP',
            description: 'Developing psychological hooks that drive response.',
          },
          {
            title: 'Caudate Cortex Simulation',
            description:
              'We test your messaging against AI agents that simulate real-world buyer personas before the campaign ever goes live.',
          },
        ],
      },
      {
        name: 'Caudate Momentum',
        badge: 'The Growth Engine · Custom Subscription',
        description:
          'Ongoing pipeline optimization for teams that need continuous growth and market adaptation.',
        bullets: [
          {
            title: 'Signal Monitoring',
            description:
              'We track market shifts and buyer response data to update your messaging in real-time.',
          },
          {
            title: 'ICP Expansion',
            description:
              'Identifying and opening new market segments as your product scales.',
          },
          {
            title: 'A/B Behavior Testing',
            description:
              'Constantly refining outbound tactics to maintain high conversion rates.',
          },
        ],
      },
      {
        name: 'Caudate Neural Pipeline',
        badge: 'The Full System · Enterprise',
        description:
          'A fully managed outbound pipeline system where Caudate Technologies acts as your outsourced growth department.',
        bullets: [
          {
            title: 'End-to-End Management',
            description:
              'We handle the messaging, the deployment, and the optimization.',
          },
          {
            title: 'Behavioral Content & Ads',
            description:
              'Ad creative and content assets tuned specifically to the behavioral signals of your audience.',
          },
          {
            title: 'Conversion Optimization',
            description:
              'Landing pages and sales funnels designed around psychological triggers to maximize ROI.',
          },
        ],
      },
    ],
  },
];

export const platformCoverage: PlatformRow[] = [
  {
    category: 'SAP Core',
    coverage: 'S/4HANA, SAP ECC (6.0 & legacy), SAP R/3, Business Suite.',
  },
  {
    category: 'SAP Applications',
    coverage: 'Ariba, SuccessFactors, Hybris, CRM, SRM, SCM.',
  },
  {
    category: 'Data & Analytics',
    coverage: 'BusinessObjects (BOBJ), HANA, BW, BI.',
  },
  {
    category: 'Cloud & DB',
    coverage: 'AWS, Azure, Google Cloud, Oracle Database, Sybase/ASE.',
  },
];

export const technologyCoverageSection = {
  id: 'technology-coverage',
  title: 'Technology & Platform Coverage',
  description:
    'Caudate Technologies maintains deep expertise across the following platforms:',
  icon: 'layers',
};

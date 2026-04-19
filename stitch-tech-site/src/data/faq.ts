export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    items: [
      {
        id: 'what-you-do',
        question: 'What does Caudate Technologies do?',
        answer:
          'We combine enterprise SAP and infrastructure support with digital growth: strategy, SEO and GEO, paid media including Google Ads, content, web, and lifecycle automation. Most clients engage us for stable ERP operations plus measurable pipeline and revenue outcomes.',
      },
      {
        id: 'how-to-engage',
        question: 'How do we start an engagement?',
        answer:
          'Use the project inquiry form on this site, the Contact page, or WhatsApp if enabled. We review your goals, scope, and timeline, then propose a clear next step such as a discovery call, audit, or fixed-scope sprint.',
      },
      {
        id: 'who-you-serve',
        question: 'Who do you typically work with?',
        answer:
          'B2B and enterprise teams: IT and SAP owners, marketing and demand gen leaders, and executives who need both platform reliability and growth performance. We work with US, EU, and international organizations.',
      },
    ],
  },
  {
    id: 'sap-enterprise',
    title: 'SAP and enterprise',
    items: [
      {
        id: 'third-party-support',
        question: 'Do you offer third-party SAP support?',
        answer:
          'Yes. Our Adaptive Support model covers break/fix, custom code, compliance-oriented updates, and security-focused care, often as an alternative or complement to traditional vendor maintenance.',
      },
      {
        id: 'cloud-migration',
        question: 'Can you help with cloud or modernization?',
        answer:
          'We support planning and execution aligned to your roadmap, including integrations, managed services, and expert projects. Scope is defined per engagement based on your landscape and risk profile.',
      },
      {
        id: 'response-time',
        question: 'What are typical response times for support issues?',
        answer:
          'Severity and contract tier define SLAs. During sales we align on coverage hours, escalation paths, and targets so expectations match your operational needs.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital marketing and growth',
    items: [
      {
        id: 'google-ads',
        question: 'Do you manage Google Ads and Performance Max?',
        answer:
          'Yes. We run Search, Display, YouTube, Shopping, Performance Max, and Demand Gen where appropriate, with conversion tracking, Smart Bidding where it fits, and a documented execution playbook.',
      },
      {
        id: 'seo-geo',
        question: 'What is GEO and how is it different from SEO?',
        answer:
          'GEO (generative engine optimization) focuses on how your brand shows up in AI-assisted answers and citations, alongside classic technical and content SEO. We treat both as part of search authority.',
      },
      {
        id: 'pipeline-programs',
        question: 'What are pipeline and behavioral growth programs?',
        answer:
          'These are structured offerings around ICP clarity, messaging, outbound, and measurement, designed to improve pipeline quality and velocity, often alongside your paid and organic programs.',
      },
    ],
  },
  {
    id: 'process-pricing',
    title: 'Process, timelines, and commercial',
    items: [
      {
        id: 'timeline',
        question: 'How long until we see results?',
        answer:
          'Depends on channel and baseline. Paid media can move quickly once tracking is sound; SEO and authority work compound over months. We set realistic milestones in the proposal phase.',
      },
      {
        id: 'pricing',
        question: 'How is pricing structured?',
        answer:
          'Engagements may be fixed-fee, retainer, or hybrid, based on scope and ad spend. The Paid Media page includes indicative starting points; final fees are confirmed after discovery.',
      },
      {
        id: 'contracts',
        question: 'Do you work under NDAs and MSAs?',
        answer:
          'Yes. Enterprise clients often start with mutual NDAs and master terms. We can adapt to your procurement and security requirements where reasonable.',
      },
    ],
  },
  {
    id: 'privacy-security',
    title: 'Privacy and data',
    items: [
      {
        id: 'personal-data',
        question: 'How do you handle personal data from forms?',
        answer:
          'We use inquiry data to respond and operate our business, as described in our Privacy Policy. We do not sell personal data. You may request access, correction, or deletion subject to applicable law.',
      },
      {
        id: 'where-policy',
        question: 'Where can I read your Privacy Policy?',
        answer:
          'Visit the Privacy Policy page linked in the footer for full details on collection, use, retention, cookies, and your rights.',
      },
    ],
  },
];

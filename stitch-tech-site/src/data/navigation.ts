/** Primary navigation: power menu structure (Solutions / Insights). */

export type NavDropdownItem = {
  label: string;
  sublabel: string;
  href: string;
  icon: string;
};

export const solutionsMenu: NavDropdownItem[] = [
  {
    label: 'Adaptive ERP Support',
    sublabel: 'Third-party SAP support, compliance, and managed services.',
    href: '/services/enterprise-sap',
    icon: 'dns',
  },
  {
    label: 'Behavioral Growth (Neural Pipeline)',
    sublabel: 'Signal mapping, AI-assisted messaging, and outbound systems.',
    href: '/services/pipeline-growth',
    icon: 'hub',
  },
  {
    label: 'Digital Authority (Marketing)',
    sublabel: 'Strategy, GEO, content, paid media, web, and lifecycle automation.',
    href: '/services/digital-suite',
    icon: 'campaign',
  },
];

export const insightsMenu: NavDropdownItem[] = [
  {
    label: 'Program Guides',
    sublabel: 'Consulting, SEO, paid media, and content deep dives.',
    href: '/services/program-guides',
    icon: 'auto_awesome_mosaic',
  },
  {
    label: 'Case Studies',
    sublabel: 'Outcomes and proof from enterprise engagements.',
    href: '/case-studies',
    icon: 'library_books',
  },
];

export const solutionsPaths = solutionsMenu.map((i) => i.href);
export const insightsPaths = insightsMenu.map((i) => i.href);

/** Services overview and category roots, used for “Solutions” active state. */
export const solutionsRelatedPaths = [
  '/services',
  ...solutionsPaths,
];

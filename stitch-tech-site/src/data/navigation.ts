/** Primary navigation: SAP, Digital Marketing, Insights, FAQ. */

export type NavDropdownItem = {
  label: string;
  sublabel: string;
  href: string;
  icon: string;
};

export type NavSolutionGroup = {
  id: 'sap' | 'digital';
  triggerLabel: string;
  items: NavDropdownItem[];
};

export const sapSolutionsMenu: NavDropdownItem[] = [
  {
    label: 'Adaptive ERP Support',
    sublabel: 'Third-party SAP support, compliance, and managed services.',
    href: '/services/enterprise-sap',
    icon: 'dns',
  },
];

export const digitalMarketingSolutionsMenu: NavDropdownItem[] = [
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

export const solutionNavGroups: NavSolutionGroup[] = [
  { id: 'sap', triggerLabel: 'SAP & Enterprise', items: sapSolutionsMenu },
  { id: 'digital', triggerLabel: 'Digital Marketing', items: digitalMarketingSolutionsMenu },
];

/** Combined category hrefs (three pillars). */
export const solutionsPaths = [
  ...sapSolutionsMenu.map((i) => i.href),
  ...digitalMarketingSolutionsMenu.map((i) => i.href),
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

export const insightsPaths = insightsMenu.map((i) => i.href);

export const faqPath = '/faq';

/** Services overview and category roots, used for legacy "solutions" active checks. */
export const solutionsRelatedPaths = ['/services', ...solutionsPaths];

export function isSapNavActive(pathname: string): boolean {
  if (pathname === '/services') return true;
  return pathname === '/services/enterprise-sap' || pathname.startsWith('/services/enterprise-sap/');
}

export function isDigitalMarketingNavActive(pathname: string): boolean {
  if (pathname === '/services') return true;
  if (pathname.startsWith('/services/enterprise-sap')) return false;
  return pathname.startsWith('/services/');
}

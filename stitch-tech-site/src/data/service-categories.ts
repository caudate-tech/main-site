/** Top-level ways to browse the service portfolio */

export type ServiceCategory = {
  id: string;
  /** Dedicated category page */
  href: string;
  /** Anchor on the combined /services page (deep link) */
  overviewHash: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'enterprise-sap',
    href: '/services/enterprise-sap',
    overviewHash: '/services#enterprise-sap',
    label: 'Enterprise & SAP',
    shortLabel: 'SAP',
    description:
      'Third-party support, managed services, expert projects, and platform coverage.',
    icon: 'dns',
  },
  {
    id: 'pipeline-growth',
    href: '/services/pipeline-growth',
    overviewHash: '/services#pipeline-growth',
    label: 'Pipeline & growth',
    shortLabel: 'Pipeline',
    description:
      'Behavioral intelligence, signal mapping, and managed outbound.',
    icon: 'hub',
  },
  {
    id: 'digital-suite',
    href: '/services/digital-suite',
    overviewHash: '/services#digital-suite',
    label: 'Digital marketing',
    shortLabel: 'Digital',
    description:
      'Strategy, GEO & SEO, content, paid media, web, and automation.',
    icon: 'campaign',
  },
  {
    id: 'spotlight-programs',
    href: '/services/program-guides',
    overviewHash: '/services#spotlight-programs',
    label: 'Program guides',
    shortLabel: 'Guides',
    description:
      'Visual overviews for consulting, SEO, paid media, and content.',
    icon: 'auto_awesome_mosaic',
  },
];

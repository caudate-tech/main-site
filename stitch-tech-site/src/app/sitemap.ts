import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://caudate-tech.com';

  // Core pages
  const routes = ['', '/about', '/services', '/case-studies', '/contact', '/faq', '/privacy-policy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Services subpages
  const serviceRoutes = [
    '/services/consulting',
    '/services/content-strategy',
    '/services/digital-marketing',
    '/services/digital-suite',
    '/services/enterprise-sap',
    '/services/paid-media',
    '/services/pipeline-growth',
    '/services/program-guides',
    '/services/seo'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}

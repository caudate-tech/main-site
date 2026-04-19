import Link from 'next/link';
import CategoryPageHeader from '@/components/CategoryPageHeader';
import DigitalMarketingSuite from '@/components/DigitalMarketingSuite';
import { serviceCategories } from '@/data/service-categories';

const category = serviceCategories.find((c) => c.id === 'digital-suite')!;

export default function DigitalSuitePage() {
  return (
    <>
      <CategoryPageHeader
        eyebrow="Combined suite"
        title="Digital marketing suite"
        description={category.description}
        icon={category.icon}
      />
      <div className="max-w-7xl mx-auto px-8 pb-24 space-y-16">
        <p className="text-on-surface-variant max-w-2xl leading-relaxed">
          Six integrated practices: Strategic Core, Search Authority (including GEO), Resonance, Targeted Impulse, Interface, and Lifecycle Connect. Explore detail pages for{' '}
          <Link href="/services/consulting" className="font-bold text-primary hover:underline">
            consulting
          </Link>
          ,{' '}
          <Link href="/services/seo" className="font-bold text-primary hover:underline">
            SEO
          </Link>
          ,{' '}
          <Link href="/services/paid-media" className="font-bold text-primary hover:underline">
            paid media
          </Link>{' '}
          (including our{' '}
          <Link href="/services/paid-media#playbook" className="font-bold text-primary hover:underline">
            10-phase Google Ads playbook
          </Link>
          ), and{' '}
          <Link href="/services/content-strategy" className="font-bold text-primary hover:underline">
            content strategy
          </Link>
          .
        </p>
        <DigitalMarketingSuite />
      </div>
    </>
  );
}

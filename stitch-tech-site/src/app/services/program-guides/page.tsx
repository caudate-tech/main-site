import Link from 'next/link';
import CategoryPageHeader from '@/components/CategoryPageHeader';
import { serviceCategories } from '@/data/service-categories';

const category = serviceCategories.find((c) => c.id === 'spotlight-programs')!;

const guides = [
  {
    title: 'Digital strategy & consulting',
    description:
      'Market analysis, growth roadmaps, and digital infrastructure assessment for enterprise scale.',
    href: '/services/consulting',
    icon: 'architecture',
  },
  {
    title: 'Search engine optimization',
    description:
      'Technical SEO, keyword architecture, and authority building for high-intent B2B terms.',
    href: '/services/seo',
    icon: 'travel_explore',
  },
  {
    title: 'Paid media management',
    description:
      'SEM, social, programmatic, and CRO with a strict ROI lens.',
    href: '/services/paid-media',
    icon: 'ads_click',
  },
  {
    title: 'Content strategy',
    description:
      'Thought leadership, editorial calendars, and conversion-focused copy.',
    href: '/services/content-strategy',
    icon: 'edit_note',
  },
];

export default function ProgramGuidesPage() {
  return (
    <>
      <CategoryPageHeader
        eyebrow="Deep dives"
        title={category.label}
        description={category.description}
        icon={category.icon}
      />
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest p-8 md:p-10 shadow-sm transition-all hover:border-primary/25 hover:shadow-xl"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6">
                {g.icon}
              </span>
              <h2 className="text-2xl font-black text-on-surface group-hover:text-primary transition-colors">
                {g.title}
              </h2>
              <p className="mt-4 text-on-surface-variant leading-relaxed flex-grow">
                {g.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary text-sm">
                Open guide
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/services#spotlight-programs"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View visual spotlights on the full services page
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';
import { serviceCategories } from '@/data/service-categories';

type Props = {
  variant: 'hero' | 'sticky';
};

export default function ServicesCategoryNav({ variant }: Props) {
  if (variant === 'sticky') {
    return (
      <nav
        aria-label="Service categories"
        className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3"
      >
        {serviceCategories.map((c) => (
          <a
            key={c.id}
            href={c.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/25 bg-surface-container-lowest px-3 py-2 md:px-4 text-xs md:text-sm font-bold text-on-surface shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <span className="material-symbols-outlined text-base text-primary hidden sm:inline">
              {c.icon}
            </span>
            <span className="sm:hidden">{c.shortLabel}</span>
            <span className="hidden sm:inline">{c.label}</span>
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="Service categories" className="w-full">
      <p className="text-xs font-bold uppercase tracking-widest text-outline mb-4">
        Browse by category
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceCategories.map((c) => (
          <Link
            key={c.id}
            href={c.href}
            className="group flex flex-col rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <span className="material-symbols-outlined text-3xl text-primary mb-4">
              {c.icon}
            </span>
            <span className="font-black text-lg text-on-surface group-hover:text-primary transition-colors">
              {c.label}
            </span>
            <span className="mt-2 text-sm text-on-surface-variant leading-relaxed flex-grow">
              {c.description}
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
              View section
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

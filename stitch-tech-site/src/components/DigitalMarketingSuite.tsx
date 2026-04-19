import Link from 'next/link';
import {
  digitalMarketingIntro,
  digitalMarketingPillars,
} from '@/data/digital-marketing-products';

export default function DigitalMarketingSuite() {
  return (
    <div className="space-y-16">
      <div className="max-w-3xl">
        <p className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
          {digitalMarketingIntro.eyebrow}
        </p>
        <p className="text-lg text-on-surface-variant mt-4 leading-relaxed">
          {digitalMarketingIntro.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {digitalMarketingPillars.map((pillar, index) => (
          <article
            key={pillar.id}
            id={pillar.id}
            className="scroll-mt-40 bg-surface-container-lowest rounded-[2rem] p-8 md:p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl hover:border-primary/15 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-surface-container-highest rounded-xl shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {pillar.icon}
                </span>
              </div>
              <div>
                <span className="text-xs font-black text-outline uppercase tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-on-surface leading-tight mt-1">
                  {pillar.name}
                </h3>
                <p className="text-sm font-bold text-primary mt-1">{pillar.bracket}</p>
              </div>
            </div>
            <p className="text-on-surface font-medium mb-6">{pillar.tagline}</p>
            <ul className="space-y-4 flex-grow border-t border-outline-variant/15 pt-6">
              {pillar.bullets.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <span className="material-symbols-outlined text-primary-container text-lg shrink-0 mt-0.5">
                    neurology
                  </span>
                  <div>
                    <span className="font-bold text-on-surface text-sm">{b.title}</span>
                    <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {pillar.exploreHref ? (
              <div className="mt-8 pt-6 border-t border-outline-variant/10">
                <Link
                  href={pillar.exploreHref}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  {pillar.exploreLabel ?? 'Learn more'}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

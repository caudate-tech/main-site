import Link from 'next/link';
import {
  platformCoverage,
  portfolioPillars,
  technologyCoverageSection,
} from '@/data/service-portfolio';

type ServicePortfolioProps = {
  /** When set, only these pillars are rendered (order follows data file). */
  pillarIds?: string[];
  /** Show platform coverage block (default: true for full list; true when enterprise pillar is shown alone). */
  showTechnology?: boolean;
};

export default function ServicePortfolio({
  pillarIds,
  showTechnology,
}: ServicePortfolioProps = {}) {
  const pillars = pillarIds?.length
    ? portfolioPillars.filter((p) => pillarIds.includes(p.id))
    : portfolioPillars;

  const includeTechnology =
    showTechnology ??
    (pillarIds === undefined || pillarIds.includes('enterprise-sap'));

  return (
    <div className="space-y-32">
      {pillars.map((pillar) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className="scroll-mt-40 space-y-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-surface-container-highest rounded-2xl">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {pillar.icon}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">
                {pillar.title}
              </h2>
              <p className="text-lg font-semibold text-primary">{pillar.subtitle}</p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 text-center"
            >
              Discuss {pillar.title.split('&')[0].trim()}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillar.offerings.map((offering) => (
              <article
                key={offering.name}
                className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-10 border border-outline-variant/10 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-black text-on-surface mb-3 leading-tight">
                  {offering.name}
                </h3>
                {offering.badge ? (
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                    {offering.badge}
                  </p>
                ) : null}
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                  {offering.description}
                </p>
                <ul className="space-y-4 border-t border-outline-variant/15 pt-6">
                  {offering.bullets.map((b) => (
                    <li key={b.title} className="flex gap-3">
                      <span className="material-symbols-outlined text-primary-container text-lg shrink-0 mt-0.5">
                        bolt
                      </span>
                      <div>
                        <span className="font-bold text-on-surface text-sm">
                          {b.title}
                        </span>
                        <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}

      {includeTechnology ? (
      <section
        id={technologyCoverageSection.id}
        className="scroll-mt-40 bg-surface-container rounded-[2.5rem] p-10 md:p-16 border border-outline-variant/10"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-surface-container-highest rounded-2xl shrink-0">
            <span className="material-symbols-outlined text-primary text-3xl">
              {technologyCoverageSection.icon}
            </span>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface mb-4">
              {technologyCoverageSection.title}
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              {technologyCoverageSection.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platformCoverage.map((row) => (
            <div
              key={row.category}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10"
            >
              <h3 className="font-black text-on-surface mb-2">{row.category}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {row.coverage}
              </p>
            </div>
          ))}
        </div>
      </section>
      ) : null}
    </div>
  );
}

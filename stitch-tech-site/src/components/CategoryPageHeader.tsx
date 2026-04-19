import Link from 'next/link';

type Props = {
  backHref?: string;
  backLabel?: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
};

export default function CategoryPageHeader({
  backHref = '/services',
  backLabel = 'All services',
  eyebrow,
  title,
  description,
  icon,
}: Props) {
  return (
    <header className="max-w-7xl mx-auto px-8 pt-8 md:pt-12 pb-12 md:pb-16">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline mb-10"
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        {backLabel}
      </Link>
      <div className="flex flex-col lg:flex-row lg:items-start gap-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest rounded-2xl shrink-0">
          <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
        </div>
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface leading-[0.95]">
            {title}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">{description}</p>
        </div>
      </div>
    </header>
  );
}

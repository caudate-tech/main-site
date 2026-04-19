'use client';

import { useState } from 'react';
import type { PlaybookPhase } from '@/data/google-ads-insights';

type Props = {
  phases: PlaybookPhase[];
};

export default function PlaybookAccordion({ phases }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {phases.map((phase, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={phase.number}
            className={[
              'rounded-2xl border transition-colors duration-200',
              isOpen
                ? 'border-primary/25 bg-surface-container-lowest shadow-md'
                : 'border-outline-variant/15 bg-surface-container-lowest hover:border-primary/15',
            ].join(' ')}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center gap-4 px-6 py-5 text-left md:px-8"
              aria-expanded={isOpen}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
                {String(phase.number).padStart(2, '0')}
              </span>
              <span className="flex-1 text-base font-bold text-on-surface md:text-lg">
                {phase.title}
              </span>
              <span
                className={[
                  'material-symbols-outlined text-xl text-primary transition-transform duration-200',
                  isOpen ? 'rotate-180' : '',
                ].join(' ')}
              >
                expand_more
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 pt-0 md:px-8 md:pl-[4.5rem]">
                <ul className="space-y-2">
                  {phase.steps.map((step) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary-container">
                        chevron_right
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

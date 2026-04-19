'use client';

import { useState } from 'react';
import type { FaqItem } from '@/data/faq';

type Props = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={[
              'rounded-2xl border transition-colors duration-200',
              isOpen
                ? 'border-primary/25 bg-surface-container-lowest shadow-sm'
                : 'border-outline-variant/15 bg-surface-container-lowest hover:border-primary/10',
            ].join(' ')}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-start gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              aria-expanded={isOpen}
            >
              <span className="flex-1 text-base font-bold text-on-surface md:text-lg leading-snug">
                {item.question}
              </span>
              <span
                className={[
                  'material-symbols-outlined shrink-0 text-primary text-xl transition-transform duration-200',
                  isOpen ? 'rotate-180' : '',
                ].join(' ')}
              >
                expand_more
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 pt-0 md:px-6 md:pb-6">
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-4">
                  {item.answer}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

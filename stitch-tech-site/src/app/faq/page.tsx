import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import { faqCategories } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ | Caudate Technologies',
  description:
    'Answers about SAP support, digital marketing, Google Ads, engagements, timelines, and privacy.',
};

export default function FaqPage() {
  return (
    <>
      <header className="max-w-7xl mx-auto px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-outline-variant/15">
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
          Help center
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mt-4 mb-6 leading-[0.9]">
          Frequently asked questions
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Straight answers on how we work with enterprise SAP, digital growth, and data handling.
          Still unsure?{' '}
          <Link href="/contact" className="font-bold text-primary hover:underline">
            Contact us
          </Link>
          .
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-16 md:py-24 space-y-20">
        {faqCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-32 max-w-3xl"
          >
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-on-surface mb-8">
              {category.title}
            </h2>
            <FaqAccordion items={category.items} />
          </section>
        ))}

        <section className="max-w-3xl rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest p-10 md:p-12">
          <h2 className="text-xl font-black text-on-surface mb-3">Privacy</h2>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            For how we collect, use, and retain personal data, read our{' '}
            <Link href="/privacy-policy" className="font-bold text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-primary to-primary-container px-8 py-4 text-white font-bold shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity"
          >
            Talk to our team
          </Link>
        </section>
      </div>
    </>
  );
}

import Link from 'next/link';
import {
  biddingStrategies,
  complianceChecklist,
  deliverables,
  googleAdsChannels,
  googleAdsServiceLines,
  kpis,
  onboardingSteps,
  playbookPhases,
  pricingTeaser,
  riskManagement,
  whyChooseUs,
} from '@/data/google-ads-insights';
import PlaybookAccordion from '@/components/PlaybookAccordion';

export default function PaidMediaPage() {
  return (
    <>
      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Google Ads &amp; Performance Marketing
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9]">
              Turn Ad Spend into <span className="text-primary">Revenue.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We deliver high-performance, ROI-driven Google Ads campaigns while
              ensuring 100% compliance with Google Ads policies and best
              practices.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {googleAdsServiceLines.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-outline-variant/30 bg-surface-container-lowest px-3.5 py-1.5 text-[11px] font-bold text-on-surface"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Schedule ROI Audit
              </Link>
              <a
                href="#playbook"
                className="px-10 py-5 rounded-2xl border border-outline-variant/30 font-bold text-lg text-primary hover:bg-primary/5 transition-colors"
              >
                Our 10-Phase Playbook
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-primary-container rounded-[3rem] p-12 aspect-[4/3] flex flex-col justify-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
                    Current Managed Spend
                  </div>
                  <div className="text-white text-5xl font-black tracking-tighter">
                    $500M+
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transform translate-x-12">
                  <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
                    Average ROAS
                  </div>
                  <div className="text-white text-5xl font-black tracking-tighter">
                    4.8x
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </header>

      {/* Why Caudate */}
      <section className="bg-surface-container-lowest py-16 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 text-on-surface"
              >
                <span className="material-symbols-outlined text-primary text-2xl">
                  {item.icon}
                </span>
                <span className="font-bold text-sm md:text-base">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Channels */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Google Ads Channels
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
              Full-Funnel Coverage Across Every Google Surface
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We architect campaigns across six Google channels, each mapped to
              a stage in your buyer journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleAdsChannels.map((ch) => (
              <div
                key={ch.name}
                className="group rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-8 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-5 block">
                  {ch.icon}
                </span>
                <h3 className="text-xl font-black text-on-surface mb-2">
                  {ch.name}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {ch.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Google: omnichannel */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="lg:w-1/3 space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                Beyond Google
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                Omnichannel <br />
                <span className="text-primary">Precision.</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We extend the same rigor to every paid touchpoint: social,
                programmatic, and CRO.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Social Advertising',
                  icon: 'share',
                  desc: 'Advanced audience targeting on Meta, LinkedIn, and X.',
                },
                {
                  title: 'Programmatic Display',
                  icon: 'ads_click',
                  desc: 'Automated media buying at enterprise scale.',
                },
                {
                  title: 'Account-Based Marketing',
                  icon: 'groups',
                  desc: 'Personalized ads and content for must-win accounts.',
                },
                {
                  title: 'Conversion Optimization',
                  icon: 'bolt',
                  desc: 'Fine-tuning landing pages to maximize every click.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 bg-surface-container-lowest rounded-[2rem] shadow-sm border border-outline-variant/10 flex items-start gap-6"
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Onboarding */}
      <section
        id="onboarding"
        className="bg-surface-container-low py-24 md:py-32 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Getting Started
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
              Client Onboarding Process
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              A structured two-step kickoff so we can move fast without missing
              anything.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onboardingSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-8 md:p-10 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
                    {String(s.step).padStart(2, '0')}
                  </span>
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {s.icon}
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">
                    {s.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary-container">
                        chevron_right
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Phase Playbook */}
      <section
        id="playbook"
        className="bg-surface py-24 md:py-32 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
              The 10-Phase Performance Playbook
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              From discovery through scaling, every engagement follows a
              repeatable, data-driven framework.
            </p>
          </div>
          <PlaybookAccordion phases={playbookPhases} />
        </div>
      </section>

      {/* Compliance & Risk */}
      <section
        id="compliance"
        className="bg-surface-container-low py-24 md:py-32 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Trust & Compliance
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
              Policy Compliance &amp; Risk Management
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We strictly follow Google Ads policies to avoid account
              suspension, ad disapproval, and budget wastage.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceChecklist.map((group) => (
              <div
                key={group.heading}
                className="rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {group.icon}
                  </span>
                  <h3 className="text-lg font-bold text-on-surface">
                    {group.heading}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed"
                    >
                      <span className="material-symbols-outlined mt-0.5 text-base text-primary">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  shield
                </span>
                <h3 className="text-lg font-bold text-on-surface">
                  Risk Prevention
                </h3>
              </div>
              <ul className="space-y-3">
                {riskManagement.map((r) => (
                  <li
                    key={r.label}
                    className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed"
                  >
                    <span className="material-symbols-outlined mt-0.5 text-base text-red-500">
                      {r.icon}
                    </span>
                    {r.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology: ROAS Blueprint */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-on-surface text-surface rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
                  The ROAS Blueprint.
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-10">
                  Our methodology bypasses vanity metrics. We focus on customer
                  lifetime value and verified revenue attribution.
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      icon: 'smart_toy',
                      text: 'Smart Bidding: tCPA, tROAS, Max Conversions',
                    },
                    {
                      icon: 'monitoring',
                      text: 'GA4 + GTM Conversion Tracking',
                    },
                    {
                      icon: 'verified_user',
                      text: 'Closed-Loop Attribution',
                    },
                    {
                      icon: 'psychology',
                      text: 'Behavioral Audience Mapping',
                    },
                    {
                      icon: 'tune',
                      text: 'Daily / Weekly Optimization Cadence',
                    },
                  ].map((r) => (
                    <li key={r.text} className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary-container">
                        {r.icon}
                      </span>
                      <span className="text-base font-semibold">{r.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
                    Bidding Strategies
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {biddingStrategies.map((b) => (
                      <div
                        key={b.name}
                        className="rounded-2xl bg-white/5 p-5 border border-white/10"
                      >
                        <div className="font-bold text-sm mb-1">{b.name}</div>
                        <div className="text-xs text-white/50 leading-relaxed">
                          {b.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
                    KPIs We Measure
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {kpis.map((k) => (
                      <div
                        key={k.abbr}
                        className="rounded-xl bg-white/5 border border-white/10 px-5 py-3"
                      >
                        <div className="text-lg font-black text-primary-container">
                          {k.abbr}
                        </div>
                        <div className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
                          {k.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              What You Get
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">
              Deliverables
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {deliverables.map((d) => (
              <div
                key={d.label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-6 shadow-sm text-center"
              >
                <span className="material-symbols-outlined text-primary text-3xl">
                  {d.icon}
                </span>
                <span className="text-sm font-bold text-on-surface leading-snug">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-surface py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="rounded-[2.5rem] border border-outline-variant/15 bg-surface-container-lowest p-12 md:p-16 shadow-lg">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
              Transparent Pricing
            </span>
            <p className="mt-6 text-on-surface-variant text-lg">
              {pricingTeaser.label}
            </p>
            <div className="mt-4 text-6xl md:text-7xl font-black tracking-tighter text-on-surface">
              {pricingTeaser.startingFrom}
              <span className="text-2xl font-bold text-on-surface-variant ml-2">
                and up
              </span>
            </div>
            <p className="mt-4 text-on-surface-variant text-sm">
              {pricingTeaser.note}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-2xl bg-gradient-to-r from-primary to-primary-container px-10 py-5 text-lg font-bold text-white shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              Get Your Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-24 px-8 text-center border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-on-surface">
            Stop Burning Budget.
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Get a professional audit of your existing paid media accounts and
            discover where you&apos;re leaking ROI.
          </p>
          <Link
            href="/contact"
            className="px-12 py-5 rounded-full bg-primary text-white font-black text-lg hover:shadow-2xl transition-shadow active:scale-95 inline-block"
          >
            Audit My Accounts
          </Link>
        </div>
      </section>
    </>
  );
}

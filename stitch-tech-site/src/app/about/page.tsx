import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Caudate Tech, founded by father-and-son team Ajay and Suraj Kanwar. Uniting enterprise ERP bedrock with algorithmic growth engineering.',
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppChatUrl();

  return (
    <div className="bg-surface text-on-surface">
      {/* Editorial Header / Hero */}
      <section className="relative px-8 pt-20 pb-24 md:pt-28 md:pb-32 border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary-container/10 border border-primary/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Generational Stewardship &bull; Enterprise Rigor
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-on-surface leading-[0.95] mb-8">
              Enterprise Bedrock.<br />
              <span className="text-primary">Next-Gen Intelligence.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-3xl">
              Enterprise technology cannot afford guesswork, and modern growth cannot afford complacency. 
              Caudate Tech was founded by father and son Ajay and Suraj Kanwar to solve a fundamental enterprise 
              paradox: bridging the battle-tested resilience of mission-critical systems with the algorithmic 
              precision of next-generation data science.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-primary text-on-primary font-bold text-base hover:bg-primary-container transition-all shadow-lg shadow-primary/15 hover:translate-y-[-1px]"
              >
                Initiate a Conversation
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl bg-surface-container-low text-on-surface font-semibold text-base hover:bg-surface-container transition-all border border-outline-variant/20"
              >
                Explore Service Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Thesis: Why Family Stewardship Matters in Enterprise */}
      <section className="py-24 md:py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                The Narrative
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-on-surface leading-tight">
                Why Family Ownership Changes the Enterprise Equation.
              </h2>
              <div className="mt-8 pt-8 border-t border-outline-variant/20 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">verified_user</span>
                  <p className="text-sm text-on-surface-variant leading-snug">
                    <strong className="text-on-surface">Zero Account Churn:</strong> Direct partnership with the founding architects on every engagement.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">account_tree</span>
                  <p className="text-sm text-on-surface-variant leading-snug">
                    <strong className="text-on-surface">Unified Horizon:</strong> The stability of 20-year infrastructure married to bleeding-edge AI models.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8 text-lg text-on-surface-variant leading-relaxed">
              <p className="text-xl text-on-surface font-medium leading-relaxed">
                In enterprise consulting, organizations are accustomed to a predictable cycle: senior partners pitch the engagement, 
                and the actual execution is handed down to an anonymous bench of junior associates who rotate every six months. 
                The client inherits technical debt, lost context, and fragmented accountability.
              </p>
              <p>
                At Caudate Tech, our foundation is intentionally distinct. As a father-and-son partnership, our family name, 
                personal ethics, and long-term reputation stand directly behind every system we configure and every pipeline we deploy. 
                There are no layers of middle management to absorb mistakes or dilute vision.
              </p>
              <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/20 my-8">
                <blockquote className="text-on-surface text-xl font-bold tracking-tight italic">
                  &ldquo;A company operates like a human nervous system. Your core infrastructure and ERP represent the internal spine—it must never break. 
                  Your digital growth and marketing systems represent the external signals—they must be lightning-fast, adaptive, and mathematically tuned. 
                  We built Caudate to govern both.&rdquo;
                </blockquote>
              </div>
              <p>
                Ajay brings decades of mission-critical systems discipline, having stewarded complex enterprise ERP (SAP) landscapes, 
                strict regulatory compliance, and multi-tier architectures where a single hour of downtime carries enterprise-ending cost. 
                Suraj brings next-generation data science, neural pipeline design, and algorithmic performance engineering—transforming raw 
                technical capability into authoritative market presence and measurable revenue.
              </p>
              <p>
                Together, we deliver what bloated consultancies cannot: <strong>the seasoned caution of institutional engineering paired 
                with the high-velocity intelligence of modern digital execution.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership: The 50/50 Principals Grid */}
      <section className="py-24 md:py-32 px-8 bg-surface border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                The Principals
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-on-surface">
                Direct Ownership. No Intermediaries.
              </h2>
            </div>
            <p className="text-sm font-semibold text-on-surface-variant max-w-sm sm:text-right">
              Every client engagement is personally architected and supervised by Ajay and Suraj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {/* Ajay Kanwar */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/40 transition-all duration-300">
              <div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-8 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/team/ajay-headshot.png"
                    alt="Ajay Kanwar, CEO and Co-Founder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-black text-on-surface">Ajay Kanwar</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary-container/15">
                    Co-Founder &amp; CEO
                  </span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-outline mb-6">
                  Enterprise Systems &amp; ERP Architecture
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base mb-6">
                  Over two decades of hands-on leadership across enterprise infrastructure, third-party SAP maintenance, 
                  compliance governance, and mission-critical reliability. Ajay safeguards the operational core of our clients, 
                  ensuring systems are resilient, audit-proof, and liberated from predatory vendor lock-in.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/20">
                <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Core Domains</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface">SAP &amp; ERP Ecosystems</span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface">Compliance &amp; Audit Governance</span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface">Infrastructure Architecture</span>
                </div>
              </div>
            </div>

            {/* Suraj Kanwar */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/40 transition-all duration-300">
              <div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-8 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/team/suraj-headshot.png"
                    alt="Suraj Kanwar, CTO and Co-Founder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-black text-on-surface">Suraj Kanwar</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary-container/15">
                    Co-Founder &amp; CTO
                  </span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-outline mb-6">
                  Data Science &amp; Growth Systems
                </p>
                <p className="text-on-surface-variant leading-relaxed text-base mb-6">
                  Spearheads technical strategy, neural pipeline development, and data-driven client acquisition. 
                  Suraj engineers the analytical architectures that power generative search optimization (GEO), 
                  high-precision Google Ads algorithms, and programmatic outbound funnels that drive verified pipeline.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/20">
                <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Core Domains</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface">Data Analytics &amp; Statistical Models</span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface">Generative Search (GEO)</span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-surface-container text-on-surface">Algorithmic Performance Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Client Commitments */}
      <section className="py-24 px-8 bg-surface-container-lowest border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Our Operating Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-on-surface">
              What Enterprises Experience Working With Us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/15">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">handshake</span>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Direct Skin in the Game</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                You work directly with Ajay and Suraj. Every decision, architecture review, and sprint delivery is guided 
                by principals whose personal reputation is on the line.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/15">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">hub</span>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Unified Backbone &amp; Signal</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We eliminate the friction between IT architecture and commercial growth. Your internal ERP systems and 
                your external revenue engines operate under one synchronized discipline.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/15">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">hourglass_top</span>
              <h3 className="text-xl font-bold mb-3 text-on-surface">Generational Permanence</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We design for 10-year durability, not quick contract billables. Our code, schemas, and campaigns are clean, 
                fully documented, and built to stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Executive Contact / CTA */}
      <section className="bg-on-surface text-surface py-20 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-primary-fixed font-bold tracking-[0.2em] text-xs uppercase block">
              Direct Access
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
              Direct Counsel. Enduring Architecture.
            </h2>
            <p className="text-surface/75 text-base sm:text-lg leading-relaxed">
              Schedule a confidential discovery session directly with Ajay and Suraj to evaluate your enterprise ERP landscape or growth systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-center hover:bg-primary-container transition-all shadow-lg active:scale-95"
            >
              Start an Executive Inquiry
            </Link>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-surface-container-highest/20 text-white font-semibold text-center hover:bg-surface-container-highest/30 transition-all border border-white/10"
              >
                Direct WhatsApp Chat
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

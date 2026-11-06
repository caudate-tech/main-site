import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Caudate Tech, founded by father and son Ajay and Suraj Kanwar. Uniting enterprise ERP bedrock with modern data and growth engineering.',
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppChatUrl();

  return (
    <div className="bg-surface text-on-surface">
      {/* Hero Section with Graphic */}
      <section className="relative px-8 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Headline & Concise Pitch */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-4">
              About Caudate Tech
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-on-surface leading-[1.0] mb-6">
              Built on trust.<br />
              <span className="text-primary">Engineered to scale.</span>
            </h1>
            <p className="text-lg sm:text-xl text-on-surface-variant font-medium leading-relaxed max-w-2xl mb-8">
              Caudate Tech was founded by father and son Ajay and Suraj Kanwar. We combine decades of enterprise ERP stability with modern data science, giving clients direct access to senior technical leaders with complete accountability.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-primary-container transition-all shadow-md shadow-primary/10"
              >
                Talk to the Founders
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-xl bg-surface-container-low text-on-surface font-semibold text-sm hover:bg-surface-container transition-all border border-outline-variant/20"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right: Architectural Graphic */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/20 shadow-lg">
              {/* Pillar 1: Enterprise Core */}
              <div className="p-4 rounded-xl bg-surface border border-outline-variant/15 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl">dns</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-primary">Enterprise Core</div>
                    <div className="text-sm font-bold text-on-surface">SAP, Infrastructure &amp; Compliance</div>
                  </div>
                </div>
              </div>

              {/* Connecting Flow Lines */}
              <div className="flex justify-center py-2">
                <div className="w-px h-6 bg-gradient-to-b from-primary to-primary-container"></div>
              </div>

              {/* Center: The Founders Nexus */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white text-center shadow-md">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">Direct Partnership</div>
                <div className="text-base font-extrabold tracking-tight mt-0.5">Ajay &amp; Suraj Kanwar</div>
                <div className="text-xs text-white/90 mt-1">Zero intermediary hand-offs</div>
              </div>

              {/* Connecting Flow Lines */}
              <div className="flex justify-center py-2">
                <div className="w-px h-6 bg-gradient-to-b from-primary-container to-primary"></div>
              </div>

              {/* Pillar 2: Growth Engine */}
              <div className="p-4 rounded-xl bg-surface border border-outline-variant/15 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl">insights</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-primary">Growth Engine</div>
                    <div className="text-sm font-bold text-on-surface">Data Science, AI &amp; Paid Media</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story: Simple, Honest, Authentic */}
      <section className="py-20 md:py-24 px-8 bg-surface-container-lowest border-b border-outline-variant/15">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-3">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-on-surface mb-8">
            Two generations. One standard of excellence.
          </h2>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              In enterprise consulting, projects are often sold by senior partners and handed off to rotating junior staff. That model creates lost context, technical debt, and finger-pointing.
            </p>
            <p>
              At Caudate Tech, you work directly with the principals. Ajay brings over twenty years of experience directing enterprise ERP landscapes, compliance, and mission-critical infrastructure where stability is mandatory. Suraj brings modern data engineering, generative search optimization, and algorithmic acquisition pipelines that convert technical authority into revenue.
            </p>
            <p className="text-on-surface font-semibold">
              Because our family name and reputation stand behind every engagement, we do not hide behind middle management. We design systems built to endure for years.
            </p>
          </div>
        </div>
      </section>

      {/* Founders: Clean 50/50 Grid */}
      <section className="py-20 md:py-28 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-3">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-on-surface">
              Meet the Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Ajay Kanwar */}
            <div className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/40 transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/team/ajay-headshot.png"
                  alt="Ajay Kanwar, CEO and Co-Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-black text-on-surface">Ajay Kanwar</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary-container/15">
                  Co-Founder &amp; CEO
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-outline mb-4">
                Enterprise Infrastructure &amp; SAP Architecture
              </p>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Over two decades directing mission-critical enterprise systems, third-party SAP support, compliance governance, and infrastructure stability. Ajay ensures client systems remain audit-ready, reliable, and free from vendor lock-in.
              </p>
            </div>

            {/* Suraj Kanwar */}
            <div className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/40 transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/team/suraj-headshot.png"
                  alt="Suraj Kanwar, CTO and Co-Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-black text-on-surface">Suraj Kanwar</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary-container/15">
                  Co-Founder &amp; CTO
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-outline mb-4">
                Data Science &amp; Growth Engineering
              </p>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Leads technical strategy, statistical data modeling, and performance marketing systems. Suraj engineers the pipelines behind generative search optimization, high-intent Google Ads campaigns, and outbound revenue engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="bg-on-surface text-surface py-16 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tighter mb-3">
              Work directly with our founders.
            </h2>
            <p className="text-surface/75 text-base leading-relaxed">
              Contact Ajay and Suraj to discuss your enterprise SAP landscape or digital growth systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-primary text-white font-bold text-center hover:bg-primary-container transition-all shadow-md active:scale-95 text-sm"
            >
              Contact Us
            </Link>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-surface-container-highest/20 text-white font-semibold text-center hover:bg-surface-container-highest/30 transition-all border border-white/10 text-sm"
              >
                WhatsApp Chat
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

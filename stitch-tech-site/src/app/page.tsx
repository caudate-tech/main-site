import type { Metadata } from 'next';
import Link from 'next/link';
import ContactInquiryForm from '@/components/ContactInquiryForm';
import ServicesCategoryNav from '@/components/ServicesCategoryNav';
import PlatformsWeWorkWithLogos from '@/components/PlatformsWeWorkWithLogos';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Caudate Tech",
    "alternateName": "Caudate Technologies",
    "url": "https://caudate-tech.com",
    "logo": "https://caudate-tech.com/next.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-201-632-1255",
      "contactType": "customer service",
      "email": "contact@caudate-tech.com",
      "availableLanguage": "en"
    },
    "description": "Architecting the foundations of digital success through strategic growth and innovative technology solutions including Enterprise SAP and Digital Marketing.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-visible bg-surface py-12 lg:py-16">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary bg-primary-container/20 rounded-full uppercase">Engineered Growth</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface mb-6">
              Strategic Digital Growth for the <span className="text-primary">Modern Enterprise</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-xl">
              We architect high-performance digital ecosystems that drive measurable ROI. Transforming traditional market leaders into digital-first giants through data-driven precision.
            </p>
            <p className="text-sm text-on-surface-variant flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="material-symbols-outlined text-primary text-base">bolt</span>
              <span>Start your project by filling out the form, or</span>
              <Link href="/contact" className="font-bold text-primary hover:underline">
                view full contact details
              </Link>
              <span>.</span>
            </p>
          </div>
          <div className="relative z-10 w-full">
            <ContactInquiryForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Tools & ecosystems */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-outline uppercase mb-3">
            Tools & ecosystems we operate in
          </p>
          <p className="text-center text-sm text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            SAP landscapes, cloud foundations, and growth channels including Google and Meta ads, day to day.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-10 lg:gap-x-14 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <PlatformsWeWorkWithLogos />
          </div>
        </div>
      </section>

      {/* Service categories: same four paths as /services */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">What we offer</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mt-4">
                Four ways to explore our work
              </h2>
              <p className="text-on-surface-variant mt-4 leading-relaxed max-w-xl">
                SAP and infrastructure, pipeline programs, the full digital marketing suite, and visual program guides. Each opens on the Services page.
              </p>
            </div>
            <Link href="/services" className="text-primary font-bold flex items-center gap-2 group shrink-0">
              Services overview
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <ServicesCategoryNav variant="hero" />
        </div>
      </section>

      {/* Why Choose Us / Stats Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-8">
                Engineered for <br /><span className="text-primary">Performance.</span>
              </h2>
              <p className="text-lg text-on-surface-variant mb-12">
                Unlike traditional agencies, we treat your digital presence as critical infrastructure. Our methodology is rooted in architectural stability and scalable growth.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">architecture</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Foundational Strategy</h4>
                    <p className="text-on-surface-variant">We build on facts, not trends. Every campaign starts with deep-tier market analysis.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Real-time Attribution</h4>
                    <p className="text-on-surface-variant">Trace every cent of your marketing spend directly to revenue generation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container p-8 rounded-3xl h-64 flex flex-col justify-end">
                <div className="text-5xl font-black text-primary mb-2">500M+</div>
                <div className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">Ad Spend Managed</div>
              </div>
              <div className="bg-primary-container text-on-primary-container p-8 rounded-3xl h-64 flex flex-col justify-end transform translate-y-8">
                <div className="text-5xl font-black mb-2">12+</div>
                <div className="font-bold text-sm uppercase tracking-widest opacity-80">Years Excellence</div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-3xl h-64 flex flex-col justify-end">
                <div className="text-5xl font-black text-primary mb-2">98%</div>
                <div className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">Client Retention</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl h-64 flex flex-col justify-end shadow-sm transform translate-y-8">
                <div className="text-5xl font-black text-primary mb-2">150+</div>
                <div className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">Growth Specialists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Lead Gen CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="bg-on-surface text-surface rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8">Ready to Architect Your Growth?</h2>
              <p className="text-xl text-surface-container mb-12 max-w-2xl mx-auto opacity-80">
                Book a 30-minute high-level strategy audit with our lead consultants. No sales pitch, just pure data and direction.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                >
                  Schedule Strategy Call
                </Link>
                <Link 
                  href="/case-studies"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-white/20"
                >
                  Download Case Studies
                </Link>
              </div>
              <div className="mt-12 flex justify-center items-center gap-8 text-sm opacity-60">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">verified</span> ISO 27001 Certified</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">stars</span> Premier Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import DigitalMarketingSuite from '@/components/DigitalMarketingSuite';
import ServicePortfolio from '@/components/ServicePortfolio';
import ServicesCategoryNav from '@/components/ServicesCategoryNav';
import { portfolioIntro } from '@/data/service-portfolio';

export default function ServicesPage() {
  return (
    <>
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
              {portfolioIntro.eyebrow}: Service Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface">
              {portfolioIntro.title}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-xl leading-relaxed">
              {portfolioIntro.body}
            </p>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden relative">
            <img 
              alt="Modern minimal office architecture" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc4mBlaDR9m0PM3yF6I5mEKdeZr2E7OqXxaMPSJsc-EX1Xck5bVCvKnHZQw7Y17LID6c_P9s6EEfinGjFOWRJ6oqgNy7c7X6PsGBNDuWJ360j3y4JPK9g_ILEpC_WuhZd8UztY2Tu4T2DZat2OlBh53gR68qv3Fn9hM4okpQA971kTWmNGtWOaLX9XXg5xYUff6nCZfDUYxCJYyn-NSSDkTEkGjBYpaOUwOqUtFuKTOu93HXyCxwldM2AT7hnBZxTWhw5J8dCS9rI" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>
        <div className="mt-16 md:mt-20">
          <ServicesCategoryNav variant="hero" />
        </div>
      </header>

      {/* Sticky category bar */}
      <div className="sticky top-[74px] z-40 border-y border-outline-variant/10 bg-surface-container-low/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-[10px] font-black text-outline uppercase tracking-widest shrink-0 text-center sm:text-left">
            Jump to category
          </span>
          <ServicesCategoryNav variant="sticky" />
        </div>
      </div>

      {/* SAP & enterprise portfolio (SAP-Products.md) */}
      <section className="max-w-7xl mx-auto px-8 mt-24 mb-8">
        <ServicePortfolio />
      </section>

      {/* Digital marketing suite */}
      <section
        id="digital-suite"
        className="max-w-7xl mx-auto px-8 pt-16 border-t border-outline-variant/15 scroll-mt-40"
      >
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Digital growth</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mt-4">
            Combined digital marketing suite
          </h2>
          <p className="text-lg text-on-surface-variant mt-4 leading-relaxed">
            Six integrated practices: strategy, generative &amp; technical SEO, content and social, paid and ABM, web and commerce, and lifecycle automation, layered on a stable enterprise core.
          </p>
        </div>
        <DigitalMarketingSuite />
      </section>

      <section
        id="spotlight-programs"
        className="max-w-7xl mx-auto px-8 pt-24 space-y-32 mb-48 border-t border-outline-variant/10 scroll-mt-40"
      >
        <div className="max-w-3xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Spotlight programs</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-on-surface mt-4">
            Deeper dives &amp; case-ready narratives
          </h2>
          <p className="text-on-surface-variant mt-3 leading-relaxed">
            Visual overviews below map to our consulting, SEO, paid media, and content strategy engagements.
          </p>
        </div>
        {/* 01. Digital Strategy & Consulting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-40" id="strategy">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest rounded-2xl">
              <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-on-surface">Digital Strategy & Consulting</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">The foundation of every high-performance brand is a data-driven blueprint. We analyze market gaps and consumer behavior to map your trajectory.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Market Analysis & Competitor Auditing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Multi-channel Growth Roadmaps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Digital Infrastructure Assessment</span>
              </li>
            </ul>
            <Link 
              href="/services/consulting"
              className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-8 py-3 rounded-xl font-bold transition-all hover:bg-primary hover:text-white inline-block"
            >
              Explore Consulting
            </Link>
          </div>
          <div className="lg:col-span-7 bg-surface-container rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <img 
              alt="Data visualization dashboard" 
              className="rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MsAR74Nv2Q4qnTFYn2O4azpyvoIaGZNwu0I5LTUxe9bmZ71xFtDYXbGfOEOHFCKgdPI5eHnrTQJPn8cZb_alRHQgPlRRRFs4aV4fi2QRJ95ICZGLp4hn23XIzfvPLUEEMxjbOFg6zfPKFDs4GGA614LP0l4OewZ5LKpgpN_CCC9cMtCrs5fDNoHc3a7mr12CdeWQnrgJNKln1S52OrCPdtooCwd9GHRCwjaKDz0-25IFtULvHfSM8YtyRE-aInkNIhUf_wklYA4" 
            />
          </div>
        </div>

        {/* 02. Search Engine Optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-40" id="seo">
          <div className="lg:col-span-7 order-2 lg:order-1 bg-surface-container-low rounded-[2rem] aspect-video relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent"></div>
            <div className="relative grid grid-cols-2 gap-4 p-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 translate-y-4 text-center">
                <span className="text-4xl font-black text-primary">94%</span>
                <p className="text-xs font-bold text-outline uppercase tracking-tighter">Organic Visibility Lift</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 -translate-y-4 text-center">
                <span className="text-4xl font-black text-secondary">12x</span>
                <p className="text-xs font-bold text-outline uppercase tracking-tighter">Traffic Efficiency</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8 lg:pl-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest rounded-2xl">
              <span className="material-symbols-outlined text-primary text-3xl">search_insights</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-on-surface">Search Engine Optimization</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">Visibility is authority. We optimize your technical stack and content hierarchy to ensure you own the terms that matter most.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Technical SEO & Core Web Vitals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Keyword Ecosystem Architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Authority Building & Backlink Strategy</span>
              </li>
            </ul>
            <Link 
              href="/services/seo"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 inline-block"
            >
              Explore SEO
            </Link>
          </div>
        </div>

        {/* 03. Paid Media Management */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-40" id="paid-media">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest rounded-2xl">
              <span className="material-symbols-outlined text-primary text-3xl">ads_click</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-on-surface">Paid Media Management</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">Eliminate wastage. Our paid media strategies focus on high-intent customer acquisition with a mathematical approach to ROI.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">SEM & Social Advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Programmatic Display & Remarketing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Conversion Rate Optimization (CRO)</span>
              </li>
            </ul>
            <Link 
              href="/services/paid-media"
              className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-8 py-3 rounded-xl font-bold transition-all hover:bg-primary hover:text-white inline-block"
            >
              Explore Paid Media
            </Link>
          </div>
          <div className="lg:col-span-7 bg-surface-container-high rounded-[2rem] p-8 md:p-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/50">
                <div className="text-xs font-black text-primary tracking-widest uppercase mb-4">Precision</div>
                <p className="text-sm font-medium text-on-surface-variant italic">"Targeting based on behavioral logic, not just demographics."</p>
              </div>
              <div className="bg-primary-container/10 p-8 rounded-3xl">
                <div className="text-xs font-black text-on-primary-container tracking-widest uppercase mb-4">Scale</div>
                <p className="text-sm font-medium text-on-primary-container">"Budget optimization that grows with your verified revenue."</p>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <img 
                alt="Analytical performance chart" 
                className="w-full h-48 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjZbQBXuc-BANVxXGvpOt2PafutYeDT47exnJ0rnGwGdrAquLRT9Bx1dZrL60BLlJC_T8vd7OdRBcw2un43w9QXM108TZTWK9pq5Nje6EHMEvSPpkSvqmjX65B3CeR2-H25Kb1_sbAHwrjE7WXJ8Ic20AvhtdoQC92gG3_BVEvopV3M8oxi3OvymGVCXI_jF5aqYcsFB1ptR6hw76HnwOdo2NBYWZfDtQVilOAtC8indYj1_u0iIdcV6AazAZCxYtr5_yfU1dJ2Nk" 
              />
            </div>
          </div>
        </div>

        {/* 04. Content Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-40" id="content">
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-[2rem] p-4 relative border border-outline-variant/10 shadow-xl shadow-on-surface/5">
            <img 
              alt="Creative workspace" 
              className="w-full h-[400px] object-cover rounded-[1.5rem]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2xwdYPg0iS27SErPVu96wE9e3WwxE170ZcG27otKXJ1L6MmNmc04rc75JdWCgsgsd3hY5YzyRaF_xwjbzrZiNKcAvjHY0EAqc9jXZRWHZJHfO7lUwV-9hwGrJyA4TYbkG0ePs64nutbRKnvohJYlQ4Hufe6fdvKOtnk4hxVoGADsHWUBbM28_9KzrlpMeu6r0Rpyu1jWpLlpEykRJNGk4BYxQ-9LnYhO_gVL0vXGj2fILos8EbRTmbxLkH_BGzJwn1ZAbj1amg0" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl max-w-[240px] hidden md:block text-center">
              <p className="text-sm italic font-medium leading-tight">"Content is the currency of digital trust. We mint it with precision."</p>
              <div className="mt-4 flex gap-1 justify-center">
                <div className="w-8 h-1 bg-primary rounded-full"></div>
                <div className="w-2 h-1 bg-primary-container rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-8 lg:pl-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest rounded-2xl">
              <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-on-surface">Content Strategy</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">Influence is built through consistency and depth. We create high-utility content that positions your brand as the definitive industry leader.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Thought Leadership Programming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Editorial Calendar Management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                <span className="font-medium">Conversion-focused Copywriting</span>
              </li>
            </ul>
            <Link 
              href="/services/content-strategy"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 inline-block"
            >
              Explore Content Strategy
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-8 mb-48 text-center">
        <div className="bg-surface-container-highest rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-8 text-on-surface">Architect Your Future</h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-xl mx-auto">Contact our specialist team today to schedule a high-level digital audit of your existing growth infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform inline-block"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="#"
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg border border-outline-variant/30 hover:bg-surface-container transition-colors inline-block"
            >
              Download Agency Deck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

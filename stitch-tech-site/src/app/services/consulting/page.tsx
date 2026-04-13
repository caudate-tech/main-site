import Link from 'next/link';

export default function ConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Expert Consulting</span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9]">
              Strategic <span className="text-primary">Clarity</span> for Enterprise Scale.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We bridge the gap between technical complexity and business growth. Our consulting methodology is rooted in data-driven blueprints and architectural stability.
            </p>
            <div className="flex gap-6 pt-4">
              <Link 
                href="/contact"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Book a Strategy Audit
              </Link>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
              <img 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC4mBlaDR9m0PM3yF6I5mEKdeZr2E7OqXxaMPSJsc-EX1Xck5bVCvKnHZQw7Y17LID6c_P9s6EEfinGjFOWRJ6oqgNy7c7X6PsGBNDuWJ360j3y4JPK9g_ILEpC_WuhZd8UztY2Tu4T2DZat2OlBh53gR68qv3Fn9hM4okpQA971kTWmNGtWOaLX9XXg5xYUff6nCZfDUYxCJYyn-NSSDkTEkGjBYpaOUwOqUtFuKTOu93HXyCxwldM2AT7hnBZxTWhw5J8dCS9rI" 
                alt="Strategic Consulting"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </header>

      {/* Core Consulting Pillars */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6 bg-white p-12 rounded-[2rem] shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl">architecture</span>
              <h3 className="text-3xl font-black tracking-tight">Market Analysis</h3>
              <p className="text-on-surface-variant leading-relaxed">Deep-tier competitive auditing and consumer behavior analysis to identify untapped growth sectors in your vertical.</p>
            </div>
            <div className="space-y-6 bg-white p-12 rounded-[2rem] shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl">insights</span>
              <h3 className="text-3xl font-black tracking-tight">Growth Roadmaps</h3>
              <p className="text-on-surface-variant leading-relaxed">Multi-quarter strategic planning that aligns technical infrastructure with aggressive revenue objectives.</p>
            </div>
            <div className="space-y-6 bg-white p-12 rounded-[2rem] shadow-sm">
              <span className="material-symbols-outlined text-primary text-5xl">verified</span>
              <h3 className="text-3xl font-black tracking-tight">Tech Audits</h3>
              <p className="text-on-surface-variant leading-relaxed">Full-stack digital infrastructure assessments to ensure your foundation is prepared for rapid scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black tracking-tighter mb-12">Our Architectural <br/><span className="text-primary">Methodology.</span></h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-black text-xl">01</div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 text-on-surface">Data Integration</h4>
                    <p className="text-on-surface-variant text-lg">We begin by unifying fragmented data sources to create a "single source of truth" for your business performance.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-black text-xl">02</div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 text-on-surface">Strategy Blueprinting</h4>
                    <p className="text-on-surface-variant text-lg">We architect detailed plans that address both creative brand positioning and technical backend requirements.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-black text-xl">03</div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2 text-on-surface">Precision Execution</h4>
                    <p className="text-on-surface-variant text-lg">We oversee the implementation phase to ensure every line of strategy is translated into measurable performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-surface-container-high rounded-[3rem] p-16 relative z-10">
                <blockquote className="text-3xl font-medium leading-relaxed italic text-on-surface">
                  "The difference between a trend and a foundation is data. We build foundations that outlast the next digital shift."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-px bg-primary"></div>
                  <span className="font-bold uppercase tracking-widest text-sm">Marcus Thorne, CTO</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-on-surface text-surface py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-white">Ready for Absolute Precision?</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">Book your foundational strategy audit today and architect your enterprise growth engine.</p>
          <Link 
            href="/contact"
            className="px-12 py-5 rounded-full bg-white text-primary font-black text-lg hover:shadow-2xl transition-shadow active:scale-95 inline-block"
          >
            Start Consulting Phase
          </Link>
        </div>
      </section>
    </>
  );
}

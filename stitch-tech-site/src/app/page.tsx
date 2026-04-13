import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary bg-primary-container/20 rounded-full uppercase">Engineered Growth</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface mb-6">
              Strategic Digital Growth for the <span className="text-primary">Modern Enterprise</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              We architect high-performance digital ecosystems that drive measurable ROI. Transforming traditional market leaders into digital-first giants through data-driven precision.
            </p>
            <div className="bg-surface-container-low p-2 rounded-2xl max-w-md flex flex-col sm:flex-row gap-2 shadow-sm">
              <input className="flex-grow bg-transparent border-none focus:ring-0 px-4 text-on-surface" placeholder="Enter your business email" type="email" />
              <button className="hero-gradient text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:opacity-95 whitespace-nowrap">
                Free Strategy Audit
              </button>
            </div>
            <p className="mt-4 text-sm text-outline flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              No commitment required. 24-hour turnaround.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                alt="Professional meeting" 
                className="w-full h-[600px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrJvdwCPvuI_rw2OPQ183p4_lzhb_VSLjHLGdA2Ve3_L4Fbp3uIbUKPntg35VkH54fG7090eiecTobBFV_KUl8dS2wgVvGWvtyB-BWcPgL4srJyaRVog3N0gFbRlEJO624F9weEYZeUbWBcvH6YCx721WWH28gGTpT4XVtHiGTodEDjxnbmPjOzOewUxpigvgndWb6KJFyGhupMT4p2Jd-mERJM_1d2O1WwalQ02h0Qxgihbh_6bzM8bPD0jA7N1_jxz9cpUWRUyY" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-[280px]">
              <div className="text-4xl font-black text-primary mb-1">+142%</div>
              <div className="text-sm font-bold text-on-surface leading-tight uppercase tracking-wide">Average ROI Increase</div>
              <div className="mt-2 text-xs text-outline">Across 50+ enterprise clients in 2023.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Logo Section */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-outline uppercase mb-10">Trusted by Global Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black tracking-tighter">VOLTAIC</span>
            <span className="text-2xl font-black tracking-tighter">HEXA_CORP</span>
            <span className="text-2xl font-black tracking-tighter">NEURALINK</span>
            <span className="text-2xl font-black tracking-tighter">QUANTUM</span>
            <span className="text-2xl font-black tracking-tighter">APEX_BIO</span>
          </div>
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

      {/* Services Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Capabilities</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mt-4">Growth Architectures</h2>
            </div>
            <Link href="/services" className="text-primary font-bold flex items-center gap-2 group">
              View All Services 
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Consulting Card */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group">
              <span className="material-symbols-outlined text-4xl text-primary mb-8">insights</span>
              <h3 className="text-2xl font-bold mb-4">Strategic Consulting</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">High-level digital roadmap development for enterprises looking to redefine their market position.</p>
              <Link className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all" href="/services">
                Learn More <span className="material-symbols-outlined ml-2 text-sm">north_east</span>
              </Link>
            </div>
            {/* SEO Card */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group">
              <span className="material-symbols-outlined text-4xl text-primary mb-8">travel_explore</span>
              <h3 className="text-2xl font-bold mb-4">Organic Authority</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Technical SEO and content architecture designed to dominate search landscapes for high-intent keywords.</p>
              <Link className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all" href="/services">
                Learn More <span className="material-symbols-outlined ml-2 text-sm">north_east</span>
              </Link>
            </div>
            {/* Paid Media Card */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group">
              <span className="material-symbols-outlined text-4xl text-primary mb-8">ads_click</span>
              <h3 className="text-2xl font-bold mb-4">Paid Performance</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Aggressive ROI-focused media buying across Search, Social, and Programmatic networks.</p>
              <Link className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all" href="/services">
                Learn More <span className="material-symbols-outlined ml-2 text-sm">north_east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-surface-container-highest overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="material-symbols-outlined text-6xl text-primary/30 mb-8">format_quote</span>
            <blockquote className="text-3xl md:text-4xl font-bold text-on-surface leading-tight mb-12">
              "Caudate Tech didn't just provide us with marketing services; they rebuilt our entire digital acquisition engine. Within six months, our customer acquisition cost dropped by 40% while volume doubled."
            </blockquote>
            <div className="flex items-center gap-6">
              <img 
                alt="Executive profile" 
                className="w-16 h-16 rounded-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIL-W2DI4WR-ESEcg3IEiI_z6yKyoYE8AQOJwROEeZVvDLlCNNzN_2Uw1Yzhh25CY2Vl416mdhTwe5yxUBvLVn6olo9BMpSwPv1wfR_5HEmrLquomhe4uBQDuR1LhD25w3Mi73-AiVZTZcPL5bAbVWGkjSL4p-RmtpgSIoXCdeHG-q1CR4vWqWMCOlPaVmVsbrahzDyLnYPwreHUJmRctF1-To9jRD7cN2MKI_Mf9jV2hG8ATmexuZHKb3Ow9NABH0vIiMD57muMg" 
              />
              <div>
                <div className="font-bold text-xl text-on-surface">Sarah Chen</div>
                <div className="text-primary font-medium">Chief Marketing Officer, Voltaic Global</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
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

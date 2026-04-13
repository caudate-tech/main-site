import Link from 'next/link';

export default function DigitalMarketingPage() {
  const marketingServices = [
    {
      title: "Search Engine Optimization",
      href: "/services/seo",
      icon: "search_insights",
      desc: "Technical SEO and content architecture designed to dominate search landscapes for high-intent keywords."
    },
    {
      title: "Paid Media Management",
      href: "/services/paid-media",
      icon: "ads_click",
      desc: "Aggressive ROI-focused media buying across Search, Social, and Programmatic networks with mathematical precision."
    },
    {
      title: "Content Strategy",
      href: "/services/content-strategy",
      icon: "edit_note",
      desc: "High-integrity editorial programming that positions your brand as the definitive industry source of truth."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Full-Stack Growth</span>
          <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9]">
            High-Performance <span className="text-primary">Marketing.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mx-auto max-w-2xl">
            We architect digital growth engines that convert awareness into verified revenue. Data-driven, results-oriented, and precision-engineered for the modern enterprise.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, i) => (
              <div key={i} className="group bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/10">
                <div className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-6">{service.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">{service.desc}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary font-black gap-2 group/link"
                >
                  Deep Dive <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-on-surface text-surface rounded-[3rem] p-16 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 relative z-10">
              <h2 className="text-5xl font-black tracking-tighter">The Marketing <br/><span className="text-primary-container">ROI Blueprint.</span></h2>
              <p className="text-xl text-surface-container opacity-80 leading-relaxed">
                Our approach eliminates marketing waste. By unifying SEO, Paid, and Content into a single architectural strategy, we create a compounding growth effect that traditional siloed agencies can't match.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-black text-primary-container">+142%</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. ROI Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary-container">-40%</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">Avg. CAC Reduction</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md relative z-10">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-1 shadow-2xl">
                <div className="w-full h-full bg-on-surface rounded-[1.8rem] p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-2 bg-white/10 rounded-full w-full relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-primary-container animate-pulse" style={{ width: `${20 * i}%` }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-on-surface">Ready to Architect Your Growth?</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Schedule a high-level digital marketing audit with our specialist team and discover your untapped potential.</p>
          <Link 
            href="/contact"
            className="px-12 py-5 rounded-full bg-primary text-white font-black text-lg hover:shadow-2xl transition-shadow active:scale-95 inline-block"
          >
            Audit My Marketing
          </Link>
        </div>
      </section>
    </>
  );
}

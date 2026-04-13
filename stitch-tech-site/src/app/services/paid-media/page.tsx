import Link from 'next/link';

export default function PaidMediaPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Performance Marketing</span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9]">
              Turn Ad Spend into <span className="text-primary">Revenue.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We eliminate waste through mathematical precision. Our paid media strategies focus on high-intent customer acquisition with a relentless focus on verified ROI.
            </p>
            <div className="flex gap-6 pt-4">
              <Link 
                href="/contact"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Schedule ROI Audit
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-primary-container rounded-[3rem] p-12 aspect-[4/3] flex flex-col justify-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Current Managed Spend</div>
                  <div className="text-white text-5xl font-black tracking-tighter">$500M+</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transform translate-x-12">
                  <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Average ROAS</div>
                  <div className="text-white text-5xl font-black tracking-tighter">4.8x</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </header>

      {/* Channels Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-5xl font-black tracking-tighter">Omnichannel <br/><span className="text-primary">Precision.</span></h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">We don't just "buy ads." We architect behavioral funnels across the entire digital ecosystem.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Search Engine Marketing", icon: "search", desc: "Dominating high-intent search queries on Google and Bing." },
                { title: "Social Advertising", icon: "share", desc: "Advanced audience targeting on Meta, LinkedIn, and X." },
                { title: "Programmatic Display", icon: "ads_click", desc: "Automated media buying at enterprise scale." },
                { title: "Conversion Optimization", icon: "bolt", desc: "Fine-tuning landing pages to maximize every click." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-[2rem] shadow-sm flex items-start gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-on-surface text-surface rounded-[3rem] p-16 md:p-24 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black tracking-tighter mb-8">The ROAS Blueprint.</h2>
                <p className="text-xl text-white/70 leading-relaxed mb-12">Our methodology bypasses vanity metrics. We focus on customer lifetime value (LTV) and verified revenue attribution.</p>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">verified_user</span>
                    <span className="text-lg font-bold">Closed-Loop Attribution</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">monitoring</span>
                    <span className="text-lg font-bold">Real-Time Bid Optimization</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">psychology</span>
                    <span className="text-lg font-bold">Behavioral Audience Mapping</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  className="rounded-2xl shadow-2xl grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjZbQBXuc-BANVxXGvpOt2PafutYeDT47exnJ0rnGwGdrAquLRT9Bx1dZrL60BLlJC_T8vd7OdRBcw2un43w9QXM108TZTWK9pq5Nje6EHMEvSPpkSvqmjX65B3CeR2-H25Kb1_sbAHwrjE7WXJ8Ic20AvhtdoQC92gG3_BVEvopV3M8oxi3OvymGVCXI_jF5aqYcsFB1ptR6hw76HnwOdo2NBYWZfDtQVilOAtC8indYj1_u0iIdcV6AazAZCxYtr5_yfU1dJ2Nk" 
                  alt="Performance Dashboard"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-24 px-8 text-center border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-on-surface">Stop Burning Budget.</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Get a professional audit of your existing paid media accounts and discover where you're leaking ROI.</p>
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

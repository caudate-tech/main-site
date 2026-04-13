import Link from 'next/link';

export default function SEOPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Search Authority</span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9]">
              Own the <span className="text-primary">Search</span> Landscape.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Visibility is the ultimate form of digital authority. We optimize your technical architecture and content hierarchy to ensure you dominate high-intent keywords.
            </p>
            <div className="flex gap-6 pt-4">
              <Link 
                href="/contact"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Get a Free SEO Audit
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-surface-container-low rounded-[3rem] p-12 aspect-square flex items-center justify-center">
              <div className="relative grid grid-cols-2 gap-8 w-full max-w-md">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 translate-y-8">
                  <span className="text-5xl font-black text-primary tracking-tighter">94%</span>
                  <p className="text-sm font-bold text-outline uppercase tracking-widest mt-2">Visibility Lift</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 -translate-y-8">
                  <span className="text-5xl font-black text-secondary tracking-tighter">12x</span>
                  <p className="text-sm font-bold text-outline uppercase tracking-widest mt-2">ROI Multiplier</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </header>

      {/* Technical SEO Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <img 
                className="rounded-[2rem] shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MsAR74Nv2Q4qnTFYn2O4azpyvoIaGZNwu0I5LTUxe9bmZ71xFtDYXbGfOEOHFCKgdPI5eHnrTQJPn8cZb_alRHQgPlRRRFs4aV4fi2QRJ95ICZGLp4hn23XIzfvPLUEEMxjbOFg6zfPKFDs4GGA614LP0l4OewZ5LKpgpN_CCC9cMtCrs5fDNoHc3a7mr12CdeWQnrgJNKln1S52OrCPdtooCwd9GHRCwjaKDz0-25IFtULvHfSM8YtyRE-aInkNIhUf_wklYA4" 
                alt="Technical SEO"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="material-symbols-outlined text-primary text-5xl">settings_input_component</span>
              <h2 className="text-5xl font-black tracking-tighter">Technical Infrastructure.</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">Modern SEO is built on code. We optimize your Core Web Vitals, schema markup, and server-side rendering to provide an elite indexing experience for search engines.</p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-xl font-bold">Core Web Vitals Optimization</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-xl font-bold">Dynamic Rendering & SSR</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-xl font-bold">Semantic HTML Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Authority Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black tracking-tighter mb-8">Content Authority & <br/><span className="text-primary">E-E-A-T.</span></h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-16">
              Search engines reward Experience, Expertise, Authoritativeness, and Trustworthiness. We architect content clusters that establish your brand as the definitive source of truth in your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Cluster Mapping", desc: "Building semantic hubs that dominate entire topic areas." },
              { title: "Gap Analysis", desc: "Identifying keywords your competitors have overlooked." },
              { title: "Audit & Pruning", desc: "Refining legacy content to maximize domain authority." },
              { title: "Lead Generation", desc: "Optimizing content for both crawlers and conversions." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-surface-container-low rounded-3xl border border-outline-variant/10">
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-on-surface text-surface py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-white">Dominance is a Decision.</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">Stop guessing where your traffic comes from. Architect an organic growth engine that scales automatically.</p>
          <Link 
            href="/contact"
            className="px-12 py-5 rounded-full bg-white text-primary font-black text-lg hover:shadow-2xl transition-shadow active:scale-95 inline-block"
          >
            Start SEO Audit
          </Link>
        </div>
      </section>
    </>
  );
}

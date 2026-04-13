import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 mb-20 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <span className="text-primary font-bold tracking-[0.1em] uppercase text-xs">Proven Performance</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface">Architecting <br/><span className="text-primary-container">Measurable</span> Growth.</h1>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We don't just build software; we engineer business outcomes. Explore our archive of digital transformations backed by transparent, hard data.
            </p>
          </div>
        </div>
      </header>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-6 border-b border-outline-variant/15">
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm transition-all">All Projects</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-all">By Service</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-all">By Industry</button>
          </div>
          <div className="flex items-center space-x-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            <span className="text-sm font-bold tracking-wide uppercase">Sorted by impact</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Case Studies */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Featured Card */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden rounded-xl bg-surface-container-highest transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-on-surface/5">
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRIqpRKElhjL7WVQxCVZLfHSDYA78RZMK-Fs9uK8cUn0sKuVI1nws1wqgaOEMxe3b-cUtalb0T7KWGXtiYZDEy2RIG7L3vAJJ2fOSRPYBMnttydhavej0FkQ06XybK1Z1tzC8ACUNTzRZZcgG7Ffcq5V9vUwUpxQgREWGSA0OECaeM4z4Kxp2j_zX7gbRwu_dvDetSNmGuTfvhldCOoqM6se8BDTv9wRsJJSVFSffw0gFKv6cZ4mHZobYhNDhKl_C2xVfBQOrAM9c" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent"></div>
              <div className="absolute bottom-0 p-10 text-white w-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary-container/20 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-primary-fixed">FinTech Transformation</span>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-bold mb-3">Lumina Financial</h3>
                    <p className="text-white/70 font-medium">Re-engineering a legacy banking core into a cloud-native powerhouse, reducing transaction latency by 85%.</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-5xl font-black text-primary-fixed leading-none">+250%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">Increase in Leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Detail Card 1 */}
          <div className="md:col-span-4 group cursor-pointer">
            <div className="h-full flex flex-col p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm transition-all duration-300 hover:bg-surface-container-low group-hover:-translate-y-1">
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary">shopping_cart</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">E-Commerce Architecture</span>
                <h3 className="text-2xl font-black tracking-tight text-on-surface mb-4">Vora Boutique</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Scalable headless commerce integration that streamlined global distribution across 40 countries.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-outline uppercase tracking-wider">Growth</span>
                  <span className="text-3xl font-black text-on-surface tracking-tighter">140%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary w-[70%] h-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Detail Card 2 */}
          <div className="md:col-span-4 group cursor-pointer">
            <div className="h-full flex flex-col p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm transition-all duration-300 hover:bg-surface-container-low group-hover:-translate-y-1">
              <div className="mb-auto">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary">health_and_safety</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">HealthTech Systems</span>
                <h3 className="text-2xl font-black tracking-tight text-on-surface mb-4">CurePath AI</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Precision diagnostic engine utilizing machine learning to reduce patient intake time by 40 minutes per visit.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-outline uppercase tracking-wider">Efficiency</span>
                  <span className="text-3xl font-black text-on-surface tracking-tighter">92%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary w-[92%] h-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mid-size Card with Visual */}
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl bg-[#001d32] transition-all duration-500">
              <div className="absolute inset-0 opacity-40">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN-LlzS0j6fVkfU4TecigBVCwuGkirgMcj-Q1epyBB5DJvWYflemqp02yfsKBZPdmLgL3a_ctERaq_EBfJAR72vnhrnPLCdBp2r3QrrTc2zedzu1ArkJVuhkNzBiHy58GVO2aVrza4vb92CdbDWa0jp4FQNO0pcJkPzhHty-B_lK91QelNiF57u4l1iSS0iWYrEABnTcuy4IWih5nDIWtlbputEyxeghM90GcK9FMN0AtzOldLSSdXVhE6eWsrpxyNRnkqixoxS5o" 
                />
              </div>
              <div className="relative h-full flex flex-col md:flex-row">
                <div className="flex-1 p-10 flex flex-col justify-center">
                  <span className="text-primary-fixed text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Supply Chain AI</span>
                  <h3 className="text-white text-4xl font-black tracking-tighter mb-6 leading-tight">NexusLogistics Global Network</h3>
                  <p className="text-white/60 text-lg max-w-sm mb-8">Automating cross-border documentation with high-integrity blockchain verification.</p>
                  <button className="w-fit border border-white/20 hover:bg-white hover:text-on-surface px-6 py-2 rounded-full text-white font-bold text-sm transition-all">View Full Case Study</button>
                </div>
                <div className="md:w-1/3 bg-primary-container/90 backdrop-blur-md p-10 flex flex-col justify-center items-center text-center">
                  <div className="text-white">
                    <div className="text-6xl font-black mb-2 tracking-tighter">$12M</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Annual OpEx Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card with High Metric Focus */}
          <div className="md:col-span-6 group cursor-pointer">
            <div className="bg-surface-container-low rounded-xl p-10 flex flex-col justify-between h-[300px] relative overflow-hidden transition-all hover:bg-surface-container-high">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-on-surface mb-2">Alpha Stream</h3>
                <p className="text-on-surface-variant max-w-xs text-sm">Real-time processing for media giants, supporting 10M+ concurrent viewers.</p>
              </div>
              <div className="mt-auto relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-5xl font-black text-primary tracking-tighter">0.3s</span>
                  <span className="block text-[10px] font-bold text-outline uppercase tracking-wider">Global Latency</span>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary/20 group-hover:text-primary transition-colors">speed</span>
              </div>
            </div>
          </div>

          {/* Card with Industry Tag */}
          <div className="md:col-span-6 group cursor-pointer">
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-10 flex flex-col justify-between h-[300px] transition-all hover:shadow-xl hover:shadow-on-surface/5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black text-on-surface mb-2">Solas Renewables</h3>
                  <p className="text-on-surface-variant max-w-xs text-sm">Custom IoT sensor mesh network for utility-scale solar farms across Arizona.</p>
                </div>
                <span className="bg-surface-container px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest text-secondary">Energy</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <span className="block text-[10px] font-bold text-outline uppercase tracking-wider mb-2">Production Uplift</span>
                    <div className="h-12 flex items-end gap-1">
                      <div className="w-3 bg-primary-container h-1/4 rounded-t"></div>
                      <div className="w-3 bg-primary-container h-1/2 rounded-t"></div>
                      <div className="w-3 bg-primary-container h-3/4 rounded-t"></div>
                      <div className="w-3 bg-primary h-full rounded-t"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-5xl font-black text-on-surface tracking-tighter">22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="bg-on-surface rounded-3xl p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">Ready to architect your <br/><span className="text-primary-container">success story?</span></h2>
              <p className="text-white/60 text-lg font-medium">Join 50+ enterprise leaders who have scaled their operations with Caudate Tech's engineering excellence.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95 text-center"
              >
                Get a Quote
              </Link>
              <Link 
                href="/services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-on-surface transition-all active:scale-95 text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

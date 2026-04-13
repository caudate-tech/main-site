import Link from 'next/link';

export default function ContentStrategyPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Thought Leadership</span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9]">
              Content that <span className="text-primary">Influences.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We treat content as a high-integrity asset. Our editorial strategies position your brand as the definitive industry authority, bridging the gap between awareness and trust.
            </p>
            <div className="flex gap-6 pt-4">
              <Link 
                href="/contact"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
              >
                Discuss Content Roadmap
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2xwdYPg0iS27SErPVu96wE9e3WwxE170ZcG27otKXJ1L6MmNmc04rc75JdWCgsgsd3hY5YzyRaF_xwjbzrZiNKcAvjHY0EAqc9jXZRWHZJHfO7lUwV-9hwGrJyA4TYbkG0ePs64nutbRKnvohJYlQ4Hufe6fdvKOtnk4hxVoGADsHWUBbM28_9KzrlpMeu6r0Rpyu1jWpLlpEykRJNGk4BYxQ-9LnYhO_gVL0vXGj2fILos8EbRTmbxLkH_BGzJwn1ZAbj1amg0" 
                alt="Creative Workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
                <p className="text-white italic text-lg leading-relaxed">"Content is the currency of digital trust. We mint it with precision."</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Editorial Pillars */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-black tracking-tighter mb-8">Architected Narrative.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">We don't just "produce content." We design narrative ecosystems that guide your audience through a logical journey of expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Editorial Vision", icon: "menu_book", desc: "Defining your brand's unique perspective and establishing a consistent, authoritative voice." },
              { title: "Cluster Strategy", icon: "hub", desc: "Organizing content into semantic hubs that satisfy both user intent and search algorithms." },
              { title: "Asset Production", desc: "Crafting high-fidelity white papers, case studies, and thought leadership articles.", icon: "edit_document" }
            ].map((pillar, i) => (
              <div key={i} className="space-y-6">
                <span className="material-symbols-outlined text-primary text-5xl">{pillar.icon}</span>
                <h3 className="text-3xl font-black tracking-tight">{pillar.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black tracking-tighter">Amplified <br/><span className="text-primary">Authority.</span></h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">Production is only half the battle. We architect distribution funnels that ensure your best ideas reach the right decision-makers at the right time.</p>
              <div className="space-y-4">
                {["Targeted Newsletter Sequences", "Executive Ghostwriting", "Strategic Social Syndication", "Lead Magnet Optimization"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">circle</span>
                    <span className="font-bold text-on-surface">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-low p-12 rounded-[3rem] relative">
              <div className="space-y-6">
                {[45, 78, 92].map((width, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-outline">
                      <span>Authority Growth</span>
                      <span>+{width}%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${width}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-on-surface text-surface py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 text-white">Own the Conversation.</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">Transform your brand from a vendor into a visionary leader. Let's architect your content roadmap.</p>
          <Link 
            href="/contact"
            className="px-12 py-5 rounded-full bg-white text-primary font-black text-lg hover:shadow-2xl transition-shadow active:scale-95 inline-block"
          >
            Schedule Content Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}

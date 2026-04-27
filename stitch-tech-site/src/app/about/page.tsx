import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Caudate Tech, our engineering team, and our mission to provide scalable digital growth strategies.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-8 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">ESTABLISHED 2018</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]">
              Architecting <span className="text-primary">Growth</span> Through Tech.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
              We don't just build software; we engineer the digital foundations that allow businesses to scale with absolute confidence.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/10 hover:translate-y-[-2px] transition-transform"
              >
                Work With Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-full overflow-hidden shadow-2xl relative z-10 border-[16px] border-surface-container-lowest">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9yCiJcTQycKrDrnw4n7-sEL5eO88v17kk91oWrqgFOkbPootGIER7H-hQZEq6GA85_ede9rds-_DRp3ejztjnquOVA2rmOmtVpplLFe6fRkFn1fFtJvCOWXH-Xu_QVKctSz9WX7UInJAKxtIKq4fcqSWbGuL6wTIk1QESQRsZiQGbvmtrGRpS0OfKpzV9jcK26ZLLl16gKxzcszK1eCGo2iCyBx9eQ10mq04rrpr3zJai1qvEqPfzxmN97GwMzHEwYA-qqwXKSCc" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-black tracking-tighter text-on-surface">The Mission Statement</h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-3xl md:text-4xl font-medium text-on-surface leading-snug">
                To bridge the gap between complex technical possibilities and tangible business outcomes. We commit to transparency, precision, and the relentless pursuit of <span className="text-primary font-bold">client success</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-12 bg-surface-container rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-primary text-5xl">architecture</span>
              <div>
                <h3 className="text-3xl font-black mb-4">Integrity First</h3>
                <p className="text-on-surface-variant text-lg">We prioritize long-term stability over short-term hacks. Every line of code is an architectural decision that impacts your future.</p>
              </div>
            </div>
            <div className="p-12 bg-primary-container text-white rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-white text-5xl">trending_up</span>
              <div>
                <h3 className="text-3xl font-black mb-4">Growth Driven</h3>
                <p className="text-white/80 text-lg">If it doesn't move the needle for your business, we don't build it. Your ROI is our primary metric.</p>
              </div>
            </div>
            <div className="p-12 bg-surface-container-high rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-primary text-5xl">handshake</span>
              <div>
                <h3 className="text-3xl font-black mb-4">Radical Trust</h3>
                <p className="text-on-surface-variant text-lg">Partnership is more than a contract. We act as an extension of your own executive team.</p>
              </div>
            </div>
            <div className="md:col-span-2 p-12 bg-inverse-surface text-inverse-on-surface rounded-xl flex flex-col justify-between min-h-[400px]">
              <span className="material-symbols-outlined text-primary-fixed-dim text-5xl">verified</span>
              <div>
                <h3 className="text-3xl font-black mb-4">Expert Execution</h3>
                <p className="text-inverse-on-surface/70 text-lg">Our team is comprised of senior architects and strategists. We don't outsource quality; we deliver it personally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black tracking-tighter text-center mb-24">The Evolution of Caudate</h2>
          <div className="space-y-24 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:w-[2px] before:h-full before:bg-outline-variant/20">
            {/* Event 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-surface"></div>
              <div className="w-full md:w-5/12 bg-surface-container-lowest p-8 rounded-xl shadow-sm ml-8 md:ml-0">
                <span className="text-primary font-bold text-sm">2018</span>
                <h4 className="text-2xl font-black mt-2 mb-3">Foundation</h4>
                <p className="text-on-surface-variant">Caudate Tech founded with a vision to bring enterprise-grade architecture to growing startups.</p>
              </div>
            </div>
            {/* Event 2 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="w-full md:w-5/12 bg-surface-container-lowest p-8 rounded-xl shadow-sm ml-8 md:ml-0 md:text-right">
                <span className="text-primary font-bold text-sm">2020</span>
                <h4 className="text-2xl font-black mt-2 mb-3">Scale Phase</h4>
                <p className="text-on-surface-variant">Expanded to a team of 15 senior consultants, specializing in cloud-native digital transformations.</p>
              </div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-surface"></div>
              <div className="hidden md:block w-5/12"></div>
            </div>
            {/* Event 3 */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-center w-full">
              <div className="hidden md:block w-5/12"></div>
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-surface"></div>
              <div className="w-full md:w-5/12 bg-surface-container-lowest p-8 rounded-xl shadow-sm ml-8 md:ml-0">
                <span className="text-primary font-bold text-sm">Present</span>
                <h4 className="text-2xl font-black mt-2 mb-3">Market Leadership</h4>
                <p className="text-on-surface-variant">Now a premier technical partner for global brands, focused on AI integration and sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">OUR EXPERTS</span>
              <h2 className="text-5xl font-black tracking-tighter">The Minds Behind the Tech</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/team/ajay-headshot.png"
                  alt="Ajay Kanwar, CEO and Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-black">Ajay Kanwar</h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">CEO & Founder</p>
              <p className="text-on-surface-variant leading-relaxed">
                Sets direction for the firm and client engagements, with a focus on durable architecture and outcomes that scale.
              </p>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/team/suraj-headshot.png"
                  alt="Suraj Kanwar, CTO and Data Analyst"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-black">Suraj Kanwar</h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">CTO & Data Analyst</p>
              <p className="text-on-surface-variant leading-relaxed">
                Owns technical strategy, systems design, and analytics so decisions are grounded in measurable signal, not guesswork.
              </p>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/team/raman-headshot.png"
                  alt="Raman Verma, CMO and PPC Specialist"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-black">Raman Verma</h3>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">CMO & PPC Specialist</p>
              <p className="text-on-surface-variant leading-relaxed">
                Leads brand, demand, and growth programs so positioning, creative, and media work together toward pipeline and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-on-surface text-surface py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8">Ready to Scale Your Authority?</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">Join the ranks of market leaders who have transformed their digital trajectory with Caudate Tech.</p>
          <Link 
            href="/contact"
            className="px-12 py-5 rounded-full bg-white text-primary font-black text-lg hover:shadow-2xl transition-shadow active:scale-95 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

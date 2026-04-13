"use client";

import { useState } from 'react';

const SERVICES = [
  "UI/UX Design",
  "Cloud Architecture",
  "AI Engineering",
  "Product Strategy"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '$10k - $25k',
    message: ''
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          services: selectedServices
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', website: '', budget: '$10k - $25k', message: '' });
        setSelectedServices([]);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Contact Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content: Architectural Authority */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Architecting Growth</span>
              <h1 className="text-6xl md:text-7xl font-black text-on-surface tracking-tighter leading-[0.9]">
                Ready to <span className="text-primary">grow</span> your business?
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
                We don't just build interfaces; we architect digital ecosystems that scale. Connect with our team to start your transformation.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h3 className="text-primary font-bold text-sm uppercase tracking-widest">Global Offices</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-on-surface">London Studio</p>
                    <p className="text-on-surface-variant text-sm">24 Architectural Square, EC1V 2NX</p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">San Francisco</p>
                    <p className="text-on-surface-variant text-sm">101 Tech Plaza, SOMA District</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary font-bold text-sm uppercase tracking-widest">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <p className="font-bold text-on-surface">+1 (555) 012-3456</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <p className="font-bold text-on-surface">hello@caudate.tech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Map Element */}
            <div className="relative h-48 rounded-xl overflow-hidden bg-surface-container shadow-inner">
              <img 
                alt="Stylized map showing office locations" 
                className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeYMjWQcsbDfsJ00Nm_QugK4QBiM1_Myi-bQmLuLaXf-Kq1x7cPvX88YcvLyLvu5jhmCorqeUAyk9OhoRJkQGkyHrMr6tM56HRly4LL2ZH0bTn-Je1sGBUcSnJ3IZa_7XJ4GWifmj2XdhcF3FpfvHR70mNkr2Fi370jVpl2GnMqqd4qm2wfsT0cQHFx_I54SbRyknT5Q4nGfDnMUQHKSyqELvQnaXe-X2mI50QD1936v00E7hgdWMO86RBkn3joYSY-LcxAJJa624" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
            </div>
          </div>

          {/* Right Content: Conversion Engine Form */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            {status === 'success' ? (
              <div className="relative z-10 text-center py-12">
                <span className="material-symbols-outlined text-6xl text-primary mb-6">check_circle</span>
                <h2 className="text-3xl font-black mb-4">Inquiry Received</h2>
                <p className="text-on-surface-variant">Thank you for reaching out. An architect will review your project and respond within 4 business hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline">Full Name</label>
                    <input 
                      required
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all" 
                      placeholder="John Architect" 
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline">Work Email</label>
                    <input 
                      required
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all" 
                      placeholder="john@company.com" 
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline">Company Website</label>
                    <input 
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all" 
                      placeholder="https://..." 
                      type="url"
                      value={formData.website}
                      onChange={e => setFormData({...formData, website: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline">Estimated Budget</label>
                    <select 
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all appearance-none"
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    >
                      <option>$10k - $25k</option>
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline">Service Interest</label>
                  <div className="flex flex-wrap gap-3">
                    {SERVICES.map(service => (
                      <button 
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-5 py-2 rounded-full border transition-colors text-sm font-semibold ${
                          selectedServices.includes(service)
                            ? 'bg-primary border-primary text-white'
                            : 'border-outline-variant text-outline hover:bg-surface-container-high'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline">Tell us about your project</label>
                  <textarea 
                    required
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all resize-none" 
                    placeholder="What are we building together?" 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="space-y-6">
                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    <span>We typically respond within 2-4 business hours.</span>
                  </div>
                  {status === 'error' && <p className="text-error text-center font-bold">Failed to send message. Please try again.</p>}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof / Client Section */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-outline mb-12">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="text-2xl font-black tracking-tighter">VOLTAIC</span>
            <span className="text-2xl font-black tracking-tighter">HEXA_CORP</span>
            <span className="text-2xl font-black tracking-tighter">NEURALINK</span>
            <span className="text-2xl font-black tracking-tighter">QUANTUM</span>
            <span className="text-2xl font-black tracking-tighter">APEX_BIO</span>
          </div>
        </div>
      </section>
    </div>
  );
}

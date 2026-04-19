"use client";

import Link from 'next/link';
import { useState } from 'react';
import { serviceCategories } from '@/data/service-categories';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div>
      <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Stay Informed</h4>
      <p className="text-outline font-body text-sm leading-relaxed mb-4">Growth insights delivered to your inbox.</p>
      {status === 'success' ? (
        <p className="text-primary text-sm font-bold">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex bg-surface-container-low rounded-lg p-1">
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm flex-grow px-3" 
            placeholder="Email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
          <button 
            className="bg-primary text-white p-2 rounded-md hover:bg-primary-container transition-colors disabled:opacity-50"
            disabled={status === 'loading'}
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-error text-xs mt-2">Something went wrong. Try again.</p>}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-low w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-on-surface mb-6">Caudate Tech</div>
          <p className="text-outline font-body text-sm leading-relaxed mb-6">
            Engineering high-performance digital ecosystems for the modern enterprise. Data-driven, results-oriented, architecturally sound.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Services</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/services" className="text-outline hover:text-primary font-body text-sm font-bold transition-transform duration-200 hover:translate-x-1 block">
                All services
              </Link>
            </li>
            {serviceCategories.map((c) => (
              <li key={c.id}>
                <Link
                  href={c.href}
                  className="text-outline hover:text-primary font-body text-sm transition-transform duration-200 hover:translate-x-1 block"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-outline hover:text-primary font-body text-sm transition-transform duration-200 hover:translate-x-1 block">About Us</Link></li>
            <li><Link href="/case-studies" className="text-outline hover:text-primary font-body text-sm transition-transform duration-200 hover:translate-x-1 block">Case Studies</Link></li>
            <li><Link href="/contact" className="text-outline hover:text-primary font-body text-sm transition-transform duration-200 hover:translate-x-1 block">Contact</Link></li>
            <li><Link href="/privacy-policy" className="text-outline hover:text-primary font-body text-sm transition-transform duration-200 hover:translate-x-1 block">Privacy Policy</Link></li>
          </ul>
        </div>
        <NewsletterForm />
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-outline font-body text-sm">© 2026 Caudate Technologies. All rights reserved.</div>
        <div className="flex gap-6">
          <a className="text-outline-variant hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
          <a className="text-outline-variant hover:text-primary" href="#"><span className="material-symbols-outlined">hub</span></a>
          <a className="text-outline-variant hover:text-primary" href="#"><span className="material-symbols-outlined">group</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

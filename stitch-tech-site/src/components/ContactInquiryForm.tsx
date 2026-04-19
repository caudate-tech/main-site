'use client';

import { useState } from 'react';

const SERVICES = [
  'UI/UX Design',
  'Cloud Architecture',
  'AI Engineering',
  'Product Strategy',
];

type ContactInquiryFormProps = {
  className?: string;
};

export default function ContactInquiryForm({ className = '' }: ContactInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '$10k - $25k',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
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
          services: selectedServices,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          website: '',
          budget: '$10k - $25k',
          message: '',
        });
        setSelectedServices([]);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className={`bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm relative overflow-hidden ${className}`.trim()}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -mr-16 -mt-16" />

      {status === 'success' ? (
        <div className="relative z-10 text-center py-12">
          <span className="material-symbols-outlined text-6xl text-primary mb-6">check_circle</span>
          <h2 className="text-3xl font-black mb-4">Inquiry Received</h2>
          <p className="text-on-surface-variant">
            Thank you for reaching out. An architect will review your project and respond within 4
            business hours.
          </p>
          <button
            type="button"
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-outline">Estimated Budget</label>
              <select
                className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary-container transition-all appearance-none"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
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
              {SERVICES.map((service) => (
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
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="space-y-6">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-5 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
            </button>
            <div className="flex items-center justify-center gap-2 text-on-surface-variant text-sm">
              <span
                className="material-symbols-outlined text-primary text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span>We typically respond within 2-4 business hours.</span>
            </div>
            {status === 'error' ? (
              <p className="text-error text-center font-bold">Failed to send message. Please try again.</p>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';

/** Single-select options aligned with how clients actually buy from the site. */
const SERVICE_INTEREST_OPTIONS = [
  { value: 'Enterprise & SAP', label: 'Enterprise & SAP' },
  { value: 'Pipeline & growth', label: 'Pipeline & growth' },
  { value: 'Digital marketing suite', label: 'Digital marketing suite' },
  { value: 'Google Ads & paid media', label: 'Google Ads & paid media' },
  { value: 'Program guides / consulting', label: 'Program guides / consulting' },
  { value: 'Multiple or not sure yet', label: 'Multiple or not sure yet' },
] as const;

const BUDGET_OPTIONS = [
  '$300 - $1k',
  '$1k - $5k',
  '$5k - $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
] as const;

const DEFAULT_BUDGET = BUDGET_OPTIONS[0];

type ContactInquiryFormProps = {
  className?: string;
  variant?: 'default' | 'hero';
};

export default function ContactInquiryForm({
  className = '',
  variant = 'default',
}: ContactInquiryFormProps) {
  const whatsappUrl = getWhatsAppChatUrl();
  const isHero = variant === 'hero';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: DEFAULT_BUDGET,
    serviceInterest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website,
          budget: formData.budget,
          services: formData.serviceInterest ? [formData.serviceInterest] : [],
          message: formData.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          website: '',
          budget: DEFAULT_BUDGET,
          serviceInterest: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const cardPad = isHero ? 'p-5 sm:p-6 md:p-7' : 'p-8 md:p-12';
  const fieldY = 'py-3';
  const formGap = isHero ? 'space-y-4' : 'space-y-6';
  const gridGap = isHero ? 'gap-4' : 'gap-6';

  return (
    <div
      className={`bg-surface-container-lowest ${cardPad} rounded-[2rem] shadow-sm relative overflow-hidden max-h-none ${className}`.trim()}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -mr-16 -mt-16" />

      {status === 'success' ? (
        <div className="relative z-10 text-center py-8 md:py-10">
          <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
          <h2 className="text-2xl md:text-3xl font-black mb-3">Inquiry Received</h2>
          <p className="text-on-surface-variant text-sm md:text-base">
            Thank you for reaching out. We will review your note and respond within 4 business hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 text-primary font-bold hover:underline text-sm"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          {isHero ? (
            <div className="relative z-10 mb-4 space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-on-surface leading-snug">
                Tell us what you are building. We reply the same business day.
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Pick your primary focus, add details if you want, and send. No extra clicks.
              </p>
            </div>
          ) : null}

          {whatsappUrl && !isHero ? (
            <p className="relative z-10 mb-5 text-sm text-on-surface-variant">
              <span className="font-semibold text-on-surface">Prefer WhatsApp?</span>{' '}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#128C7E] hover:underline"
              >
                Open chat with Caudate
              </a>
            </p>
          ) : null}

          <form onSubmit={handleSubmit} className={`relative z-10 ${formGap}`}>
            <div className={`grid sm:grid-cols-2 ${gridGap}`}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Full Name
                </label>
                <input
                  required
                  className={`w-full bg-surface-container-low border-none rounded-xl px-3 ${fieldY} focus:ring-2 focus:ring-primary-container transition-all text-sm`}
                  placeholder="Jane Doe"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Work Email
                </label>
                <input
                  required
                  className={`w-full bg-surface-container-low border-none rounded-xl px-3 ${fieldY} focus:ring-2 focus:ring-primary-container transition-all text-sm`}
                  placeholder="you@company.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className={`grid sm:grid-cols-2 ${gridGap}`}>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Company Website
                </label>
                <input
                  className={`w-full bg-surface-container-low border-none rounded-xl px-3 ${fieldY} focus:ring-2 focus:ring-primary-container transition-all text-sm`}
                  placeholder="yourcompany.com"
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-outline">
                  Estimated budget (USD)
                </label>
                <select
                  className={`w-full bg-surface-container-low border-none rounded-xl px-3 ${fieldY} focus:ring-2 focus:ring-primary-container transition-all appearance-none text-sm`}
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-outline">
                Service interest <span className="text-error">*</span>
              </label>
              <select
                required
                className={`w-full bg-surface-container-low border-none rounded-xl px-3 ${fieldY} focus:ring-2 focus:ring-primary-container transition-all appearance-none text-sm`}
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              >
                <option value="">Choose a focus</option>
                {SERVICE_INTEREST_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-outline">
                Project notes <span className="font-normal text-outline">(optional)</span>
              </label>
              <textarea
                className={`w-full bg-surface-container-low border-none rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-primary-container transition-all resize-none text-sm min-h-[4.5rem]`}
                placeholder="Short context helps us prepare (optional)."
                rows={isHero ? 2 : 3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className={`${isHero ? 'space-y-3 pt-1' : 'space-y-4'}`}>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-3.5 sm:py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending…' : 'Submit inquiry'}
              </button>
              <div className="flex flex-col items-center gap-2 text-on-surface-variant text-xs sm:text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                  <span>We typically respond within 2 to 4 business hours.</span>
                </div>
                {whatsappUrl ? (
                  <span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#128C7E] hover:underline"
                    >
                      WhatsApp
                    </a>
                    {' · '}
                    same team
                  </span>
                ) : null}
              </div>
              {status === 'error' ? (
                <p className="text-error text-center font-bold text-sm">Something went wrong. Please try again.</p>
              ) : null}
            </div>
          </form>
        </>
      )}
    </div>
  );
}

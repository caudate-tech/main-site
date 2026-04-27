import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Caudate Technologies',
  description:
    'How Caudate Technologies collects, uses, and protects your personal information.',
};

const EFFECTIVE_DATE = 'April 19, 2026';
const COMPANY = 'Caudate Technologies';
const EMAIL = 'contact@caudate-tech.com';
const WEBSITE = 'https://caudate-tech.com';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'legal-basis', label: 'Legal Basis for Processing' },
  { id: 'sharing', label: 'Data Sharing' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'cookies', label: 'Cookies & Tracking' },
  { id: 'security', label: 'Data Security' },
  { id: 'international', label: 'International Transfers' },
  { id: 'children', label: "Children's Privacy" },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-outline-variant/15">
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
          Legal
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mt-4 mb-6 leading-[0.9]">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant">
          <span>
            <strong className="text-on-surface">Effective date:</strong>{' '}
            {EFFECTIVE_DATE}
          </span>
          <span>
            <strong className="text-on-surface">Last updated:</strong>{' '}
            {EFFECTIVE_DATE}
          </span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sticky Table of Contents */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28 space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-outline mb-4">
              Contents
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-on-surface-variant hover:text-primary transition-colors py-1 pl-3 border-l-2 border-transparent hover:border-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 prose-like space-y-16 text-on-surface">

          {/* Overview */}
          <section id="overview" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Overview
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              {COMPANY} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your personal information and your right to
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit{' '}
              <a href={WEBSITE} className="text-primary hover:underline font-medium">
                {WEBSITE}
              </a>{' '}
              or contact us about our services.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              We are a B2B digital agency providing enterprise technology
              services including SAP support, Google Ads management, SEO,
              content strategy, and performance marketing. Most visitors to our
              site are business professionals evaluating our services or
              submitting project inquiries.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Please read this policy carefully. If you disagree with its terms,
              please discontinue use of the site. If you have any questions,
              contact us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline font-medium">
                {EMAIL}
              </a>
              .
            </p>
          </section>

          {/* Information We Collect */}
          <section id="information-we-collect" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Information We Collect
            </h2>

            <h3 className="text-lg font-bold text-on-surface mb-3">
              Information You Provide to Us
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              We collect information you voluntarily provide when you:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                {
                  title: 'Submit a contact or project inquiry',
                  detail:
                    'Full name, business email address, website URL, services of interest, and your message.',
                },
                {
                  title: 'Subscribe to our newsletter',
                  detail: 'Email address only.',
                },
                {
                  title: 'Email or call us directly',
                  detail:
                    'Any information contained in your communication.',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-primary mt-0.5 text-base shrink-0">
                    check_circle
                  </span>
                  <span>
                    <strong className="text-on-surface">{item.title}:</strong>{' '}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-on-surface mb-3">
              Information Collected Automatically
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              When you visit the site, our hosting provider (Vercel) and any
              analytics tools may automatically collect:
            </p>
            <ul className="space-y-2 text-on-surface-variant">
              {[
                'IP address (anonymised where technically possible)',
                'Browser type and version',
                'Operating system',
                'Referring URL',
                'Pages visited and time spent',
                'Date and time of access',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline mt-0.5 text-sm shrink-0">
                    radio_button_unchecked
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-outline-variant/20 bg-surface-container-lowest p-6">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">We do not</strong> collect
                payment card details, government ID numbers, health information,
                or any other sensitive personal categories. Our site is not
                designed to collect personal data from consumers in a retail
                context.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section id="how-we-use" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              How We Use Your Information
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We use the information we collect for the following purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: 'chat',
                  title: 'Responding to inquiries',
                  detail:
                    'To review your project request, prepare proposals, and communicate with you.',
                },
                {
                  icon: 'campaign',
                  title: 'Marketing communications',
                  detail:
                    'To send newsletters or updates you have opted into. You may unsubscribe at any time.',
                },
                {
                  icon: 'analytics',
                  title: 'Site improvement',
                  detail:
                    'To analyse how visitors use our site and improve content and performance.',
                },
                {
                  icon: 'gavel',
                  title: 'Legal obligations',
                  detail:
                    'To comply with applicable laws, regulations, or enforceable government requests.',
                },
                {
                  icon: 'security',
                  title: 'Security',
                  detail:
                    'To detect and prevent fraudulent activity, abuse, or technical issues.',
                },
                {
                  icon: 'diversity_3',
                  title: 'Service delivery',
                  detail:
                    'To manage our business relationship and deliver contracted services.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-outline-variant/15 bg-surface-container-lowest p-5"
                >
                  <span className="material-symbols-outlined text-primary text-xl mb-3 block">
                    {item.icon}
                  </span>
                  <p className="text-sm font-bold text-on-surface mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-on-surface-variant leading-relaxed mt-6">
              We will never sell, rent, or trade your personal information to
              third parties for their own marketing purposes.
            </p>
          </section>

          {/* Legal Basis */}
          <section id="legal-basis" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              If you are located in the European Economic Area (EEA) or United
              Kingdom, we process your personal data under one or more of the
              following lawful bases:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant/20">
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Activity
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    [
                      'Responding to a contact or project inquiry',
                      'Legitimate interests (pre-contractual steps)',
                    ],
                    [
                      'Sending newsletters you subscribed to',
                      'Consent',
                    ],
                    [
                      'Analysing site usage',
                      'Legitimate interests (improving our service)',
                    ],
                    [
                      'Compliance with legal obligations',
                      'Legal obligation',
                    ],
                    [
                      'Delivering contracted services',
                      'Performance of a contract',
                    ],
                  ].map(([activity, basis]) => (
                    <tr
                      key={activity}
                      className="hover:bg-surface-container-lowest/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-on-surface-variant">
                        {activity}
                      </td>
                      <td className="py-3 px-4 font-medium text-on-surface">
                        {basis}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Sharing */}
          <section id="sharing" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Data Sharing
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We do not sell or share your personal data with third parties
              except in the following limited circumstances:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Hosting and infrastructure (Vercel)',
                  detail:
                    'Our website is hosted on Vercel, Inc. (USA). Server logs and technical data are processed on their platform under their privacy policy.',
                },
                {
                  title: 'Email service provider',
                  detail:
                    'We use a transactional email service to deliver inquiry confirmations and notifications. Your email address is transmitted to this provider solely for delivery purposes.',
                },
                {
                  title: 'Analytics',
                  detail:
                    'If we use web analytics tools, aggregated and anonymised usage data may be processed by that provider. We do not share personally identifiable data with analytics platforms.',
                },
                {
                  title: 'Legal requirements',
                  detail:
                    'We may disclose your information if required by law, court order, or governmental authority, or to protect our legal rights.',
                },
                {
                  title: 'Business transfers',
                  detail:
                    'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your data is subject to a materially different privacy policy.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-outline-variant/15 bg-surface-container-lowest p-5"
                >
                  <span className="material-symbols-outlined text-primary mt-0.5 text-base shrink-0">
                    share
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Retention */}
          <section id="retention" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Data Retention
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              We retain personal data only for as long as necessary to fulfil the
              purposes for which it was collected, or as required by law.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant/20">
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Data Type
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Retention Period
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    ['Contact form submissions', '3 years from last interaction'],
                    ['Newsletter subscriptions', 'Until you unsubscribe'],
                    ['Server and access logs', 'Up to 90 days'],
                    ['Contracted client data', 'Duration of engagement plus 7 years (legal/tax compliance)'],
                  ].map(([type, period]) => (
                    <tr
                      key={type}
                      className="hover:bg-surface-container-lowest/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-on-surface-variant">
                        {type}
                      </td>
                      <td className="py-3 px-4 font-medium text-on-surface">
                        {period}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Your Rights */}
          <section id="your-rights" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Your Rights
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>

            <h3 className="text-base font-bold text-on-surface mb-3">
              GDPR Rights (EEA and UK residents)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { right: 'Access', detail: 'Request a copy of the data we hold about you.' },
                { right: 'Rectification', detail: 'Ask us to correct inaccurate or incomplete data.' },
                { right: 'Erasure', detail: 'Request deletion of your personal data ("right to be forgotten").' },
                { right: 'Restriction', detail: 'Ask us to limit how we process your data.' },
                { right: 'Portability', detail: 'Receive your data in a structured, machine-readable format.' },
                { right: 'Objection', detail: 'Object to processing based on legitimate interests or for direct marketing.' },
                { right: 'Withdraw consent', detail: 'Where processing is based on consent, withdraw it at any time.' },
                { right: 'Lodge a complaint', detail: 'File a complaint with your local data protection authority.' },
              ].map((item) => (
                <div
                  key={item.right}
                  className="rounded-xl border border-outline-variant/15 bg-surface-container-lowest p-4"
                >
                  <p className="text-sm font-bold text-on-surface mb-1">
                    {item.right}
                  </p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-base font-bold text-on-surface mb-3">
              CCPA Rights (California residents)
            </h3>
            <ul className="space-y-2 text-on-surface-variant text-sm mb-6">
              {[
                'Know what personal information is collected, used, shared, or sold.',
                'Delete personal information held by us.',
                'Opt out of the sale of personal information (we do not sell personal data).',
                'Non-discrimination for exercising any of the above rights.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm shrink-0">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-primary/5 border border-primary/15 p-6">
              <p className="text-sm text-on-surface leading-relaxed">
                To exercise any of these rights, email us at{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-primary font-medium hover:underline"
                >
                  {EMAIL}
                </a>
                . We will respond within 30 days. We may need to verify your
                identity before processing your request.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Cookies and Tracking
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              We use cookies and similar technologies to operate and improve the
              site. Cookies are small text files stored on your device.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest border-b border-outline-variant/20">
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Purpose
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-on-surface">
                      Can be disabled?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    ['Strictly necessary', 'Core site functionality (session state, security)', 'No'],
                    ['Performance / analytics', 'Understanding how visitors use the site', 'Yes'],
                    ['Marketing / targeting', 'Not currently used', 'N/A'],
                  ].map(([type, purpose, disable]) => (
                    <tr
                      key={type}
                      className="hover:bg-surface-container-lowest/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-on-surface">
                        {type}
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        {purpose}
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        {disable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              You can control cookies through your browser settings. Disabling
              strictly necessary cookies may affect site functionality. For more
              information, visit{' '}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </section>

          {/* Data Security */}
          <section id="security" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Data Security
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access, alteration,
              disclosure, or destruction. These include:
            </p>
            <ul className="space-y-2 text-on-surface-variant text-sm mb-6">
              {[
                'HTTPS encryption for all data in transit',
                'Access controls limiting who within our organisation can view personal data',
                'Regular review of data handling practices',
                'Hosting on Vercel infrastructure with enterprise-grade security',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-sm shrink-0">
                    lock
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              No method of transmission over the internet is 100% secure. While
              we strive to protect your personal data, we cannot guarantee
              absolute security. In the event of a data breach affecting your
              rights and freedoms, we will notify you and relevant authorities as
              required by law.
            </p>
          </section>

          {/* International Transfers */}
          <section id="international" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              International Data Transfers
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              {COMPANY} operates globally and serves clients in the United
              States, European Union, and other regions. Your information may be
              transferred to and processed in countries outside your own,
              including the United States, where data protection laws may differ.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Where we transfer personal data from the EEA or UK to a third
              country, we rely on appropriate transfer mechanisms such as
              Standard Contractual Clauses (SCCs) or an adequacy decision by the
              relevant authority. You may request details of these mechanisms by
              contacting us at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary hover:underline font-medium"
              >
                {EMAIL}
              </a>
              .
            </p>
          </section>

          {/* Children */}
          <section id="children" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Children&apos;s Privacy
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Our site and services are directed exclusively at businesses and
              professionals. We do not knowingly collect personal data from
              anyone under the age of 16. If you believe a child has provided us
              with personal information, please contact us immediately at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary hover:underline font-medium"
              >
                {EMAIL}
              </a>{' '}
              and we will promptly delete it.
            </p>
          </section>

          {/* Changes */}
          <section id="changes" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Changes to This Policy
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in law, technology, or our practices. When we make
              material changes, we will update the &quot;Last updated&quot; date
              at the top of this page.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              We encourage you to review this policy periodically. Your
              continued use of the site after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-32">
            <h2 className="text-3xl font-black tracking-tight text-on-surface mb-6">
              Contact Us
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal data, please contact us:
            </p>
            <div className="rounded-2xl border border-outline-variant/15 bg-surface-container-lowest p-8 space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                  business
                </span>
                <div>
                  <p className="font-bold text-on-surface">{COMPANY}</p>
                  <p className="text-sm text-on-surface-variant">
                    Data Controller
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">
                  email
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-primary hover:underline font-medium"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">
                  public
                </span>
                <a
                  href={WEBSITE}
                  className="text-primary hover:underline font-medium"
                >
                  {WEBSITE}
                </a>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-block rounded-2xl bg-gradient-to-r from-primary to-primary-container px-8 py-4 text-white font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                Get in Touch
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}

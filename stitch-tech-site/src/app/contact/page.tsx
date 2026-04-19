import ContactInquiryForm from '@/components/ContactInquiryForm';
import { getWhatsAppChatUrl } from '@/lib/whatsapp';
import PlatformsWeWorkWithLogos from '@/components/PlatformsWeWorkWithLogos';

export default function ContactPage() {
  const whatsappUrl = getWhatsAppChatUrl();
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
                We don&apos;t just build interfaces; we architect digital ecosystems that scale. Connect with our team to start your transformation.
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
                  {whatsappUrl ? (
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">chat</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#128C7E] hover:underline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  ) : null}
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
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
            </div>
          </div>

          <ContactInquiryForm />
        </div>
      </section>

      {/* Tools & ecosystems */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-outline mb-3">
            Tools & ecosystems we operate in
          </p>
          <p className="text-center text-sm text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            SAP, cloud, and paid media stacks our architects and media leads use in production.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-10 md:gap-x-14 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <PlatformsWeWorkWithLogos />
          </div>
        </div>
      </section>
    </div>
  );
}

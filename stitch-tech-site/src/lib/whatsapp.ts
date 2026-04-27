/**
 * WhatsApp click-to-chat (wa.me). Uses +1 201 632 1255 by default (same as Contact page).
 * Override with NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, no +), e.g. 12016321255.
 */
const DEFAULT_WHATSAPP_DIGITS = '12016321255';

export function getWhatsAppChatUrl(prefillMessage?: string): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP_DIGITS;
  const digits = raw.replace(/\D/g, '');
  if (!digits) return null;
  const text = encodeURIComponent(
    prefillMessage ??
      "Hi, I'd like to discuss a project with Caudate Tech.",
  );
  return `https://wa.me/${digits}?text=${text}`;
}

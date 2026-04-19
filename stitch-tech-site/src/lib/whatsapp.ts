/**
 * WhatsApp Business click-to-chat. Set NEXT_PUBLIC_WHATSAPP_NUMBER to digits only
 * (e.g. 15551234567, no +). If unset, helpers return null and UI should hide links.
 */
export function getWhatsAppChatUrl(prefillMessage?: string): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!raw?.trim()) return null;
  const digits = raw.replace(/\D/g, '');
  if (!digits) return null;
  const text = encodeURIComponent(
    prefillMessage ??
      "Hi, I'd like to discuss a project with Caudate Technologies.",
  );
  return `https://wa.me/${digits}?text=${text}`;
}

import { isPlaceholder, site } from "./site";

/**
 * Prefilled WhatsApp messages, shared by the floating button and the FAQ link.
 * src/scripts/whatsapp.ts appends the Conversation code at click time.
 */
export type WhatsAppContext = "home" | "odontologia" | "harmonizacao" | "legal";

const messages: Record<WhatsAppContext, string> = {
  home: "Olá! Vim pelo site do Hofclin e quero tirar uma dúvida.",
  odontologia: "Olá! Vim pela página de odontologia do Hofclin e quero tirar uma dúvida.",
  harmonizacao: "Olá! Vim pela página de harmonização orofacial do Hofclin e quero tirar uma dúvida.",
  legal: "Olá! Vim pelo site do Hofclin e tenho uma dúvida sobre os termos ou a privacidade.",
};

/** The server-rendered link for a context; `href` is "#whatsapp" while the number is a placeholder. */
export function whatsappLink(context: WhatsAppContext): { number: string; message: string; href: string } {
  const number = isPlaceholder(site.whatsapp.number) ? "" : site.whatsapp.number;
  const message = messages[context];
  const href = number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#whatsapp";
  return { number, message, href };
}

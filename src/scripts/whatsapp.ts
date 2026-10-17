import { track } from "./analytics";

/**
 * Appends a Conversation code (CONTEXT.md) to the prefilled message at click time and
 * records it on `whatsapp_click`, so a chat can be traced to its campaign and page.
 * The server-rendered href already works without JS — it just has no code.
 */
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

function conversationCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  return Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join("");
}

export function initWhatsAppLinks(): void {
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[data-whatsapp]");
    if (!link) return;
    const number = link.dataset.whatsappNumber;
    const message = link.dataset.whatsappMessage ?? "";
    if (!number) {
      event.preventDefault();
      console.info("[hofclin] Número do WhatsApp não configurado (site.whatsapp.number).");
      return;
    }
    const code = conversationCode();
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(`${message} (cód. ${code})`)}`;
    track("whatsapp_click", {
      conversation_code: code,
      wa_placement: link.dataset.whatsappPlacement ?? null,
      wa_context: link.dataset.whatsappContext ?? null,
    });
  });
}

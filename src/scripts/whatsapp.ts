import { track } from "./analytics";
import { readConsent } from "./consent";

/**
 * Appends a Conversation code (CONTEXT.md) to the prefilled message at click time and
 * records it on `whatsapp_click`, so a chat can be traced to its campaign and page.
 * Only with Analytics consent — the code is useless without the event that maps it, so
 * without Analytics the chat goes out uncoded. The server-rendered href works without JS.
 */
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
/** 31^6 ≈ 887 million codes: ~0.06% chance of any collision at 1,000 clicks, ~5% at 10,000. */
const CODE_LENGTH = 6;
/** Largest multiple of the alphabet size that fits in a byte; higher bytes are redrawn to avoid modulo bias. */
const UNBIASED_LIMIT = 256 - (256 % ALPHABET.length);

function conversationCode(): string {
  let code = "";
  while (code.length < CODE_LENGTH) {
    for (const byte of crypto.getRandomValues(new Uint8Array(CODE_LENGTH))) {
      if (byte < UNBIASED_LIMIT && code.length < CODE_LENGTH) code += ALPHABET[byte % ALPHABET.length];
    }
  }
  return code;
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
    const code = readConsent()?.analytics ? conversationCode() : null;
    const text = code ? `${message} (cód. ${code})` : message;
    link.href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    // Still pushed without Analytics: a Marketing-only visitor's GTM forwards it to the ad pixels.
    track("whatsapp_click", {
      conversation_code: code,
      wa_placement: link.dataset.whatsappPlacement ?? null,
      wa_context: link.dataset.whatsappContext ?? null,
    });
  });
}

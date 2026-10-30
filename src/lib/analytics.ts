import type { WhatsAppSource } from "./business";

type GoogleTag = (command: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GoogleTag;
  }
}

// A futura integração de consentimento deve atualizar este estado em cada carregamento.
// Não carrega tags, cria cookies ou considera consentimento concedido por padrão.
let analyticsConsent = false;

export function setWhatsAppAnalyticsConsent(granted: boolean) {
  if (typeof window !== "undefined") analyticsConsent = granted;
}

/** Retorna se o evento foi entregue à função gtag, não se houve coleta ou conversa. */
export function trackWhatsAppClick(source: WhatsAppSource): boolean {
  const measurementId = import.meta.env["VITE_GA4_MEASUREMENT_ID"];
  if (
    typeof window === "undefined" ||
    !analyticsConsent ||
    typeof measurementId !== "string" ||
    !/^G-[A-Z0-9]{6,}$/.test(measurementId) ||
    typeof window.gtag !== "function"
  )
    return false;

  try {
    // Um único destino e um único emissor. Não duplicar este evento em triggers do GTM.
    window.gtag("event", "whatsapp_click", { section: source, send_to: measurementId });
    return true;
  } catch {
    // Falhas ou bloqueadores de analytics nunca impedem o contato pelo WhatsApp.
    return false;
  }
}

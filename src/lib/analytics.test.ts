import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setWhatsAppAnalyticsConsent, trackWhatsAppClick } from "./analytics";

// Identificador sintético somente nos testes. O gtag é simulado, sem qualquer requisição de rede.
const testMeasurementId = "G-TESTONLY01";

beforeEach(() => {
  setWhatsAppAnalyticsConsent(false);
  vi.stubEnv("VITE_GA4_MEASUREMENT_ID", "");
  window.gtag = vi.fn();
});

afterEach(() => {
  setWhatsAppAnalyticsConsent(false);
  delete window.gtag;
  vi.unstubAllEnvs();
});

describe("adaptador GA4 de cliques no WhatsApp", () => {
  it("não envia sem propriedade configurada, mesmo com consentimento", () => {
    setWhatsAppAnalyticsConsent(true);
    expect(trackWhatsAppClick("hero")).toBe(false);
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("não envia sem consentimento, mesmo com tag e propriedade disponíveis", () => {
    vi.stubEnv("VITE_GA4_MEASUREMENT_ID", testMeasurementId);
    expect(trackWhatsAppClick("hero")).toBe(false);
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("não envia para configuração inválida", () => {
    vi.stubEnv("VITE_GA4_MEASUREMENT_ID", "sem propriedade");
    setWhatsAppAnalyticsConsent(true);
    expect(trackWhatsAppClick("hero")).toBe(false);
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("envia um único clique com seção e destino, sem mensagem ou dados pessoais", () => {
    vi.stubEnv("VITE_GA4_MEASUREMENT_ID", testMeasurementId);
    setWhatsAppAnalyticsConsent(true);
    expect(trackWhatsAppClick("troca_oleo")).toBe(true);
    expect(window.gtag).toHaveBeenCalledExactlyOnceWith("event", "whatsapp_click", {
      section: "troca_oleo",
      send_to: testMeasurementId,
    });
  });

  it("interrompe o envio quando a permissão é revogada, sem reenviar cliques antigos", () => {
    vi.stubEnv("VITE_GA4_MEASUREMENT_ID", testMeasurementId);
    setWhatsAppAnalyticsConsent(true);
    trackWhatsAppClick("hero");
    setWhatsAppAnalyticsConsent(false);
    expect(trackWhatsAppClick("final")).toBe(false);
    setWhatsAppAnalyticsConsent(true);
    expect(window.gtag).toHaveBeenCalledTimes(1);
  });

  it("não falha se a tag não estiver carregada ou for bloqueada", () => {
    vi.stubEnv("VITE_GA4_MEASUREMENT_ID", testMeasurementId);
    setWhatsAppAnalyticsConsent(true);
    delete window.gtag;
    expect(trackWhatsAppClick("hero")).toBe(false);
    window.gtag = () => {
      throw new Error("tag bloqueada");
    };
    expect(trackWhatsAppClick("hero")).toBe(false);
  });
});

import { describe, expect, it } from "vitest";
import {
  BUSINESS,
  SERVICE_WHATSAPP_SOURCES,
  WHATSAPP_MESSAGES,
  WHATSAPP_NUMBER,
  serviceMessage,
  whatsappUrl,
} from "./business";

describe("whatsapp", () => {
  it("usa o número da Nostrink's", () => {
    expect(whatsappUrl()).toMatch(/^https:\/\/wa\.me\/5547997067216\?text=/);
    expect(BUSINESS.phoneE164).toBe(WHATSAPP_NUMBER);
  });
  it.each(Object.entries(SERVICE_WHATSAPP_SOURCES))(
    "usa a mensagem contextual de %s",
    (service, source) => {
      expect(new URL(whatsappUrl(serviceMessage(service))).searchParams.get("text")).toBe(
        WHATSAPP_MESSAGES[source],
      );
    },
  );

  it.each(Object.entries(WHATSAPP_MESSAGES))(
    "preserva acentos e pontuação na URL de %s",
    (_source, message) => {
      const url = new URL(whatsappUrl(message));
      expect(url.origin).toBe("https://wa.me");
      expect(url.pathname).toBe(`/${WHATSAPP_NUMBER}`);
      expect(url.searchParams.get("text")).toBe(message);
      expect([...url.searchParams.keys()]).toEqual(["text"]);
    },
  );

  it("usa o contato genérico no cabeçalho, hero e flutuante", () => {
    expect(WHATSAPP_MESSAGES.hero).toBe("Oi! Vim pelo site da Nostrink's e quero um orçamento.");
    expect(WHATSAPP_MESSAGES.cabecalho).toBe(WHATSAPP_MESSAGES.hero);
    expect(WHATSAPP_MESSAGES.flutuante).toBe(WHATSAPP_MESSAGES.hero);
  });
});

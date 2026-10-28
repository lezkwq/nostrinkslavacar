import { describe, expect, it } from "vitest";
import { serviceMessage, whatsappUrl } from "./business";

describe("whatsapp", () => {
  it("usa o número da Nostrink's", () => {
    expect(whatsappUrl()).toMatch(/^https:\/\/wa\.me\/5547997067216\?text=/);
  });
  it("inclui o nome do serviço na mensagem", () => {
    expect(decodeURIComponent(whatsappUrl(serviceMessage("Polimento automotivo")))).toContain(
      "polimento automotivo",
    );
  });
});

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { WHATSAPP_MESSAGES, type WhatsAppSource } from "@/lib/business";
import { setWhatsAppAnalyticsConsent } from "@/lib/analytics";
import { WhatsAppLink } from "./WhatsAppLink";

// Não há coleta real: tag simulada e ID restrito a este arquivo de testes.
const testMeasurementId = "G-TESTONLY01";
const blockNavigation = (event: Event) => event.preventDefault();

beforeEach(() => {
  vi.stubEnv("VITE_GA4_MEASUREMENT_ID", testMeasurementId);
  window.gtag = vi.fn();
  setWhatsAppAnalyticsConsent(true);
  document.addEventListener("click", blockNavigation);
  document.addEventListener("auxclick", blockNavigation);
});

afterEach(() => {
  cleanup();
  setWhatsAppAnalyticsConsent(false);
  delete window.gtag;
  document.removeEventListener("click", blockNavigation);
  document.removeEventListener("auxclick", blockNavigation);
  vi.unstubAllEnvs();
});

describe("emissor único nos links de WhatsApp", () => {
  it("registra um evento por clique nos 13 links, incluindo clique no SVG", () => {
    const sources: WhatsAppSource[] = [
      ...(Object.keys(WHATSAPP_MESSAGES) as WhatsAppSource[]),
      "localizacao",
    ];
    render(
      <div>
        {sources.map((source, i) => (
          <WhatsAppLink key={i} source={source} withFill={i % 2 === 0} />
        ))}
      </div>,
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(13);
    links.forEach((link, i) => {
      const source = sources[i]!;
      fireEvent.click(link.querySelector("svg")!);
      expect(window.gtag).toHaveBeenNthCalledWith(i + 1, "event", "whatsapp_click", {
        section: source,
        send_to: testMeasurementId,
      });
      expect(new URL(link.getAttribute("href")!).searchParams.get("text")).toBe(
        WHATSAPP_MESSAGES[source],
      );
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
    expect(window.gtag).toHaveBeenCalledTimes(13);
  });

  it("não registra um clique cuja navegação foi cancelada pelo consumidor", () => {
    render(<WhatsAppLink source="hero" onClick={(event) => event.preventDefault()} />);
    fireEvent.click(screen.getByRole("link"));
    expect(window.gtag).not.toHaveBeenCalled();
  });

  it("trata clique principal e botão do meio uma vez, ignorando o botão direito", () => {
    render(<WhatsAppLink source="hero" />);
    const link = screen.getByRole("link");
    fireEvent.click(link, { button: 0 });
    fireEvent(link, new MouseEvent("auxclick", { button: 1, bubbles: true, cancelable: true }));
    fireEvent(link, new MouseEvent("auxclick", { button: 2, bubbles: true, cancelable: true }));
    expect(window.gtag).toHaveBeenCalledTimes(2);
  });
});

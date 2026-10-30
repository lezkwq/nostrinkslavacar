import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <div className="whatsapp-float">
      <WhatsAppLink
        source="flutuante"
        withFill={false}
        className="whatsapp-float-link"
        aria-label="Pedir orçamento pelo WhatsApp"
      >
        {null}
      </WhatsAppLink>
    </div>
  );
}

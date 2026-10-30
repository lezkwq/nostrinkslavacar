// Dados da empresa. O número de WhatsApp aparece no material oficial da marca (arte com ícone do WhatsApp).
// Google Maps conferido em 30/10/2026: nota 4,5 e 40 avaliações, endereço e telefone correspondentes.
export const WHATSAPP_NUMBER = "5547997067216";

export const BUSINESS = {
  name: "Nostrink’s Lavacar",
  street: "Av. Governador Celso Ramos, 1868",
  city: "Porto Belo, Santa Catarina",
  cep: "CEP 88210 000",
  phoneDisplay: "(47) 99706 7216",
  phoneE164: WHATSAPP_NUMBER,
  instagram: "https://www.instagram.com/nostrinks_atacadao/",
  rating: "4,5",
  reviewsCount: 40,
};

const ADDRESS_Q = encodeURIComponent(
  "Nostrink's Lavacar, Av. Governador Celso Ramos, 1868, Porto Belo, SC, 88210 000",
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_Q}`;
export const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_Q}`;

export const WHATSAPP_MESSAGES = {
  cabecalho: "Oi! Vim pelo site da Nostrink's e quero um orçamento.",
  hero: "Oi! Vim pelo site da Nostrink's e quero um orçamento.",
  lavagem: "Oi! Quero um orçamento para lavagem ou estética do meu veículo.",
  pintura: "Oi! Gostaria de um orçamento para pintura ou estofados.",
  mecanica: "Oi! Preciso de um orçamento para mecânica ou elétrica.",
  troca_oleo: "Oi! Quero um orçamento para troca de óleo do meu veículo.",
  vidros: "Oi! Quero um orçamento para serviços em vidros.",
  motos: "Oi! Gostaria de um orçamento para serviço na minha moto.",
  galeria: "Oi! Vi os trabalhos no site e gostaria de solicitar um orçamento.",
  localizacao: "Oi! Vim pelo site e gostaria de informações sobre o atendimento.",
  final: "Oi! Quero solicitar um orçamento na Nostrink's.",
  flutuante: "Oi! Vim pelo site da Nostrink's e quero um orçamento.",
} as const;

export type WhatsAppSource = keyof typeof WHATSAPP_MESSAGES;

export const SERVICE_WHATSAPP_SOURCES: Record<string, WhatsAppSource> = {
  "Lavação e estética": "lavagem",
  "Pintura e estofados": "pintura",
  "Mecânica e elétrica": "mecanica",
  Vidros: "vidros",
};

export const DEFAULT_MSG = WHATSAPP_MESSAGES.hero;

export function whatsappUrl(message: string = DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(service: string) {
  return WHATSAPP_MESSAGES[SERVICE_WHATSAPP_SOURCES[service] ?? "hero"];
}

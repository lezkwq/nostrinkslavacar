// Dados da empresa. O número de WhatsApp aparece no material oficial da marca (arte com ícone do WhatsApp).
// Confirmar nota/avaliações do Google e serviços antes da publicação definitiva.
export const BUSINESS = {
  name: "Nostrink’s Lavacar",
  street: "Av. Governador Celso Ramos, 1868",
  city: "Porto Belo, Santa Catarina",
  cep: "CEP 88210-000",
  phoneDisplay: "(47) 99706-7216",
  phoneE164: "5547997067216",
  instagram: "https://www.instagram.com/nostrinks_atacadao/",
  rating: "4,5",
  reviewsCount: 40,
};

const ADDRESS_Q = encodeURIComponent(
  "Nostrink's Lavacar, Av. Governador Celso Ramos, 1868, Porto Belo - SC, 88210-000",
);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_Q}`;
export const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_Q}`;

export const DEFAULT_MSG =
  "Olá! Conheci a Nostrink’s pelo site e gostaria de saber mais sobre os serviços para meu veículo.";

export function whatsappUrl(message: string = DEFAULT_MSG) {
  return `https://wa.me/${BUSINESS.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(service: string) {
  return `Olá! Conheci a Nostrink’s pelo site e gostaria de consultar o serviço de ${service.toLowerCase()} para meu veículo.`;
}

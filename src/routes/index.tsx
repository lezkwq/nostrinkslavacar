import { createFileRoute } from "@tanstack/react-router";
import { OriginLink } from "@/components/ui/origin-button";
import { Header, Wordmark } from "@/components/site/Header";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import {
  BUSINESS,
  MAPS_URL,
  ROUTE_URL,
  SERVICE_WHATSAPP_SOURCES,
  type WhatsAppSource,
} from "@/lib/business";
import pintura from "@/assets/pintura.webp";
import pastilhaUsada from "@/assets/pastilha-usada.webp";
import freios from "@/assets/freios.webp";
import insulfilm from "@/assets/insulfilm.webp";
import kawasakiOrla from "@/assets/kawasaki-orla.webp";
import kawasakiPatio from "@/assets/kawasaki-patio.webp";
import hondaOrla from "@/assets/honda-orla.webp";
import peugeot from "@/assets/peugeot.webp";
import volvo from "@/assets/volvo.webp";
import heroDesktop from "@/assets/hero-desktop-volvo.webp";
import polimento from "@/assets/polimento.webp";
import fachada from "@/assets/fachada.webp";

const TITLE = "Nostrink’s Lavacar | Centro automotivo completo em Porto Belo";
const DESC =
  "Na Nostrink’s Lavacar, em Porto Belo, você encontra lavação, estética, pintura, estofados, mecânica, elétrica e vidros. Consulte seu serviço pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: BUSINESS.name,
          telephone: "+55 47 99706 7216",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: "Porto Belo",
            addressRegion: "SC",
            postalCode: "88210 000",
            addressCountry: "BR",
          },
          sameAs: [BUSINESS.instagram],
        }),
      },
    ],
  }),
  component: Index,
});

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const SERVICES = [
  {
    name: "Lavação e estética",
    items: [
      "Lavação completa",
      "Ducha rápida",
      "Lavagem de moto",
      "Higienização automotiva",
      "Polimento e vitrificação",
      "Insulfilm",
    ],
  },
  {
    name: "Pintura e estofados",
    items: ["Pintura", "Chapeação e pequenos retoques", "Conserto de bancos de couro e estofados"],
  },
  {
    name: "Mecânica e elétrica",
    items: [
      "Troca de óleo e filtro com óleos originais",
      "Mecânica leve",
      "Parte elétrica",
      "Instalação de som",
      "Instalação de alarme",
      "Trava elétrica",
      "Troca de fechaduras automotivas",
    ],
  },
  {
    name: "Vidros",
    items: [
      "Troca de parabrisa",
      "Troca de vidro lateral e traseiro",
      "Conserto de máquina de vidro",
      "Troca de limpador de parabrisa",
      "Troca de lâmpadas",
    ],
  },
];

const REVIEWS = [
  {
    author: "Dawginat",
    text: "Muito bom o serviço do pessoal, simpáticos e dedicados! Leandro é muito atencioso.",
  },
  { author: "Joce Brito", text: "Ótimo atendimento, super indico." },
  {
    author: "Jocelaine Gonçalves",
    text: "Pessoas bacanas. Até o momento, só utilizei o serviço de ducha rápida. Obrigada pelo atendimento.",
  },
];

type PillLinkProps = {
  children?: React.ReactNode;
  variant?: "brand" | "light" | "navy" | "outline";
} & (
  | { href: string; external?: boolean; whatsappSource?: never }
  | { whatsappSource: WhatsAppSource; href?: never; external?: never }
);

function PillLink({
  href,
  whatsappSource,
  children,
  variant = "brand",
  external = true,
}: PillLinkProps) {
  const styles = {
    brand: "bg-brand text-brand-foreground hover:brightness-95",
    light: "bg-on-photo/90 text-navy hover:bg-on-photo",
    navy: "bg-navy text-navy-foreground hover:opacity-90",
    outline: "border border-navy/25 text-navy hover:border-navy",
  }[variant];
  const className = `inline-flex max-w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-px ${styles}`;
  if (whatsappSource) {
    return (
      <WhatsAppLink source={whatsappSource} variant={variant} className={className}>
        {children}
      </WhatsAppLink>
    );
  }
  return (
    <OriginLink variant={variant} href={href} {...(external ? ext : {})} className={className}>
      {children}
    </OriginLink>
  );
}

function Index() {
  return (
    <div id="topo" className="overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section
          aria-label="Apresentação"
          className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-navy"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktop} />
            <img
              src={volvo}
              alt="Volvo branco no pátio da Nostrink’s Lavacar em Porto Belo"
              fetchPriority="high"
              width={1200}
              height={1500}
              className="absolute inset-0 h-full w-full object-cover object-[50%_60%] md:object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-hero-shade" aria-hidden />
          <div className="hero-copy relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center text-on-photo md:pt-[10vh]">
            <h1 className="text-display animate-rise">
              Da lavação à mecânica.
              <br />
              Nostrink’s em Porto Belo.
            </h1>
            <p className="animate-rise mt-4 max-w-md text-base opacity-95 [animation-delay:120ms] md:text-lg">
              Centro automotivo completo na Avenida Governador Celso Ramos. Estética, pintura,
              estofados, elétrica e vidros no mesmo endereço.
            </p>
            <blockquote className="hero-verse mt-5 max-w-xl text-sm leading-relaxed">
              <p>
                “Eis que tenho posto diante de ti uma porta aberta, a qual ninguém pode fechar.”
              </p>
              <cite className="mt-1 block text-xs not-italic">Apocalipse 3:8</cite>
            </blockquote>
            <div className="animate-rise mt-6 flex flex-col gap-3 [animation-delay:220ms] sm:flex-row">
              <PillLink whatsappSource="hero" />
              <PillLink href="#servicos" variant="light" external={false}>
                Conhecer os serviços
              </PillLink>
            </div>
            <a
              href={MAPS_URL}
              {...ext}
              className="hero-rating mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-navy underline-offset-4 hover:underline"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                className="h-3.5 w-3.5 shrink-0 text-brand"
              >
                <path d="m12 2 2.81 6.63 7.19.61-5.46 4.73L18.18 21 12 17.27 5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2Z" />
              </svg>
              <span>
                {BUSINESS.rating} no Google. {BUSINESS.reviewsCount} avaliações.
              </span>
            </a>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-36">
          <div className="grid gap-10 md:grid-cols-12">
            <p className="eyebrow text-muted-foreground md:col-span-3">Porto Belo · SC</p>
            <h2 className="text-section text-navy md:col-span-9">
              Lavação, reparos e manutenção em um só endereço.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-graphite md:col-span-6 md:col-start-7">
              Na Nostrink’s Lavacar, em Porto Belo, a visita pode ser para uma ducha rápida, um
              retoque na pintura ou a manutenção do carro. Conte o que seu veículo precisa e combine
              o atendimento com a equipe.
            </p>
          </div>
          <hr className="mt-24 border-border" />
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-7xl scroll-mt-20 px-6 pb-28 md:px-10">
          <div className="services-layout grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="services-content">
              <div className="services-intro">
                <h2 className="text-section max-w-xl text-navy">
                  Tudo o que fazemos na Nostrink’s.
                </h2>
                <p className="mt-5 max-w-md text-muted-foreground">
                  Da limpeza aos reparos, veja o que você pode resolver na Nostrink’s. Fale com a
                  equipe sobre o serviço e a disponibilidade.
                </p>
              </div>
              <ol className="services-list mt-12 border-t border-border">
                {SERVICES.map((s, i) => (
                  <li
                    key={s.name}
                    className="group grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 border-b border-border py-7"
                  >
                    <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-navy transition-transform duration-300 group-hover:translate-x-1">
                        {s.name}
                      </h3>
                      <ul className="mt-4 space-y-2 text-graphite/80">
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {s.name === "Lavação e estética" && (
                        <figure className="service-photo mt-6 lg:hidden">
                          <div className="overflow-hidden">
                            <img
                              src={polimento}
                              alt="Polimento em execução com politriz na pintura de um carro preto"
                              width={1448}
                              height={1086}
                              loading="lazy"
                              decoding="async"
                              className="h-auto w-full"
                            />
                          </div>
                          <figcaption className="mt-2 text-xs text-muted-foreground">
                            Polimento automotivo em execução.
                          </figcaption>
                        </figure>
                      )}
                      {s.name === "Mecânica e elétrica" && (
                        <div className="mt-6 border-l-2 border-brand py-1 pl-4">
                          <h4 className="font-display text-xl font-bold text-navy">
                            Troca de óleo para o seu veículo.
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-graphite">
                            Fale com nossa equipe e solicite um orçamento para troca de óleo.
                          </p>
                          <WhatsAppLink
                            source="troca_oleo"
                            className="mt-3 inline-flex max-w-full items-center justify-center rounded-full bg-brand px-4 py-3 text-sm font-medium text-brand-foreground"
                          />
                        </div>
                      )}
                      <WhatsAppLink
                        source={SERVICE_WHATSAPP_SOURCES[s.name] ?? "hero"}
                        withFill={false}
                        className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-navy underline decoration-brand decoration-2 underline-offset-[6px] hover:decoration-navy"
                      >
                        Orçamento no WhatsApp
                      </WhatsAppLink>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="services-polishing-photo service-photo hidden lg:block">
              <div className="overflow-hidden">
                <img
                  src={polimento}
                  alt="Polimento em execução com politriz na pintura de um carro preto"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">
                Polimento automotivo em execução.
              </figcaption>
            </figure>
            <figure className="services-main-photo service-photo lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden">
                <img
                  src={pintura}
                  alt="Traseira de hatch verde com papel e fita de proteção durante pintura"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Pintura na oficina da Nostrink’s.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="informacoes" className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <div className="grid gap-14 border-t border-border pt-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy">Quanto custa</h2>
              <dl className="mt-8 divide-y divide-border">
                <div className="pb-6">
                  <dt className="text-lg text-graphite">Ducha rápida</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-navy">
                    A partir de R$ 10
                  </dd>
                  <dd className="mt-1 text-sm text-muted-foreground">Varia conforme avaliação.</dd>
                </div>
                <div className="py-6">
                  <dt className="text-lg text-graphite">Lavagem completa</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-navy">
                    A partir de R$ 80
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="text-lg text-graphite">Lavagem detalhada</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-navy">
                    A partir de R$ 300
                  </dd>
                </div>
              </dl>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Valor final definido na avaliação, conforme o veículo e o estado da sujeira.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-navy">Horário de atendimento</h2>
              {/* CONFIRMAR COM O DONO: ordem de chegada ou hora marcada? */}
              <p className="mt-8 leading-relaxed text-graphite">
                Segunda a sábado: das 7h às 12h e das 13h às 18h.
              </p>
              <p className="mt-3 leading-relaxed text-graphite">
                Atendimento variável aos domingos.{" "}
                <WhatsAppLink
                  source="localizacao"
                  showIcon={false}
                  className="underline decoration-brand decoration-2 underline-offset-4"
                >
                  Confirme pelo WhatsApp antes de vir.
                </WhatsAppLink>
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-2xl font-bold text-navy">Garantia</h3>
                <p className="mt-3 leading-relaxed text-graphite">
                  Alguns serviços contam com garantia. Consulte as condições e os prazos com nossa
                  equipe.
                </p>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-2xl font-bold text-navy">Forma de pagamento</h3>
                <p className="mt-3 leading-relaxed text-graphite">
                  Pix, cartão e boleto, com opção de parcelamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRABALHOS */}
        <section id="trabalhos" className="scroll-mt-16 bg-secondary/60 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <h2 className="text-section text-navy md:col-span-7">
                Dentro da Nostrink’s.
                <br />
                Do processo ao acabamento.
              </h2>
              <p className="max-w-sm text-graphite md:col-span-4 md:col-start-9">
                Pintura, manutenção e acabamento na Nostrink’s Lavacar, em Porto Belo.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Photo
                src={pintura}
                alt="Hatch verde protegido com papel e fita durante pintura"
                caption="Pintura e preparação na oficina"
              />
              <Photo
                src={pastilhaUsada}
                alt="Pastilha de freio com desgaste e fissuras na mão"
                caption="Detalhe da pastilha desgastada"
              />
              <Photo
                src={freios}
                alt="Pastilha nova apresentada junto ao disco de freio"
                caption="Pastilha nova junto ao conjunto de freio"
              />
              <Photo
                src={insulfilm}
                alt="Comparação entre película deteriorada e área limpa no vidro lateral"
                caption="Insulfilm: comparação no vidro lateral"
              />
              <Photo
                src={peugeot}
                alt="Peugeot 208 azul no pátio da Nostrink’s"
                caption="Peugeot 208 no pátio"
              />
              <Photo
                src={volvo}
                alt="Volvo XC90 branco no pátio da Nostrink’s"
                caption="Volvo XC90 no pátio"
              />
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PillLink whatsappSource="galeria" />
              <PillLink href={BUSINESS.instagram} variant="outline">
                Ver mais trabalhos no Instagram
              </PillLink>
            </div>
          </div>
        </section>

        <section id="motos" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow text-muted-foreground">Lavação de motos em Porto Belo</p>
          <h2 className="text-section mt-5 max-w-3xl text-navy">
            Duas rodas têm espaço próprio na Nostrink’s.
          </h2>
          <p className="mt-6 max-w-xl text-graphite">
            Da Kawasaki à Honda, sua moto também tem lugar na Nostrink’s. Consulte o serviço de
            lavagem em Porto Belo.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Photo
              src={kawasakiPatio}
              alt="Kawasaki verde e preta no pátio da oficina"
              caption="Kawasaki no pátio da Nostrink’s"
            />
            <Photo
              src={kawasakiOrla}
              alt="Kawasaki verde e preta na orla com o mar ao fundo"
              caption="Kawasaki na orla"
            />
            <Photo
              src={hondaOrla}
              alt="Honda vermelha na orla com o mar e as montanhas ao fundo"
              caption="Honda na orla"
            />
          </div>
          <div className="mt-8">
            <PillLink whatsappSource="motos" />
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section
          id="avaliacoes"
          className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-section text-navy">O que os clientes dizem da Nostrink’s.</h2>
              <p className="mt-5 text-muted-foreground">
                Quase 10 anos de experiência no setor automotivo.
              </p>
              <p className="mt-8 font-display text-6xl font-extrabold text-navy">
                {BUSINESS.rating}
                <span className="text-2xl font-medium text-muted-foreground"> / 5</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {BUSINESS.reviewsCount} avaliações no Google
              </p>
              <div className="mt-8">
                <PillLink href={MAPS_URL} variant="outline">
                  Ver avaliações no Google
                </PillLink>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {REVIEWS.map((r) => (
                <blockquote
                  key={r.author}
                  className="border-t border-border py-8 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-2xl font-semibold leading-snug text-navy md:text-3xl">
                    “{r.text}”
                  </p>
                  <footer className="mt-4 text-sm text-muted-foreground">
                    {r.author}, via Google
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="duvidas" className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-12">
            <h2 className="text-section text-navy md:col-span-4">Perguntas frequentes</h2>
            <div className="divide-y divide-border md:col-span-7 md:col-start-6">
              <details className="pb-6">
                <summary className="cursor-pointer font-display text-xl font-semibold text-navy">
                  O orçamento de mecânica é gratuito?
                </summary>
                <p className="mt-4 leading-relaxed text-graphite">
                  Sim, o orçamento de mecânica é gratuito.
                </p>
              </details>
              <details className="py-6">
                <summary className="cursor-pointer font-display text-xl font-semibold text-navy">
                  Vocês buscam e entregam o veículo?
                </summary>
                <p className="mt-4 leading-relaxed text-graphite">
                  Sim, oferecemos serviço de busca e entrega sem custo. Consulte a disponibilidade
                  para sua localização.
                </p>
              </details>
              <details className="py-6">
                <summary className="cursor-pointer font-display text-xl font-semibold text-navy">
                  Quanto tempo demora o serviço?
                </summary>
                <p className="mt-4 leading-relaxed text-graphite">
                  O prazo depende do serviço e das condições do veículo. Entre em contato para
                  consultar o tempo estimado.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
            <h2 className="text-section text-navy">
              Encontre a Nostrink’s na Avenida Governador Celso Ramos.
            </h2>
            <div>
              <address className="not-italic text-lg leading-relaxed text-graphite">
                <strong className="font-display text-xl text-navy">{BUSINESS.name}</strong>
                <br />
                {BUSINESS.street}
                <br />
                {BUSINESS.city}
                <br />
                {BUSINESS.cep}
                <br />
                <a
                  href={`tel:+${BUSINESS.phoneE164}`}
                  className="mt-3 inline-block underline-offset-4 hover:underline"
                >
                  Telefone: {BUSINESS.phoneDisplay}
                </a>
              </address>
              <div className="mt-8 flex flex-col gap-3 xl:flex-row">
                <PillLink href={ROUTE_URL} variant="navy">
                  Ver rota até a Nostrink’s
                </PillLink>
                <PillLink whatsappSource="localizacao" />
              </div>
            </div>
            <figure className="md:col-span-2">
              <img
                src={fachada}
                alt="Fachada e entrada da Nostrink’s Lavacar em Porto Belo"
                width={1600}
                height={783}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Fachada da Nostrink’s Lavacar em Porto Belo.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-navy text-navy-foreground">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
            <h2 className="text-display max-w-4xl">O que seu veículo precisa hoje, Porto Belo?</h2>
            <p className="mt-6 max-w-lg text-lg opacity-80">
              Clique no botão de WhatsApp, conte o que seu veículo precisa e solicite uma avaliação
              ou um orçamento à equipe da Nostrink’s.
            </p>
            <div className="mt-10">
              <PillLink whatsappSource="final" />
            </div>
          </div>
        </section>
      </main>

      <footer data-site-footer className="bg-navy pb-24 text-navy-foreground md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-navy-foreground/15 px-6 py-12 text-sm md:grid-cols-4 md:px-10">
          <Wordmark className="text-xl" />
          <p className="opacity-75">
            {BUSINESS.street}
            <br />
            {BUSINESS.city} · {BUSINESS.cep}
            <br />
            {BUSINESS.phoneDisplay}
          </p>
          <nav aria-label="Rodapé" className="flex flex-col gap-2 opacity-75">
            <a href="#servicos" className="hover:opacity-100 hover:underline">
              Serviços
            </a>
            <a href="#trabalhos" className="hover:underline">
              Trabalhos
            </a>
            <a href="#motos" className="hover:underline">
              Motos
            </a>
            <a href="#avaliacoes" className="hover:underline">
              Avaliações
            </a>
            <a href="#localizacao" className="hover:underline">
              Localização
            </a>
          </nav>
          <div className="flex flex-col gap-2 opacity-75">
            <a href={BUSINESS.instagram} {...ext} className="hover:underline">
              Instagram
            </a>
            <a href={MAPS_URL} {...ext} className="hover:underline">
              Google Maps
            </a>
            <p className="mt-4 opacity-70">{new Date().getFullYear()} Nostrink’s Lavacar</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

function Photo({
  src,
  alt,
  caption,
  className = "",
  ratio = "aspect-[4/5]",
  pos = "object-center",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  ratio?: string;
  pos?: string;
}) {
  return (
    <figure className={`group overflow-hidden ${className}`}>
      <div className={`overflow-hidden ${ratio}`}>
        <img
          src={src}
          alt={alt}
          width={1200}
          height={1500}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${pos} transition-transform duration-700 group-hover:scale-[1.02]`}
        />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

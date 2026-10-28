import { createFileRoute } from "@tanstack/react-router";
import { Header, Wordmark } from "@/components/site/Header";
import { BUSINESS, MAPS_URL, ROUTE_URL, serviceMessage, whatsappUrl } from "@/lib/business";
import heroDesktop from "@/assets/hero-desktop.jpg.asset.json";
import heroMobile from "@/assets/hero-mobile.jpg.asset.json";
import farol from "@/assets/farol.jpg.asset.json";
import suv from "@/assets/suv-preto.jpg.asset.json";
import coupe from "@/assets/coupe-preto.jpg.asset.json";
import mini from "@/assets/mini.jpg.asset.json";
import azul from "@/assets/carro-azul.jpg.asset.json";
import moto from "@/assets/moto.jpg.asset.json";

const TITLE = "Nostrink’s Lavacar — Lavação e estética automotiva em Porto Belo, SC";
const DESC =
  "Lavação, polimento, higienização e troca de óleo em Porto Belo, SC. Agende pelo WhatsApp com a Nostrink’s Lavacar.";

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
          "@type": "AutoWash",
          name: BUSINESS.name,
          telephone: "+55 47 99706-7216",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: "Porto Belo",
            addressRegion: "SC",
            postalCode: "88210-000",
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
  { name: "Lavação automotiva", text: "Limpeza e cuidados para manter seu veículo bem apresentado no dia a dia." },
  { name: "Polimento automotivo", text: "Cuidados com o acabamento e a aparência da pintura do seu veículo." },
  { name: "Higienização automotiva", text: "Limpeza de áreas internas e superfícies do veículo, conforme o serviço disponível." },
  { name: "Troca de óleo e fluidos", text: "Serviços de manutenção e troca de fluidos para o cuidado do seu veículo." },
];

const REVIEWS = [
  { author: "Dawginat", text: "Muito bom o serviço do pessoal, simpáticos e dedicados! Leandro é muito atencioso." },
  { author: "Joce Brito", text: "Ótimo atendimento, super indico." },
  { author: "Jocelaine Gonçalves", text: "Pessoas bacanas. Até o momento, só utilizei o serviço de ducha rápida. Obrigada pelo atendimento." },
];

function PillLink({ href, children, variant = "brand", external = true }: { href: string; children: React.ReactNode; variant?: "brand" | "light" | "navy" | "outline"; external?: boolean }) {
  const styles = {
    brand: "bg-brand text-brand-foreground hover:brightness-95",
    light: "bg-on-photo/90 text-navy hover:bg-on-photo",
    navy: "bg-navy text-navy-foreground hover:opacity-90",
    outline: "border border-navy/25 text-navy hover:border-navy",
  }[variant];
  return (
    <a href={href} {...(external ? ext : {})} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-px ${styles}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div id="topo" className="overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section aria-label="Apresentação" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-navy md:h-[92vh]">
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktop.url} />
            <img src={heroMobile.url} alt="Mercedes-Benz preta estacionada em estrada litorânea, com o mar ao fundo" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[42%_40%] md:object-[50%_15%]" />
          </picture>
          <div className="absolute inset-0 bg-hero-shade" aria-hidden />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center text-on-photo md:pt-[11vh]">
            <h1 className="text-display animate-rise">
              Seu carro merece
              <br />
              um cuidado à altura.
            </h1>
            <p className="animate-rise mt-5 max-w-md text-base opacity-95 [animation-delay:120ms] md:text-lg">
              Lavação, estética automotiva e serviços para cuidar do seu veículo em Porto Belo.
            </p>
            <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:220ms] sm:flex-row">
              <PillLink href={whatsappUrl()}>Agendar pelo WhatsApp</PillLink>
              <PillLink href="#servicos" variant="light" external={false}>Conhecer os serviços</PillLink>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pt-36">
          <div className="grid gap-10 md:grid-cols-12">
            <p className="eyebrow text-muted-foreground md:col-span-3">Porto Belo · SC</p>
            <h2 className="text-section text-navy md:col-span-9">Seu veículo em boas mãos.</h2>
            <p className="max-w-xl text-lg leading-relaxed text-graphite md:col-span-6 md:col-start-7">
              Da lavação aos cuidados de estética automotiva, a Nostrink’s reúne serviços para quem valoriza a aparência, a conservação e o cuidado com o próprio veículo.
            </p>
          </div>
          <hr className="mt-24 border-border" />
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-7xl scroll-mt-20 px-6 pb-28 md:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-section max-w-xl text-navy">Cuidados para cada detalhe do seu veículo.</h2>
              <p className="mt-5 max-w-md text-muted-foreground">Conheça os serviços da Nostrink’s e encontre o atendimento ideal para o seu carro.</p>
              <ol className="mt-12 border-t border-border">
                {SERVICES.map((s, i) => (
                  <li key={s.name} className="group grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 border-b border-border py-7">
                    <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold text-navy transition-transform duration-300 group-hover:translate-x-1">{s.name}</h3>
                      <p className="mt-2 max-w-md text-graphite/80">{s.text}</p>
                      <a href={whatsappUrl(serviceMessage(s.name))} {...ext} className="mt-4 inline-block text-sm font-medium text-navy underline decoration-brand decoration-2 underline-offset-[6px] hover:decoration-navy">
                        Consultar serviço →
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <figure className="lg:sticky lg:top-24 lg:self-start">
              <img src={coupe.url} alt="Mercedes-Benz coupé preta com a pintura brilhando após cuidado na Nostrink’s" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="mt-3 text-xs text-muted-foreground">Foto real · Instagram da Nostrink’s</figcaption>
            </figure>
          </div>
        </section>

        {/* TRABALHOS */}
        <section id="trabalhos" className="scroll-mt-16 bg-secondary/60 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <h2 className="text-section text-navy md:col-span-7">
                Trabalhos reais.
                <br />
                Cuidado em cada detalhe.
              </h2>
              <p className="max-w-sm text-graphite md:col-span-4 md:col-start-9">Conheça alguns dos veículos e serviços apresentados pela Nostrink’s.</p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
              <Photo src={farol.url} alt="Farol antes e depois da restauração" caption="Farol — antes e depois" className="md:col-span-5 md:row-span-2" ratio="aspect-[3/4]" />
              <Photo src={suv.url} alt="SUV preto limpo no pátio da Nostrink’s" caption="SUV preto" className="md:col-span-7" ratio="aspect-[16/11]" pos="object-[50%_55%]" />
              <Photo src={azul.url} alt="Carro azul após lavação" caption="Hatch azul" className="md:col-span-4" ratio="aspect-square" />
              <Photo src={mini.url} alt="Mini preto com acabamento brilhante" caption="Mini" className="md:col-span-3" ratio="aspect-[3/4] md:aspect-auto md:h-full" />
              <Photo src={moto.url} alt="Motocicleta vermelha atendida na Nostrink’s" caption="Motocicletas também" className="md:col-span-12" ratio="aspect-[4/3] md:aspect-[21/8]" pos="object-[50%_45%]" />
            </div>
            <div className="mt-12">
              <PillLink href={BUSINESS.instagram} variant="navy">Ver mais trabalhos no Instagram</PillLink>
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section id="avaliacoes" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="text-section text-navy">Quem conhece, recomenda.</h2>
              <p className="mt-8 font-display text-6xl font-extrabold text-navy">
                {BUSINESS.rating}
                <span className="text-2xl font-medium text-muted-foreground"> / 5</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span aria-hidden className="mr-2 tracking-widest text-brand-foreground">★★★★☆</span>
                {BUSINESS.reviewsCount} avaliações no Google
              </p>
              <div className="mt-8">
                <PillLink href={MAPS_URL} variant="outline">Ver avaliações no Google</PillLink>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              {REVIEWS.map((r) => (
                <blockquote key={r.author} className="border-t border-border py-8 first:border-t-0 first:pt-0">
                  <p className="font-display text-2xl font-semibold leading-snug text-navy md:text-3xl">“{r.text}”</p>
                  <footer className="mt-4 text-sm text-muted-foreground">— {r.author}, via Google</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="scroll-mt-16 border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
            <h2 className="text-section text-navy">Seu próximo cuidado começa aqui.</h2>
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
                <a href={`tel:+${BUSINESS.phoneE164}`} className="mt-3 inline-block underline-offset-4 hover:underline">
                  Telefone: {BUSINESS.phoneDisplay}
                </a>
              </address>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PillLink href={ROUTE_URL} variant="navy">Traçar rota</PillLink>
                <PillLink href={whatsappUrl()} variant="outline">Falar com a Nostrink’s</PillLink>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-navy text-navy-foreground">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
            <h2 className="text-display max-w-4xl">Seu carro merece esse cuidado.</h2>
            <p className="mt-6 max-w-lg text-lg opacity-80">Entre em contato com a Nostrink’s, consulte os serviços disponíveis e combine seu atendimento.</p>
            <div className="mt-10">
              <PillLink href={whatsappUrl()}>Conversar pelo WhatsApp</PillLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy pb-24 text-navy-foreground md:pb-0">
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
            <a href="#servicos" className="hover:opacity-100 hover:underline">Serviços</a>
            <a href="#trabalhos" className="hover:underline">Trabalhos</a>
            <a href="#avaliacoes" className="hover:underline">Avaliações</a>
            <a href="#localizacao" className="hover:underline">Localização</a>
          </nav>
          <div className="flex flex-col gap-2 opacity-75">
            <a href={BUSINESS.instagram} {...ext} className="hover:underline">Instagram</a>
            <a href={MAPS_URL} {...ext} className="hover:underline">Google Maps</a>
            <p className="mt-4 opacity-70">© {new Date().getFullYear()} Nostrink’s Lavacar</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante no mobile */}
      <a href={whatsappUrl()} {...ext} className="fixed bottom-4 right-4 z-30 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground md:hidden" aria-label="Conversar pelo WhatsApp">
        WhatsApp
      </a>
    </div>
  );
}

function Photo({ src, alt, caption, className = "", ratio, pos = "object-center" }: { src: string; alt: string; caption: string; className?: string; ratio: string; pos?: string }) {
  return (
    <figure className={`group overflow-hidden ${className}`}>
      <div className={`overflow-hidden ${ratio}`}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${pos} transition-transform duration-700 group-hover:scale-[1.02]`} />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

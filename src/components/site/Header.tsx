import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/business";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#motos", label: "Motos" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-tight ${className}`}>
      Nostrink’s<span className="ml-1.5 font-medium opacity-75">Lavacar</span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const solid = scrolled || open;
  const tone = solid ? "text-navy" : "text-on-photo";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-5 md:grid-cols-[1fr_auto_1fr] md:px-10 ${tone}`}
      >
        <nav aria-label="Principal" className="hidden gap-8 text-sm md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="opacity-90 transition-opacity hover:opacity-100 hover:underline underline-offset-8"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#topo"
          aria-label="Nostrink’s Lavacar, início"
          className="min-w-0 justify-self-start text-lg md:justify-self-center md:text-xl"
        >
          <Wordmark />
        </a>
        <div className="flex items-center justify-end gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-px"
          >
            Consultar
          </a>
          <button
            type="button"
            className="rounded-full px-3 py-2 text-sm md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          className="border-t border-border bg-background px-5 pb-6 md:hidden"
        >
          {NAV.concat({ href: "#localizacao", label: "Localização" }).map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-2xl font-bold text-navy"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

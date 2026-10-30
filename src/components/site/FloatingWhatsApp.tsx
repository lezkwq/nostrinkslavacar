import { useEffect, useRef } from "react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export function FloatingWhatsApp() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = document.querySelector("[data-site-footer]");
    const container = containerRef.current;
    if (!footer || !container) return;
    let frame = 0;
    let nearFooter = false;
    let previousLift = 0;
    const update = () => {
      if (!nearFooter) {
        if (previousLift) container.style.setProperty("--footer-overlap", "0px");
        previousLift = 0;
        return;
      }
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 64;
        const maxLift = Math.max(
          0,
          window.innerHeight - headerHeight - container.offsetHeight - 32,
        );
        const lift = Math.min(overlap, maxLift);
        if (lift !== previousLift) container.style.setProperty("--footer-overlap", `${lift}px`);
        previousLift = lift;
        frame = 0;
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        nearFooter = Boolean(entry?.isIntersecting);
        update();
      },
      { rootMargin: "0px 0px 96px 0px" },
    );
    observer.observe(footer);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={containerRef} className="whatsapp-float">
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

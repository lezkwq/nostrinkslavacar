import type { ComponentProps, SVGProps, MouseEvent } from "react";
import { OriginLink } from "@/components/ui/origin-button";
import { WHATSAPP_MESSAGES, whatsappUrl, type WhatsAppSource } from "@/lib/business";
import { trackWhatsAppClick } from "@/lib/analytics";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.44 0 .07 5.37.07 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.94 11.94 0 0 0 5.84 1.49h.01C18.65 23.86 24 18.49 24 11.9a11.88 11.88 0 0 0-3.48-8.42ZM12.04 21.84a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.96.98-3.59-.24-.37a9.87 9.87 0 0 1-1.51-5.28c0-5.48 4.46-9.94 9.95-9.94a9.86 9.86 0 0 1 7.03 2.91 9.85 9.85 0 0 1 2.91 7.02c0 5.48-4.47 9.94-9.95 9.94Zm5.46-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

type WhatsAppLinkProps = Omit<ComponentProps<typeof OriginLink>, "href" | "target" | "rel"> & {
  source: WhatsAppSource;
  showIcon?: boolean;
  withFill?: boolean;
};

export function WhatsAppLink({
  source,
  showIcon = true,
  withFill = true,
  variant = "brand",
  children = "Pedir orçamento no WhatsApp",
  onClick,
  onAuxClick,
  ...props
}: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (!event.defaultPrevented && event.button === 0) trackWhatsAppClick(source);
  }

  function handleAuxClick(event: MouseEvent<HTMLAnchorElement>) {
    onAuxClick?.(event);
    if (!event.defaultPrevented && event.button === 1) trackWhatsAppClick(source);
  }

  const linkProps = {
    ...props,
    href: whatsappUrl(WHATSAPP_MESSAGES[source]),
    target: "_blank",
    rel: "noopener noreferrer",
    "data-whatsapp-source": source,
    "data-analytics-event": "whatsapp_click",
    onClick: handleClick,
    onAuxClick: handleAuxClick,
  };
  const content = showIcon ? (
    <span className="whatsapp-label">
      <WhatsAppIcon className="whatsapp-icon" />
      {children != null && <span>{children}</span>}
    </span>
  ) : (
    children
  );
  if (!withFill || !showIcon) return <a {...linkProps}>{content}</a>;
  return (
    <OriginLink {...linkProps} variant={variant}>
      {content}
    </OriginLink>
  );
}

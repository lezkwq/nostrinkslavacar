import type { AnchorHTMLAttributes, FocusEvent, PointerEvent } from "react";

type OriginLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "brand" | "light" | "navy" | "outline";
};

function setOrigin(node: HTMLAnchorElement, x: number, y: number) {
  const { width, height } = node.getBoundingClientRect();
  const diameter =
    2 *
    Math.max(
      Math.hypot(x, y),
      Math.hypot(width - x, y),
      Math.hypot(x, height - y),
      Math.hypot(width - x, height - y),
    );
  node.style.setProperty("--origin-x", `${x}px`);
  node.style.setProperty("--origin-y", `${y}px`);
  node.style.setProperty("--origin-size", `${Math.ceil(diameter)}px`);
}

export function OriginLink({
  children,
  className = "",
  variant = "brand",
  onPointerEnter,
  onFocus,
  ...props
}: OriginLinkProps) {
  function handlePointerEnter(event: PointerEvent<HTMLAnchorElement>) {
    onPointerEnter?.(event);
    if (
      event.defaultPrevented ||
      !window.matchMedia("(min-width: 1024px) and (hover: hover)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin(event.currentTarget, event.clientX - rect.left, event.clientY - rect.top);
  }

  function handleFocus(event: FocusEvent<HTMLAnchorElement>) {
    onFocus?.(event);
    if (event.defaultPrevented || !window.matchMedia("(min-width: 1024px)").matches) return;
    if (event.currentTarget.matches(":focus-visible")) {
      const rect = event.currentTarget.getBoundingClientRect();
      setOrigin(event.currentTarget, rect.width / 2, rect.height / 2);
    }
  }

  return (
    <a
      {...props}
      className={`origin-button ${className}`}
      data-origin-variant={variant}
      onPointerEnter={handlePointerEnter}
      onFocus={handleFocus}
    >
      <span className="origin-button-label">{children}</span>
    </a>
  );
}

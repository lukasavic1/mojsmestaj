"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import type { Dictionary } from "../../lib/dictionaries";
import { IconClose, IconMenu } from "./icons";
import { Photo } from "./Photo";
import { useViewport } from "./viewport";

/** Click-drag horizontal scroll with inertia, accounting for the scaled preview frame. */
function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let active = false;
    let moved = false;
    let locked: "x" | "y" | null = null;
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;
    let velocity = 0;
    let pointerId = 0;
    let raf = 0;

    const scaleOf = () => {
      const rect = el.getBoundingClientRect();
      return rect.width / Math.max(1, el.offsetWidth);
    };

    const stopCoast = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.classList.remove("is-coasting");
    };

    const childLeft = (child: HTMLElement) =>
      child.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;

    const snapToNearest = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      let best = childLeft(children[0]);
      let dist = Infinity;
      for (const child of children) {
        const left = childLeft(child);
        const d = Math.abs(left - el.scrollLeft);
        if (d < dist) {
          dist = d;
          best = left;
        }
      }
      el.scrollTo({ left: best, behavior: "smooth" });
    };

    const coast = (now: number) => {
      const dt = Math.min(32, now - lastT);
      lastT = now;
      el.scrollLeft += velocity * dt;
      velocity *= Math.exp(-0.0048 * dt);
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft <= 0 || el.scrollLeft >= max) velocity = 0;
      if (Math.abs(velocity) < 0.035) {
        stopCoast();
        snapToNearest();
        return;
      }
      raf = requestAnimationFrame(coast);
    };

    const down = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, label")) return;

      stopCoast();
      active = true;
      moved = false;
      locked = event.pointerType === "mouse" ? "x" : null;
      pointerId = event.pointerId;
      lastX = event.clientX;
      lastY = event.clientY;
      lastT = performance.now();
      velocity = 0;
      if (locked === "x") {
        el.classList.add("is-dragging");
        try {
          el.setPointerCapture(pointerId);
        } catch {
          /* ignore */
        }
      }
    };

    const move = (event: PointerEvent) => {
      if (!active || event.pointerId !== pointerId) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const now = performance.now();

      if (!locked) {
        if (Math.abs(dx) < 4 && Math.abs(dy) < 4) return;
        locked = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
        if (locked === "y") {
          active = false;
          return;
        }
        el.classList.add("is-dragging");
        try {
          el.setPointerCapture(pointerId);
        } catch {
          /* ignore */
        }
      }

      if (locked !== "x") return;

      const scale = scaleOf();
      const dt = Math.max(8, now - lastT);
      const delta = dx / scale;
      el.scrollLeft -= delta;
      velocity = -delta / dt;
      lastX = event.clientX;
      lastY = event.clientY;
      lastT = now;
      if (Math.abs(dx) > 2) moved = true;
      event.preventDefault();
    };

    const up = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      const wasMoved = moved;
      active = false;
      locked = null;
      el.classList.remove("is-dragging");
      if (!wasMoved) return;

      const block = (click: Event) => {
        click.preventDefault();
        click.stopPropagation();
      };
      el.addEventListener("click", block, true);
      window.setTimeout(() => el.removeEventListener("click", block, true), 140);

      if (Math.abs(velocity) > 0.05) {
        el.classList.add("is-coasting");
        lastT = performance.now();
        raf = requestAnimationFrame(coast);
      } else {
        snapToNearest();
      }
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move, { passive: false });
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    return () => {
      stopCoast();
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, []);

  return ref;
}

export function ScrollX({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useDragScroll<HTMLDivElement>();
  return (
    <div ref={ref} className={`tpl-scroll-x ${className}`}>
      {children}
    </div>
  );
}

export function SnapRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <ScrollX className={`snap-x snap-proximity items-stretch gap-3 py-1 ${className}`}>{children}</ScrollX>;
}

export function SnapCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article className={`flex w-[min(78%,17.5rem)] shrink-0 snap-start flex-col self-stretch ${className}`}>{children}</article>
  );
}

/** Full-width single-item slider with position dots. */
export function SnapCarousel({
  children,
  dotClass = "bg-current",
  className = "",
}: {
  children: ReactNode;
  dotClass?: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  const scrollerRef = useDragScroll<HTMLDivElement>();

  return (
    <div className={className}>
      <div
        ref={scrollerRef}
        className="tpl-scroll-x snap-x snap-proximity items-stretch gap-3 py-1"
        onScroll={(event) => {
          const el = event.currentTarget;
          setIndex(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)));
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex w-full shrink-0 snap-center flex-col self-stretch">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-center gap-1.5">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${dotClass} ${i === index ? "w-6 opacity-100" : "w-1.5 opacity-30"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full min-w-0 max-w-6xl px-4 vp-t:px-6 vp-d:px-8 ${className}`}>{children}</div>;
}

export function StickyBar({
  children,
  className = "border-slate-200/80 bg-white/90",
  variant = "bar",
}: {
  children: ReactNode;
  className?: string;
  variant?: "bar" | "pill";
}) {
  if (variant === "pill") {
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div
          className={`pointer-events-auto flex max-w-full items-center justify-between gap-3 rounded-full px-4 py-2 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] backdrop-blur-md ${className}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 border-t px-4 py-3 backdrop-blur-md vp-t:px-6 ${className}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">{children}</div>
    </div>
  );
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const scroller = el.closest(".tpl-preview-scroll");
  if (scroller instanceof HTMLElement) {
    const top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 56;
    scroller.scrollTo({ top, behavior: "smooth" });
    return;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AspectMedia({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
  eager = false,
  onClick,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  eager?: boolean;
  onClick?: () => void;
}) {
  return (
    <div className={`relative w-full min-w-0 overflow-hidden ${ratio} ${className}`}>
      <Photo src={src} alt={alt} eager={eager} onClick={onClick} className="absolute inset-0" />
    </div>
  );
}

/** Display photo with a hard height cap so cards never blow past the container. */
export function FramedMedia({
  src,
  alt,
  ratio = "aspect-[16/10]",
  className = "",
  eager = false,
  onClick,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  eager?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`tpl-img-zoom relative w-full min-w-0 overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(28,32,36,0.4)] ${ratio} max-h-[420px] vp-t:max-h-[450px] vp-d:max-h-[460px] ${className}`}
    >
      <Photo src={src} alt={alt} eager={eager} onClick={onClick} className="absolute inset-0" />
    </div>
  );
}

export function Avatar({
  src,
  alt,
  size = "h-14 w-14 vp-dt:h-16 vp-dt:w-16",
}: {
  src: string;
  alt: string;
  size?: string;
}) {
  return (
    <div className={`relative ${size} shrink-0 overflow-hidden rounded-full`}>
      <Photo src={src} alt={alt} className="h-full w-full" />
    </div>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-10 vp-t:py-12 vp-d:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  eyebrowClass = "",
  leadClass = "",
  titleClass = "",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  eyebrowClass?: string;
  leadClass?: string;
  titleClass?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className={`mt-2 text-2xl font-bold tracking-tight vp-t:text-3xl vp-d:text-4xl ${titleClass}`}>{title}</h2>
      {lead && <p className={`mt-3 text-sm leading-relaxed vp-d:text-base ${leadClass}`}>{lead}</p>}
    </div>
  );
}

export function InquiryForm({
  dict,
  accentClass,
  inputClass,
  buttonClass,
}: {
  dict: Dictionary;
  accentClass?: string;
  inputClass: string;
  buttonClass: string;
}) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return <p className={`text-sm font-semibold ${accentClass ?? ""}`}>{dict.tplDemoSent}</p>;
  }
  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input required placeholder={dict.tplDemoName} className={`min-h-12 px-4 ${inputClass}`} />
      <input required type="email" placeholder={dict.tplDemoEmail} className={`min-h-12 px-4 ${inputClass}`} />
      <div className="grid grid-cols-1 gap-3 vp-dt:grid-cols-2">
        <input type="date" defaultValue="2026-08-20" className={`min-h-12 px-4 ${inputClass}`} aria-label={dict.tplDemoCheckIn} />
        <input type="date" defaultValue="2026-08-24" className={`min-h-12 px-4 ${inputClass}`} aria-label={dict.tplDemoCheckOut} />
      </div>
      <textarea rows={3} placeholder={dict.tplDemoMessage} className={`resize-none px-4 py-3 ${inputClass}`} />
      <button type="submit" className={`min-h-12 px-4 ${buttonClass}`}>
        {dict.tplDemoSend}
      </button>
    </form>
  );
}

export function SiteNav({
  brand,
  links,
  ctaLabel,
  onCta,
  menuLabel,
  closeLabel,
  barClass,
  linkClass,
  ctaClass,
  drawerClass,
}: {
  brand: ReactNode;
  links: ReadonlyArray<readonly [string, string]>;
  ctaLabel: string;
  onCta: () => void;
  menuLabel: string;
  closeLabel: string;
  barClass: string;
  linkClass: string;
  ctaClass: string;
  drawerClass: string;
}) {
  const [open, setOpen] = useState(false);
  const viewport = useViewport();
  // 768px can't hold a full inline nav next to the wordmark and the CTA, so
  // tablet shares the mobile drawer and only keeps the booking CTA inline.
  const compact = viewport !== "desktop";
  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`sticky top-0 z-40 ${barClass}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2 vp-t:px-6 vp-d:px-8">
        <div className="min-w-0 flex-1 truncate">{brand}</div>
        {!compact && (
          <nav className="flex min-w-0 items-center gap-5">
            {links.map(([label, id]) => (
              <button key={id} type="button" onClick={() => go(id)} className={`min-h-12 whitespace-nowrap px-1 text-[13px] ${linkClass}`}>
                {label}
              </button>
            ))}
          </nav>
        )}
        {viewport !== "mobile" && (
          <button type="button" onClick={onCta} className={`ml-auto inline-flex min-h-12 shrink-0 items-center px-5 ${ctaClass}`}>
            {ctaLabel}
          </button>
        )}
        {compact && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center"
            aria-label={menuLabel}
          >
            <IconMenu className="h-5 w-5" />
          </button>
        )}
      </div>

      {open && compact && (
        <div className="fixed inset-0 z-50">
          <button type="button" className="absolute inset-0 bg-black/50" aria-label={closeLabel} onClick={() => setOpen(false)} />
          <aside className={`absolute inset-y-0 right-0 flex w-[min(100%,280px)] flex-col p-4 ${drawerClass}`}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">{menuLabel}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 min-w-12 items-center justify-center"
                aria-label={closeLabel}
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-4 flex flex-col gap-1">
              {links.map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => go(id)}
                  className="min-h-12 rounded-lg px-3 text-left text-sm font-semibold"
                >
                  {label}
                </button>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onCta();
              }}
              className={`mt-4 min-h-12 px-4 ${ctaClass}`}
            >
              {ctaLabel}
            </button>
          </aside>
        </div>
      )}
    </header>
  );
}

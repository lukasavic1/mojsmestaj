"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Dictionary } from "../lib/dictionaries";
import { applyTemplateSelection } from "../lib/template-selection";
import { IconClose, IconMonitor, IconSmartphone, IconTablet } from "./templates-demo/icons";
import { ViewportProvider } from "./templates-demo/viewport";
import { getTemplateCopy, type TemplateItem, type Viewport } from "./templates-demo/types";

const VIEWPORTS: { id: Viewport; Icon: typeof IconMonitor }[] = [
  { id: "desktop", Icon: IconMonitor },
  { id: "tablet", Icon: IconTablet },
  { id: "mobile", Icon: IconSmartphone },
];

function isPhoneViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
}

export default function TemplatePreviewModal({
  dict,
  template,
  onClose,
}: {
  dict: Dictionary;
  template: TemplateItem | null;
  onClose: () => void;
}) {
  const [viewport, setViewport] = useState<Viewport>(() => (isPhoneViewport() ? "mobile" : "desktop"));
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!template) return;
    setViewport(isPhoneViewport() ? "mobile" : "desktop");
  }, [template?.id]);

  useEffect(() => {
    if (!template) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [template, onClose]);

  if (!template) return null;

  const copy = getTemplateCopy(dict, template.id);
  const labels: Record<Viewport, string> = {
    desktop: dict.tplDesktop,
    tablet: dict.tplTablet,
    mobile: dict.tplMobile,
  };
  const Demo = template.Demo;

  return (
    <div
      className="tpl-modal fixed inset-0 z-[80] flex flex-col bg-[#13232e] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tpl-preview-title"
    >
      <header className="flex flex-none flex-wrap items-center gap-2 border-b border-white/10 px-3 py-2.5 sm:gap-3 sm:px-4 [@media(max-height:500px)]:py-1.5">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full text-paper/80 transition-colors hover:bg-white/10 hover:text-paper"
          aria-label={dict.tplClose}
        >
          <IconClose className="h-5 w-5" />
        </button>

        <div className="flex flex-none rounded-full bg-white/10 p-1" role="group">
          {VIEWPORTS.map(({ id, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setViewport(id)}
              aria-pressed={viewport === id}
              aria-label={labels[id]}
              title={labels[id]}
              className={`inline-flex h-8 items-center gap-1.5 rounded-full px-2.5 text-[12px] font-bold transition-colors sm:px-3 ${
                viewport === id ? "bg-paper text-sea" : "text-paper/70 hover:text-paper"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{labels[id]}</span>
            </button>
          ))}
        </div>

        <h2
          id="tpl-preview-title"
          className="min-w-0 flex-1 truncate text-center text-sm font-semibold text-paper/90 sm:text-left"
        >
          {copy.name}
        </h2>

        <button
          type="button"
          onClick={() => {
            applyTemplateSelection(template.id);
            onClose();
          }}
          className="inline-flex flex-none items-center rounded-full bg-roof px-3.5 py-2.5 text-[13px] font-bold text-paper transition-colors hover:bg-roof-dark sm:px-5"
        >
          {dict.tplSelect}
        </button>
      </header>

      <PreviewStage viewport={viewport} resetKey={template.id} onClose={onClose}>
        <Demo dict={dict} />
      </PreviewStage>
    </div>
  );
}

function PreviewStage({
  viewport,
  resetKey,
  onClose,
  children,
}: {
  viewport: Viewport;
  resetKey: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const cs = getComputedStyle(el);
      const pl = parseFloat(cs.paddingLeft) || 0;
      const pr = parseFloat(cs.paddingRight) || 0;
      const pt = parseFloat(cs.paddingTop) || 0;
      const pb = parseFloat(cs.paddingBottom) || 0;
      setSize({
        w: Math.max(0, el.clientWidth - pl - pr),
        h: Math.max(0, el.clientHeight - pt - pb),
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [viewport, resetKey]);

  const targetW = viewport === "desktop" ? 1280 : viewport === "tablet" ? 768 : 375;
  let scale = size.w > 0 ? Math.min(1, size.w / targetW) : 1;
  // Rotated phones are wide enough for 768px at scale 1, but only ~300px tall.
  // Desktop already shrinks to fit 1280, so the window into the page is taller
  // and looks complete. Tablet needs the same treatment or the layout is clipped.
  if (viewport === "tablet" && size.h > 0 && scale > 0) {
    const minInnerH = 560;
    if (size.h / scale < minInnerH) {
      scale = Math.min(scale, size.h / minInnerH);
    }
  }
  const innerH = scale > 0 ? size.h / scale : size.h;

  return (
    <div
      ref={outerRef}
      className="flex min-h-0 flex-1 cursor-pointer items-stretch justify-center overflow-hidden p-3 sm:p-5 [@media(max-height:500px)]:p-2"
      onClick={onClose}
    >
      {size.w > 0 && (
        <div
          className="max-w-full cursor-auto overflow-hidden rounded-xl bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-[width] duration-300 ease-out"
          style={{ width: targetW * scale, height: "100%" }}
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className="origin-top-left overflow-hidden"
            style={{
              width: targetW,
              height: innerH,
              transform: `scale(${scale})`,
            }}
          >
            <div ref={scrollRef} className={`tpl-preview-scroll tpl-vp-${viewport} h-full overscroll-contain`}>
              <ViewportProvider value={viewport}>{children}</ViewportProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

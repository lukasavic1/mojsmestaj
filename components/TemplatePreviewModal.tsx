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
  const [rotateOpen, setRotateOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!template) return;
    const phone = isPhoneViewport();
    setViewport(phone ? "mobile" : "desktop");
    setRotateOpen(false);
  }, [template?.id]);

  useEffect(() => {
    if (!template) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const mq = window.matchMedia("(max-width: 767px)");
    const onMq = () => {
      if (!mq.matches) setRotateOpen(false);
    };
    mq.addEventListener("change", onMq);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
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

  const chooseViewport = (id: Viewport) => {
    setViewport(id);
    setRotateOpen(isPhoneViewport() && id !== "mobile");
  };

  return (
    <div
      className="tpl-modal fixed inset-0 z-[80] flex flex-col bg-[#13232e]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tpl-preview-title"
    >
      <header className="flex flex-none flex-wrap items-center gap-2 border-b border-white/10 px-3 py-2.5 sm:gap-3 sm:px-4">
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
              onClick={() => chooseViewport(id)}
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

      <PreviewStage viewport={viewport} resetKey={template.id}>
        <Demo dict={dict} />
      </PreviewStage>

      {rotateOpen && (
        <div className="absolute inset-0 z-[90] flex items-center justify-center bg-[#13232e]/55 p-5 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 text-center text-paper shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10">
              <IconSmartphone className="tpl-rotate-phone h-12 w-12" />
            </div>
            <p className="text-sm font-semibold leading-relaxed">{dict.tplRotateHint}</p>
            <button
              type="button"
              onClick={() => setRotateOpen(false)}
              className="mt-5 min-h-12 w-full rounded-full bg-paper text-sm font-bold text-sea"
            >
              {dict.tplRotateContinue}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PreviewStage({
  viewport,
  resetKey,
  children,
}: {
  viewport: Viewport;
  resetKey: string;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [viewport, resetKey]);

  const targetW = viewport === "desktop" ? 1280 : viewport === "tablet" ? 768 : 375;
  const scale = size.w > 0 ? Math.min(1, size.w / targetW) : 1;
  const innerH = scale > 0 ? size.h / scale : size.h;

  return (
    <div
      ref={outerRef}
      className="flex min-h-0 flex-1 items-stretch justify-center overflow-hidden p-3 sm:p-5"
    >
      {size.w > 0 && (
        <div
          className="overflow-hidden rounded-xl bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-[width] duration-300 ease-out"
          style={{ width: targetW * scale, height: "100%" }}
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

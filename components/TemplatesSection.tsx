"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "../lib/dictionaries";
import TemplatePreviewModal from "./TemplatePreviewModal";
import WhatsAppCta from "./WhatsAppCta";
import { TEMPLATES } from "./templates-demo/catalog";
import { IconArrow } from "./templates-demo/icons";
import TemplateThumbnail from "./templates-demo/TemplateThumbnail";
import { getTemplateCopy, type TemplateItem } from "./templates-demo/types";

// The city-apartment template stays in the catalog but off the page: the
// offer is for villas and holiday homes, never buildings.
const SHOWN = TEMPLATES.filter((t) => t.id !== "urban");

export default function TemplatesSection({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<TemplateItem | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="px-6 pb-16" id="sabloni">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-6 max-w-[640px]">
          <h3 className="font-display text-[20px] font-semibold leading-tight text-sea sm:text-[22px]">
            {dict.tplTitle}
          </h3>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{dict.tplLede}</p>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {SHOWN.map((template) => {
            const copy = getTemplateCopy(dict, template.id);
            return (
              <button
                key={template.id}
                type="button"
                onClick={() => setOpen(template)}
                aria-label={`${dict.tplPreview}: ${copy.name}`}
                className="group flex w-[min(70vw,16rem)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-sea/10 bg-paper text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-sea/20 hover:shadow-[0_18px_40px_-24px_rgba(27,58,75,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea/40 sm:w-auto"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div className="h-full transition-transform duration-500 group-hover:scale-[1.03]">
                    <TemplateThumbnail id={template.id} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-display text-[15.5px] font-semibold leading-snug text-sea">{copy.name}</span>
                    <span className="flex-none rounded-full bg-sand-deep/70 px-2 py-0.5 text-[10px] font-bold tracking-wide text-sea">
                      {copy.tag}
                    </span>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[12.5px] font-semibold text-sea/55 transition-colors group-hover:text-sea">
                    {dict.tplPreview}
                    <IconArrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <WhatsAppCta dict={dict} className="mt-9" />
      </div>

      <TemplatePreviewModal dict={dict} template={open} onClose={close} />
    </section>
  );
}

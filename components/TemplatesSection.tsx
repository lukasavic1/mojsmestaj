"use client";

import { useCallback, useState } from "react";
import type { Dictionary } from "../lib/dictionaries";
import TemplatePreviewModal from "./TemplatePreviewModal";
import { TEMPLATES } from "./templates-demo/catalog";
import { IconArrow } from "./templates-demo/icons";
import TemplateThumbnail from "./templates-demo/TemplateThumbnail";
import { getTemplateCopy, type TemplateItem } from "./templates-demo/types";

export default function TemplatesSection({ dict }: { dict: Dictionary }) {
  const [open, setOpen] = useState<TemplateItem | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section className="px-6 py-16" id="sabloni">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.tplEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.tplTitle}
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">{dict.tplLede}</p>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-6">
          {TEMPLATES.map((template, index) => {
            const copy = getTemplateCopy(dict, template.id);
            return (
              <button
                key={template.id}
                type="button"
                onClick={() => setOpen(template)}
                aria-label={`${dict.tplPreview}: ${copy.name}`}
                className={`group flex w-[min(82vw,20.5rem)] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-xl2 border border-sea/10 bg-paper text-left shadow-[0_12px_40px_-28px_rgba(27,58,75,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-sea/20 hover:shadow-[0_24px_50px_-24px_rgba(27,58,75,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea/40 md:w-auto md:shrink ${
                  index < 3 ? "xl:col-span-2" : "xl:col-span-3"
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <div className="h-full transition-transform duration-500 group-hover:scale-[1.03]">
                    <TemplateThumbnail id={template.id} />
                  </div>
                  <span className="absolute right-3 top-9 rounded-full bg-paper/95 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-sea shadow-sm">
                    {copy.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[20px] font-semibold text-sea">{copy.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{copy.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-sea/55 transition-colors group-hover:text-sea">
                    {dict.tplPreview}
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <TemplatePreviewModal dict={dict} template={open} onClose={close} />
    </section>
  );
}

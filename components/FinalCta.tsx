"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";
import {
  readSelectedTemplateId,
  TEMPLATE_SELECTED_EVENT,
} from "../lib/template-selection";
import { getTemplateCopy, TEMPLATE_ACCENTS, type TemplateId } from "./templates-demo/types";

export default function FinalCta({ dict }: { dict: Dictionary }) {
  const [selectedId, setSelectedId] = useState<TemplateId | null>(null);

  useEffect(() => {
    const sync = () => setSelectedId(readSelectedTemplateId());
    sync();
    window.addEventListener(TEMPLATE_SELECTED_EVENT, sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener(TEMPLATE_SELECTED_EVENT, sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const selected = selectedId ? getTemplateCopy(dict, selectedId) : null;
  const waMessage = selected
    ? dict.waMsgTemplate.replace("{template}", selected.name)
    : dict.waMsg;
  const emailSubject = selected
    ? dict.emailSubjectTemplate.replace("{template}", selected.name)
    : dict.emailSubject;
  const links = getContactLinks(waMessage, emailSubject);

  return (
    <section className="px-6 py-16" id="kontakt">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] bg-roof px-6 py-14 text-center text-paper sm:px-11">
          {selected && selectedId && (
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-paper/15 px-4 py-2 text-sm">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: TEMPLATE_ACCENTS[selectedId] }}
              />
              <span>
                {dict.tplSelected}: <span className="font-bold">{selected.name}</span>
              </span>
            </div>
          )}
          <h2 className="mx-auto max-w-[560px] font-display text-[26px] font-semibold sm:text-[32px] lg:text-[36px]">
            {dict.finalTitle}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[480px] text-base text-paper/85">
            {selected ? dict.tplSelectHint : dict.finalText}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href={links.whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-sea px-6 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-sea-light"
            >
              {dict.finalBtnWA}
            </a>
            <a
              href={links.telegram}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-paper px-6 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-paper hover:text-roof"
            >
              {dict.finalBtnTG}
            </a>
            <a
              href={links.emailHref}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-paper px-6 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-paper hover:text-roof"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] flex-none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {dict.finalBtnEmail}
            </a>
          </div>
          <a
            href={links.emailHref}
            className="mt-6 inline-block text-sm font-semibold text-paper/80 underline underline-offset-4 transition-colors hover:text-paper"
          >
            {links.email}
          </a>
        </div>
      </div>
    </section>
  );
}

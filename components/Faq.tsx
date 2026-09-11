"use client";

import { useState } from "react";
import type { Dictionary } from "../lib/dictionaries";
import { PlatformPill } from "./brand/PlatformMarks";

export default function Faq({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // The "do I have to leave Booking/Airbnb" question sits near the top, since
  // it is the objection our positioning most often raises.
  const items = [
    { q: dict.faqQ1, a: dict.faqA1, pills: false },
    { q: dict.faqQ7, a: dict.faqA7, pills: true },
    { q: dict.faqQ3, a: dict.faqA3, pills: false },
    { q: dict.faqQ4, a: dict.faqA4, pills: false },
    { q: dict.faqQ5, a: dict.faqA5, pills: false },
    { q: dict.faqQ6, a: dict.faqA6, pills: false },
    { q: dict.faqQ9, a: dict.faqA9, pills: false },
    { q: dict.faqQ8, a: dict.faqA8, pills: false },
  ];

  return (
    <section className="px-6 py-16" id="faq">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-11 max-w-[640px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.faqEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.faqTitle}
          </h2>
        </div>
        <div className="mx-auto max-w-[760px]">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`border-b border-sea/10 ${i === 0 ? "border-t" : ""}`}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left font-display text-[17px] font-semibold text-sea"
                >
                  <span>{item.q}</span>
                  <span className="relative h-[22px] w-[22px] flex-none">
                    <span className="absolute left-[3px] top-[10px] h-[2px] w-4 rounded bg-roof" />
                    <span
                      className={`absolute left-[10px] top-[3px] h-4 w-[2px] rounded bg-roof transition-transform ${
                        open ? "rotate-90 opacity-0" : ""
                      }`}
                    />
                  </span>
                </button>
                <div
                  className="faq-answer"
                  style={{ maxHeight: open ? "320px" : "0" }}
                >
                  <p className="max-w-[640px] px-0 text-[14.5px] leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                  {item.pills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <PlatformPill platform="booking" />
                      <PlatformPill platform="airbnb" />
                    </div>
                  )}
                  <div className="pb-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

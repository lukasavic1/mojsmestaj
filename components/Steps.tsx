import type { Dictionary } from "../lib/dictionaries";
import { PlatformPill } from "./brand/PlatformMarks";

export default function Steps({ dict }: { dict: Dictionary }) {
  const steps: { title: string; text: string; note?: string }[] = [
    { title: dict.step1Title, text: dict.step1Text },
    { title: dict.step2Title, text: dict.step2Text, note: dict.step2Guarantee },
    { title: dict.step3Title, text: dict.step3Text },
  ];

  return (
    <section className="px-6 py-8" id="kako">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] bg-sea px-6 py-12 text-paper sm:px-10 sm:py-14">
          <div className="mb-11 max-w-[640px]">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sun before:block before:h-[2px] before:w-[18px] before:bg-sun">
              {dict.stepsEyebrow}
            </div>
            <h2 className="font-display text-[26px] font-semibold leading-tight text-paper sm:text-[32px] lg:text-[38px]">
              {dict.stepsTitle}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="mb-3.5 flex items-center gap-2.5 font-display text-sm font-semibold text-sun before:block before:h-px before:w-8 before:bg-paper/35">
                  0{i + 1}
                </div>
                <h3 className="mb-2 text-[19px] font-semibold text-paper">{step.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-paper/75">{step.text}</p>
                {step.note && (
                  <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-sun/40 bg-sun/10 px-4 py-3 text-[13.5px] font-semibold leading-snug text-sun">
                    <svg viewBox="0 0 24 24" fill="none" className="mt-px h-4 w-4 flex-none">
                      <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{step.note}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reassurance: the site works alongside the platforms owners know. */}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-paper/15 pt-7 text-sm text-paper/80">
            <PlatformPill platform="booking" />
            <PlatformPill platform="airbnb" />
            <span className="max-w-[520px]">{dict.stepsSyncNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

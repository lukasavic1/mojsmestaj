import type { Dictionary } from "../lib/dictionaries";
import WhatsAppCta from "./WhatsAppCta";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// "Your part" is deliberately short next to "our part": the owner sends
// photos and details, we do the rest.
export default function DoneForYou({ dict }: { dict: Dictionary }) {
  const yours = [dict.dfyYou1, dict.dfyYou2, dict.dfyYou3];
  const ours = [dict.dfyUs1, dict.dfyUs2, dict.dfyUs3, dict.dfyUs4, dict.dfyUs5, dict.dfyUs6];

  return (
    <section className="px-6 py-16" id="sve-radimo-mi">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[720px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.dfyEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.dfyTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{dict.dfyLede}</p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:gap-6">
          {/* Your part */}
          <div className="rounded-2xl border border-sea/10 bg-paper p-7 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sand-deep/70 text-sea">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8c.8-3.4 3.6-5.5 7-5.5s6.2 2.1 7 5.5" {...stroke} />
                </svg>
              </span>
              <h3 className="text-[19px] font-semibold text-sea">{dict.dfyYouTitle}</h3>
            </div>
            <ol className="space-y-3.5">
              {yours.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sea text-[12px] font-bold text-paper">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Our part */}
          <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#B5552A_0%,#953F1B_100%)] p-7 text-white shadow-[0_24px_50px_-30px_rgba(149,63,27,0.9)] sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/15">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                  <path d="M12 3l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.3l5-.7L12 3z" {...stroke} />
                </svg>
              </span>
              <h3 className="text-[19px] font-semibold">{dict.dfyUsTitle}</h3>
            </div>
            <ul className="grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {ours.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/95">
                  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] flex-none text-gold">
                    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow from your part to ours, between the cards on desktop */}
          <div className="pointer-events-none absolute left-[40%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" aria-hidden="true">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sea text-paper shadow-lg ring-4 ring-sand">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M5 12h14m-5-5l5 5-5 5" {...stroke} />
              </svg>
            </span>
          </div>
        </div>

        <WhatsAppCta dict={dict} className="mt-9" />
      </div>
    </section>
  );
}

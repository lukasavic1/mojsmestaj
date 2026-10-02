import type { Dictionary } from "../lib/dictionaries";

export default function Guarantee({ dict }: { dict: Dictionary }) {
  const terms = [dict.guaranteeTerm1, dict.guaranteeTerm2, dict.guaranteeTerm3, dict.guaranteeTerm4];

  return (
    <section className="px-6 py-8" id="garancija">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-8 rounded-[28px] border-2 border-olive/40 bg-olive/[0.06] px-6 py-12 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
              {dict.guaranteeEyebrow}
            </div>
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-olive text-paper">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                  <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-[56px] font-semibold leading-none text-sea">10</span>
            </div>
            <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px]">
              {dict.guaranteeTitle}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink">{dict.guaranteeText}</p>
          </div>

          <div className="rounded-2xl bg-paper p-6 sm:p-7">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-olive">
              {dict.guaranteeTermsTitle}
            </h3>
            <ul>
              {terms.map((t, i) => (
                <li
                  key={i}
                  className={`flex gap-3 py-3 text-[14px] leading-relaxed text-ink-soft ${i !== 0 ? "border-t border-sea/10" : ""}`}
                >
                  <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-olive" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[17px] w-[17px] flex-none">
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing({ dict }: { dict: Dictionary }) {
  const links = getContactLinks(dict.waMsg);
  const items = [dict.priceItem1, dict.priceItem2, dict.priceItem3, dict.priceItem4];

  return (
    <section className="px-6 py-16" id="cena">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-11 max-w-[640px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.priceEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.priceTitle}
          </h2>
        </div>

        <div className="mx-auto max-w-[560px]">
          <div className="relative overflow-hidden rounded-xl2 bg-sea p-8 text-paper sm:p-10">
            <span className="absolute right-7 top-7 rounded-full bg-roof px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide text-paper">
              {dict.priceDiscount}
            </span>
            <div className="pr-28 text-sm font-bold uppercase tracking-wide text-sun">{dict.priceTier}</div>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-[28px] font-semibold text-paper/50 line-through decoration-sun/80 decoration-2">
                1.490€
              </span>
              <span className="font-display text-[56px] font-semibold leading-none">990€</span>
            </div>
            <div className="mb-6 mt-2 text-sm text-paper/70">{dict.priceTerms}</div>
            <ul className="mb-7">
              {items.map((f, i) => (
                <li key={i} className={`flex gap-2.5 py-2.5 text-[14.5px] leading-relaxed ${i !== 0 ? "border-t border-paper/15" : ""}`}>
                  <span className="text-sun"><Check /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={links.whatsapp}
              className="block w-full rounded-full bg-roof px-6 py-4 text-center text-[15px] font-bold text-paper transition-colors hover:bg-roof-dark"
            >
              {dict.priceCta}
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-sea/10 bg-paper p-6">
            <h3 className="mb-1.5 text-[15px] font-semibold text-sea">{dict.priceAfterTitle}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{dict.priceAfterText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

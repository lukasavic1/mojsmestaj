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
  const basicFeatures = [dict.b1, dict.b2, dict.b3, dict.b4, dict.b5, dict.b6];
  const premiumFeatures = [dict.p1, dict.p2, dict.p3, dict.p4, dict.p5, dict.p6];

  return (
    <section className="px-6 py-16" id="cene">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.priceEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.priceTitle}
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {/* Essentials */}
          <div className="flex flex-col rounded-xl2 border border-sea/10 bg-paper p-8">
            <div className="text-sm font-bold uppercase tracking-wide text-olive">{dict.basicTier}</div>
            <h3 className="mt-2 font-display text-[26px] font-semibold text-sea">{dict.basicName}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-[44px] font-semibold text-sea">499€</span>
              <span className="text-sm text-ink-soft">{dict.oneTime}</span>
            </div>
            <div className="mb-6 text-sm text-ink-soft">{dict.basicSub}</div>
            <ul className="mb-7 flex-1">
              {basicFeatures.map((f, i) => (
                <li key={i} className={`flex gap-2.5 py-2.5 text-[14.5px] leading-relaxed ${i !== 0 ? "border-t border-sea/10" : ""}`}>
                  <span className="text-olive"><Check /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={links.whatsapp}
              className="w-full rounded-full bg-sea px-6 py-4 text-center text-[15px] font-bold text-paper transition-colors hover:bg-sea-light"
            >
              {dict.basicCta}
            </a>
          </div>

          {/* Professional */}
          <div className="relative flex flex-col overflow-hidden rounded-xl2 bg-sea p-8 text-paper">
            <span className="absolute right-7 top-7 rounded-full bg-roof px-3.5 py-1.5 text-[11px] font-extrabold tracking-wide text-paper">
              {dict.premiumBadge}
            </span>
            <div className="text-sm font-bold uppercase tracking-wide text-sun">{dict.premiumTier}</div>
            <h3 className="mt-2 font-display text-[26px] font-semibold text-paper">{dict.premiumName}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-[44px] font-semibold">900€</span>
              <span className="text-sm text-paper/65">{dict.oneTime}</span>
            </div>
            <div className="mb-6 text-sm text-paper/70">{dict.premiumSub}</div>
            <ul className="mb-5 flex-1">
              {premiumFeatures.map((f, i) => (
                <li key={i} className={`flex gap-2.5 py-2.5 text-[14.5px] leading-relaxed ${i !== 0 ? "border-t border-paper/15" : ""}`}>
                  <span className="text-sun"><Check /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mb-5 rounded-xl bg-paper/10 p-4 text-[13px] leading-relaxed text-paper/85">
              {dict.premiumNote}
            </div>
            <a
              href={links.whatsapp}
              className="w-full rounded-full bg-roof px-6 py-4 text-center text-[15px] font-bold text-paper transition-colors hover:bg-roof-dark"
            >
              {dict.premiumCta}
            </a>
          </div>
        </div>

        <div className="mt-7 text-center text-sm text-ink-soft">
          {dict.enterpriseNote}{" "}
          <a href={links.whatsapp} className="font-bold text-sea underline">
            {dict.enterpriseLinkText}
          </a>{" "}
          {dict.enterpriseNoteEnd}
        </div>
      </div>
    </section>
  );
}

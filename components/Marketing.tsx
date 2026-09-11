import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";
import { BrandTile } from "./brand/PlatformMarks";

export default function Marketing({ dict }: { dict: Dictionary }) {
  // A dedicated WhatsApp message so marketing inquiries are easy to tell apart.
  const links = getContactLinks(dict.mktWaMsg);
  const items = [dict.mkt1, dict.mkt2, dict.mkt3, dict.mkt4];

  return (
    <section className="px-6 py-12" id="marketing">
      <div className="mx-auto max-w-[1140px]">
        <div className="overflow-hidden rounded-[28px] border border-sea/10 bg-paper">
          <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
            {/* Copy */}
            <div className="p-8 sm:p-11">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sand-deep px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-roof">
                {dict.mktEyebrow}
              </div>
              <h2 className="font-display text-[24px] font-semibold leading-tight text-sea sm:text-[30px]">
                {dict.mktTitle}
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">
                {dict.mktText}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <BrandTile platform="instagram" className="h-10 w-10" />
                <BrandTile platform="facebook" className="h-10 w-10" />
                <BrandTile platform="meta" className="h-10 w-10" />
                <span className="text-[13px] font-semibold text-ink-soft">{dict.mktTag}</span>
              </div>

              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-sea">
                    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[17px] w-[17px] flex-none text-olive">
                      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + CTA panel */}
            <div className="flex flex-col justify-center gap-5 border-t border-sea/10 bg-sea p-8 text-paper sm:p-11 md:border-l md:border-t-0">
              <p className="text-[15px] leading-relaxed text-paper/85">{dict.mktPrice}</p>
              <a
                href={links.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-roof px-6 py-4 text-center text-[15px] font-bold text-paper transition-colors hover:bg-roof-dark"
              >
                {dict.mktCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

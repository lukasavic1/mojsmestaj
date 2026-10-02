import type { Dictionary } from "../lib/dictionaries";
import { WhatsAppButton } from "./WhatsAppCta";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function Pricing({ dict }: { dict: Dictionary }) {
  // Same four things, same colours and order as the offer cards, so the
  // price reads as the sum of what the visitor just saw.
  const included = [
    {
      title: dict.offerSiteTitle,
      text: dict.priceItem1,
      tile: "bg-sea-light ring-1 ring-paper/25",
      icon: <path d="M3 11.5L12 4l9 7.5M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" {...stroke} />,
    },
    {
      title: dict.offerIgTitle,
      text: dict.priceItem2,
      tile: "bg-[linear-gradient(150deg,#E1306C,#833AB4)]",
      icon: (
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...stroke} />
          <circle cx="12" cy="12" r="4" {...stroke} />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
        </>
      ),
    },
    {
      title: dict.offerGuaranteeTitle,
      text: dict.priceItem3,
      tile: "bg-roof",
      icon: (
        <>
          <circle cx="12" cy="9" r="6" {...stroke} />
          <path d="M9.5 9l1.7 1.7L14.5 7.5M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7" {...stroke} />
        </>
      ),
    },
    {
      title: dict.offerAdsTitle,
      text: dict.priceItem4,
      tile: "bg-money",
      bonus: true,
      icon: (
        <>
          <rect x="2.5" y="6" width="19" height="12" rx="2" {...stroke} />
          <path d="M14.5 9.6a2.8 2.8 0 100 4.8M9.5 11h4M9.5 13h4" {...stroke} />
        </>
      ),
    },
  ];

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

        <div className="relative mx-auto max-w-[1020px] overflow-hidden rounded-[28px] bg-sea text-paper shadow-[0_40px_90px_-40px_rgba(27,58,75,0.9)] ring-1 ring-paper/10">
          {/* Soft colour glows behind the card content */}
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-roof/40 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-money/35 blur-3xl" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Price */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:border-r lg:border-paper/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-roof px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-paper">
                  {dict.priceDiscount}
                </span>
                <span className="rounded-full bg-gold px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-money-dark">
                  {dict.priceSave}
                </span>
              </div>

              <div className="mt-6 text-sm font-bold uppercase tracking-wide text-sun">{dict.priceTier}</div>
              <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="font-display text-[72px] font-semibold leading-[0.9] sm:text-[88px]">990€</span>
                <span className="pb-2 font-display text-[28px] font-semibold text-paper/45 line-through decoration-sun decoration-2">
                  1.490€
                </span>
              </div>
              <div className="mt-3 text-[15px] text-paper/70">{dict.priceTerms}</div>

              <div className="mt-9">
                <WhatsAppButton dict={dict} className="cta-pulse w-full" />
                <p className="mt-3 text-center text-[13px] text-paper/60">{dict.ctaNote}</p>
              </div>
            </div>

            {/* What's included */}
            <div className="border-t border-paper/10 bg-paper/[0.04] p-8 sm:p-10 lg:border-t-0">
              <h3 className="text-sm font-bold uppercase tracking-wider text-paper/60">{dict.priceIncludedTitle}</h3>
              <ul className="mt-5 space-y-4">
                {included.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-4 rounded-2xl p-3.5 ${item.bonus ? "bg-money/20 ring-1 ring-money/50" : "bg-paper/[0.05]"}`}
                  >
                    <span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl text-white ${item.tile}`}>
                      <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                        {item.icon}
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[15.5px] font-semibold text-paper">{item.title}</span>
                        {item.bonus && (
                          <span className="rounded-full bg-gold px-2 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider text-money-dark">
                            {dict.offerBonus}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[13.5px] leading-snug text-paper/70">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After the first month: an invitation, not a price */}
          <div className="relative flex items-start gap-3 border-t border-paper/10 px-8 py-5 sm:px-10">
            <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 flex-none text-sun">
              <path d="M5 6h14v13H5zM5 10h14M9 4v4m6-4v4" {...stroke} />
            </svg>
            <p className="text-[13.5px] leading-relaxed text-paper/70">
              <span className="font-semibold text-paper">{dict.priceAfterTitle}:</span> {dict.priceAfterText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

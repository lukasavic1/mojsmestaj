import type { Dictionary } from "../lib/dictionaries";
import { PlatformPill } from "./brand/PlatformMarks";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[17px] w-[17px] flex-none text-olive">
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Offer({ dict }: { dict: Dictionary }) {
  const groups = [
    {
      title: dict.offerSiteTitle,
      items: [dict.offerSite1, dict.offerSite2, dict.offerSite3, dict.offerSite4],
      pills: true,
    },
    { title: dict.offerIgTitle, items: [dict.offerIg1, dict.offerIg2] },
    { title: dict.offerAdsTitle, items: [dict.offerAds1, dict.offerAds2] },
    { title: dict.offerGuaranteeTitle, items: [dict.offerGuarantee1], href: "#garancija" },
  ];

  return (
    <section className="px-6 py-16" id="ponuda">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[720px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
            {dict.offerEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.offerTitle}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-sea/10 bg-paper p-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-display text-sm font-semibold text-roof">0{i + 1}</span>
                <h3 className="text-[19px] font-semibold text-sea">
                  {g.href ? (
                    <a href={g.href} className="underline decoration-roof/40 decoration-2 underline-offset-4 hover:decoration-roof">
                      {g.title}
                    </a>
                  ) : (
                    g.title
                  )}
                </h3>
              </div>
              <ul>
                {g.items.map((item, j) => (
                  <li
                    key={j}
                    className={`flex gap-2.5 py-2.5 text-[14.5px] leading-relaxed text-ink ${j !== 0 ? "border-t border-sea/10" : ""}`}
                  >
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {g.pills && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <PlatformPill platform="booking" />
                  <PlatformPill platform="airbnb" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-7 text-[15px] font-semibold text-sea">{dict.offerMultiUnit}</p>
      </div>
    </section>
  );
}

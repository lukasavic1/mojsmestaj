import type { Dictionary } from "../lib/dictionaries";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons = {
  site: <path d="M3 11.5L12 4l9 7.5M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" {...stroke} />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </>
  ),
  ads: <path d="M4 10v4h3l6 4V6L7 10H4zM17 9a4 4 0 010 6M19.5 6.5a7.5 7.5 0 010 11" {...stroke} />,
  guarantee: (
    <>
      <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" {...stroke} />
      <path d="M9 12l2 2 4-4" {...stroke} />
    </>
  ),
};

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[17px] w-[17px] flex-none text-olive">
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Offer({ dict }: { dict: Dictionary }) {
  // Every card has the same shape: icon, title, one key figure, two lines.
  const cards = [
    {
      icon: icons.site,
      title: dict.offerSiteTitle,
      stat: dict.offerSiteStat,
      statLabel: dict.offerSiteStatLabel,
      items: [dict.offerSite1, dict.offerSite2],
    },
    {
      icon: icons.instagram,
      title: dict.offerIgTitle,
      stat: dict.offerIgStat,
      statLabel: dict.offerIgStatLabel,
      items: [dict.offerIg1, dict.offerIg2],
    },
    {
      icon: icons.ads,
      title: dict.offerAdsTitle,
      stat: dict.offerAdsStat,
      statLabel: dict.offerAdsStatLabel,
      items: [dict.offerAds1, dict.offerAds2],
    },
    {
      icon: icons.guarantee,
      title: dict.offerGuaranteeTitle,
      stat: dict.offerGuaranteeStat,
      statLabel: dict.offerGuaranteeStatLabel,
      items: [dict.offerGuarantee1],
      link: { href: "#garancija", label: dict.guaranteeTermsTitle },
    },
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-sea/10 bg-paper p-7">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sand-deep/70 text-roof">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                  {card.icon}
                </svg>
              </span>
              {/* Two-line minimums keep the figures and dividers level across
                  the row when a title or label wraps. */}
              <h3 className="mt-4 text-[17px] font-semibold leading-tight text-sea sm:min-h-[2.5em]">{card.title}</h3>

              <div className="mt-4 border-b border-sea/10 pb-5">
                <div className="font-display text-[40px] font-semibold leading-none text-roof">{card.stat}</div>
                <div className="mt-2 text-[13.5px] leading-snug text-ink-soft sm:min-h-[2.75em]">{card.statLabel}</div>
              </div>

              <ul className="mt-4 space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-[14px] leading-snug text-ink">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {card.link && (
                <a
                  href={card.link.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13.5px] font-bold text-olive hover:text-sea"
                >
                  {card.link.label}
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M5 12h14m-5-5l5 5-5 5" {...stroke} />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Multi-unit owners are a good fit, so they get their own line. */}
        <div className="mt-5 flex items-center gap-4 rounded-2xl bg-sand-deep/60 px-6 py-5">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-paper text-roof">
            <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
              <path d="M2.5 12L8 7.5l5.5 4.5M4 11v8h8v-8M13 8.5l4.5-4 4 3.5M15 19h5.5v-9" {...stroke} />
            </svg>
          </span>
          <p className="text-[15px] font-semibold leading-snug text-sea">{dict.offerMultiUnit}</p>
        </div>
      </div>
    </section>
  );
}

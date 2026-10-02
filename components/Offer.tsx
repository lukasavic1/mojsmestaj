import type { Dictionary } from "../lib/dictionaries";
import WhatsAppCta from "./WhatsAppCta";

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
  money: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" {...stroke} />
      <path d="M14.5 9.6a2.8 2.8 0 100 4.8M9.5 11h4M9.5 13h4" {...stroke} />
    </>
  ),
  // Award rosette: a seal with ribbons, the usual "guaranteed" mark.
  guarantee: (
    <>
      <circle cx="12" cy="9" r="6" {...stroke} />
      <path d="M9.5 9l1.7 1.7L14.5 7.5M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7" {...stroke} />
    </>
  ),
};

type Card = {
  icon: React.ReactNode;
  title: string;
  stat: string;
  statLabel: string;
  items: string[];
  // Background, figure colour and icon tile differ per card; the shape does not.
  bg: string;
  statClass: string;
  bonus?: boolean;
  link?: { href: string; label: string };
};

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[17px] w-[17px] flex-none text-white/90">
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Offer({ dict }: { dict: Dictionary }) {
  const cards: Card[] = [
    {
      icon: icons.site,
      title: dict.offerSiteTitle,
      stat: dict.offerSiteStat,
      statLabel: dict.offerSiteStatLabel,
      items: [dict.offerSite1, dict.offerSite2],
      bg: "bg-sea",
      statClass: "text-sun",
    },
    {
      icon: icons.instagram,
      title: dict.offerIgTitle,
      stat: dict.offerIgStat,
      statLabel: dict.offerIgStatLabel,
      items: [dict.offerIg1, dict.offerIg2],
      bg: "bg-[linear-gradient(150deg,#E1306C_0%,#C13584_45%,#833AB4_100%)]",
      statClass: "text-white",
    },
    {
      icon: icons.guarantee,
      title: dict.offerGuaranteeTitle,
      stat: dict.offerGuaranteeStat,
      statLabel: dict.offerGuaranteeStatLabel,
      items: [dict.offerGuarantee1],
      bg: "bg-roof",
      statClass: "text-white",
      link: { href: "#garancija", label: dict.guaranteeTermsTitle },
    },
    {
      icon: icons.money,
      title: dict.offerAdsTitle,
      stat: dict.offerAdsStat,
      statLabel: dict.offerAdsStatLabel,
      items: [dict.offerAds1, dict.offerAds2],
      bg: "bg-[linear-gradient(150deg,#15803D_0%,#14532D_100%)]",
      statClass: "text-gold",
      bonus: true,
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
            <div
              key={i}
              className={`relative flex flex-col overflow-hidden rounded-2xl p-7 text-white shadow-[0_24px_50px_-30px_rgba(27,58,75,0.7)] ${card.bg}`}
            >
              {card.bonus && <EuroPattern />}

              <div className="relative flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/15">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                    {card.icon}
                  </svg>
                </span>
                {card.bonus && (
                  <span className="rotate-3 rounded-full bg-gold px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-money-dark shadow-[0_6px_16px_-6px_rgba(0,0,0,0.5)]">
                    {dict.offerBonus}
                  </span>
                )}
              </div>
              {/* Two-line minimums keep the figures and dividers level across
                  the row when a title or label wraps. */}
              <h3 className="relative mt-4 text-[17px] font-semibold leading-tight sm:min-h-[2.5em]">{card.title}</h3>

              <div className="relative mt-4 border-b border-white/20 pb-5">
                <div className={`font-display text-[44px] font-semibold leading-none ${card.statClass}`}>{card.stat}</div>
                <div className="mt-2 text-[13.5px] leading-snug text-white/80 sm:min-h-[2.75em]">{card.statLabel}</div>
              </div>

              <ul className="relative mt-4 space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5 text-[14px] leading-snug text-white/95">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {card.link && (
                <a
                  href={card.link.href}
                  className="relative mt-auto inline-flex items-center gap-1.5 pt-4 text-[13.5px] font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
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

        <WhatsAppCta dict={dict} className="mt-9" />
      </div>
    </section>
  );
}

// Scattered euro signs behind the bonus card.
function EuroPattern() {
  const signs = [
    { x: "72%", y: "30%", s: 64, r: -14, o: 0.12 },
    { x: "84%", y: "62%", s: 40, r: 12, o: 0.1 },
    { x: "58%", y: "78%", s: 30, r: -6, o: 0.09 },
    { x: "90%", y: "88%", s: 52, r: 20, o: 0.08 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {signs.map((e, i) => (
        <span
          key={i}
          className="absolute font-display font-bold text-gold"
          style={{ left: e.x, top: e.y, fontSize: e.s, opacity: e.o, transform: `rotate(${e.r}deg)` }}
        >
          €
        </span>
      ))}
    </div>
  );
}

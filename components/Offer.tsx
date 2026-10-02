import type { Dictionary } from "../lib/dictionaries";
import { PlatformPill } from "./brand/PlatformMarks";
import { unsplash } from "./templates-demo/photos";

const SITE_PHOTO = unsplash("photo-1600596542815-ffad4c1539a9", 700);

// Nine posts for the Instagram mock: villas, interiors and nature, never buildings.
const IG_POSTS = [
  "photo-1613977257365-aaae5a9817ff",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1510798831971-661eb04b3739",
  "photo-1571896349842-33c89424de2d",
  "photo-1542718610-a1d656d1884c",
  "photo-1564013799919-ab600027ffc6",
  "photo-1501785888041-af3ef285b470",
  "photo-1552321554-5fefe8c9ef14",
  "photo-1600585154340-be6161a56a0c",
].map((id) => unsplash(id, 300));

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const siteIcons = [
  // Story and gallery
  <path key="story" d="M4 5h16v14H4zM4 15l4.5-4 3.5 3 3-2.5 5 3.5M15.5 9.5h.01" {...stroke} />,
  // Synced calendar
  <path key="cal" d="M5 6h14v13H5zM5 10h14M9 4v4m6-4v4m-6 7l2 2 4-4" {...stroke} />,
  // Languages
  <path key="lang" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.5 9h17M3.5 15h17M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" {...stroke} />,
  // Google / search
  <path key="seo" d="M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM15.5 15.5L20 20" {...stroke} />,
];

function Check({ className = "text-olive" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`mt-0.5 h-[17px] w-[17px] flex-none ${className}`}>
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Offer({ dict }: { dict: Dictionary }) {
  const siteFeatures = [dict.offerSite1, dict.offerSite2, dict.offerSite3, dict.offerSite4];

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

        {/* Bento: the site leads, Instagram runs down the side, the two
            numbers that sell the package (100€ ads, 10+ inquiries) sit below. */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Premium site */}
          <div className="rounded-2xl border border-sea/10 bg-paper p-7 md:col-span-2 sm:p-8">
            <div className="grid items-center gap-8 sm:grid-cols-[1fr_0.85fr]">
              <div>
                <CardHead title={dict.offerSiteTitle}>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sea text-paper">
                    <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                      <path d="M3 11.5L12 4l9 7.5M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" {...stroke} />
                    </svg>
                  </span>
                </CardHead>
                <ul className="mt-5 space-y-3">
                  {siteFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14.5px] leading-snug text-ink">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-sand-deep/70 text-roof">
                        <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                          {siteIcons[i]}
                        </svg>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <PlatformPill platform="booking" />
                  <PlatformPill platform="airbnb" />
                </div>
              </div>
              <SiteMock sendLabel={dict.tplDemoSend} />
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col rounded-2xl border border-sea/10 bg-paper p-7 md:row-span-2 sm:p-8">
            <CardHead title={dict.offerIgTitle}>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)] text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                </svg>
              </span>
            </CardHead>
            <ul className="mt-5 space-y-2.5">
              {[dict.offerIg1, dict.offerIg2].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-[14.5px] leading-snug text-ink">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <InstagramMock />
          </div>

          {/* Ads */}
          <div className="flex flex-col rounded-2xl bg-sea p-7 text-paper sm:p-8">
            <CardHead title={dict.offerAdsTitle} light>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-paper/10 text-sun">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                  <path d="M4 10v4h3l6 4V6L7 10H4zM17 9a4 4 0 010 6M19.5 6.5a7.5 7.5 0 010 11" {...stroke} />
                </svg>
              </span>
            </CardHead>
            <div className="mt-auto pt-8">
              <div className="font-display text-[56px] font-semibold leading-none text-sun">100€</div>
              <p className="mt-3 text-[15px] leading-snug text-paper/90">{dict.offerAds1}</p>
              <p className="mt-1.5 text-[13.5px] leading-snug text-paper/60">{dict.offerAds2}</p>
            </div>
          </div>

          {/* Guarantee */}
          <a
            href="#garancija"
            className="group flex flex-col rounded-2xl border-2 border-olive/40 bg-olive/[0.07] p-7 transition-colors hover:border-olive/70 sm:p-8"
          >
            <CardHead title={dict.offerGuaranteeTitle}>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-olive text-paper">
                <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]">
                  <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" {...stroke} />
                  <path d="M9 12l2 2 4-4" {...stroke} />
                </svg>
              </span>
            </CardHead>
            <div className="mt-auto pt-8">
              <div className="font-display text-[56px] font-semibold leading-none text-sea">10+</div>
              <p className="mt-3 text-[15px] leading-snug text-ink">{dict.offerGuarantee1}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-olive">
                {dict.guaranteeTermsTitle}
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14m-5-5l5 5-5 5" {...stroke} />
                </svg>
              </span>
            </div>
          </a>
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

function CardHead({
  title,
  light = false,
  children,
}: {
  title: string;
  light?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3.5">
      {children}
      <h3 className={`text-[19px] font-semibold leading-tight ${light ? "text-paper" : "text-sea"}`}>{title}</h3>
    </div>
  );
}

// A small browser window showing a villa site with an inquiry button.
function SiteMock({ sendLabel }: { sendLabel: string }) {
  return (
    <div className="hidden overflow-hidden rounded-xl border border-sea/15 bg-paper shadow-[0_24px_50px_-28px_rgba(27,58,75,0.55)] sm:block" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-sea/10 bg-sand-deep px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-roof/70" />
        <span className="h-2 w-2 rounded-full bg-olive/70" />
        <span className="h-2 w-2 rounded-full bg-sea/40" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-paper" />
      </div>
      <div className="relative aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SITE_PHOTO} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-sea/80 via-sea/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-4">
          <div className="h-2.5 w-28 rounded-full bg-paper/95" />
          <div className="mt-2 h-2 w-40 max-w-full rounded-full bg-paper/60" />
          <span className="mt-3 inline-block rounded-full bg-roof px-3 py-1.5 text-[11px] font-bold text-paper">
            {sendLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

// A profile header and a 3x3 grid, standing in for the 9–10 posts.
function InstagramMock() {
  return (
    <div className="mt-auto pt-7" aria-hidden="true">
      <div className="rounded-xl border border-sea/10 bg-sand/60 p-3">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-8 w-8 rounded-full bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)] p-[2px]">
            <span className="block h-full w-full rounded-full border-2 border-paper bg-sea" />
          </span>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-24 rounded-full bg-sea/70" />
            <div className="h-1.5 w-16 rounded-full bg-sea/25" />
          </div>
        </div>
        {/* Story highlights */}
        <div className="mb-3 flex gap-3 px-0.5">
          {IG_POSTS.slice(0, 4).map((src, i) => (
            <span key={i} className="h-10 w-10 flex-none rounded-full p-[2px] ring-1 ring-sea/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full rounded-full object-cover" />
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1">
          {IG_POSTS.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-[4px] bg-sea/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              {(i === 1 || i === 5) && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="absolute right-1 top-1 h-3.5 w-3.5 text-white drop-shadow">
                  <path d="M8 5.5v13l10.5-6.5L8 5.5z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

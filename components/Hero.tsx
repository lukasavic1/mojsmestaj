import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";

export default function Hero({ dict }: { dict: Dictionary }) {
  const links = getContactLinks(dict.waMsg);

  return (
    <section className="px-6 pb-8 pt-16 md:pb-14 md:pt-20">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
            {dict.heroEyebrow}
          </div>
          <h1 className="font-display text-[34px] font-semibold leading-[1.05] text-sea sm:text-[42px] lg:text-[58px]">
            {dict.heroTitleA} <span className="text-roof">{dict.heroTitleAccent}</span> {dict.heroTitleB}
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-sand-deep px-4 py-2 text-sm font-bold text-sea">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none text-roof">
              <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            {dict.heroBadge}
          </div>
          <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-ink-soft">
            {dict.heroLede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#cene"
              className="inline-flex items-center gap-2 rounded-full bg-roof px-6 py-4 text-[15px] font-bold text-paper shadow-[0_8px_20px_-8px_rgba(181,85,42,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-roof-dark"
            >
              {dict.heroBtnPrimary}
            </a>
            <a
              href={links.whatsapp}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-sea px-6 py-4 text-[15px] font-bold text-sea transition-colors hover:bg-sea hover:text-paper"
            >
              {dict.heroBtnGhost}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#sabloni"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-sea underline decoration-roof decoration-2 underline-offset-4 transition-colors hover:text-roof"
            >
              {dict.heroBtnTemplates}
            </a>
            <a
              href={links.exampleSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-sea underline decoration-roof decoration-2 underline-offset-4 transition-colors hover:text-roof"
            >
              {dict.heroBtnExample}
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none">
                <path d="M7 17L17 7M17 7h-7M17 7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="mt-7 flex items-center gap-2.5 text-sm text-ink-soft">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none text-olive">
              <path d="M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>{dict.heroTrust}</span>
          </div>
        </div>
        <div className="relative mx-auto hidden aspect-square w-full max-w-[280px] md:block md:max-w-[440px]">
          <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
            <circle cx="300" cy="90" r="46" fill="#E3A17C" />
            <path d="M60 230 L200 130 L340 230" stroke="#1B3A4B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <rect x="90" y="228" width="220" height="130" rx="6" fill="#FCFAF5" stroke="#1B3A4B" strokeWidth="6" />
            <rect x="120" y="260" width="46" height="46" rx="4" fill="#B5552A" opacity="0.85" />
            <rect x="234" y="260" width="46" height="46" rx="4" fill="#6B7A4F" opacity="0.85" />
            <rect x="176" y="300" width="48" height="58" rx="4" fill="#1B3A4B" />
            <path d="M20 358 Q100 338 200 358 T380 358" stroke="#6B7A4F" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M300 200 v20 M270 216 l15 12 M330 216 l-15 12" stroke="#1B3A4B" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

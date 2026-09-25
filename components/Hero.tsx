import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";
import { PlatformPill } from "./brand/PlatformMarks";

export default function Hero({ dict }: { dict: Dictionary }) {
  const links = getContactLinks(dict.waMsg);

  return (
    <section className="px-6 pb-8 pt-14 md:pb-16 md:pt-20">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
            {dict.heroEyebrow}
          </div>

          {/* "You're already on Booking + Airbnb" - the context our audience
              recognises instantly, shown with the real brand marks. */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-ink-soft">
            <span>{dict.heroAlready}</span>
            <PlatformPill platform="booking" />
            <PlatformPill platform="airbnb" />
          </div>

          <h1 className="font-display text-[34px] font-semibold leading-[1.05] text-sea sm:text-[42px] lg:text-[56px]">
            {dict.heroTitleA} <span className="text-roof">{dict.heroTitleAccent}</span>
          </h1>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-sand-deep px-4 py-2 text-sm font-bold text-sea">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none text-roof">
              <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            {dict.heroBadge}
          </div>

          <p className="mt-5 max-w-[540px] text-lg leading-relaxed text-ink-soft">
            {dict.heroLede}
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-roof px-6 py-4 text-[15px] font-bold text-paper shadow-[0_8px_20px_-8px_rgba(181,85,42,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-roof-dark"
            >
              {dict.heroBtnPrimary}
            </a>
            <a
              href="#primer"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-sea px-6 py-4 text-[15px] font-bold text-sea transition-colors hover:bg-sea hover:text-paper"
            >
              {dict.heroBtnExample}
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
              href={links.whatsapp}
              className="inline-flex items-center gap-2 text-[15px] font-bold text-sea underline decoration-roof decoration-2 underline-offset-4 transition-colors hover:text-roof"
            >
              {dict.heroBtnGhost}
            </a>
          </div>
        </div>

        {/* Visual: platforms bring guests in, your own site turns them into
            a direct inquiry. */}
        <div className="relative mx-auto hidden w-full max-w-[440px] md:block">
          <HeroVisual dict={dict} />
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative">
      {/* Browser frame = the owner's own site */}
      <div className="overflow-hidden rounded-2xl border border-sea/15 bg-paper shadow-[0_30px_70px_-32px_rgba(27,58,75,0.55)]">
        <div className="flex items-center gap-2 border-b border-sea/10 bg-sand-deep px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-roof/70" />
          <span className="h-3 w-3 rounded-full bg-olive/70" />
          <span className="h-3 w-3 rounded-full bg-sea/40" />
          <span className="ml-2 truncate text-[12px] font-semibold text-ink-soft">
            {dict.heroCardLabel}
          </span>
        </div>
        <div className="p-4">
          <div className="relative overflow-hidden rounded-xl">
            <svg viewBox="0 0 400 220" className="h-auto w-full" role="img" aria-label={dict.heroCardLabel}>
              <rect width="400" height="220" fill="#1B3A4B" />
              <circle cx="330" cy="42" r="30" fill="#E3A17C" />
              <path d="M0 150 L120 92 L250 150" stroke="#FCFAF5" strokeWidth="0" />
              <path d="M-10 175 Q100 150 210 172 T420 168 V230 H-10 Z" fill="#6B7A4F" opacity="0.55" />
              <path d="M-10 195 Q120 175 240 192 T420 190 V230 H-10 Z" fill="#6B7A4F" opacity="0.8" />
              <rect x="40" y="96" width="150" height="70" rx="8" fill="#FCFAF5" opacity="0.95" />
              <rect x="52" y="108" width="70" height="9" rx="4" fill="#1B3A4B" opacity="0.85" />
              <rect x="52" y="124" width="110" height="7" rx="3.5" fill="#4A5A64" opacity="0.6" />
              <rect x="52" y="137" width="90" height="7" rx="3.5" fill="#4A5A64" opacity="0.6" />
              <rect x="52" y="150" width="46" height="10" rx="5" fill="#B5552A" />
            </svg>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="h-2.5 w-24 rounded-full bg-sea/15" />
            <span className="rounded-full bg-olive/15 px-2.5 py-1 text-[11px] font-bold text-olive">
              {dict.tplDemoDirect}
            </span>
          </div>
        </div>
      </div>

      {/* Platforms feed guests into the site */}
      <div className="absolute -left-3 -top-4 flex flex-col gap-2">
        <PlatformPill platform="booking" className="shadow-[0_10px_24px_-10px_rgba(0,53,128,0.6)]" />
        <PlatformPill platform="airbnb" className="ml-6 shadow-[0_10px_24px_-10px_rgba(255,90,95,0.6)]" />
      </div>

      {/* Direct-inquiry notification popping out of the site */}
      <div className="absolute -bottom-5 -right-3 flex items-center gap-2.5 rounded-2xl bg-paper px-4 py-3 shadow-[0_20px_44px_-16px_rgba(27,58,75,0.55)] ring-1 ring-sea/10">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#25D366]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-bold text-sea">{dict.heroCardBadge}</div>
          <div className="text-[11px] text-ink-soft">{dict.notifyCardName}</div>
        </div>
      </div>
    </div>
  );
}

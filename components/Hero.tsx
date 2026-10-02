import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";
import { PlatformPill } from "./brand/PlatformMarks";
import { unsplash } from "./templates-demo/photos";

const HERO_PHOTO = unsplash("photo-1613977257365-aaae5a9817ff", 1100);

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

          <h1 className="font-display text-[30px] font-semibold leading-[1.1] text-sea sm:text-[38px] lg:text-[48px]">
            {dict.heroTitle} <span className="mt-2 block text-roof">{dict.heroTitleAccent}</span>
          </h1>

          <p className="mt-5 max-w-[540px] text-lg leading-relaxed text-ink-soft">
            {dict.heroLede}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-sand-deep px-4 py-2 text-sm font-bold text-sea">
            <span className="font-display text-base text-roof">990€</span>
            <span className="h-3.5 w-px bg-sea/25" />
            {dict.heroBadge}
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#ponuda"
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
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <HeroVisual dict={dict} />
        </div>
      </div>
    </section>
  );
}

// A villa photo with the two things the package delivers floating on top:
// a direct guest inquiry and a running Instagram profile.
function HeroVisual({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative pb-6 md:pb-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] bg-sea shadow-[0_30px_70px_-32px_rgba(27,58,75,0.6)] md:aspect-[4/5]">
        {/* External Unsplash photo; native img keeps it out of next/image config. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_PHOTO}
          alt={dict.heroPhotoAlt}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sea/45 via-transparent to-transparent" />
      </div>

      {/* Instagram chip */}
      <div className="absolute -left-3 top-5 flex items-center gap-2.5 rounded-2xl bg-paper px-3.5 py-2.5 shadow-[0_20px_44px_-16px_rgba(27,58,75,0.55)] ring-1 ring-sea/10 sm:-left-5">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-[linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)]">
          <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] text-white">
            <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
          </svg>
        </span>
        <div className="text-[12.5px] font-bold leading-tight text-sea">{dict.heroCardIg}</div>
      </div>

      {/* Direct-inquiry notification */}
      <div className="absolute -right-2 bottom-0 flex items-center gap-2.5 rounded-2xl bg-paper px-4 py-3 shadow-[0_20px_44px_-16px_rgba(27,58,75,0.55)] ring-1 ring-sea/10 sm:-right-4 md:-bottom-5">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#25D366]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-bold text-sea">{dict.heroCardBadge}</div>
          <div className="text-[11px] text-ink-soft">{dict.heroCardName}</div>
        </div>
      </div>
    </div>
  );
}

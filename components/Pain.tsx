import type { Dictionary } from "../lib/dictionaries";
import { BrandTile } from "./brand/PlatformMarks";

function Cross() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] flex-none text-roof">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] flex-none text-olive">
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pain({ dict }: { dict: Dictionary }) {
  const platformPoints = [
    dict.painColPlatform1,
    dict.painColPlatform2,
    dict.painColPlatform3,
    dict.painColPlatform4,
  ];
  const ownPoints = [dict.painColOwn1, dict.painColOwn2, dict.painColOwn3, dict.painColOwn4];

  return (
    <section className="px-6 pb-16 pt-8 md:pt-16" id="problem">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-11 max-w-[680px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-roof before:block before:h-[2px] before:w-[18px] before:bg-roof">
            {dict.painEyebrow}
          </div>
          <h2 className="font-display text-[26px] font-semibold leading-tight text-sea sm:text-[32px] lg:text-[38px]">
            {dict.painTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{dict.painLede}</p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-2 md:gap-6">
          {/* Platforms only */}
          <div className="rounded-2xl border border-sea/10 bg-paper p-7">
            <div className="mb-5 flex items-center gap-2.5">
              <BrandTile platform="booking" className="h-8 w-8" />
              <BrandTile platform="airbnb" className="h-8 w-8" />
              <h3 className="ml-1 text-lg font-semibold text-sea">{dict.painColPlatformTitle}</h3>
            </div>
            <ul>
              {platformPoints.map((p, i) => (
                <li
                  key={i}
                  className={`flex gap-3 py-3 text-[14.5px] leading-relaxed text-ink-soft ${i !== 0 ? "border-t border-sea/10" : ""}`}
                >
                  <Cross />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Your own site */}
          <div className="rounded-2xl border-2 border-olive/40 bg-olive/[0.06] p-7">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[22%] bg-sea">
                <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] text-paper">
                  <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="ml-1 text-lg font-semibold text-sea">{dict.painColOwnTitle}</h3>
            </div>
            <ul>
              {ownPoints.map((p, i) => (
                <li
                  key={i}
                  className={`flex gap-3 py-3 text-[14.5px] font-medium leading-relaxed text-sea ${i !== 0 ? "border-t border-olive/20" : ""}`}
                >
                  <Check />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* "vs" chip sits between the two columns on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <span className="rounded-full bg-sea px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-paper shadow-lg">
              {dict.painVs}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-roof px-6 py-4 text-[15px] font-bold text-paper shadow-[0_8px_20px_-8px_rgba(181,85,42,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-roof-dark"
          >
            {dict.ctaMain}
          </a>
        </div>
      </div>
    </section>
  );
}

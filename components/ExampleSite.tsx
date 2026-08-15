import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";

export default function ExampleSite({ dict }: { dict: Dictionary }) {
  const links = getContactLinks(dict.waMsg);
  const displayUrl = links.exampleSite.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section className="px-6 pb-16" id="primer">
      <div className="mx-auto max-w-[1140px]">
        <div className="mb-8 max-w-[640px]">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-olive before:block before:h-[2px] before:w-[18px] before:bg-olive">
            {dict.exampleEyebrow}
          </div>
          <h2 className="font-display text-[22px] font-semibold leading-tight text-sea sm:text-[28px]">
            {dict.exampleTitle}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{dict.exampleLede}</p>
        </div>

        <a
          href={links.exampleSite}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-sea/15 bg-paper shadow-[0_24px_60px_-30px_rgba(27,58,75,0.5)] transition-transform hover:-translate-y-1"
        >
          <div className="flex items-center gap-3 border-b border-sea/10 bg-sand-deep px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-roof/70" />
              <span className="h-3 w-3 rounded-full bg-olive/70" />
              <span className="h-3 w-3 rounded-full bg-sea/40" />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-[12.5px] font-medium text-ink-soft">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 flex-none text-olive">
                <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="truncate">{displayUrl}</span>
            </div>
          </div>

          <div className="relative aspect-[16/11] w-full bg-paper sm:aspect-[16/9]">
            <iframe
              src={links.exampleSite}
              title={dict.exampleTitle}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-sea/30 via-transparent to-transparent opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-roof px-6 py-3 text-[15px] font-bold text-paper shadow-[0_10px_24px_-8px_rgba(181,85,42,0.6)]">
                {dict.exampleBtn}
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none">
                  <path d="M7 17L17 7M17 7h-7M17 7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

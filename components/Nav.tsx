import type { Dictionary } from "../lib/dictionaries";
import type { Locale } from "../lib/i18n-config";
import { getContactLinks } from "../lib/links";
import LangSwitch from "./LangSwitch";

export default function Nav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const links = getContactLinks(dict.waMsg);

  return (
    <header className="sticky top-0 z-50 border-b border-sea/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-3 px-6 py-4">
        <div className="flex min-w-0 items-center gap-2 font-display text-lg font-semibold text-sea sm:text-xl">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 flex-none sm:h-7 sm:w-7">
            <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="hidden truncate xs:inline">{dict.brand}</span>
        </div>
        <div className="flex flex-none items-center gap-2 sm:gap-4">
          <LangSwitch current={locale} />
          <a
            href={links.whatsapp}
            className="inline-flex flex-none items-center gap-2 whitespace-nowrap rounded-full bg-roof px-3.5 py-2.5 text-[13px] font-bold text-paper transition-colors hover:bg-roof-dark sm:px-4 sm:text-sm"
          >
            {dict.navCta}
          </a>
        </div>
      </div>
    </header>
  );
}

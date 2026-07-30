import type { Dictionary } from "../lib/dictionaries";
import type { Locale } from "../lib/i18n-config";
import { getContactLinks } from "../lib/links";
import LangSwitch from "./LangSwitch";

export default function Nav({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const links = getContactLinks(dict.waMsg);

  return (
    <header className="sticky top-0 z-50 border-b border-sea/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-display text-xl font-semibold text-sea">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 flex-none">
            <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{dict.brand}</span>
        </div>
        <div className="flex items-center gap-4">
          <LangSwitch current={locale} />
          <a
            href={links.whatsapp}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-roof px-4 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-roof-dark"
          >
            {dict.navCta}
          </a>
        </div>
      </div>
    </header>
  );
}

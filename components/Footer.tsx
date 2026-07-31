import type { Dictionary } from "../lib/dictionaries";
import { getContactLinks } from "../lib/links";

export default function Footer({ dict }: { dict: Dictionary }) {
  const links = getContactLinks(dict.waMsg, dict.emailSubject);

  return (
    <footer className="px-6 pb-14 pt-6 text-[13.5px] text-ink-soft">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-sea/10 pt-7">
          <div className="flex items-center gap-2 font-display text-base font-semibold text-sea">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{dict.brand}</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href={links.phoneHref} className="font-semibold text-sea">{links.phone}</a>
            <a href={links.emailHref} className="font-semibold text-sea">{links.email}</a>
            <a href={links.whatsapp} className="font-semibold text-sea">WhatsApp</a>
            <a href={links.telegram} className="font-semibold text-sea">Telegram</a>
            <a href={links.instagram} className="font-semibold text-sea">Instagram</a>
          </div>
        </div>
        <div className="mt-5 text-xs text-ink-soft/70">
          © {new Date().getFullYear()} {dict.brand}. {dict.footerRights}
        </div>
      </div>
    </footer>
  );
}

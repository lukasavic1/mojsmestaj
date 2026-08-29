"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { hreflang, localeLabels, locales, type Locale } from "../lib/i18n-config";

const SCROLL_KEY = "ss-lang-scroll";

export default function LangSwitch({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.documentElement.lang = hreflang[current];
    const raw = sessionStorage.getItem(SCROLL_KEY);
    if (raw == null) return;
    sessionStorage.removeItem(SCROLL_KEY);
    const y = Number(raw);
    if (!Number.isFinite(y)) return;
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, y);
    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, y);
      html.style.scrollBehavior = "";
    });
    return () => cancelAnimationFrame(frame);
  }, [current, pathname]);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    function onPointer(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function switchTo(locale: Locale) {
    setOpen(false);
    if (locale === current) return;
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    document.documentElement.style.scrollBehavior = "auto";
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
    const rest = pathname.split("/").slice(2).join("/");
    const href = `/${locale}${rest ? `/${rest}` : ""}${window.location.search}${window.location.hash}`;
    router.push(href, { scroll: false });
  }

  return (
    <div ref={rootRef} className="relative flex-none">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Jezik"
        className="inline-flex items-center gap-1.5 rounded-full border border-sea/10 bg-paper px-2.5 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:bg-sand-deep"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 flex-none text-sea">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="tracking-wide">{localeLabels[current]}</span>
        <svg viewBox="0 0 24 24" fill="none" className={`h-3.5 w-3.5 flex-none transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[8.5rem] overflow-hidden rounded-xl border border-sea/10 bg-paper py-1 shadow-lg shadow-sea/10"
        >
          {locales.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === current}>
              <button
                type="button"
                onClick={() => switchTo(locale)}
                className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-[13px] font-semibold transition-colors ${
                  locale === current ? "bg-sand-deep text-sea" : "text-ink-soft hover:bg-sand"
                }`}
              >
                <span>{localeNames[locale]}</span>
                <span className="text-[11px] tracking-wide text-ink-soft/70">{localeLabels[locale]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Endonyms shown inside the dropdown so each option reads in its own language.
const localeNames: Record<Locale, string> = {
  sr: "Srpski",
  hr: "Hrvatski",
  bs: "Bosanski",
  me: "Crnogorski",
  en: "English",
};

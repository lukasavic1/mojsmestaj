"use client";

import { useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { hreflang, localeLabels, locales, type Locale } from "../lib/i18n-config";

const SCROLL_KEY = "ss-lang-scroll";

export default function LangSwitch({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

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

  function switchTo(locale: Locale) {
    if (locale === current) return;
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    document.documentElement.style.scrollBehavior = "auto";
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
    const rest = pathname.split("/").slice(2).join("/");
    const href = `/${locale}${rest ? `/${rest}` : ""}${window.location.search}${window.location.hash}`;
    router.push(href, { scroll: false });
  }

  return (
    <div className="flex flex-none gap-0.5 rounded-full border border-sea/10 bg-paper p-1 sm:gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchTo(locale)}
          aria-current={locale === current}
          className={`rounded-full px-2 py-1.5 text-[11px] font-semibold tracking-wide transition-colors sm:px-3 sm:text-xs ${
            locale === current ? "bg-sea text-paper" : "text-ink-soft hover:bg-sand-deep"
          }`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}

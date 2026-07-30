"use client";

import { useRouter, usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "../lib/i18n-config";

export default function LangSwitch({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(locale: Locale) {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className="flex gap-1 rounded-full border border-sea/10 bg-paper p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchTo(locale)}
          aria-current={locale === current}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
            locale === current
              ? "bg-sea text-paper"
              : "text-ink-soft hover:bg-sand-deep"
          }`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}

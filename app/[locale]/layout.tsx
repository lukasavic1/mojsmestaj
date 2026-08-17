import type { Metadata } from "next";
import ConsentBanner from "../../components/ConsentBanner";
import {
  locales,
  isLocale,
  defaultLocale,
  hreflang,
  ogLocale,
  type Locale,
} from "../../lib/i18n-config";
import { getDictionary } from "../../lib/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  // Search engines ignore malformed hreflang values, so each locale needs a
  // valid BCP-47 tag — "me" is a country code, not a language.
  const languages: Record<string, string> = { "x-default": `${base}/${defaultLocale}` };
  locales.forEach((l) => {
    languages[hreflang[l]] = `${base}/${l}`;
  });

  // og:image / twitter:image come from app/[locale]/opengraph-image.tsx.
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(base),
    alternates: {
      canonical: `${base}/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${base}/${locale}`,
      locale: ogLocale[locale],
      type: "website",
      siteName: dict.brand,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(hreflang[locale])};`,
        }}
      />
      {children}
      <ConsentBanner dict={dict} />
    </>
  );
}

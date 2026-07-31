import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
import {
  locales,
  isLocale,
  defaultLocale,
  hreflang,
  ogLocale,
  type Locale,
} from "../../lib/i18n-config";
import { getDictionary } from "../../lib/dictionaries";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

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

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <html lang={hreflang[locale]}>
      <head>
        <Script
          id="google-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-868270889');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-868270889"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

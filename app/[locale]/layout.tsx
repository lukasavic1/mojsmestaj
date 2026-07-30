import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
import { locales, isLocale, defaultLocale, type Locale } from "../../lib/i18n-config";
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

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${base}/${l}`;
  });

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
      locale,
      type: "website",
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
    <html lang={locale === "me" ? "sr" : locale}>
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

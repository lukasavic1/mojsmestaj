import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Inter } from "next/font/google";
import GoogleAds from "../components/GoogleAds";
import { defaultLocale, hreflang } from "../lib/i18n-config";
import "./globals.css";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={hreflang[defaultLocale]} suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        {children}
        <GoogleAds />
        <Analytics />
      </body>
    </html>
  );
}

"use client";

import Script from "next/script";
import { useEffect } from "react";
import { consentDefaultScript } from "../lib/consent";

// Same pattern as the contact links: the real value is the default, so a
// missing env var in the dashboard does not silently switch tracking off.
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-868270889";
// Label of the "Контакт" conversion action, count = one, 30-day window.
const CONTACT_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_CONTACT || "1pKSCK3HmdocEKmGg54D";

type Gtag = (...args: unknown[]) => void;

// Every way a visitor can reach us. Instagram and the example-site link are
// deliberately absent — following a profile is not an enquiry.
function isContactLink(href: string) {
  return (
    href.startsWith("https://wa.me/") ||
    href.startsWith("https://t.me/") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

// mailto: and tel: hand off to another app and leave the page alone. wa.me and
// t.me replace it, which can kill the request before it leaves the browser.
function unloadsThePage(href: string) {
  return href.startsWith("https://");
}

export default function GoogleAds() {
  useEffect(() => {
    if (!ADS_ID || !CONTACT_LABEL) return;

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a[href]") as
        | HTMLAnchorElement
        | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!isContactLink(href)) return;

      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!gtag) return;

      const sendTo = `${ADS_ID}/${CONTACT_LABEL}`;
      const keepsPageAlive =
        !unloadsThePage(href) ||
        anchor.target === "_blank" ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey;

      if (keepsPageAlive) {
        gtag("event", "conversion", { send_to: sendTo });
        return;
      }

      // Hold the navigation until the conversion is away, but never longer than
      // a moment — a blocked or slow tag must not strand someone who is trying
      // to message us.
      event.preventDefault();
      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        window.location.href = anchor.href;
      };
      window.setTimeout(go, 350);
      gtag("event", "conversion", { send_to: sendTo, event_callback: go });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!ADS_ID) return null;

  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {consentDefaultScript}
      </Script>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');`}
      </Script>
    </>
  );
}

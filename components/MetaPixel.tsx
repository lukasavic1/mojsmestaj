"use client";

import Script from "next/script";
import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CONSENT_COOKIE, CONSENT_EVENT, type ConsentChoice } from "../lib/consent";
import {
  META_PIXEL_ID,
  contactChannelFromHref,
  trackContact,
  type ContactChannel,
} from "../lib/meta-pixel";

// Digits only, so the ID can be inlined into the script below safely.
const PIXEL_ID = /^\d+$/.test(META_PIXEL_ID) ? META_PIXEL_ID : "";

// Meta's standard base code, plus a consent call before init: the pixel holds
// everything back until the visitor accepts the cookie banner, the same as
// Google's Consent Mode.
const baseCode = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('consent',document.cookie.indexOf('${CONSENT_COOKIE}=granted')>-1?'grant':'revoke');
fbq('init','${PIXEL_ID}');
fbq('track','PageView');
`.trim();

// The base code already counts the first page. After that the App Router
// navigates client-side, so each later route change is counted here — once,
// even when React re-runs the effect in development.
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrl = useRef<string | null>(null);

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`;
    if (lastUrl.current === null || lastUrl.current === url) {
      lastUrl.current = url;
      return;
    }
    lastUrl.current = url;
    window.fbq?.("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;

    // One listener for the whole document, so every contact link — including
    // ones added later, in server components — is tracked without wiring.
    // Elements can also opt in with data-track-contact="<channel>".
    function handleClick(event: MouseEvent) {
      if (event.button !== 0) return;
      const target = event.target as HTMLElement | null;

      const tagged = target?.closest?.("[data-track-contact]");
      const taggedChannel = tagged?.getAttribute("data-track-contact");
      if (taggedChannel && tagged?.tagName !== "FORM") {
        trackContact(taggedChannel as ContactChannel);
        return;
      }

      const anchor = target?.closest?.("a[href]");
      const channel = anchor && contactChannelFromHref(anchor.getAttribute("href") || "");
      if (channel) trackContact(channel);
    }

    // Contact forms: <form data-track-contact="form"> is counted on submit.
    function handleSubmit(event: SubmitEvent) {
      const form = event.target as HTMLElement | null;
      if (form?.getAttribute?.("data-track-contact")) trackContact("form");
    }

    function handleConsent(event: Event) {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      window.fbq?.("consent", choice === "granted" ? "grant" : "revoke");
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);
    window.addEventListener(CONSENT_EVENT, handleConsent);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
      window.removeEventListener(CONSENT_EVENT, handleConsent);
    };
  }, []);

  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {baseCode}
      </Script>
      {/* Raw HTML on purpose: rendered as a JSX <img>, React hoists it into a
          <link rel="preload"> that fires for every visitor, JS and consent or not. */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`,
        }}
      />
      {/* useSearchParams needs a Suspense boundary or the static pages bail
          out of prerendering. */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

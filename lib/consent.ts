// Consent Mode v2. Google requires this for EEA traffic (Croatia), and without
// it conversions from those visitors are dropped or heavily modelled.
export const CONSENT_COOKIE = "svs_consent";
export const CONSENT_EVENT = "svs:consent";

export type ConsentChoice = "granted" | "denied";

const SIGNALS = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"] as const;

export function consentPayload(choice: ConsentChoice) {
  return Object.fromEntries(SIGNALS.map((s) => [s, choice]));
}

export function readConsent(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=(granted|denied)`));
  return match ? (match[1] as ConsentChoice) : null;
}

export function writeConsent(choice: ConsentChoice) {
  // 180 days: long enough not to nag, short enough that consent stays current.
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${CONSENT_COOKIE}=${choice}; path=/; max-age=${maxAge}; SameSite=Lax`;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("consent", "update", consentPayload(choice));

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

// Runs before gtag.js so the default is denial, then re-applies a stored choice
// straight away — a returning visitor who accepted should not be measured as if
// they had not.
export const consentDefaultScript = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(document.cookie.indexOf('${CONSENT_COOKIE}=granted')>-1){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
`.trim();

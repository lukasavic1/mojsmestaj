export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export type ContactChannel = "whatsapp" | "viber" | "telegram" | "phone" | "email" | "form";

// Fire-and-forget: never throws, never waits. If the pixel is missing (no ID,
// blocked, not loaded yet) the click simply goes through untracked.
export function trackContact(channel: ContactChannel) {
  try {
    window.fbq?.("track", "Contact", { content_name: channel });
  } catch {
    // Tracking must never get in the way of someone trying to reach us.
  }
}

// Instagram and the example-site link are deliberately absent — following a
// profile is not an enquiry (same rule as the Google Ads conversion).
export function contactChannelFromHref(href: string): ContactChannel | null {
  const h = href.trim().toLowerCase();
  if (h.startsWith("https://wa.me/") || h.startsWith("https://api.whatsapp.com/") || h.startsWith("whatsapp:")) {
    return "whatsapp";
  }
  if (h.startsWith("viber:")) return "viber";
  if (h.startsWith("https://t.me/") || h.startsWith("https://telegram.me/") || h.startsWith("tg:")) {
    return "telegram";
  }
  if (h.startsWith("tel:")) return "phone";
  if (h.startsWith("mailto:")) return "email";
  return null;
}

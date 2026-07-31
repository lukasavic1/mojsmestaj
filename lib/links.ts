// Real contact details are the defaults, so a missing env var in the hosting
// dashboard degrades to a working link rather than a dead placeholder.
const WHATSAPP_NUMBER = "381677747710";
const TELEGRAM_HANDLE = "svojsmestaj";
const CONTACT_PHONE = "+381 67 774 7710";
const CONTACT_EMAIL = "svojsmestaj@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/svojsmestaj";

export function getContactLinks(waMessage: string) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || WHATSAPP_NUMBER;
  const telegramHandle = process.env.NEXT_PUBLIC_TELEGRAM_HANDLE || TELEGRAM_HANDLE;
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || CONTACT_PHONE;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || CONTACT_EMAIL;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || INSTAGRAM_URL;

  return {
    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`,
    telegram: `https://t.me/${telegramHandle}`,
    phone,
    phoneHref: `tel:${phone.replace(/[^+\d]/g, "")}`,
    email,
    emailHref: `mailto:${email}`,
    instagram,
  };
}

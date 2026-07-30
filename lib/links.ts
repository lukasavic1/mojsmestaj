export function getContactLinks(waMessage: string) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "381600000000";
  const telegramHandle = process.env.NEXT_PUBLIC_TELEGRAM_HANDLE || "mojsmestaj";
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+381 60 000 0000";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@mojsmestaj.rs";
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/";

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

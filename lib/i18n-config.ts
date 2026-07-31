export const locales = ["sr", "hr", "bs", "me"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

export const localeLabels: Record<Locale, string> = {
  sr: "SR",
  hr: "HR",
  bs: "BA",
  me: "CG",
};

// Valid BCP-47 tags for hreflang / og:locale. Montenegrin has no ISO 639-1
// code of its own, so it is expressed as Serbian-as-written-in-Montenegro.
export const hreflang: Record<Locale, string> = {
  sr: "sr-RS",
  hr: "hr-HR",
  bs: "bs-BA",
  me: "sr-ME",
};

export const ogLocale: Record<Locale, string> = {
  sr: "sr_RS",
  hr: "hr_HR",
  bs: "bs_BA",
  me: "sr_ME",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

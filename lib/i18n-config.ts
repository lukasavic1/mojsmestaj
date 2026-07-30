export const locales = ["sr", "hr", "bs", "me"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

export const localeLabels: Record<Locale, string> = {
  sr: "SR",
  hr: "HR",
  bs: "BA",
  me: "CG",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

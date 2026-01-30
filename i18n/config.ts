export const locales = ["nl", "en", "sv"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  sv: "Svenska",
};

export const localeFlags: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  sv: "SV",
};

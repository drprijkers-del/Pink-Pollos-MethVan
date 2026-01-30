"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeFlags, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-stone-800/50 p-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
            locale === loc
              ? "bg-pink-500 text-white"
              : "text-stone-400 hover:text-white hover:bg-stone-700/50"
          }`}
        >
          {localeFlags[loc]}
        </button>
      ))}
    </div>
  );
}

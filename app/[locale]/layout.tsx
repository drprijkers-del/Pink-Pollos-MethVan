import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { CookieBanner } from "@/components/shared/cookie-banner";
import { OrganizationJsonLd } from "@/components/shared/json-ld";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<Locale, string> = {
    nl: "Pink Pollos",
    en: "Pink Pollos",
    sv: "Pink Pollos",
  };

  const descriptions: Record<Locale, string> = {
    nl: "Wij doen niet aan onboarding-theater. Senior developers en agile experts die je team versterken vanaf dag één.",
    en: "No onboarding theater. Senior developers and agile experts who strengthen your team from day one.",
    sv: "Ingen onboarding-teater. Senior utvecklare och agila experter som stärker ditt team från dag ett.",
  };

  const localeMap: Record<Locale, string> = {
    nl: "nl_NL",
    en: "en_US",
    sv: "sv_SE",
  };

  return {
    title: {
      default: titles[locale as Locale] || titles.nl,
      template: `%s | Pink Pollos`,
    },
    description: descriptions[locale as Locale] || descriptions.nl,
    metadataBase: new URL("https://pinkpollos.com"),
    openGraph: {
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
      url: `https://pinkpollos.com/${locale}`,
      siteName: "Pink Pollos",
      locale: localeMap[locale as Locale] || localeMap.nl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as Locale] || titles.nl,
      description: descriptions[locale as Locale] || descriptions.nl,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        nl: "/nl",
        en: "/en",
        sv: "/sv",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <OrganizationJsonLd locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50`}
      >
        <NextIntlClientProvider messages={messages}>
          <PostHogProvider>
            {children}
            <CookieBanner />
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

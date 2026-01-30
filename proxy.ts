import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: [
    // Match all pathnames except:
    // - API routes
    // - Static files (_next, public assets)
    // - Files with extensions
    // - Favicon and icon routes
    "/((?!api|_next|icon|apple-icon|favicon|manifest|robots|sitemap|.*\\..*).*)",
  ],
};

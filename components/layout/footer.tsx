import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50"
              >
                Pink Pollos
              </Link>
              <p className="mt-4 text-sm text-stone-600 dark:text-stone-400 max-w-sm">
                Senior expertise, strak verpakt. Development en agile
                consulting zonder de bullshit.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-4">
                Navigatie
              </h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm text-stone-600 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                  >
                    Plan een kennismaking &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-500 dark:text-stone-500">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Kwaliteit is
              geen toeval.
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-500">
              KvK 12345678 &middot; BTW NL123456789B01
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

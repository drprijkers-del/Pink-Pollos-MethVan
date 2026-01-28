import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/shared/logo";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-200/50 dark:to-stone-950/50 pointer-events-none" />

      <Container className="relative">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block">
                <Logo size="md" showText={true} />
              </Link>
              <p className="mt-6 text-stone-600 dark:text-stone-400 max-w-sm leading-relaxed">
                Senior expertise, strak verpakt. Development en agile consulting
                zonder de bullshit.
              </p>

              {/* Social links placeholder */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-950 dark:hover:text-pink-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-950 dark:hover:text-pink-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-6 uppercase tracking-wider">
                Navigatie
              </h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-stone-600 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-6 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-stone-600 dark:text-stone-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-colors"
                  >
                    Plan een kennismaking
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-stone-300 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Kwaliteit is
              geen toeval.
            </p>
            <p className="text-sm text-stone-500">
              KvK 12345678 &middot; BTW NL123456789B01
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

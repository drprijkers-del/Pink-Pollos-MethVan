import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description: "Neem contact op met Pink Pollos.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Klaar om te praten?
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400">
          Geen sales calls. Geen decks. Gewoon een eerlijk gesprek.
        </p>
        <div className="mt-10">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-lg text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
          >
            {SITE_CONFIG.email} &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}

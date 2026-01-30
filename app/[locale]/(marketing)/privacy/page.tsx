import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Hoe Pink Pollos omgaat met je gegevens.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
              Laatst bijgewerkt: januari 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                1. Wie zijn wij
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Pink Pollos is een collectief van senior consultants. Deze
                website is bereikbaar via{" "}
                <a
                  href={SITE_CONFIG.url}
                  className="text-pink-600 dark:text-pink-400 hover:underline"
                >
                  {SITE_CONFIG.url}
                </a>
                . Voor vragen over privacy kun je contact opnemen via{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-pink-600 dark:text-pink-400 hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                2. Welke gegevens verzamelen wij
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                Wij verzamelen alleen gegevens die je zelf aan ons verstrekt:
              </p>
              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 space-y-2">
                <li>
                  <strong>Contactformulier:</strong> naam, e-mailadres en je
                  bericht
                </li>
                <li>
                  <strong>E-mail:</strong> gegevens die je deelt wanneer je ons
                  mailt
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                3. Waarvoor gebruiken wij je gegevens
              </h2>
              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 space-y-2">
                <li>Om te reageren op je vraag of bericht</li>
                <li>Om contact met je op te nemen over mogelijke samenwerking</li>
                <li>Om onze dienstverlening te verbeteren</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                4. Analytics
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Wij gebruiken privacy-vriendelijke analytics om te begrijpen hoe
                bezoekers onze website gebruiken. Deze gegevens zijn anoniem en
                worden niet gedeeld met derden. Analytics worden alleen geladen
                na je toestemming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                5. Cookies
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Wij gebruiken alleen functionele cookies die noodzakelijk zijn
                voor de werking van de website. Voor analytics cookies vragen
                wij eerst je toestemming.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                6. Bewaartermijn
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Wij bewaren je gegevens niet langer dan noodzakelijk.
                Contactgegevens worden verwijderd zodra de communicatie is
                afgerond, tenzij er een lopende samenwerking is.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                7. Je rechten
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                Je hebt het recht om:
              </p>
              <ul className="list-disc list-inside text-stone-600 dark:text-stone-400 space-y-2">
                <li>Inzage te vragen in je gegevens</li>
                <li>Je gegevens te laten corrigeren of verwijderen</li>
                <li>Bezwaar te maken tegen verwerking</li>
                <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                8. Beveiliging
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Wij nemen passende maatregelen om je gegevens te beschermen. De
                website maakt gebruik van HTTPS-versleuteling.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-white mb-4">
                9. Wijzigingen
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Wij kunnen deze privacy policy aanpassen. Bij belangrijke
                wijzigingen informeren wij je via de website.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

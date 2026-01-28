import { PageHero } from "@/components/sections/page-hero";
import { ContactSection } from "@/components/sections/contact-form";

export const metadata = {
  title: "Contact",
  description: "Neem contact op met Pink Pollos. Geen sales calls, gewoon een eerlijk gesprek.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Let's Talk"
        title="Klaar om te praten?"
        subtitle="Geen sales calls. Geen decks. Gewoon een eerlijk gesprek over wat je nodig hebt en of wij de juiste fit zijn."
      />
      <ContactSection />
    </>
  );
}

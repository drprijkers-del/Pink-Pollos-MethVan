import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Dennis",
  description: "Agile Coach en Team Manager bij Pink Pollos.",
};

export default function DennisPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Dennis
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400">
          Agile Coach & Team Manager. Maakt teams beter.
        </p>
      </Container>
    </section>
  );
}

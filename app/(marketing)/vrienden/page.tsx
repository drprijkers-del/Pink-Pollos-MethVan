import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Vrienden van Pink Pollos",
  description: "Onze inner circle van vertrouwde specialisten.",
};

export default function VriendenPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Vrienden van Pink Pollos
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400">
          De inner circle. Handgepickte specialisten met bewezen track record.
        </p>
      </Container>
    </section>
  );
}

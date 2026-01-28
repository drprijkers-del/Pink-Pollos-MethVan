import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Chris",
  description: "Senior Full-stack Developer bij Pink Pollos.",
};

export default function ChrisPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container size="narrow">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          Chris
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400">
          Senior Full-stack Developer. Bouwt systemen die werken.
        </p>
      </Container>
    </section>
  );
}

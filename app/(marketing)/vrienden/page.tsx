import { PageHero } from "@/components/sections/page-hero";
import { FriendsGrid } from "@/components/sections/friends-grid";

export const metadata = {
  title: "Vrienden van Pink Pollos",
  description: "Onze inner circle van vertrouwde specialisten. Handgepickt, bewezen, betrouwbaar.",
};

export default function VriendenPage() {
  return (
    <>
      <PageHero
        badge="Inner Circle"
        title="Vrienden van Pink Pollos"
        subtitle="Specialisten die we kennen, hebben samengewerkt met, en zonder twijfel aanbevelen. Geen open netwerk, alleen bewezen kwaliteit."
      />
      <FriendsGrid />
    </>
  );
}

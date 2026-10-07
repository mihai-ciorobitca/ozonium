import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
import { PriceList } from "@/components/price-list";
export const metadata: Metadata = {
  title: "Prețuri și tarife",
  description:
    "Tarifele publicate de Ozonium Iași pentru consultații, recuperare, neurologie, ozonoterapie și proceduri regenerative.",
};
export default function PricesPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Claritate, înainte de primul pas."
        description="Explorează tarifele consultațiilor și procedurilor. Pentru un program de îngrijire personalizat, echipa îți poate explica opțiunile și costurile."
        eyebrow="PREȚURI ȘI TARIFE"
        crumbs={[{ label: "Prețuri" }]}
      />
      <PriceList />
      <PageCTA title="Ai nevoie de o estimare pentru planul tău?" />
    </main>
  );
}

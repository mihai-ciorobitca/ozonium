import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
export const metadata: Metadata = { title: "Politica de cookie-uri" };
export default function CookiesPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Despre cookie-uri."
        description="Ce folosește această versiune a site-ului și ce se întâmplă când accesezi servicii externe."
        eyebrow="CONFIDENȚIALITATE ÎN BROWSER"
        crumbs={[{ label: "Politica de cookie-uri" }]}
      />
      <article className="privacy-content">
        <h2>Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt fișiere mici pe care un site le poate salva în
          browser. Alte tehnologii, precum stocarea locală, pot păstra
          preferințe pe dispozitiv.
        </p>
        <h2>Ce utilizează această versiune</h2>
        <p>
          Acest site nu instalează cookie-uri de analiză sau publicitate și nu
          salvează preferințe ori datele formularului în stocarea browserului.
          Nu încarcă Google Analytics, Google Ads sau Meta Pixel.
        </p>
        <h2>Linkuri către servicii externe</h2>
        <p>
          WhatsApp și Google Maps se deschid doar când accesezi linkurile
          respective. Ele pot folosi cookie-uri și alte tehnologii conform
          propriilor politici. Pagina de programare transmite conținutul
          mesajului către WhatsApp în momentul deschiderii linkului.
        </p>
        <h2>Controlul browserului</h2>
        <p>
          Poți gestiona cookie-urile și datele site-urilor din setările
          browserului. Aceste setări se aplică și serviciilor externe pe care le
          accesezi.
        </p>
        <h2>Mai multe informații</h2>
        <p>
          Consultă{" "}
          <Link href="/confidentialitate">pagina de confidențialitate</Link> sau{" "}
          <Link href="/contact">contactează echipa</Link> pentru întrebări.
        </p>
      </article>
    </main>
  );
}

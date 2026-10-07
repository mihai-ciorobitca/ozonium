import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { clinic } from "@/lib/content";
export const metadata: Metadata = { title: "Termeni și condiții" };
const sections = [
  {
    title: "Informații generale",
    body: "Site-ul prezintă serviciile clinicii Ozonium / Ozon Life din Iași. Prin utilizarea sa, accepți condițiile de utilizare de mai jos. Pentru informații despre clinică, contactează echipa la datele publicate în pagina de contact.",
  },
  {
    title: "Scopul informațiilor publicate",
    body: "Informațiile au caracter informativ și educațional. Nu înlocuiesc consultația de specialitate, diagnosticul sau tratamentul recomandat de un medic. Recomandările și rezultatele sunt individuale.",
  },
  {
    title: "Servicii, tarife și programări",
    body: "Disponibilitatea serviciilor, programul și tarifele se confirmă direct cu echipa clinicii. O solicitare online sau telefonică nu constituie o programare confirmată până la acceptarea sa de către reprezentanții clinicii.",
  },
  {
    title: "Formularul de solicitare",
    body: "Formularul pregătește un mesaj pentru WhatsApp. Datele nu sunt salvate într-o bază de date a acestui site. Mesajul trebuie trimis de utilizator, iar disponibilitatea este confirmată ulterior de clinică. Nu include documente sau informații medicale sensibile.",
  },
  {
    title: "Proprietate intelectuală",
    body: "Textele, fotografiile, logo-ul și materialele clinicii sunt protejate de drepturile de proprietate intelectuală. Reutilizarea lor în alte scopuri necesită acordul titularului drepturilor.",
  },
  {
    title: "Actualizarea informațiilor",
    body: "Clinica poate actualiza conținutul, serviciile și tarifele. Pentru o decizie legată de o programare sau un tratament, verifică informațiile relevante direct cu echipa.",
  },
  {
    title: "Date personale și servicii externe",
    body: "Site-ul conține legături către WhatsApp și Google Maps. Aceste servicii au propriile condiții de utilizare și politici de confidențialitate. Detaliile despre fluxul de contact sunt explicate în pagina de confidențialitate.",
  },
];
export default function TermsPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Termeni și condiții."
        eyebrow="INFORMAȚII DESPRE UTILIZAREA SITE-ULUI"
        crumbs={[{ label: "Termeni și condiții" }]}
      />
      <article className="privacy-content">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <h2>Confidențialitate și cookie-uri</h2>
        <p>
          Consultă{" "}
          <Link href="/confidentialitate">
            informațiile despre confidențialitate
          </Link>{" "}
          și <Link href="/politica-cookies">politica de cookie-uri</Link>.
        </p>
        <h2>Contact</h2>
        <p>
          Pentru întrebări despre acest site:{" "}
          <a href={`mailto:${clinic.email}`}>{clinic.email}</a>,{" "}
          <a href={clinic.phoneHref}>{clinic.phone}</a>.{" "}
          <Link href="/contact">Vezi toate datele de contact</Link>.
        </p>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/lib/content";
export const metadata: Metadata = { title: "Confidențialitate" };
export default function PrivacyPage() {
  return (
    <main id="main" className="container">
      <div className="page-intro">
        <nav className="breadcrumb" aria-label="Fir de navigare">
          <Link href="/">Acasă</Link>
          <span>/</span>
          <span>Confidențialitate</span>
        </nav>
        <h1>Despre datele tale.</h1>
        <p>
          Informații despre formularul de solicitare și utilizarea acestui site.
        </p>
      </div>
      <article className="privacy-content">
        <h2>Solicitarea unei programări</h2>
        <p>
          Formularul pregătește un mesaj cu numele, telefonul, serviciul ales și
          detaliile opționale completate. Aceste informații nu sunt salvate
          într-o bază de date a acestui site. La apăsarea butonului, mesajul
          este inclus într-un link care deschide WhatsApp. Poți verifica mesajul
          înainte de a-l trimite clinicii.
        </p>
        <h2>Servicii externe</h2>
        <p>
          WhatsApp și Google Maps sunt servicii externe, cu propriile condiții
          și politici de confidențialitate. Accesarea lor poate transmite
          informații tehnice către furnizorul respectiv. Conținutul mesajului de
          programare este transmis către WhatsApp la deschiderea linkului, chiar
          înainte de a apăsa „Trimite”.
        </p>
        <h2>Informații medicale</h2>
        <p>
          Nu include documente, rezultate de investigații sau detalii medicale
          sensibile în acest formular. Pentru transmiterea lor în siguranță,
          discută mai întâi cu echipa clinicii.
        </p>
        <h2>Cookie-uri și analiză</h2>
        <p>
          Această versiune a site-ului nu utilizează instrumente de analiză,
          cookie-uri publicitare sau stocare în browser pentru informațiile din
          formular.
        </p>
        <h2>Contact și drepturi</h2>
        <p>
          Pentru întrebări despre prelucrarea datelor de către clinică,
          contactează <a href={`mailto:${clinic.email}`}>{clinic.email}</a>.
          Poți consulta și{" "}
          <Link href="/termeni-si-conditii">
            termenii și condițiile site-ului
          </Link>
          .
        </p>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { clinic } from "@/lib/content";
export const metadata: Metadata = {
  title: "Următorul pas",
  robots: { index: false, follow: false },
};
export default function ThankYouPage() {
  return (
    <main id="main" className="container not-found">
      <span className="eyebrow" style={{ justifyContent: "center" }}>
        ȚINEM LEGĂTURA
      </span>
      <h1>
        O conversație.
        <br />
        Un prim pas.
      </h1>
      <p>
        Dacă ai trimis solicitarea pe WhatsApp, echipa clinicii va confirma
        disponibilitatea.
        <br />
        Dacă ai pregătit doar mesajul, deschide conversația și trimite-l pentru
        a ajunge la clinică.
      </p>
      <div className="confirmation-actions">
        <a
          href={clinic.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="button button-dark"
        >
          <MessageCircle size={18} />
          Deschide WhatsApp
        </a>
        <Link href="/" className="button button-outline">
          Înapoi la pagina principală
        </Link>
      </div>
    </main>
  );
}

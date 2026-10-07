import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand footer-brand">
              <Image src="/images/logo.svg" alt="" width={46} height={46} />
              <span>
                ozonium
                <span className="brand-caption">MEDICINĂ UMANĂ INSPIRATĂ</span>
              </span>
            </Link>
            <p>Grijă pentru omul din spatele fiecărui diagnostic.</p>
          </div>
          <Link href="/programare" className="button button-lime">
            Hai să vorbim despre sănătatea ta
          </Link>
        </div>
        <div className="footer-columns">
          <div>
            <span className="footer-label">DESCOPERĂ OZONIUM</span>
            <Link href="/despre-noi">Povestea noastră</Link>
            <Link href="/echipa">Echipa medicală</Link>
            <Link href="/servicii">Servicii medicale</Link>
          </div>
          <div>
            <span className="footer-label">PENTRU PACIENȚI</span>
            <Link href="/programare">Programări</Link>
            <Link href="/preturi">Tarifele clinicii</Link>
            <Link href="/#intrebari">Întrebări frecvente</Link>
          </div>
          <div>
            <span className="footer-label">NE GĂSEȘTI AICI</span>
            {clinic.locations.map((location) => (
              <a
                key={location}
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
              >
                <MapPin size={15} /> {location}
              </a>
            ))}
          </div>
          <div>
            <span className="footer-label">ȚINEM LEGĂTURA</span>
            <a href={clinic.phoneHref}>
              <Phone size={15} /> {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`}>
              <Mail size={15} /> {clinic.email}
            </a>
            <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
              Scrie-ne pe WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-extra">
          <Link href="/pentru-pacienti">Experiențele pacienților</Link>
          <Link href="/blog">Blog și ghiduri</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dezvoltarea-si-diversificarea-serviciilor-ozonlife">
            Proiect finanțat din fonduri europene · SMIS 313475
          </Link>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Ozonium Clinic. Toate drepturile
            rezervate.
          </span>
          <div>
            <Link href="/confidentialitate">Confidențialitate</Link>
            <Link href="/politica-cookies">Cookie-uri</Link>
            <Link href="/termeni-si-conditii">Termeni și condiții</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

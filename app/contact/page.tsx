import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { clinic } from "@/lib/content";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează Ozonium în Iași: Strada Anastasie Panu 30A și Bulevardul Primăverii 4. Telefoane, e-mail și programări.",
};
const locations = [
  {
    name: "Ozonium · Anastasie Panu",
    address: clinic.locations[0],
    phone: clinic.phone,
    href: clinic.phoneHref,
    email: clinic.email,
  },
  {
    name: "Ozonium · Primăverii",
    address: clinic.locations[1],
    phone: "0332 416 818",
    href: "tel:+40332416818",
    email: "clinica@ozonium.ro",
  },
];
export default function ContactPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Suntem aproape de tine."
        description="O întrebare, o programare sau o primă conversație. Alege cum îți este mai ușor să ne contactezi."
        eyebrow="CONTACT OZONIUM"
        crumbs={[{ label: "Contact" }]}
      />
      <section className="contact-page-layout">
        <div className="contact-page-photo">
          <Image
            src="/images/contact-clinic-photo.jpg"
            alt="Clinica Ozonium din Iași"
            fill
            preload
            sizes="(max-width:700px) 90vw, 45vw"
          />
        </div>
        <div className="contact-page-options">
          <h2>Hai să vorbim.</h2>
          <a className="booking-contact" href={clinic.phoneHref}>
            <Phone size={25} />
            <div>
              <strong>{clinic.phone}</strong>
              <small>Informații și programări</small>
            </div>
          </a>
          <a
            className="booking-contact"
            href={clinic.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={25} />
            <div>
              <strong>Scrie-ne pe WhatsApp</strong>
              <small>O conversație, în ritmul tău</small>
            </div>
          </a>
          <a className="booking-contact" href={`mailto:${clinic.email}`}>
            <Mail size={25} />
            <div>
              <strong>{clinic.email}</strong>
              <small>Întrebări și informații</small>
            </div>
          </a>
          <Link className="button button-dark" href="/programare">
            Pregătește solicitarea de programare
          </Link>
        </div>
      </section>
      <section className="locations-section">
        <span className="eyebrow">DOUĂ LOCAȚII ÎN IAȘI</span>
        <h2>Aceeași grijă pentru tine.</h2>
        <p className="section-description">
          Confirmă locația consultației cu echipa înainte de a veni.
        </p>
        <div className="locations-grid">
          {locations.map((location) => (
            <article key={location.name}>
              <span className="service-icon">
                <MapPin strokeWidth={1.5} />
              </span>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <a href={location.href}>
                <Phone size={16} />
                {location.phone}
              </a>
              <a href={`mailto:${location.email}`}>
                <Mail size={16} />
                {location.email}
              </a>
              <a
                className="button button-outline"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={16} />
                Deschide în Google Maps
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

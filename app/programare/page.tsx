import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, MapPin } from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { clinic } from "@/lib/content";
import { team } from "@/lib/team";
export const metadata: Metadata = {
  title: "Programare",
  description:
    "Programează o consultație la Ozonium Iași. Contactează echipa telefonic sau pregătește o solicitare pe WhatsApp.",
};
export default async function AppointmentPage({
  searchParams,
}: {
  searchParams: Promise<{ serviciu?: string; medic?: string }>;
}) {
  const params = await searchParams;
  const doctor = team.find((item) => item.name === params.medic)?.name || "";
  return (
    <main id="main" className="container">
      <div className="page-intro">
        <nav aria-label="Fir de navigare" className="breadcrumb">
          <Link href="/">Acasă</Link>
          <ChevronRight size={13} />
          <span>Programare</span>
        </nav>
        <span className="eyebrow">PRIMUL PAS CĂTRE ÎNGRIJIRE</span>
        <h1>
          Hai să găsim
          <br />
          următorul pas pentru tine.
        </h1>
        <p>
          Alege cum îți este mai ușor să ne contactezi. Echipa te ajută cu
          specialitatea, locația și disponibilitatea.
        </p>
      </div>
      <div className="booking-layout">
        <aside className="booking-sidebar">
          <h2>Preferi să vorbim direct?</h2>
          <p>Suntem aici să îți răspundem la întrebări.</p>
          <a className="booking-contact" href={clinic.phoneHref}>
            <Phone size={25} />
            <div>
              <strong>{clinic.phone}</strong>
              <small>Sună pentru informații și programări</small>
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
              <strong>WhatsApp</strong>
              <small>Scrie-ne, în ritmul tău</small>
            </div>
          </a>
          <h3>Două locații în Iași</h3>
          {clinic.locations.map((location) => (
            <a
              className="location"
              key={location}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={14} /> {location}
            </a>
          ))}
          <p className="location-note">
            Confirmă locația consultației cu echipa înainte de vizită.
          </p>
        </aside>
        <AppointmentForm service={params.serviciu} doctor={doctor} />
      </div>
    </main>
  );
}

import Link from "next/link";
import { Phone } from "lucide-react";
import { clinic } from "@/lib/content";
export function PageCTA({
  service = "",
  title = "Hai să găsim următorul pas.",
}: {
  service?: string;
  title?: string;
}) {
  return (
    <section className="detail-cta">
      <div>
        <h2>{title}</h2>
        <p>Echipa te ajută cu informații și programări, în ritmul tău.</p>
      </div>
      <div>
        <Link
          className="button button-lime"
          href={service ? `/programare?serviciu=${service}` : "/programare"}
        >
          Solicită o programare
        </Link>
        <a className="button button-outline" href={clinic.phoneHref}>
          <Phone size={17} />
          {clinic.phone}
        </a>
      </div>
    </section>
  );
}

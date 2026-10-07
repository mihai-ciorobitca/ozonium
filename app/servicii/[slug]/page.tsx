import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ChevronRight, Phone } from "lucide-react";
import { clinic, services } from "@/lib/content";
import {
  procedures,
  legacyServiceAliases,
  bookingService,
  procedurePath,
} from "@/lib/procedures";
export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...Object.keys(legacyServiceAliases).map((slug) => ({ slug })),
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === bookingService(slug));
  return { title: service?.name || "Serviciu", description: service?.summary };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === bookingService(slug));
  if (!service) notFound();
  return (
    <main id="main" className="container">
      <div className="page-intro">
        <nav aria-label="Fir de navigare" className="breadcrumb">
          <Link href="/">Acasă</Link>
          <ChevronRight size={13} />
          <Link href="/#servicii">Servicii medicale</Link>
          <ChevronRight size={13} />
          <span>{service.name}</span>
        </nav>
        <span className="eyebrow">{service.tag.toUpperCase()}</span>
        <h1>{service.name}</h1>
        <p>{service.summary}</p>
      </div>
      <section className="detail-hero">
        <div className="detail-image">
          <Image
            src={`/images/${service.image}`}
            alt={`${service.name} la clinica Ozonium`}
            fill
            priority
            sizes="(max-width:700px) 95vw, 45vw"
          />
        </div>
        <div className="detail-copy">
          <h2>
            Începem cu tine.
            <br />
            <span className="muted">Și cu povestea ta.</span>
          </h2>
          <p>{service.description}</p>
          <Link
            href={`/programare?serviciu=${service.slug}`}
            className="button button-dark"
          >
            Programează o consultație
          </Link>
        </div>
      </section>
      <section className="detail-content">
        <div>
          <h2>Când poți apela la noi</h2>
          <ul>
            {service.needs.map((need) => (
              <li key={need}>
                <Check size={18} />
                {need}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Servicii și evaluări disponibile</h2>
          <ul>
            {service.procedures.map((procedure) => (
              <li key={procedure}>
                <Check size={18} />
                {procedure}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {(procedures.some((p) => bookingService(p.parent) === service.slug) ||
        service.slug === "laboratorul-de-echilibru") && (
        <section className="related-section">
          <span className="eyebrow">CONSULTAȚII ȘI PROCEDURI</span>
          <h2>Explorează opțiunile de îngrijire.</h2>
          <div className="related-grid">
            {procedures
              .filter((p) => bookingService(p.parent) === service.slug)
              .map((p) => (
                <Link
                  className="related-card"
                  key={p.slug}
                  href={procedurePath(p)}
                >
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="text-link">
                    Detalii despre procedură <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            {service.slug === "laboratorul-de-echilibru" &&
              procedures
                .filter(
                  (p) =>
                    p.parent === "neurologie" &&
                    [
                      "evaluare-recuperare-vestibulara",
                      "analiza-posturala-3d",
                      "d-wall",
                    ].includes(p.slug),
                )
                .map((p) => (
                  <Link
                    className="related-card"
                    key={p.slug}
                    href={procedurePath(p)}
                  >
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <span className="text-link">
                      Detalii <span aria-hidden="true">↗</span>
                    </span>
                  </Link>
                ))}
          </div>
        </section>
      )}
      <p className="detail-note">
        Informațiile au caracter general. Alegerea investigațiilor și a
        procedurilor se face în urma evaluării medicale, în funcție de
        indicații, contraindicații și nevoile fiecărui pacient.
      </p>
      <section className="detail-cta">
        <div>
          <h2>Ai întrebări? Hai să vorbim.</h2>
          <p>Echipa te ajută cu informațiile necesare înainte de programare.</p>
        </div>
        <div>
          <Link
            href={`/programare?serviciu=${service.slug}`}
            className="button button-lime"
          >
            Solicită o programare
          </Link>
          <a href={clinic.phoneHref} className="button button-outline">
            <Phone size={17} /> {clinic.phone}
          </a>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ClipboardList, HeartHandshake } from "lucide-react";
import { procedures, procedurePath, bookingService } from "@/lib/procedures";
import { services } from "@/lib/content";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
type Props = { params: Promise<{ slug: string; procedure: string }> };
export function generateStaticParams() {
  return procedures.map((item) => ({
    slug: item.parent,
    procedure: item.slug,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = await params;
  const item = procedures.find(
    (p) => p.parent === route.slug && p.slug === route.procedure,
  );
  return { title: item?.title || "Procedură", description: item?.summary };
}
export default async function ProcedurePage({ params }: Props) {
  const route = await params;
  const item = procedures.find(
    (p) => p.parent === route.slug && p.slug === route.procedure,
  );
  if (!item) notFound();
  const category = services.find(
    (service) => service.slug === bookingService(item.parent),
  );
  const related = procedures
    .filter((p) => p.parent === item.parent && p.slug !== item.slug)
    .slice(0, 3);
  return (
    <main id="main" className="container">
      <PageIntro
        title={item.title}
        description={item.summary}
        eyebrow="INFORMAȚII CLARE, PENTRU O DECIZIE INFORMATĂ"
        crumbs={[
          { label: "Servicii", href: "/servicii" },
          {
            label: category?.name || "Specialitate",
            href: `/servicii/${item.parent}`,
          },
          { label: item.title },
        ]}
      />
      <section className="detail-hero">
        <div className="detail-image">
          <Image
            src={`/images/${item.image}`}
            alt={item.title}
            fill
            preload
            sizes="(max-width:700px) 95vw, 45vw"
          />
        </div>
        <div className="detail-copy">
          <h2>
            Ce presupune
            <br />
            <span className="muted">această procedură.</span>
          </h2>
          <p>{item.overview}</p>
          <Link
            href={`/programare?serviciu=${bookingService(item.parent)}`}
            className="button button-dark"
          >
            <CalendarDays size={17} />
            Programează o consultație
          </Link>
        </div>
      </section>
      <section className="procedure-information">
        <article>
          <span className="service-icon">
            <HeartHandshake strokeWidth={1.5} />
          </span>
          <h2>Cum se desfășoară</h2>
          <p>{item.process}</p>
        </article>
        <article>
          <span className="service-icon">
            <ClipboardList strokeWidth={1.5} />
          </span>
          <h2>Cum te pregătești</h2>
          <p>{item.preparation}</p>
        </article>
      </section>
      <div className="detail-note">
        Indicația, riscurile, contraindicațiile și alternativele se discută cu
        medicul. Informațiile prezentate nu reprezintă o recomandare individuală
        și nu garantează un rezultat.
      </div>
      {related.length > 0 && (
        <section className="related-section">
          <span className="eyebrow">DIN ACEEAȘI SPECIALITATE</span>
          <h2>Mai multe informații, la îndemână.</h2>
          <div className="related-grid">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={procedurePath(p)}
                className="related-card"
              >
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span className="text-link">
                  Citește detaliile <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
      <PageCTA service={bookingService(item.parent)} />
    </main>
  );
}

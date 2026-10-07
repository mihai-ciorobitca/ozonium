import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { procedures, bookingService, procedurePath } from "@/lib/procedures";
import { ServiceIcon } from "@/components/icon";
import { ServiceFinder } from "@/components/service-finder";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
export const metadata: Metadata = {
  title: "Servicii medicale",
  description:
    "Explorează toate specialitățile, consultațiile și procedurile disponibile la Ozonium Iași.",
};
export default function ServicesPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Îngrijire pentru nevoile tale."
        description="Toate specialitățile și procedurile, într-un singur loc. Începe cu o consultație, iar echipa te ajută să înțelegi opțiunile."
        eyebrow="SERVICII MEDICALE"
        crumbs={[{ label: "Servicii" }]}
      />
      <ServiceFinder />
      <div className="service-directory">
        {services.map((service) => (
          <section key={service.slug} className="directory-group">
            <div className="directory-heading">
              <span className="service-icon">
                <ServiceIcon name={service.icon} />
              </span>
              <div>
                <h2>
                  <Link href={`/servicii/${service.slug}`}>{service.name}</Link>
                </h2>
                <p>{service.summary}</p>
              </div>
              <Link href={`/servicii/${service.slug}`} className="text-link">
                Despre specialitate <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="directory-links">
              {procedures
                .filter((p) => bookingService(p.parent) === service.slug)
                .map((p) => (
                  <Link key={p.slug} href={procedurePath(p)}>
                    {p.title}
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              {!procedures.some(
                (p) => bookingService(p.parent) === service.slug,
              ) && (
                <Link href={`/servicii/${service.slug}`}>
                  Evaluare și plan personalizat<span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>
      <PageCTA />
    </main>
  );
}

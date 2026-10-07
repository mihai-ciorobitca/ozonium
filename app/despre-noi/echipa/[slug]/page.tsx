import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, CalendarDays } from "lucide-react";
import { team, memberService, initials } from "@/lib/team";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((person) => person.slug === slug);
  return { title: member?.name || "Profil", description: member?.role };
}
export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((person) => person.slug === slug);
  if (!member) notFound();
  const service = memberService(member.categorySlug);
  return (
    <main id="main" className="container">
      <PageIntro
        title={member.name}
        description={member.role}
        eyebrow={member.category.toUpperCase()}
        crumbs={[{ label: "Echipa", href: "/echipa" }, { label: member.name }]}
      />
      <section className="profile-layout">
        <div className="profile-photo">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              preload
              sizes="(max-width:700px) 90vw, 35vw"
            />
          ) : (
            <div className="portrait-initials">{initials(member.name)}</div>
          )}
        </div>
        <div className="profile-copy">
          <span className="eyebrow">EXPERIENȚĂ ȘI APROPIERE UMANĂ</span>
          <h2>{member.role}</h2>
          {member.quote && <blockquote>{member.quote}</blockquote>}
          {service ? (
            <Link
              href={`/programare?serviciu=${service}&medic=${encodeURIComponent(member.name)}`}
              className="button button-dark"
            >
              <CalendarDays size={17} />
              Solicită o programare
            </Link>
          ) : (
            <Link href="/contact" className="button button-dark">
              Contactează echipa clinicii
            </Link>
          )}
          <div className="profile-detail">
            <h3>Specialitate</h3>
            <p>{member.category}</p>
            {service && (
              <Link className="text-link" href={`/servicii/${service}`}>
                Vezi serviciile <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </section>
      {member.specializari.length > 0 && (
        <section className="profile-qualifications">
          <span className="eyebrow">PARCURS PROFESIONAL</span>
          <h2>Formare și specializări</h2>
          <ul>
            {member.specializari.map((qualification, index) => (
              <li key={index}>
                <Check size={17} />
                <span>{qualification}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      <PageCTA service={service} />
    </main>
  );
}

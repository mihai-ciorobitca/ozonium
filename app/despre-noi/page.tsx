import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Stethoscope, ScanLine } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Povestea clinicii Ozonium Iași: medicină umană inspirată, echipă multidisciplinară și îngrijire personalizată.",
};
export default function AboutPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Mai mult decât o clinică."
        description="Un loc în care povestea ta contează. În care medicina, tehnologia și grija pentru oameni se întâlnesc."
        eyebrow="MEDICINĂ UMANĂ INSPIRATĂ"
        crumbs={[{ label: "Despre noi" }]}
      />
      <section className="editorial-split">
        <div className="editorial-photo">
          <Image
            src="/images/despre-povestea-photo.png"
            alt="Clinica Ozonium"
            fill
            preload
            sizes="(max-width:700px) 90vw, 45vw"
          />
        </div>
        <div className="editorial-copy">
          <h2>
            Am crescut.
            <br />
            <span className="muted">Grija a rămas aceeași.</span>
          </h2>
          <p>
            Am început cu o echipă restrânsă, orientată către binele pacientului
            și interesul pentru ozonoterapie. Din dorința de a oferi o îngrijire
            mai amplă, am dezvoltat o echipă cu specialități care se
            completează.
          </p>
          <p>
            Astăzi, Ozonium reunește consultații, investigații și recuperare
            medicală în două locații din Iași. Fiecare plan pornește de la
            evaluarea pacientului, de la nevoile și obiectivele sale.
          </p>
          <Link href="/echipa" className="button button-dark">
            Cunoaște întreaga echipă
          </Link>
        </div>
      </section>
      <section className="values-grid">
        {[
          {
            icon: HeartHandshake,
            title: "Omul, înainte de toate",
            text: "Ne luăm timp să ascultăm. Explicăm opțiunile și încurajăm întrebările, pentru ca deciziile să fie înțelese.",
          },
          {
            icon: Stethoscope,
            title: "Specialități care colaborează",
            text: "Medici, psihologi, terapeuți și asistenți contribuie la un parcurs coerent de evaluare și îngrijire.",
          },
          {
            icon: ScanLine,
            title: "Tehnologie cu un scop",
            text: "Investigațiile și sistemele de recuperare asistată digital completează evaluarea clinică și mișcarea ghidată.",
          },
        ].map((item) => (
          <article key={item.title}>
            <span className="service-icon">
              <item.icon strokeWidth={1.5} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
      <section className="editorial-split reverse-editorial">
        <div className="editorial-photo">
          <Image
            src="/images/about-team-photo.png"
            alt="Echipa Ozonium"
            fill
            sizes="(max-width:700px) 90vw, 45vw"
          />
        </div>
        <div className="editorial-copy">
          <span className="eyebrow">ÎMPREUNĂ, PAS CU PAS</span>
          <h2>
            Un plan construit
            <br />
            în jurul tău.
          </h2>
          <p>
            Consultația este începutul unei conversații. Clarificăm istoricul
            medical, examinăm și discutăm recomandările, inclusiv limitele,
            riscurile și alternativele disponibile.
          </p>
          <p>
            În recuperare, urmărim obiectivele și ajustăm programul. Grija
            înseamnă și continuitate: să știi care este următorul pas și cui îi
            poți adresa întrebările tale.
          </p>
          <Link className="text-link" href="/servicii">
            Descoperă serviciile <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <div className="project-link">
        <span className="eyebrow">DEZVOLTAREA CLINICII</span>
        <h3>Investiții în servicii și tehnologie</h3>
        <p>
          Proiect finanțat prin Programul Regional Nord-Est 2021–2027, cod SMIS
          313475.
        </p>
        <Link
          className="text-link"
          href="/dezvoltarea-si-diversificarea-serviciilor-ozonlife"
        >
          Informații despre proiect <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <PageCTA />
    </main>
  );
}

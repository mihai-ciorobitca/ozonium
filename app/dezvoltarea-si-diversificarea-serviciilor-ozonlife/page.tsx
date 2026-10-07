import type { Metadata } from "next";
import Image from "next/image";
import project from "@/lib/project.json";
import { PageIntro } from "@/components/page-intro";
export const metadata: Metadata = {
  title: "Dezvoltarea și diversificarea serviciilor OZONLIFE",
  description:
    "Proiect finanțat prin Programul Regional Nord-Est 2021–2027, cod SMIS 313475.",
};
export default function ProjectPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title={project[0]}
        description={project[1]}
        eyebrow="PROIECT FINANȚAT DIN FONDURI EUROPENE"
        crumbs={[
          { label: "Despre noi", href: "/despre-noi" },
          { label: "Proiect de dezvoltare" },
        ]}
      />
      <Image
        src="/images/eu-logo-banner.png"
        alt="Uniunea Europeană și Programul Regional Nord-Est"
        width={1200}
        height={160}
        className="project-banner"
      />
      <article className="project-content">
        {project.slice(2).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="project-facts">
          <div>
            <span>COD SMIS</span>
            <strong>313475</strong>
          </div>
          <div>
            <span>VALOARE TOTALĂ</span>
            <strong>1.243.550,00 lei</strong>
          </div>
          <div>
            <span>PERIOADA IMPLEMENTĂRII</span>
            <strong>01.04.2024 – 31.03.2025</strong>
          </div>
        </div>
      </article>
    </main>
  );
}

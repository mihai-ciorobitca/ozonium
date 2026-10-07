import type { Metadata } from "next";
import { TeamDirectory } from "@/components/team-directory";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
export const metadata: Metadata = {
  title: "Echipa medicală",
  description:
    "Cunoaște întreaga echipă Ozonium: medici, psihologi, terapeuți, asistenți și recepție.",
};
export default function TeamPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Oameni care îți sunt alături."
        description="23 de membri, specialități diferite și o preocupare comună: îngrijirea ta. Descoperă oamenii din spatele fiecărei consultații și ședințe."
        eyebrow="ECHIPA OZONIUM"
        crumbs={[{ label: "Echipa" }]}
      />
      <TeamDirectory />
      <PageCTA />
    </main>
  );
}

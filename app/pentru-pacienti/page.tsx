import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Quote } from "lucide-react";
import { faqs } from "@/lib/content";
import testimonials from "@/lib/testimonials.json";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
const stories = [
  {
    name: "M.T.",
    age: "62 de ani",
    topic: "Mobilitate și dureri de genunchi",
    summary:
      "Pacientul cu gonartroză bilaterală a urmat un program individualizat cu proceduri și fizio-kinetoterapie. În povestea publicată de clinică, relatează o mobilitate îmbunătățită și reluarea activităților preferate.",
    quote: "După ani în care abia urcam scările, acum am coborât Făgărașul!",
    service: "recuperare-medicala",
  },
  {
    name: "V.P.",
    age: "67 de ani",
    topic: "Echilibru și autonomie",
    summary:
      "După evaluarea vestibulară, a urmat un program de reeducare cu Multitest Équilibre. Povestea publicată descrie mai multă încredere la mers și reluarea deplasărilor fără sprijin.",
    quote: "Eram dependent de baston. Acum merg singur până la piață.",
    service: "laboratorul-de-echilibru",
  },
  {
    name: "Ioana R.",
    age: "35 de ani",
    topic: "Recuperare pentru dureri lombare",
    summary:
      "În cazul prezentat de clinică, programul a combinat ozonoterapia, fizioterapia și corecțiile posturale. Pacienta a relatat o ameliorare a simptomelor și revenirea la muncă.",
    quote: "Mulțumesc echipei pentru empatie, profesionalism și soluții reale.",
    service: "ozonoterapie",
  },
  {
    name: "Raluca D.",
    age: "42 de ani",
    topic: "Evaluare și îngrijire neurologică",
    summary:
      "Povestea clinicii descrie un parcurs cu evaluare neurologică și ședințe de TMS, urmate de monitorizare. Pacienta a relatat o reducere a frecvenței și intensității migrenelor.",
    quote:
      "Nu e magie. E știință și grijă reală din partea celor de la Ozonlife.",
    service: "neurologie",
  },
];
export const metadata: Metadata = {
  title: "Pentru pacienți",
  description:
    "Pregătește prima vizită, citește experiențele publicate de pacienți și găsește răspunsuri la întrebările despre Ozonium.",
};
export default function PatientsPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Încredere, la fiecare pas."
        description="Informații pentru prima vizită, răspunsuri la întrebări și experiențe ale oamenilor care au trecut pragul clinicii."
        eyebrow="PENTRU PACIENȚI"
        crumbs={[{ label: "Pentru pacienți" }]}
      />
      <section className="editorial-split">
        <div className="editorial-photo">
          <Image
            src="/images/pacienti-photo.png"
            alt="Grijă și sprijin în clinica Ozonium"
            fill
            preload
            sizes="(max-width:700px) 90vw, 45vw"
          />
        </div>
        <div className="editorial-copy">
          <h2>
            Prima vizită,
            <br />
            <span className="muted">cu pași clari.</span>
          </h2>
          <ul className="patient-checklist">
            {[
              "Confirmă ora, specialitatea și locația consultației.",
              "Adu documentele și investigațiile relevante.",
              "Pregătește lista tratamentelor și întrebările tale.",
              "Cere explicații despre recomandări și următorii pași.",
            ].map((item) => (
              <li key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
          <Link className="text-link" href="/blog/prima-consultatie">
            Ghidul primei consultații <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="patient-stories" id="povesti">
        <span className="eyebrow">EXPERIENȚE PUBLICATE DE CLINICĂ</span>
        <h2>
          Fiecare parcurs
          <br />
          <span className="muted">are o poveste.</span>
        </h2>
        <p className="section-description">
          Acestea sunt experiențe individuale prezentate pe site-ul Ozonium.
          Rezultatele și recomandările diferă de la o persoană la alta.
        </p>
        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.name}>
              <span className="story-topic">{story.topic}</span>
              <h3>
                {story.name}
                <span> · {story.age}</span>
              </h3>
              <p>{story.summary}</p>
              <blockquote>
                <Quote size={22} />
                {story.quote}
              </blockquote>
              <Link href={`/servicii/${story.service}`} className="text-link">
                Despre serviciu <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="testimonials-section">
        <span className="eyebrow">CUVINTELE PACIENȚILOR</span>
        <h2>Grijă care se simte.</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.initials}>
              <Quote size={24} />
              <blockquote>
                {testimonial.text.replace(/^„/, "").replace(/”$/, "")}
              </blockquote>
              <figcaption>
                {testimonial.initials} · mărturie publicată de clinică
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="faq-list patient-faq">
        <span className="eyebrow">ÎNTREBĂRI FRECVENTE</span>
        <h2>Ce ai vrea să știi?</h2>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>
              {faq.q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </section>
      <PageCTA />
    </main>
  );
}

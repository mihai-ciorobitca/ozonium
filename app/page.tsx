import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Check,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { clinic, doctors, faqs, services } from "@/lib/content";
import { ServiceIcon } from "@/components/icon";
import { ServiceFinder } from "@/components/service-finder";

export default function Home() {
  return (
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-icon">
              <Plus size={14} />
            </span>{" "}
            CLINICĂ MEDICALĂ ÎN IAȘI
          </div>
          <h1 id="hero-title">
            Mai multă grijă.
            <br />
            Mai multă{" "}
            <span className="hero-highlight">
              viață.
              <svg viewBox="0 0 380 20" aria-hidden="true">
                <path d="M3 13 Q170 -4 375 11" />
              </svg>
            </span>
          </h1>
          <p className="hero-description">
            Medicină umană inspirată. Specialiști care te ascultă, tratamente
            adaptate ție și sprijin la fiecare pas al recuperării.
          </p>
          <div className="hero-actions">
            <Link href="/programare" className="button button-dark">
              <CalendarDays size={18} /> Programează o consultație
            </Link>
            <a href="#servicii" className="button button-outline">
              Descoperă serviciile
            </a>
          </div>
          <div className="hero-assurance">
            <div className="avatar-stack">
              {doctors.map((d) => (
                <Image
                  key={d.name}
                  src={`/images/${d.image}`}
                  width={38}
                  height={38}
                  alt=""
                />
              ))}
            </div>
            <div>
              <strong>Oameni buni. Medicină cu sens.</strong>
              <span>Echipă multidisciplinară, aproape de tine.</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-label">ȘTIINȚĂ. EMPATIE. ECHILIBRU.</div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <Image
            className="hero-doctors"
            src="/images/hero-doctors.png"
            alt="Dr. Liliana Cucoș și Dr. Victor Cucoș, medicii Ozonium"
            width={1200}
            height={1800}
            priority
            sizes="(max-width: 700px) 95vw, 48vw"
          />
          <div className="hero-note">
            <span className="note-icon">
              <HeartHandshake size={25} />
            </span>
            <div>
              <strong>
                Tu ești în centrul
                <br />
                fiecărei decizii.
              </strong>
              <span>Asta înseamnă Ozonium.</span>
            </div>
          </div>
          <span className="hero-corner">Grijă care se simte.</span>
        </div>
      </section>
      <div className="trust-strip container">
        <span>
          <Stethoscope /> Specialiști dedicați
        </span>
        <span>
          <HeartHandshake /> Planuri personalizate
        </span>
        <span>
          <ShieldCheck /> Tehnologie medicală modernă
        </span>
        <span>
          <MapPin /> Două locații în Iași
        </span>
      </div>

      <section className="section container" id="servicii">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SĂNĂTATEA TA, PRIVITĂ ÎN ANSAMBLU</span>
            <h2>
              Îngrijirea potrivită.
              <br />
              <span className="muted">Pentru nevoile tale.</span>
            </h2>
          </div>
          <p>
            De la prima consultație la recuperare, reunim specialități care
            lucrează împreună pentru tine.
          </p>
        </div>
        <div className="services-grid">
          {services.slice(0, 6).map((service, i) => (
            <Link
              key={service.slug}
              href={`/servicii/${service.slug}`}
              className={`service-card ${i === 4 ? "service-featured" : ""}`}
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="service-number">0{i + 1}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <span className="service-bottom">
                Descoperă serviciul{" "}
                <span className="round-link" aria-hidden="true">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="more-services">
          <span>Și mai multe opțiuni de îngrijire:</span>
          {services.slice(6).map((service) => (
            <Link key={service.slug} href={`/servicii/${service.slug}`}>
              <ServiceIcon name={service.icon} size={17} />
              {service.name}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <ServiceFinder />
      </section>

      <section id="despre" className="about-section">
        <div className="container about-layout">
          <div className="about-photo">
            <Image
              src="/images/about-team-photo.png"
              alt="Echipa Ozonium în clinică"
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
            />
            <div className="photo-caption">
              <span>OZONIUM, IAȘI</span>
              <strong>Un loc în care ești ascultat.</strong>
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">MAI MULT DECÂT O CLINICĂ</span>
            <h2>
              Tratăm afecțiuni.
              <br />
              <span className="muted">Avem grijă de oameni.</span>
            </h2>
            <p>
              Am început cu o echipă restrânsă și o preocupare comună: binele
              pacientului. Am crescut, dar am păstrat aceeași apropiere de
              oamenii care ne trec pragul.
            </p>
            <p>
              Astăzi, îmbinăm experiența medicală cu tehnologia și o abordare
              personalizată. Ne luăm timp să te ascultăm, să îți explicăm și să
              construim împreună pașii următori.
            </p>
            <div className="about-values">
              <span>
                <Check size={16} /> Explicații clare, fără grabă
              </span>
              <span>
                <Check size={16} /> Specialități care colaborează
              </span>
              <span>
                <Check size={16} /> Îngrijire adaptată nevoilor tale
              </span>
            </div>
            <a href="#echipa" className="button button-dark">
              Cunoaște echipa noastră
            </a>
          </div>
        </div>
      </section>

      <section className="section container" id="echipa">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              EXPERIENȚĂ MEDICALĂ. APROPIERE UMANĂ.
            </span>
            <h2>
              Oamenii care au
              <br />
              <span className="muted">grijă de tine.</span>
            </h2>
          </div>
          <p>
            Dincolo de specializări și experiență, ne unește grija pentru
            fiecare pacient.
          </p>
        </div>
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-photo">
                <Image
                  src={`/images/${doctor.image}`}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 600px) 90vw, 30vw"
                />
                <span>{doctor.specialty}</span>
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
                <Link
                  className="text-link"
                  href={`/programare?serviciu=${doctor.service}&medic=${encodeURIComponent(doctor.name)}`}
                >
                  Solicită o programare <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="team-note">
          Medici, terapeuți și asistenți, împreună pentru un plan de îngrijire
          coerent. <Link href="/echipa">Vezi întreaga echipă</Link>
        </p>
      </section>

      <section className="technology-section container">
        <div className="technology-copy">
          <span className="eyebrow">
            <Sparkles size={16} /> TEHNOLOGIE CU UN SCOP
          </span>
          <h2>
            Progres pe care
            <br />
            îl poți <em>înțelege.</em>
          </h2>
          <p>
            În Laboratorul de Echilibru, evaluarea clinică se întâlnește cu
            analiza mișcării și recuperarea asistată digital. Pentru pași
            ghidați și un plan adaptat ție.
          </p>
          <Link
            href="/servicii/laboratorul-de-echilibru"
            className="button button-lime"
          >
            Descoperă Laboratorul de Echilibru
          </Link>
          <div className="technology-tags">
            <span>Analiză posturală 3D</span>
            <span>Recuperare vestibulară</span>
            <span>D-Wall</span>
          </div>
        </div>
        <div className="technology-photo">
          <Image
            src="/images/premium-dwall.jpg"
            alt="Sistemul D-Wall pentru recuperare funcțională în clinica Ozonium"
            fill
            sizes="(max-width: 800px) 90vw, 45vw"
          />
        </div>
      </section>

      <section className="section container journey-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">UN PARCURS CLAR, DE LA ÎNCEPUT</span>
            <h2>
              Primul pas e simplu.
              <br />
              <span className="muted">Restul îl facem împreună.</span>
            </h2>
          </div>
          <Link href="/programare" className="button button-outline">
            Începe cu o consultație
          </Link>
        </div>
        <div className="journey-grid">
          {[
            {
              title: "Ne spui ce te preocupă",
              text: "Ne contactezi, iar echipa te ajută cu programarea și alegerea specialității.",
            },
            {
              title: "Te ascultăm și evaluăm",
              text: "La consultație, discutăm istoricul tău și clarificăm opțiunile disponibile.",
            },
            {
              title: "Construim un plan pentru tine",
              text: "Primești recomandări explicate clar, adaptate situației și obiectivelor tale.",
            },
          ].map((step, i) => (
            <article key={step.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section container" id="intrebari">
        <div>
          <span className="eyebrow">BINE DE ȘTIUT</span>
          <h2>
            Întrebările tale
            <br />
            merită răspunsuri.
          </h2>
          <p>
            Ai nevoie de alte informații?
            <br />
            Suntem aici să te ajutăm.
          </p>
          <a className="text-link" href={clinic.phoneHref}>
            <Phone size={17} /> {clinic.phone}
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                {faq.q}
                <Plus size={18} />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <div className="contact-copy">
          <span className="eyebrow">NE BUCURĂM SĂ TE CUNOAȘTEM</span>
          <h2>
            Fă loc sănătății
            <br />
            în viața ta.
          </h2>
          <p>
            O conversație poate fi începutul.
            <br />
            Hai să găsim împreună următorul pas.
          </p>
          <div className="contact-actions">
            <Link href="/programare" className="button button-dark">
              <CalendarDays size={18} /> Programează-te
            </Link>
            <a
              href={clinic.whatsapp}
              className="button button-white"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
          <a href={clinic.phoneHref} className="contact-phone">
            {clinic.phone}
          </a>
          <div className="contact-locations">
            {clinic.locations.map((location) => (
              <a
                key={location}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={16} />
                {location}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-photo">
          <Image
            src="/images/contact-clinic-photo.jpg"
            alt="Spațiul clinicii Ozonium din Iași"
            fill
            sizes="(max-width: 800px) 90vw, 40vw"
          />
        </div>
      </section>
      <div className="mobile-booking">
        <a href={clinic.phoneHref}>
          <Phone size={18} /> Sună clinica
        </a>
        <Link href="/programare">
          <CalendarDays size={18} /> Programează-te
        </Link>
      </div>
    </main>
  );
}

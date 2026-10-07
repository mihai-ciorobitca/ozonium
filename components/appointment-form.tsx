"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { clinic, services } from "@/lib/content";

export function AppointmentForm({
  service = "",
  doctor = "",
}: {
  service?: string;
  doctor?: string;
}) {
  const [prepared, setPrepared] = useState(false);
  const [messageUrl, setMessageUrl] = useState("");
  const initialService = services.some((item) => item.slug === service)
    ? service
    : "";
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const chosen =
      services.find((item) => item.slug === data.get("service"))?.name ||
      "Am nevoie de îndrumare";
    const text = `Bună ziua! Aș dori să solicit o programare la Ozonium.\n\nNume: ${data.get("name")}\nTelefon: ${data.get("phone")}\nServiciu: ${chosen}${doctor ? `\nMedic preferat: ${doctor}` : ""}\nPreferință: ${data.get("preference") || "Fără preferință"}\n${data.get("message") ? `Mesaj: ${data.get("message")}\n` : ""}\nVă rog să mă contactați pentru a confirma disponibilitatea. Mulțumesc!`;
    const url = `${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
    setMessageUrl(url);
    setPrepared(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <form className="booking-form" onSubmit={submit}>
      <h2>Spune-ne cu ce te putem ajuta.</h2>
      <p>
        Completează câteva detalii și continuă conversația cu echipa pe
        WhatsApp.
      </p>
      {doctor && (
        <p>
          Medic preferat: <strong>{doctor}</strong>
        </p>
      )}
      <div className="form-grid">
        <label className="field">
          Numele tău
          <input
            name="name"
            autoComplete="name"
            placeholder="Nume și prenume"
            required
            maxLength={100}
          />
        </label>
        <label className="field">
          Număr de telefon
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="07xx xxx xxx"
            required
            pattern="[+]?[0-9][0-9 ]{6,18}"
            maxLength={20}
            title="Introdu un număr de telefon valid (7–20 de caractere)."
          />
        </label>
        <label className="field field-full">
          Serviciul dorit
          <select name="service" defaultValue={initialService}>
            <option value="">Nu știu încă — am nevoie de îndrumare</option>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field field-full">
          Când ți-ar fi mai ușor? <span className="muted">(opțional)</span>
          <input
            name="preference"
            placeholder="De exemplu: în timpul săptămânii, după-amiaza"
            maxLength={150}
          />
        </label>
        <label className="field field-full">
          Un mesaj scurt <span className="muted">(opțional)</span>
          <textarea
            name="message"
            placeholder="Întrebări despre programare sau serviciul dorit"
            maxLength={500}
          />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" required />
        <span>
          Sunt de acord să trimit aceste detalii clinicii prin WhatsApp și am
          citit{" "}
          <Link href="/confidentialitate">
            informațiile despre confidențialitate
          </Link>
          .
        </span>
      </label>
      <button type="submit" className="button button-dark">
        <MessageCircle size={18} /> Continuă pe WhatsApp
      </button>
      <p className="form-note">
        Se deschide WhatsApp cu mesajul pregătit. Îl verifici și îl trimiți tu.
        Programarea este confirmată ulterior de echipa clinicii. Nu include
        documente sau detalii medicale sensibile.
      </p>
      {prepared && (
        <div className="form-status" role="status">
          Mesajul este pregătit. Dacă WhatsApp nu s-a deschis,{" "}
          <a href={messageUrl} target="_blank" rel="noreferrer">
            deschide conversația aici
          </a>
          . Solicitarea ajunge la clinică după ce trimiți mesajul.
        </div>
      )}
    </form>
  );
}

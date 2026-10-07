"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Compass } from "lucide-react";
const options = [
  {
    label: "Dureri de spate sau articulații",
    service: "Ortopedie",
    slug: "ortopedie",
    text: "O consultație de ortopedie poate fi un punct de pornire pentru evaluarea durerii și a mobilității.",
  },
  {
    label: "Amețeli și probleme de echilibru",
    service: "Neurologie & echilibru",
    slug: "laboratorul-de-echilibru",
    text: "Descoperă evaluările neurologice și vestibulare disponibile. Echipa te ajută să alegi consultația potrivită.",
  },
  {
    label: "Recuperare și mobilitate",
    service: "Recuperare medicală",
    slug: "recuperare-medicala",
    text: "Află cum se poate construi un program de recuperare în jurul nevoilor și obiectivelor tale.",
  },
  {
    label: "Stres și sprijin emoțional",
    service: "Psihologie clinică",
    slug: "psihologie-clinica",
    text: "Un spațiu confidențial în care poți vorbi despre dificultăți și primi sprijin profesional.",
  },
];
export function ServiceFinder() {
  const [selected, setSelected] = useState(0);
  const current = options[selected];
  return (
    <div className="service-finder">
      <div className="finder-intro">
        <span className="eyebrow">
          <Compass size={16} /> UN PRIM PAS MAI SIMPLU
        </span>
        <h3>Cu ce te putem ajuta?</h3>
        <p>Alege ce te preocupă și explorează serviciile relevante.</p>
      </div>
      <div className="finder-options" role="group" aria-label="Alege nevoia ta">
        {options.map((option, i) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
            className={selected === i ? "selected" : ""}
          >
            <span>{option.label}</span>
            {selected === i && <Check size={17} />}
          </button>
        ))}
      </div>
      <div className="finder-result" aria-live="polite">
        <span className="eyebrow">POȚI ÎNCEPE CU</span>
        <h4>{current.service}</h4>
        <p>{current.text}</p>
        <Link href={`/servicii/${current.slug}`} className="text-link">
          Descoperă serviciul <span aria-hidden="true">↗</span>
        </Link>
        <small>
          Orientare informativă. Recomandarea medicală se face la consultație.
        </small>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { team, teamCategories, initials } from "@/lib/team";
export function TeamDirectory() {
  const [category, setCategory] = useState("Toată echipa");
  const [search, setSearch] = useState("");
  const filtered = team.filter(
    (member) =>
      (category === "Toată echipa" || member.category === category) &&
      `${member.name} ${member.role}`
        .toLocaleLowerCase("ro")
        .includes(search.toLocaleLowerCase("ro")),
  );
  return (
    <div className="team-directory">
      <div className="directory-controls">
        <div className="filter-tabs" role="group" aria-label="Filtrează echipa">
          {["Toată echipa", ...teamCategories].map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={18} />
          <input
            aria-label="Caută în echipă"
            placeholder="Caută un nume sau o specialitate"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "membru" : "membri"} în
        echipă
      </p>
      <div className="doctors-grid full-team-grid">
        {filtered.map((member) => (
          <article className="doctor-card" key={member.slug}>
            <Link
              href={`/despre-noi/echipa/${member.slug}`}
              className="doctor-photo profile-photo-link"
              aria-label={`Profil ${member.name}`}
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width:600px) 90vw, 30vw"
                />
              ) : (
                <div className="portrait-initials" aria-hidden="true">
                  {initials(member.name)}
                </div>
              )}
              <span>{member.category}</span>
            </Link>
            <div className="doctor-info">
              <h3>
                <Link href={`/despre-noi/echipa/${member.slug}`}>
                  {member.name}
                </Link>
              </h3>
              <p>{member.role}</p>
              <Link
                href={`/despre-noi/echipa/${member.slug}`}
                className="text-link"
              >
                Cunoaște specialistul <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <h3>Nu am găsit un profil potrivit.</h3>
          <p>Încearcă alt nume sau elimină filtrele.</p>
          <button
            className="button button-outline"
            onClick={() => {
              setSearch("");
              setCategory("Toată echipa");
            }}
          >
            Resetează filtrele
          </button>
        </div>
      )}
    </div>
  );
}

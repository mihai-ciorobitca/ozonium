"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import prices from "@/lib/prices.json";
const tabs = [
  { key: "consultatii", label: "Consultații" },
  { key: "recuperare", label: "Recuperare" },
  { key: "neurologie", label: "Neurologie" },
  { key: "ozon", label: "Ozonoterapie" },
  { key: "regenerative", label: "Regenerative" },
  { key: "perfuzii", label: "Perfuzii" },
] as const;
type PriceKey = keyof typeof prices;
export function PriceList() {
  const [selected, setSelected] = useState<PriceKey>("consultatii");
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase("ro");
  const groups = (query ? Object.values(prices).flat() : prices[selected])
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        `${group.category} ${item.name}`
          .toLocaleLowerCase("ro")
          .includes(query),
      ),
    }))
    .filter((group) => group.items.length > 0);
  return (
    <div className="price-directory">
      <div className="directory-controls">
        <div
          className="filter-tabs"
          role="group"
          aria-label="Categoria tarifelor"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={selected === tab.key && !query ? "active" : ""}
              aria-pressed={selected === tab.key && !query}
              onClick={() => {
                setSelected(tab.key);
                setSearch("");
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={18} />
          <input
            aria-label="Caută un tarif"
            placeholder="Caută în toate tarifele"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {groups.reduce((count, group) => count + group.items.length, 0)}{" "}
        servicii {query ? "găsite" : "în această categorie"}
      </p>
      {groups.map((group) => (
        <section className="price-group" key={group.category}>
          <h2>{group.category}</h2>
          <dl>
            {group.items.map((item) => (
              <div className="price-row" key={item.name}>
                <dt>{item.name}</dt>
                <dd>
                  {item.price.split(" · ").map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          {"note" in group && typeof group.note === "string" && (
            <p className="price-note">{group.note}</p>
          )}
        </section>
      ))}
      {!groups.length && (
        <div className="empty-state">
          <h3>Nu am găsit acest serviciu.</h3>
          <p>Încearcă un termen mai scurt sau cere informații echipei.</p>
          <button
            className="button button-outline"
            onClick={() => setSearch("")}
          >
            Șterge căutarea
          </button>
        </div>
      )}
      <p className="detail-note">
        Tarifele sunt cele publicate pe site-ul clinicii și pot fi actualizate.
        Confirmă costul la programare. Pentru un plan cu mai multe proceduri,
        solicită o estimare individuală.{" "}
        <Link href="/contact">Contactează echipa</Link>.
      </p>
    </div>
  );
}

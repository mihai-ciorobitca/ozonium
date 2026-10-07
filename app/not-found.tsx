import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <span className="eyebrow" style={{ justifyContent: "center" }}>
        PAGINĂ NEGĂSITĂ
      </span>
      <h1>
        Hai să revenim
        <br />
        pe drumul potrivit.
      </h1>
      <p>Pagina căutată nu este disponibilă.</p>
      <Link className="button button-dark" href="/">
        Înapoi la pagina principală
      </Link>
    </main>
  );
}

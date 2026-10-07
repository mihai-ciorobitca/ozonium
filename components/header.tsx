"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, CalendarDays, MapPin } from "lucide-react";
import { clinic } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/servicii", label: "Servicii" },
    { href: "/despre-noi", label: "Despre noi" },
    { href: "/echipa", label: "Echipa" },
    { href: "/preturi", label: "Prețuri" },
    { href: "/pentru-pacienti", label: "Pacienți" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <MapPin size={13} /> Iași · Două locații, aceeași grijă pentru tine
          </span>
          <a href={clinic.phoneHref}>
            <Phone size={13} /> {clinic.phone}
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Ozonium — pagina principală"
          >
            <Image src="/images/logo.svg" alt="" width={46} height={46} />
            <span>
              ozonium
              <span className="brand-caption">MEDICINĂ UMANĂ INSPIRATĂ</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Navigare principală">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/programare" className="button button-dark header-book">
            <CalendarDays size={17} /> Programează-te
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Navigare mobilă"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="button button-dark"
              href="/programare"
              onClick={() => setOpen(false)}
            >
              Programează-te
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

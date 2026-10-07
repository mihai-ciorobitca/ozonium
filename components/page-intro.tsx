import Link from "next/link";
import { ChevronRight } from "lucide-react";
export function PageIntro({
  title,
  description,
  eyebrow,
  crumbs = [],
}: {
  title: string;
  description?: string;
  eyebrow: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <div className="page-intro">
      <nav aria-label="Fir de navigare" className="breadcrumb">
        <Link href="/">Acasă</Link>
        {crumbs.map((crumb) => (
          <span className="breadcrumb-segment" key={crumb.label}>
            <ChevronRight size={13} />
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

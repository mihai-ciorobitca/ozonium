import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return { title: article?.title || "Articol", description: article?.summary };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <main id="main" className="container">
      <PageIntro
        title={article.title}
        description={article.summary}
        eyebrow={`${article.category.toUpperCase()} · ${article.reading.toUpperCase()}`}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
      />
      <div className="article-hero">
        <Image
          src={`/images/${article.image}`}
          alt={article.title}
          fill
          preload
          sizes="(max-width:700px) 95vw, 85vw"
        />
      </div>
      <div className="article-body-layout">
        <article className="article-body">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <p className="article-disclaimer">
            Informații generale pentru pacienți. Recomandările individuale se
            stabilesc în urma consultației medicale.
          </p>
        </article>
        <aside className="article-aside">
          <span className="eyebrow">ÎN ACEST ARTICOL</span>
          {article.sections.map((section) => (
            <p key={section.title}>{section.title}</p>
          ))}
          <Link href="/programare" className="button button-dark">
            Discută cu echipa
          </Link>
        </aside>
      </div>
      <PageCTA service={article.service} />
    </main>
  );
}

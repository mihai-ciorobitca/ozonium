import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { PageIntro } from "@/components/page-intro";
import { PageCTA } from "@/components/page-cta";
export const metadata: Metadata = {
  title: "Blog și ghiduri pentru pacienți",
  description:
    "Informații despre consultații, recuperare, echilibru și opțiuni de îngrijire la Ozonium.",
};
export default function BlogPage() {
  return (
    <main id="main" className="container">
      <PageIntro
        title="Să înțelegi e primul pas."
        description="Ghiduri pentru vizita la clinică și informații despre serviciile noastre, explicate pe înțelesul tău."
        eyebrow="BLOG ȘI RESURSE"
        crumbs={[{ label: "Blog" }]}
      />
      <div className="article-grid">
        {articles.map((article) => (
          <article key={article.slug} className="article-card">
            <Link href={`/blog/${article.slug}`} className="article-photo">
              <Image
                src={`/images/${article.image}`}
                alt={article.title}
                fill
                sizes="(max-width:700px) 90vw, 45vw"
              />
            </Link>
            <div className="article-info">
              <span className="eyebrow">
                {article.category} · {article.reading}
              </span>
              <h2>
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.summary}</p>
              <Link className="text-link" href={`/blog/${article.slug}`}>
                Citește articolul <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <PageCTA />
    </main>
  );
}

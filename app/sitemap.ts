import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { procedures, procedurePath } from "@/lib/procedures";
import { team } from "@/lib/team";
import { articles } from "@/lib/articles";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/despre-noi",
    "/echipa",
    "/servicii",
    "/preturi",
    "/pentru-pacienti",
    "/blog",
    "/contact",
    "/programare",
    "/confidentialitate",
    "/politica-cookies",
    "/termeni-si-conditii",
    "/dezvoltarea-si-diversificarea-serviciilor-ozonlife",
    ...services.map((service) => `/servicii/${service.slug}`),
    ...procedures.map(procedurePath),
    ...team.map((member) => `/despre-noi/echipa/${member.slug}`),
    ...articles.map((article) => `/blog/${article.slug}`),
  ];
  return paths.map((path) => ({ url: `https://ozonium.ro${path}` }));
}

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
import "./pages.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ozonium.ro"),
  title: {
    default: "Ozonium Clinic Iași — Medicină umană inspirată",
    template: "%s | Ozonium Clinic Iași",
  },
  description:
    "Neurologie, ortopedie, recuperare medicală și ozonoterapie în Iași. O echipă care te ascultă și un plan de îngrijire adaptat ție. Programează o consultație.",
  icons: { icon: "/images/logo.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Sari la conținut
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

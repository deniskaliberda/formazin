import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr.-Ing. Formazin & Partner mbB | Architekten & Beratende Ingenieure",
  description:
    "Architektur & Ingenieurskunst in partnerschaftlicher Tradition. Seit 1990 – Bauplanung, Tragwerksplanung und Generalplanung aus Ahrensfelde bei Berlin.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Dr.-Ing. Formazin & Partner mbB",
  description:
    "Architekten & Beratende Ingenieure – Architektur, Tragwerksplanung und Generalplanung in partnerschaftlicher Tradition.",
  url: "https://www.formazin.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahrensfelde",
    addressRegion: "Brandenburg",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Berlin/Brandenburg",
  },
  foundingDate: "1990",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${archivo.variable} ${archivoNarrow.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}

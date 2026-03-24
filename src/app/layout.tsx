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
  metadataBase: new URL("https://formazin-partner.de"),
  title: {
    default:
      "Dr.-Ing. Formazin & Partner mbB | Architekten & Beratende Ingenieure",
    template: "%s | Dr.-Ing. Formazin & Partner mbB",
  },
  description:
    "Architektur & Ingenieurskunst in partnerschaftlicher Tradition. Seit 1990 – Bauplanung, Tragwerksplanung und Generalplanung aus Ahrensfelde bei Berlin.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Dr.-Ing. Formazin & Partner mbB",
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Dr.-Ing. Formazin & Partner mbB",
  description:
    "Architekten & Beratende Ingenieure – Architektur, Tragwerksplanung und Generalplanung in partnerschaftlicher Tradition.",
  url: "https://formazin-partner.de",
  telephone: "+49 30 93662424",
  email: "info@formazin-partner.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dorfstraße 1A",
    postalCode: "16356",
    addressLocality: "Ahrensfelde",
    addressRegion: "Brandenburg",
    addressCountry: "DE",
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

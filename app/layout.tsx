import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://princetongtc.com'),
  title: {
    default: "Princeton GTC | Oil & Gas Supplier in Kuwait",
    template: "%s | Princeton GTC"
  },
  description: "Princeton International General Trading Company W.L.L. - Leading supplier & stockist for Oil & Gas, Petrochemical, Power Generation, and Renewable Energy industries in Kuwait. KOC & KNPC approved materials.",
  keywords: [
    "oil and gas supplier Kuwait",
    "pipes supplier Kuwait",
    "valves supplier Kuwait",
    "flanges supplier Kuwait",
    "fittings supplier Kuwait",
    "petrochemical equipment",
    "power generation supplies",
    "KOC approved materials",
    "KNPC approved materials",
    "industrial supplies Kuwait",
    "Princeton GTC",
    "general trading company Kuwait"
  ],
  authors: [{ name: "Princeton International General Trading Company W.L.L." }],
  creator: "Princeton GTC",
  publisher: "Princeton International General Trading Company W.L.L.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://princetongtc.com",
    siteName: "Princeton GTC",
    title: "Princeton GTC | Oil & Gas Supplier in Kuwait",
    description: "Leading supplier & stockist for Oil & Gas, Petrochemical, Power Generation, and Renewable Energy industries in Kuwait.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Princeton GTC - Oil & Gas Supplier in Kuwait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Princeton GTC | Oil & Gas Supplier in Kuwait",
    description: "Leading supplier & stockist for Oil & Gas, Petrochemical, Power Generation, and Renewable Energy industries in Kuwait.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#312F94" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Princeton International General Trading Company W.L.L.",
              alternateName: "Princeton GTC",
              url: "https://princetongtc.com",
              logo: "https://princetongtc.com/logo.png",
              description: "Leading supplier & stockist for Oil & Gas, Petrochemical, Power Generation, and Renewable Energy industries in Kuwait.",
              address: {
                "@type": "PostalAddress",
                postOfficeBoxNumber: "46779",
                postalCode: "64018",
                addressLocality: "Fahaheel",
                addressCountry: "KW"
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "sales@princetongtc.com",
                contactType: "sales",
                areaServed: "Worldwide",
                availableLanguage: "English"
              },
              sameAs: [],
              industry: "Oil & Gas",
              serviceArea: {
                "@type": "Place",
                name: "Worldwide"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}

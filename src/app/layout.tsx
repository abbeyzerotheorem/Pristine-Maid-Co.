import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { cleaningConfig } from "@/data/cleaning";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export function generateMetadata(): Metadata {
  const { brand, contact, serviceAreas } = cleaningConfig;
  const areaNames = serviceAreas.map((a) => a.neighborhood).join(", ");

  return {
    title: {
      default: `Best Deep Cleaning Services in ${brand.city} | ${brand.name}`,
      template: `%s | ${brand.name}`,
    },
    description: `Professional residential, deep cleaning, and commercial maid services in ${brand.city}, ${brand.state}. Bonded, insured, and background-checked cleaning teams. ${brand.insuranceCoverage} liability coverage. Get an instant quote today.`,
    keywords: [
      `cleaning services ${brand.city.toLowerCase()}`,
      `maid service ${brand.city.toLowerCase()}`,
      `deep cleaning ${brand.city.toLowerCase()}`,
      `house cleaning near me`,
      `commercial cleaning ${brand.city.toLowerCase()}`,
      `move in out cleaning ${brand.city.toLowerCase()}`,
      `eco friendly cleaning ${brand.city.toLowerCase()}`,
      `pet safe cleaning service`,
      `bonded insured cleaning service`,
      `professional house cleaners ${brand.city.toLowerCase()}`,
      ...serviceAreas.map(
        (a) => `cleaning service ${a.neighborhood.toLowerCase()} ${a.zipCode}`
      ),
    ],
    authors: [{ name: brand.name }],
    creator: brand.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: brand.name,
      title: `Best Deep Cleaning Services in ${brand.city} | ${brand.name}`,
      description: `Professional residential, deep cleaning, and commercial maid services in ${brand.city}, ${brand.state}. Bonded, insured, and background-checked.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Deep Cleaning Services in ${brand.city} | ${brand.name}`,
      description: `Professional bonded & insured cleaning teams in ${brand.city}. Get an instant quote.`,
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
    alternates: {
      canonical: "https://pristinmaidco.com",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { brand, contact, serviceAreas } = cleaningConfig;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HouseKeepingService",
    name: brand.name,
    description: `Professional residential, deep cleaning, and commercial maid services in ${brand.city}, ${brand.state}.`,
    url: "https://pristinmaidco.com",
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1200 Research Blvd, Suite 310",
      addressLocality: brand.city,
      addressRegion: brand.state,
      postalCode: "78759",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3942,
      longitude: -97.7269,
    },
    priceRange: "$129-$449",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.97",
      reviewCount: "1306",
      bestRating: "5",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area.neighborhood}, ${brand.city}`,
      postalCode: area.zipCode,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Home Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deep Moving-In/Out Clean",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Eco-Friendly Green Clean",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office & Commercial Cleaning",
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}

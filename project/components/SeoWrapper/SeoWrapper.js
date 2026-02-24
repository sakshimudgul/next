// components/SeoWrapper/SeoWrapper.jsx
// ONLY injects JSON-LD structured data.
// All <title>/<meta> come from generateMetadata() in each page.js — Next.js 15 App Router best practice.

import { siteSEO } from "@/utils/seoConfig";

export default function SeoWrapper({ schemas = [], pageUrl = "/", children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteSEO.baseUrl}/#localbusiness`,
        name: siteSEO.siteName,
        alternateName: [
          "Envich",
          "Envich Sciences",
          "Envich Chemicals",
        ],
        url: `${siteSEO.baseUrl}${pageUrl}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        logo: `${siteSEO.baseUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Envich Headquarters", // Update with actual address
          addressLocality: "Nashik", // Update with actual city
          addressRegion: "Maharashtra", // Update with actual state
          postalCode: "422XXX", // Update with actual postal code
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.0117, // Update with actual coordinates
          longitude: 73.7862, // Update with actual coordinates
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          "Nashik",
          "Maharashtra",
          "India",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: siteSEO.siteName,
        legalName: "Envich",
        foundingDate: "2024", // Update with actual founding year
        founder: {
          "@type": "Person",
          name: "Envich Founder", // Update with actual founder name
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      },
      ...schemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
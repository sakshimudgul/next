// utils/seoConfig.js — Envich | SEO Perfect

export const siteSEO = {
  siteName: "Envich",
  defaultTitle: "Envich | Proven Science, Trusted Chemistry",
  defaultDescription: "Envich - Proven Science, Trusted Chemistry. Home About Us Capabilities Products Our Clients Contact Us",
  baseUrl: "https://envich.com",
  defaultImage: "/og-envich.jpg",
  locale: "en_US",
  email: "info@envich.com",
  phone: "+91-XXXXXXXXXX",
  address: "Envich Headquarters",
  foundingYear: "2024",
  founder: "Envich",
};

export const pageSEO = {
  home: {
    title: "Envich | Proven Science, Trusted Chemistry - Home",
    description: "Envich - Proven Science, Trusted Chemistry. Leading provider of scientific solutions and chemical expertise.",
    keywords: "Envich, proven science, trusted chemistry, chemical solutions, scientific expertise",
    canonical: "/",
    ogImage: "/og-home.jpg",
  },
  about: {
    title: "About Us | Envich - Proven Science, Trusted Chemistry",
    description: "Learn about Envich, our mission, values, and commitment to proven science and trusted chemistry solutions.",
    keywords: "about Envich, company background, scientific expertise, chemistry solutions",
    canonical: "/about",
    ogImage: "/og-about.jpg",
  },
  capabilities: {
    title: "Capabilities | Envich - Proven Science, Trusted Chemistry",
    description: "Explore Envich's comprehensive capabilities in scientific research, chemical development, and industrial solutions.",
    keywords: "capabilities, scientific capabilities, chemical expertise, research capabilities, industrial solutions",
    canonical: "/capabilities",
    ogImage: "/og-capabilities.jpg",
  },
  products: {
    title: "Products | Envich - Proven Science, Trusted Chemistry",
    description: "Discover Envich's range of high-quality chemical products and scientific solutions for various industries.",
    keywords: "chemical products, scientific products, industrial chemicals, research chemicals",
    canonical: "/products",
    ogImage: "/og-products.jpg",
  },
  clients: {
    title: "Our Clients | Envich - Proven Science, Trusted Chemistry",
    description: "Meet the valued clients who trust Envich for their scientific and chemical solution needs.",
    keywords: "clients, customers, partners, chemical industry clients, scientific partners",
    canonical: "/our-clients",
    ogImage: "/og-clients.jpg",
  },
  contact: {
    title: "Contact Us | Envich - Proven Science, Trusted Chemistry",
    description: "Get in touch with Envich for all your scientific and chemical solution requirements. Message us today.",
    keywords: "contact Envich, get in touch, chemical solutions inquiry, scientific expertise contact",
    canonical: "/contact-us",
    ogImage: "/og-contact.jpg",
  },
  message: {
    title: "Message Us | Envich - Proven Science, Trusted Chemistry",
    description: "Send a message to Envich for inquiries about our scientific capabilities and chemical solutions.",
    keywords: "message Envich, send inquiry, chemical solutions query, scientific expertise contact",
    canonical: "/message",
    ogImage: "/og-message.jpg",
  },
  privacy: {
    title: "Privacy Policy | Envich - Proven Science, Trusted Chemistry",
    description: "Read Envich's privacy policy to understand how we protect and handle your information.",
    keywords: "privacy policy, data protection, Envich privacy, information security",
    canonical: "/privacy-policy",
    ogImage: "/og-default.jpg",
  },
  terms: {
    title: "Terms & Conditions | Envich - Proven Science, Trusted Chemistry",
    description: "Review Envich's terms and conditions for using our website and services.",
    keywords: "terms and conditions, service terms, legal agreement, Envich terms",
    canonical: "/terms-conditions",
    ogImage: "/og-default.jpg",
  },
};

// buildMetadata — use in Server Component pages
// export const metadata = buildMetadata("home")
export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// Note: Product/service-specific sections have been removed as they weren't
// present in the uploaded image. Add them here if needed based on your actual products/capabilities.

export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
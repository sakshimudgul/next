import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";

// ── SEO metadata (Next.js puts this in <head>) ───────────────────────────────
export const metadata = buildMetadata("home");

export default function HomePage() {
  const breadcrumb = getBreadcrumbSchema([{ name: "Home", href: "/" }]);
  return (
    <>
      <SeoWrapper pageUrl="/" schemas={[breadcrumb]}>
        <main className="min-h-screen">
          {/* <HeroSection /> */}
          {/* <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection /> */}
        </main>
      </SeoWrapper>
    </>
  );
}

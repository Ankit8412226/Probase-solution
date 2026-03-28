import dynamic from "next/dynamic";
import Link from "next/link";
import Ecosystem from "./components/Ecosystem";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import StatsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUs";
import { companyProfile, serviceCatalog } from "@/content/proBaseSolution";

export const metadata = {
  title: `${companyProfile.tagline} | ${companyProfile.name}`,
  description: companyProfile.heroDescription,
  keywords: [
    "digital marketing company",
    "website development company",
    "seo services",
    "social media marketing",
    "google business profile optimization",
    "paid advertising agency",
    "lead generation campaigns",
    "content and creative marketing",
    "greater noida digital marketing",
    "local seo services noida",
  ],
  openGraph: {
    title: `${companyProfile.tagline} | ${companyProfile.name}`,
    description: companyProfile.heroDescription,
    url: companyProfile.website,
    siteName: companyProfile.name,
    images: [
      {
        url: `${companyProfile.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} digital marketing and web development services`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyProfile.tagline} | ${companyProfile.name}`,
    description: companyProfile.heroDescription,
    images: [`${companyProfile.website}/og-image.jpg`],
  },
  alternates: {
    canonical: companyProfile.website,
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

const AboutUsSection = dynamic(() => import("./components/AboutUs"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));
const PricingSection = dynamic(() => import("./components/PricingSection"));
const IndustriesSection = dynamic(() => import("./components/IndustriesSection"));
const TestimonialsPage = dynamic(() => import("./components/Testimonial"));
const ContactFormSection = dynamic(() => import("./components/ContactForm"));
const FAQSection = dynamic(() => import("./components/Faq"));
const ProjectModal = dynamic(() => import("./components/ProjectModal"));
const Project = dynamic(() => import("./components/Project"));

export default function Home() {
  return (
    <main className="bg-white dark:bg-black selection:bg-purple-500/30">
      <ProjectModal />
      <NavBar />

      <div className="pt-20">
        <HeroSection />
        <StatsSection />
      </div>

      <div className="space-y-12 md:space-y-16 lg:space-y-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        <ServicesSection />
        <AboutUsSection />
        <WhyChooseUsSection />
        
        <Project />
        
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden rounded-3xl bg-gray-900 text-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
          <div className="container mx-auto text-center px-6 md:px-8 lg:px-12 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Our Proven Portfolio & Client Success
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across healthcare, real estate, e-commerce, and technology sectors with our bespoke digital solutions.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Explore Our Work
            </Link>
          </div>
        </section>

        <Ecosystem />
        <ProcessSection />
        <IndustriesSection />
        <PricingSection />
        <TestimonialsPage />

        <FAQSection />

        <section id="contact" className="pt-8">
          <ContactFormSection />
        </section>
      </div>

      <FooterSection />
    </main>
  );
}

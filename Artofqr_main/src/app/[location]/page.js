import { notFound } from "next/navigation";
import cities from "@/data/cities.json";
import dynamic from "next/dynamic";
import { companyProfile } from "@/content/proBaseSolution";

import Ecosystem from "../components/Ecosystem";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import StatsSection from "../components/StatsSection";
import WhyChooseUsSection from "../components/WhyChooseUs";

const AboutUsSection = dynamic(() => import("../components/AboutUs"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const ProcessSection = dynamic(() => import("../components/ProcessSection"));
const PricingSection = dynamic(() => import("../components/PricingSection"));
const IndustriesSection = dynamic(() => import("../components/IndustriesSection"));
const TestimonialsPage = dynamic(() => import("../components/Testimonial"));
const ContactFormSection = dynamic(() => import("../components/ContactForm"));
const FAQSection = dynamic(() => import("../components/Faq"));
const ProjectModal = dynamic(() => import("../components/ProjectModal"));
const Project = dynamic(() => import("../components/Project"));
import Link from "next/link";

function formatCityName(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { location } = await params;
  if (!cities.includes(location.toLowerCase())) {
    return {};
  }
  const cityName = formatCityName(location);

  return {
    title: `Website Development Company in ${cityName} | ${companyProfile.name}`,
    description: `Looking for the best website development and digital marketing company in ${cityName}? ${companyProfile.name} offers premium web design, SEO, and IT solutions in ${cityName}.`,
    keywords: [
      `website development company in ${cityName}`,
      `web design ${cityName}`,
      `digital marketing agency ${cityName}`,
      `SEO company ${cityName}`,
      `best digital marketing in ${cityName}`
    ],
    openGraph: {
      title: `Website Development Company in ${cityName} | ${companyProfile.name}`,
      description: `Premium website development and digital marketing services for businesses in ${cityName}.`,
      url: `${companyProfile.website}/${location}`,
    },
    alternates: {
      canonical: `${companyProfile.website}/${location}`,
    }
  };
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  if (!cities.includes(location.toLowerCase())) {
    notFound();
  }

  const cityName = formatCityName(location);

  return (
    <main className="bg-white dark:bg-black selection:bg-purple-500/30">
      <ProjectModal />
      <NavBar />

      <div className="pt-20">
        <HeroSection />
        <StatsSection />
      </div>

      <div className="space-y-12 md:space-y-16 lg:space-y-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        
        {/* Location Specific Banner */}
        <section className="bg-gradient-to-r from-purple-100 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 text-center border border-purple-200 dark:border-purple-800">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Partner with the Top Digital Agency in {cityName}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Scale your business in <strong>{cityName}</strong> with our award-winning website development and digital marketing services. From local SEO to dynamic web applications, we have the tech stack you need.
          </p>
        </section>

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

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
  title: `Best Digital Marketing Agency in Greater Noida West | SEO & Web Development`,
  description: `Pro Base Solution is the top-rated digital marketing agency in Greater Noida West, offering expert SEO, custom web development, and Meta Ads for real estate, healthcare, and local businesses.`,
  keywords: [
    "best digital marketing company in greater noida west",
    "top seo agency in noida extension",
    "website development services in greater noida",
    "real estate marketing agency noida",
    "healthcare digital marketing noida",
    "google business profile expert noida",
    "social media management for small business",
    "meta ads agency for lead generation",
    "local business growth partner noida",
  ],
  openGraph: {
    title: `Leading Digital Marketing & Web Growth Agency | ${companyProfile.name}`,
    description: `Expert digital marketing and web development services to scale your business in Greater Noida and beyond.`,
    url: companyProfile.website,
    siteName: companyProfile.name,
    images: [
      {
        url: `${companyProfile.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} digital marketing services`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Digital Marketing Agency in Greater Noida West`,
    description: `Scaling businesses through data-driven SEO, ads, and high-performance websites.`,
    images: [`${companyProfile.website}/og-image.jpg`],
  },
  alternates: {
    canonical: companyProfile.website,
  },
};

const AboutUsSection = dynamic(() => import("./components/AboutUs"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const PricingSection = dynamic(() => import("./components/PricingSection"));
const IndustriesSection = dynamic(() => import("./components/IndustriesSection"));
const TestimonialsPage = dynamic(() => import("./components/Testimonial"));
const ContactFormSection = dynamic(() => import("./components/ContactForm"));
const FAQSection = dynamic(() => import("./components/Faq"));
const Project = dynamic(() => import("./components/Project"));

export default function Home() {
  return (
    <main className="bg-white dark:bg-black selection:bg-purple-500/30">
      <NavBar />

      <div className="pt-20">
        <HeroSection />
        <StatsSection />
      </div>

      <div className="space-y-12 md:space-y-16 lg:space-y-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        <Ecosystem />
        <ServicesSection />
        <Project />
        <WhyChooseUsSection />
        
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

        <IndustriesSection />
        <AboutUsSection />
        <TestimonialsPage />
        <PricingSection />
        <FAQSection />

        <section id="contact" className="pt-8">
          <ContactFormSection />
        </section>

        {/* SEO Optimized Content Section (Visually subtle but SEO rich) */}
        <section className="py-12 border-t border-gray-100 dark:border-gray-800 opacity-60 hover:opacity-100 transition-opacity">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Why Pro Base Solution is the Top Digital Marketing Agency in Greater Noida West</h2>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4 columns-1 md:columns-2 lg:columns-3 gap-8">
              <p>
                In the rapidly evolving digital landscape of <strong>Noida Extension</strong> and <strong>Greater Noida West</strong>, businesses need a partner who understands the local market dynamics. Pro Base Solution stands out as the <strong>best digital marketing agency in Greater Noida</strong> by providing comprehensive 360-degree solutions.
              </p>
              <p>
                Our <strong>SEO services in Greater Noida</strong> are designed to help you rank on the first page of Google for high-intent keywords. Whether you are looking for <strong>Local SEO</strong> to attract customers in Noida or <strong>National SEO</strong> to scale your brand, our experts utilize the latest white-hat techniques.
              </p>
              <p>
                As a premier <strong>website development company in Greater Noida</strong>, we build lightning-fast, mobile-responsive websites that act as a 24/7 sales machine. We specialize in <strong>WordPress development</strong>, <strong>Next.js applications</strong>, and <strong>E-commerce stores</strong> tailored for local businesses.
              </p>
              <p>
                Our expertise extends to <strong>Social Media Marketing (SMM)</strong> and <strong>Meta Ads</strong>. We manage Facebook and Instagram campaigns that generate high-quality leads for <strong>Real Estate projects</strong> and <strong>Healthcare clinics</strong>.
              </p>
              <p>
                We serve a variety of industries including <strong>Real Estate</strong>, <strong>Healthcare (Clinics & Hospitals)</strong>, <strong>Automobile Showrooms</strong>, <strong>Spa & Wellness centers</strong>, and <strong>E-commerce sellers</strong> looking to optimize their <strong>Amazon/Flipkart listings</strong>.
              </p>
              <p>
                Located in the heart of <strong>Greater Noida West (UP)</strong>, we are committed to being the <strong>growth partner</strong> your business deserves. From <strong>Google Business Profile optimization</strong> to <strong>PPC advertising</strong>, we ensure your brand gets the visibility it deserves.
              </p>
            </div>
          </div>
        </section>

      </div>

      <FooterSection />
    </main>
  );
}

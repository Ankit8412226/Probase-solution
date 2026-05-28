import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";
import ServicesBanner from "./ServicesBanner";
import ServicesCards from "./ServicesCards";
import ServicesHero from "./ServicesHero";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `IT Services, Custom Software & Digital Marketing Services Delhi Noida | ${companyProfile.name}`,
  description:
    "Explore Pro Base Solution's service catalog: Custom Software Development, Web Applications, Enterprise IT Support, SEO, Meta/Google Ads, and Social Media Marketing in Delhi NCR.",
  keywords: [
    "it services Delhi NCR",
    "custom software development Noida",
    "web application development Delhi",
    "digital marketing services Delhi Noida",
    "best software development company Noida",
    "website development services Greater Noida",
    "seo services Noida Extension",
    "crm development company",
    "saas development agency"
  ],
  openGraph: {
    title: `IT Services, Custom Software & Digital Marketing | ${companyProfile.name}`,
    description: "Digital transformation, web development, custom software, and marketing solutions tailored for businesses.",
    url: `${companyProfile.website}/services`,
  },
  alternates: {
    canonical: `${companyProfile.website}/services`,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      <NavBar />

      <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="uppercase text-xs sm:text-sm tracking-[0.35em] text-blue-500 mb-6 text-center font-semibold">
            Our Digital Solutions & Services
          </p>

          <div className="pt-4 sm:pt-6 md:pt-10 pb-8 text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Award-Winning 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Digital Marketing </span> 
              & Web Development
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We specialize in creating performance-driven websites, dynamic web applications, and robust e-commerce ecosystems that rank at the top of search. Our comprehensive suite of services including SEO, PPC, and social media marketing ensures consistent traffic and high conversion rates for your local and global brand.
            </p>
          </div>

          <div className="pt-8 sm:pt-12 md:pt-16">
            <ServicesHero />
          </div>
        </div>
      </section>

      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <ServicesCards />
      </section>

      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <ServicesBanner />
      </section>

      <FooterSection />
    </main>
  );
}

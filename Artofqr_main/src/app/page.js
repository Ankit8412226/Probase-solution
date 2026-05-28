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
  title: `Best IT Services, Custom Software & Digital Marketing Agency in Delhi Noida | ${companyProfile.name}`,
  description: `Pro Base Solution is the premier IT services, custom software development, web app development, and digital marketing agency in Delhi NCR and Noida. Rank on top and grow your business today.`,
  keywords: [
    // Delhi & Noida IT Focus
    "it services company in delhi",
    "it company in noida",
    "custom software development company delhi",
    "software development company noida",
    "web app development company delhi",
    "web application development noida",
    "custom software developers delhi ncr",
    "best digital marketing agency in delhi",
    "digital marketing agency in noida",
    "seo services in delhi ncr",
    "seo company in noida",

    // Localized Web & Ads
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
    title: `Leading IT Services, Web App & Custom Software Company | ${companyProfile.name}`,
    description: `Expert custom software, web app development, SEO, and digital marketing services to scale your business in Delhi NCR.`,
    url: companyProfile.website,
    siteName: companyProfile.name,
    images: [
      {
        url: `${companyProfile.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} IT Services & Digital Marketing`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Best IT Services & Custom Software Company in Delhi Noida`,
    description: `Scaling businesses through custom software, web apps, data-driven SEO, and paid ads.`,
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

        {/* SEO Optimized Content Section (Premium, 800-1200 Words, Localized) */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-950">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                Enterprise IT Services, Custom Software & Performance Digital Marketing in Delhi NCR
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                At Pro Base Solution, we deliver business transformation through advanced engineering and data-driven marketing. We serve businesses across Delhi, Noida, Gurgaon, Greater Noida West, and all major cities in India, ensuring that their online footprint is secure, scalable, and ranks at the top.
              </p>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              {/* Section 1: IT Services Delhi */}
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Managed IT Services in Delhi: Enhancing Security & Cloud Performance
                </h3>
                <p className="mb-4">
                  In today's digital economy, reliable business operations depend heavily on network security, server uptime, and cloud connectivity. Pro Base Solution stands as the premier provider of custom <strong>IT services in Delhi</strong>, catering to modern startups, mid-market enterprises, and corporate offices. Our managed solutions are engineered to maximize system availability, secure intellectual properties, and enable seamless enterprise scaling.
                </p>
                <p className="mb-4">
                  We specialize in design and deployment of advanced cloud topologies on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. Our certified cloud consultants in Delhi NCR help brands implement secure virtual private networks (VPNs) for remote teams, automated database backups, database replication, and zero-trust firewall configurations.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
                  <li><strong>Managed IT Support:</strong> 24/7 server monitoring, patch management, and helpdesk support.</li>
                  <li><strong>Cloud Infrastructure Consulting:</strong> Automated container orchestration using Kubernetes and Docker.</li>
                  <li><strong>Cybersecurity Audits:</strong> Complete penetration testing, vulnerability assessment, and compliance updates.</li>
                </ul>
              </div>

              {/* Section 2: Digital Marketing Noida */}
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Performance-Driven Digital Marketing in Noida: High ROI & First Page Google Rankings
                </h3>
                <p className="mb-4">
                  Securing a competitive edge online requires a data-driven approach to marketing. Pro Base Solution crafts customized <strong>digital marketing in Noida</strong> and Noida Extension to help clinics, real estate projects, and service brands dominate search results. We combine Search Engine Optimization (SEO), Pay-Per-Click (PPC) ads, and high-impact Social Media Management (SMM) to generate high-intent inquiries.
                </p>
                <p className="mb-4">
                  Our local SEO specialists focus on optimizing Google Business Profiles, citation management, and location page architectures. By targeting transactional keywords, we ensure you capture users at the exact moment they search. 
                </p>
                <div className="my-6 p-4 rounded-xl bg-purple-50/50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800">
                  <p className="text-center font-medium">
                    <Link href="/digital-marketing-delhi" className="text-purple-600 dark:text-purple-400 hover:underline">
                      “Looking for a digital marketing agency in Delhi?”
                    </Link> We provide complete coverage across Noida, Greater Noida, Gurgaon, and Delhi NCR.
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
                  <li><strong>Search Engine Optimization:</strong> Structured data, target keyword optimization, and high-quality backlink building.</li>
                  <li><strong>Paid Advertising Campaigns:</strong> ROI-driven Meta Ads and Google Search Network ad setups.</li>
                  <li><strong>Social Media Engagement:</strong> Graphic design, reel planning, and brand positioning.</li>
                </ul>
              </div>

              {/* Section 3: Web Dev NCR */}
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">
                  Custom Web Dev in NCR: Building Fast, Secure & Mobile-Responsive Web Applications
                </h3>
                <p className="mb-4">
                  A business website should function as a high-performing conversion machine. As a leading partner for <strong>web dev in NCR</strong>, we engineer blazing-fast, mobile-friendly websites that scale. We specialize in custom React.js, Next.js, and Node.js solutions, delivering clean interfaces that reduce bounce rates.
                </p>
                <p className="mb-4">
                  From custom e-commerce checkouts to database management (PostgreSQL/MongoDB) and custom content management systems (CMS), we handle the complete design and coding. Our website development company in Noida Extension ensures your platform is optimized for accessibility, cross-browser compatibility, and speed.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
                  <li><strong>Custom Next.js & React Web Apps:</strong> Seamless user flows, high PageSpeed scores, and dynamic rendering.</li>
                  <li><strong>E-Commerce Solutions:</strong> Custom shopping carts, secure checkout gates, and inventory catalog synchronization.</li>
                  <li><strong>CMS & Blogs:</strong> User-friendly headless CMS integration for seamless content publishing.</li>
                </ul>
              </div>

              {/* Section 4: Software Dev India */}
              <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                  Custom Software Dev in India: CRM, ERP, and Scalable SaaS Engineering
                </h3>
                <p className="mb-4">
                  As operations grow, ready-made software often limits flexibility. Pro Base Solution provides top-tier <strong>software dev in India</strong>, designing bespoke CRM portals, enterprise resource planning (ERP) suites, and cloud-native software products. We use robust agile methodologies, CI/CD pipelines, and thorough unit testing.
                </p>
                <p className="mb-4">
                  Our custom software development company in Delhi NCR helps you automate legacy workflows, integrate third-party APIs, configure secure payment portals, and build real-time monitoring analytics panels. By leveraging modern technology, we ensure your software remains scalable for years to come.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
                  <li><strong>Custom CRM & ERP Portal Development:</strong> Employee, lead, and inventory trackers.</li>
                  <li><strong>SaaS Product Engineering:</strong> Multi-tenant systems, subscription billing integrations, and API gateways.</li>
                  <li><strong>Legacy System Modernization:</strong> Upgrading older codebases to cloud-ready microservice topologies.</li>
                </ul>
              </div>
            </div>

            {/* Quick Links for Programmatic SEO Pages */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-100 dark:border-purple-900/50 max-w-5xl mx-auto">
              <h4 className="text-lg font-bold mb-4 text-gray-950 dark:text-white text-center">Top Regional Services Pages</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center">
                <Link href="/seo-company-delhi" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">SEO Company Delhi</Link>
                <Link href="/ppc-agency-noida" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">PPC Agency Noida</Link>
                <Link href="/crm-software-delhi" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">CRM Software Delhi</Link>
                <Link href="/website-development-noida" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Web Dev Noida</Link>
                <Link href="/it-services-delhi" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">IT Services Delhi</Link>
                <Link href="/seo-company-noida" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">SEO Company Noida</Link>
                <Link href="/crm-software-noida" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">CRM Software Noida</Link>
                <Link href="/it-services-noida" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">IT Services Noida</Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <FooterSection />
    </main>
  );
}

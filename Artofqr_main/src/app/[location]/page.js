import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { companyProfile } from "@/content/proBaseSolution";
import { parseSeoSlug, formatCityName } from "@/lib/seo-helper";
import Link from "next/link";
import Script from "next/script";

import Ecosystem from "../components/Ecosystem";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import StatsSection from "../components/StatsSection";
import WhyChooseUsSection from "../components/WhyChooseUs";

const AboutUsSection = dynamic(() => import("../components/AboutUs"));
const ServicesSection = dynamic(() => import("../components/ServicesSection"));
const PricingSection = dynamic(() => import("../components/PricingSection"));
const IndustriesSection = dynamic(() => import("../components/IndustriesSection"));
const TestimonialsPage = dynamic(() => import("../components/Testimonial"));
const ContactFormSection = dynamic(() => import("../components/ContactForm"));
const FAQSection = dynamic(() => import("../components/Faq"));
const ProjectModal = dynamic(() => import("../components/ProjectModal"));
const Project = dynamic(() => import("../components/Project"));

export async function generateMetadata({ params }) {
  const { location } = await params;
  const parsed = parseSeoSlug(location);
  if (!parsed.isValid) {
    return {};
  }

  const { cityName, serviceName } = parsed;

  return {
    title: `Best ${serviceName} in ${cityName} | ${companyProfile.name}`,
    description: `Looking for top-rated ${serviceName} in ${cityName}? ${companyProfile.name} provides expert IT services, custom software engineering, web apps, and digital marketing in ${cityName} and Delhi NCR.`,
    keywords: [
      `${serviceName.toLowerCase()} in ${cityName.toLowerCase()}`,
      `it services company in ${cityName.toLowerCase()}`,
      `custom software development in ${cityName.toLowerCase()}`,
      `web app development company in ${cityName.toLowerCase()}`,
      `website development company in ${cityName.toLowerCase()}`,
      `digital marketing agency in ${cityName.toLowerCase()}`,
      `seo services in ${cityName.toLowerCase()}`,
      `best software company in ${cityName.toLowerCase()}`,
      `web application development ${cityName.toLowerCase()}`
    ],
    openGraph: {
      title: `Best ${serviceName} in ${cityName} | ${companyProfile.name}`,
      description: `Premium ${serviceName.toLowerCase()}, software engineering, and digital marketing services for businesses in ${cityName}.`,
      url: `${companyProfile.website}/${location}`,
    },
    alternates: {
      canonical: `${companyProfile.website}/${location}`,
    }
  };
}

function getDynamicCrossLink(parsed, currentSlug) {
  const { city, category } = parsed;
  
  if (currentSlug === "digital-marketing-delhi") {
    return (
      <p className="text-base text-gray-700 dark:text-gray-300">
        Looking for a high-converting web presence?{" "}
        <Link href="/website-development-noida" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">
          Need website development in Noida?
        </Link>
      </p>
    );
  }
  
  if (currentSlug === "website-development-noida") {
    return (
      <p className="text-base text-gray-700 dark:text-gray-300">
        Need secure cloud infrastructure or backend consulting?{" "}
        <Link href="/it-services-delhi" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">
          Looking for robust and scalable IT services in Delhi NCR?
        </Link>
      </p>
    );
  }

  if (category === "AI Solutions") {
    return (
      <p className="text-base text-gray-700 dark:text-gray-300">
        Looking for custom database setups to train your neural networks? Find out about our{" "}
        <Link href={`/custom-software-${city}`} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
          Custom Software Development in {formatCityName(city)}
        </Link>.
      </p>
    );
  }

  if (category === "Digital Marketing") {
    return (
      <p className="text-base text-gray-700 dark:text-gray-300">
        Need a high-performance web experience to drive traffic? Check out our{" "}
        <Link href={`/website-development-${city}`} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
          Website Development in {formatCityName(city)}
        </Link>.
      </p>
    );
  }
  if (category === "Web Dev") {
    return (
      <p className="text-base text-gray-700 dark:text-gray-300">
        Ensure your new website ranks on top of Google. Explore our{" "}
        <Link href={`/seo-services-${city}`} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
          SEO Services in {formatCityName(city)}
        </Link>.
      </p>
    );
  }
  if (category === "Software Dev") {
    return (
      <p className="text-base text-gray-700 dark:text-gray-300">
        Need complete cloud setup and server management? Find out about our{" "}
        <Link href={`/it-services-${city}`} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
          IT Services in {formatCityName(city)}
        </Link>.
      </p>
    );
  }
  return (
    <p className="text-base text-gray-700 dark:text-gray-300">
      Boost your brand's digital footprint. Connect with our{" "}
      <Link href={`/digital-marketing-${city}`} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
        Digital Marketing Agency in {formatCityName(city)}
      </Link>.
    </p>
  );
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  const parsed = parseSeoSlug(location);
  if (!parsed.isValid) {
    notFound();
  }

  const { cityName, serviceName, category } = parsed;

  // Localized metadata and variables
  const heroBadge = `${serviceName} in ${cityName}`;
  const heroTitle = `Top-Rated ${serviceName} Company in ${cityName}`;
  const heroDescription = `Scale your business in ${cityName} with the best ${serviceName.toLowerCase()} partner. Pro Base Solution delivers custom software, fast websites, local SEO, and paid ad campaigns for healthcare, real estate, and retail brands.`;
  const aboutDescription = `${companyProfile.name} is a dedicated ${serviceName.toLowerCase()} and web development agency serving ${cityName} and Delhi NCR. We align bespoke digital strategies, high-intent local SEO, and paid ad platforms to scale organic search traffic and customer inquiries for our local clients.`;

  const localFaqs = [
    {
      question: `What services does your ${serviceName} company offer in ${cityName}?`,
      answer: `As a leading ${serviceName.toLowerCase()} provider in ${cityName}, Pro Base Solution offers tailored solutions including custom software development, React/Next.js website design, local SEO campaigns, Meta & Google Ads, and full-funnel digital marketing targeted to the ${cityName} market.`
    },
    {
      question: `How long does it take for ${serviceName} in ${cityName} to show results?`,
      answer: `For marketing and search optimization (SEO), initial visibility improvements can be seen within 30 to 60 days, with first page keyword dominance taking 4-6 months. Development projects (custom software/web apps) take between 2 to 6 weeks based on specifications.`
    },
    {
      question: `Do you work with small and medium businesses in ${cityName}?`,
      answer: `Yes, we specialize in helping clinics, hospitals, real estate agencies, automobile showrooms, spa/wellness centers, and local brands in ${cityName} scale their digital presence, rank locally on Google Maps, and capture qualified leads.`
    },
    {
      question: `How do I start a ${serviceName} project with you in ${cityName}?`,
      answer: `Getting started is simple! Click the "Get Free Audit" or "Talk To Our Team" buttons to schedule a consultation. We will analyze your current digital presence and provide a customized strategy for your business in ${cityName}.`
    }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyProfile.website}/${location}#localbusiness`,
    "name": `${companyProfile.name} - ${serviceName} ${cityName}`,
    "image": `${companyProfile.website}/ProbaseLogo.jpeg`,
    "url": `${companyProfile.website}/${location}`,
    "telephone": companyProfile.phones[0],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": cityName },
      { "@type": "Country", "name": "India" }
    ],
    "description": `Premium ${serviceName.toLowerCase()} and IT solutions provider in ${cityName} by Pro Base Solution. We specialize in custom software, SEO, and paid campaigns.`
  };

  return (
    <main className="bg-white dark:bg-black selection:bg-purple-500/30">
      <Script
        id="local-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <ProjectModal />
      <NavBar />

      <div className="pt-20">
        <HeroSection badge={heroBadge} title={heroTitle} description={heroDescription} />
        <StatsSection />
      </div>

      <div className="space-y-12 md:space-y-16 lg:space-y-20 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        
        {/* Dynamic Location Specific Banner */}
        <section className="bg-gradient-to-r from-purple-100 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 text-center border border-purple-200 dark:border-purple-800">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Partner with the Top {serviceName} in {cityName}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scale your business in <strong>{cityName}</strong> with our award-winning custom tech solutions and performance marketing. From custom software engineering to enterprise IT and targeted SEO campaigns, we deliver actual ROI.
          </p>
        </section>

        {/* Location Specific Services Grid (SEO-Rich) */}
        <section className="py-6 border-y border-gray-100 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Local Service Suite in {cityName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category === "AI Solutions" ? (
              <>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">GenAI & LLM Solutions in {cityName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Custom large language model (LLM) fine-tuning, RAG (Retrieval-Augmented Generation) pipelines, and generative AI development in {cityName}.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">AI Voice Assistants in {cityName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Engineering custom voice AI systems, conversational dialers, and real-time support bots in {cityName} and NCR.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Machine Learning & Analytics in {cityName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Predictive models, recommendation engines, and high-performance ML pipeline deployments in {cityName}.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Custom Software & Web Apps in {cityName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Offering state-of-the-art <strong>custom software development in {cityName}</strong>. We engineer SaaS platforms, CRM systems, and bespoke web apps.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Digital Marketing & SEO in {cityName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Drive organic growth with the premier <strong>digital marketing agency in {cityName}</strong>. Expert local SEO, lead generation, and social campaigns.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">IT Services & Support in {cityName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your reliable <strong>IT services company in {cityName}</strong>, providing cloud infrastructure solutions, technical consulting, and network setup.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        <ServicesSection />
        <AboutUsSection description={aboutDescription} />
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
        <IndustriesSection />
        <PricingSection />
        <TestimonialsPage />
        <FAQSection items={localFaqs} />

        {/* SEO Text Area & Linking Module */}
        <section className="py-12 px-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose {companyProfile.name} for {serviceName} in {cityName}?</h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4 max-w-4xl leading-relaxed">
            <p>
              In the competitive market of <strong>{cityName}</strong>, businesses require specialized technology and marketing strategies to stand out. At {companyProfile.name}, we provide tailored services that align with your growth objectives. Whether you require a fast Next.js application, an enterprise-level CRM system, or high-intent SEO, our team of experts provides robust implementation.
            </p>
            <p>
              Our deep understanding of <strong>{cityName}</strong> local market dynamics ensures that campaigns achieve target reach. We construct search-engine friendly pages, speed-optimized designs, and robust database backends to ensure security, reliability, and high traffic conversions.
            </p>
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-zinc-800">
              {getDynamicCrossLink(parsed, location)}
            </div>
          </div>
        </section>

        <section id="contact" className="pt-8">
          <ContactFormSection />
        </section>
      </div>

      <FooterSection />
    </main>
  );
}

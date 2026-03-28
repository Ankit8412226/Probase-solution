import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import ContactFormSection from "../components/ContactForm";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `Contact Us | ${companyProfile.name}`,
  description:
    `Contact ${companyProfile.name} for digital marketing, website development, SEO, paid ads, social media support, and local business growth services.`,
  keywords: [
    "contact digital marketing company",
    "contact website development company",
    "seo consultation",
    "social media marketing enquiry",
    "paid ads consultation",
    "greater noida digital marketing contact",
  ],
  openGraph: {
    title: `Contact Us | ${companyProfile.name}`,
    description: "Get in touch for website, SEO, ad, social media, and digital growth support.",
    url: `${companyProfile.website}/contact`,
  },
  alternates: {
    canonical: `${companyProfile.website}/contact`,
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <section className="py-16">
          <div className="container mx-auto text-center mb-12">
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Grow Your Business Online
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you need a better website, stronger social media, smarter ads, or improved local visibility, we&apos;re ready to help.
            </p>
          </div>
          <ContactFormSection />
        </section>
      </div>
      <FooterSection />
    </main>
  );
}

import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import IndustriesSection from "../components/IndustriesSection";
import FoundersVision from "../components/Founder-vision";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `Industries We Serve | ${companyProfile.name}`,
  description:
    `${companyProfile.name} supports healthcare, real estate, automobile, spa and wellness, e-commerce, and local businesses with digital marketing and website growth services.`,
  keywords: [
    "healthcare digital marketing",
    "real estate digital marketing",
    "spa social media marketing",
    "automobile digital marketing",
    "ecommerce digital marketing services",
  ],
  openGraph: {
    title: `Industries We Serve | ${companyProfile.name}`,
    description: "Digital growth support tailored to key business categories.",
    url: `${companyProfile.website}/industries`,
  },
  alternates: {
    canonical: `${companyProfile.website}/industries`,
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <NavBar />
      <div className="mt-8 md:mt-12 lg:mt-16">
        <IndustriesSection />
      </div>
      <div className="mt-16 md:mt-20 lg:mt-24 mb-20">
        <FoundersVision />
      </div>
      <FooterSection />
    </main>
  );
}

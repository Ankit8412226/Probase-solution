import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import AboutHero from "../components/AboutHero";
import WhyChooseUsSection from "../components/WhyChooseUs";
import FoundersVision from "../components/Founder-vision";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `About Us | ${companyProfile.name}`,
  description: companyProfile.aboutDescription,
  openGraph: {
    title: `About Us | ${companyProfile.name}`,
    description: companyProfile.aboutDescription,
    url: `${companyProfile.website}/about`,
  },
  alternates: {
    canonical: `${companyProfile.website}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <NavBar />
      <div>
        <AboutHero />
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <WhyChooseUsSection />
      </div>
      <div className="mt-16 md:mt-20 lg:mt-24 mb-20 bg-gray-50/50 dark:bg-gray-900/20 py-16">
        <FoundersVision />
      </div>
      <FooterSection />
    </main>
  );
}

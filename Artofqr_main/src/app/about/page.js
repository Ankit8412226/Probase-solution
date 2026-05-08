import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import AboutHero from "../components/AboutHero";
import WhyChooseUsSection from "../components/WhyChooseUs";
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
      <div className="mt-12 md:mt-16 lg:mt-20 mb-20">
        <WhyChooseUsSection />
      </div>
      <FooterSection />
    </main>
  );
}

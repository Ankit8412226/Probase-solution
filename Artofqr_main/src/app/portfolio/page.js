import OurProject from "../../app/components/ourProjects";
import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `Portfolio | ${companyProfile.name}`,
  description:
    `${companyProfile.name} portfolio highlights across healthcare, real estate, spa and wellness, automobile, and e-commerce digital growth work.`,
  keywords: [
    "digital marketing portfolio",
    "website development portfolio",
    "real estate marketing case studies",
    "healthcare digital marketing",
    "local business marketing examples",
  ],
  openGraph: {
    title: `Portfolio | ${companyProfile.name}`,
    description: "Selected client categories and campaign examples.",
    url: `${companyProfile.website}/portfolio`,
  },
  alternates: {
    canonical: `${companyProfile.website}/portfolio`,
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <NavBar />

      <div className="mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-24">
        <OurProject />
      </div>

      <FooterSection />
    </main>
  );
}

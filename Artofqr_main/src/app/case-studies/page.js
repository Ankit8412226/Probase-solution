import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
import Breadcrumb from "../components/Breadcrumb";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `Case Studies & Proven Client Success | ${companyProfile.name}`,
  description: `Explore in-depth case studies showing how Pro Base Solution delivers 300%+ ROI in Custom Software, Web Development, Local SEO, and Lead Generation campaigns for clinics, real estate, and e-commerce.`,
  openGraph: {
    title: `Case Studies & ROI Results | ${companyProfile.name}`,
    description: `Read real growth stories and ROI metrics across custom software, website engineering, and performance marketing in Delhi NCR.`,
    url: `${companyProfile.website}/case-studies`,
  },
  alternates: {
    canonical: `${companyProfile.website}/case-studies`,
  },
};

const caseStudiesList = [
  {
    slug: "dental-clinic-local-seo-growth",
    title: "Dental Clinic Local SEO & Patient Lead Generation",
    client: "SmileCare Dental Noida",
    industry: "Healthcare",
    results: [
      "420% increase in Google Maps directions",
      "Ranked #1 for 'Dental Clinic in Noida'",
      "65+ new monthly patient appointments",
    ],
    summary:
      "A complete local SEO, Google Business Profile optimization, and local landing page overhaul that propelled a local Noida dental clinic to the top 3 Google map pack.",
    image: "/images/seo_marketing.png",
    readTime: "6 min read",
  },
  {
    slug: "real-estate-lead-generation-campaign",
    title: "Real Estate Meta & Google Ads Lead Generation",
    client: "Om Sai Luxury Housing",
    industry: "Real Estate",
    results: [
      "₹1.8 Cr property sales generated",
      "Cost-per-lead reduced by 48%",
      "Over 350 high-intent inquiries in 45 days",
    ],
    summary:
      "How we structured laser-targeted Meta video ads, Google Search campaigns, and fast landing pages for luxury apartments in Greater Noida West.",
    image: "/images/hero_tech.png",
    readTime: "8 min read",
  },
  {
    slug: "custom-erp-crm-software-scaling",
    title: "Custom CRM & ERP Software Modernization",
    client: "LogiTech Logistics NCR",
    industry: "Custom Software",
    results: [
      "Automated 80% manual dispatch entry",
      "99.9% uptime with cloud AWS deployment",
      "Zero latency inventory tracking",
    ],
    summary:
      "Replacing legacy spreadsheets with a multi-tenant React + Node.js custom ERP software portal with automated WhatsApp API notifications.",
    image: "/images/custom_software.png",
    readTime: "10 min read",
  },
  {
    slug: "ecommerce-nextjs-web-app-redesign",
    title: "E-Commerce Next.js Web App & PageSpeed Overhaul",
    client: "Aura Apparel India",
    industry: "Web Development",
    results: [
      "PageSpeed score improved from 32 to 98",
      "Conversion rate increased by 2.4x",
      "Organic traffic grew 310% in 90 days",
    ],
    summary:
      "Transforming a slow WooCommerce store into a blazing fast Next.js headless e-commerce store with instant cart checkout and mobile optimization.",
    image: "/images/web_dev.png",
    readTime: "7 min read",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <NavBar />
      <div className="pt-24 pb-8">
        <Breadcrumb items={[{ label: "Case Studies", href: "/case-studies" }]} />
      </div>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 uppercase tracking-widest">
            Proven Results & Growth
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight">
            Client Success & In-Depth <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SEO & Tech Case Studies
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Real data, clear ROI metrics, and practical implementations showing how Pro Base Solution scales healthcare, real estate, e-commerce, and enterprise clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {caseStudiesList.map((cs) => (
            <div
              key={cs.slug}
              className="group rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {cs.industry}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mb-4">
                    Client: {cs.client} • {cs.readTime}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  <div className="space-y-2 mb-6 bg-white dark:bg-zinc-950 p-4 rounded-xl border border-gray-100 dark:border-zinc-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Outcomes:</p>
                    {cs.results.map((res, i) => (
                      <p key={i} className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        <span>✓</span> {res}
                      </p>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-colors w-full text-center"
                >
                  Get Similar Growth Results
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

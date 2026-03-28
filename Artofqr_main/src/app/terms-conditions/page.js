import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `Terms & Conditions | ${companyProfile.name}`,
  description: `Read the terms and conditions governing the use of ${companyProfile.name} website and services.`,
  alternates: {
    canonical: `${companyProfile.website}/terms-conditions`,
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    points: [
      `By accessing the ${companyProfile.name} website or engaging with our services, you agree to these Terms & Conditions.`,
      "If you do not agree with these terms, you should not use this website or rely on its contents.",
    ],
  },
  {
    title: "2. Scope of Services",
    points: [
      "Our website describes digital marketing, website development, SEO, social media marketing, paid advertising, Google Business Profile optimization, content support, and related consulting services.",
      "Project scope, timelines, deliverables, pricing, revisions, and support terms are finalized separately through proposal, quotation, email confirmation, or written agreement.",
    ],
  },
  {
    title: "3. Use of Website",
    points: [
      "You may use this website only for lawful purposes and in a way that does not damage, interrupt, misuse, or impair the website or its content.",
      "You must not attempt unauthorized access to our systems, forms, analytics, hosting environment, or connected third-party tools.",
    ],
  },
  {
    title: "4. Intellectual Property",
    points: [
      "Unless otherwise stated, website content, text, layouts, graphics, branding, and service descriptions are owned by or licensed to Pro Base Solution.",
      "You may not copy, republish, distribute, modify, or commercially exploit site content without prior written permission.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    points: [
      "Clients are responsible for providing timely approvals, accurate information, required assets, and lawful content where project execution depends on them.",
      "Delays in communication, incomplete information, or unavailable assets may affect timelines, revisions, and delivery schedules.",
    ],
  },
  {
    title: "6. Payments and Commercial Terms",
    points: [
      "Commercial terms are governed by the approved quotation, invoice, or agreement associated with the specific service engagement.",
      "Unless otherwise agreed, work may begin only after confirmation, milestone approval, and any required advance payment.",
      `GST and related statutory obligations may apply where relevant. Current GST reference: ${companyProfile.gst}.`,
    ],
  },
  {
    title: "7. Limitation of Liability",
    points: [
      "We aim to provide accurate information and professional services, but we do not guarantee uninterrupted website availability, specific ranking positions, ad platform outcomes, or third-party platform behaviour.",
      "To the maximum extent permitted by law, Pro Base Solution will not be liable for indirect, incidental, or consequential losses arising from website use, delays, or third-party systems.",
    ],
  },
  {
    title: "8. External Platforms and Third-Party Tools",
    points: [
      "Our work may involve external platforms such as search engines, ad platforms, social networks, hosting, analytics, or marketplace systems.",
      "Those services are governed by their own terms and policies, and their platform changes or outages remain outside our control.",
    ],
  },
  {
    title: "9. Termination and Updates",
    points: [
      "We may update these Terms & Conditions when necessary. Continued use of the website after updates means you accept the revised terms.",
      "We may suspend or restrict access to the website where required for security, maintenance, compliance, or misuse prevention.",
    ],
  },
  {
    title: "10. Contact",
    points: [
      `For questions regarding these Terms & Conditions, contact ${companyProfile.name} at ${companyProfile.email} or ${companyProfile.phones.join(" / ")}.`,
      `Business address: ${companyProfile.address}`,
    ],
  },
];

export default function TermsOfServices() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-20">
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-500/10" />
          <div className="absolute top-0 right-[-10%] w-[320px] h-[320px] rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-[-10%] w-[320px] h-[320px] rounded-full bg-purple-500/15 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                These terms govern your use of the {companyProfile.name} website
                and any related digital marketing, website, or consulting
                services provided by our team.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Summary</h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>Service scope is confirmed separately through quotation or agreement.</li>
                <li>Website content and branding remain protected intellectual property.</li>
                <li>Platform results can be influenced by third-party systems beyond our control.</li>
                <li>Use of this website means you accept these terms.</li>
              </ul>
            </aside>

            <div className="lg:col-span-2 space-y-6">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 md:p-8 shadow-sm"
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    {section.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </section>
              ))}

              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Service Note</h2>
                <p className="text-blue-100 leading-relaxed">
                  For all commercial work, the signed proposal, invoice,
                  quotation, or approved scope document will govern the exact
                  engagement details in addition to these website terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}

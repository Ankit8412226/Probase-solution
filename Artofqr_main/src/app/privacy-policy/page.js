import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";
import { companyProfile } from "@/content/proBaseSolution";

export const metadata = {
  title: `Privacy Policy | ${companyProfile.name}`,
  description: `Read the privacy policy for ${companyProfile.name}, including how we collect, use, store, and protect your information.`,
  alternates: {
    canonical: `${companyProfile.website}/privacy-policy`,
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    points: [
      "We may collect information you voluntarily provide through contact forms, enquiry forms, consultation requests, newsletter signups, or direct communication.",
      "This may include your name, email address, phone number, business name, website details, service interests, and any message content you choose to send.",
      "We may also collect limited technical data such as browser type, device information, IP address, referral source, and pages visited for analytics and security purposes.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    points: [
      "To respond to enquiries, provide proposals, discuss services, and deliver requested support.",
      "To improve our website, understand user behaviour, and strengthen service quality.",
      "To send relevant updates, marketing communication, or service-related follow-ups where appropriate.",
    ],
  },
  {
    title: "3. Legal Basis and Sharing",
    points: [
      "We process information to communicate with you, deliver requested services, improve our operations, and protect our business and website.",
      "We do not sell personal information.",
      "We may share limited information with service providers such as hosting, analytics, CRM, email, or form-processing tools where necessary for business operations.",
    ],
  },
  {
    title: "4. Data Retention and Security",
    points: [
      "We retain information only for as long as reasonably necessary for communication, service delivery, legal obligations, and internal record keeping.",
      "We use practical technical and organizational measures to protect information, but no digital system can be guaranteed as completely secure.",
      "If you believe your information has been handled improperly, contact us and we will review the matter.",
    ],
  },
  {
    title: "5. Your Choices",
    points: [
      "You may request access, correction, or deletion of the personal information you have shared with us, subject to legal and operational requirements.",
      "You may opt out of marketing communication at any time by contacting us directly.",
      "If you do not want to provide certain information, some services or responses may be limited.",
    ],
  },
  {
    title: "6. Contact",
    points: [
      `If you have questions about this Privacy Policy, contact ${companyProfile.name} at ${companyProfile.email} or ${companyProfile.phones.join(" / ")}.`,
      `Business address: ${companyProfile.address}`,
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-20">
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-500/10" />
          <div className="absolute top-0 left-[-10%] w-[320px] h-[320px] rounded-full bg-purple-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-[-10%] w-[320px] h-[320px] rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-4">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                This Privacy Policy explains how {companyProfile.name} collects,
                uses, stores, and protects information when you visit our
                website, contact us, or use our services.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/60 p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Summary</h2>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>We collect information you provide voluntarily.</li>
                <li>We use it to respond, deliver services, and improve operations.</li>
                <li>We do not sell personal information.</li>
                <li>You can contact us to request updates or deletion.</li>
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

              <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-3">Policy Updates</h2>
                <p className="text-purple-100 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  operational, legal, or service changes. The latest version on
                  this page will apply.
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

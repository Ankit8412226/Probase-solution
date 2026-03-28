import { Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FooterSection from "../../components/FooterSection";
import NavBar from "../../components/NavBar";
import { companyProfile, serviceCatalog, serviceMap } from "@/content/proBaseSolution";

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const data = serviceMap[slug];

  if (!data) notFound();

  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 pt-20">
      <NavBar />

      <section className="relative overflow-hidden">
        <img
          src="/images/Ellipse 604 (1).svg"
          alt="background glow"
          className="absolute bottom-[-480px] right-[-120px] w-[550px] md:w-[750px] opacity-90 pointer-events-none z-0"
        />

        <div className="relative pt-10 md:pt-14 pb-16 md:pb-20 text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{data.title}</h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">{data.subtitle}</p>
          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-500 dark:text-gray-400">{data.overview}</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-semibold"
            >
              Talk To Our Team
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-semibold"
            >
              Explore all services
            </Link>
          </div>

          <div className="relative mt-10 md:mt-12 max-w-full md:max-w-5xl mx-auto z-20 px-4">
            <img
              src="/images/Rectangle_Web_Development.svg"
              alt={data.title}
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Tailored for local businesses that want stronger visibility, better campaigns, and more enquiries.
        <div className="mt-4 flex flex-wrap justify-center gap-6 opacity-70">
          <span>Web Presence</span>
          <span>Search Visibility</span>
          <span>Creative Campaigns</span>
          <span>Lead Generation</span>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <Stat value="Local" label="Business-first strategy" />
          <Stat value="Clear" label="Offer-led messaging" />
          <Stat value="Fast" label="Responsive support" />
          <Stat value="Custom" label="Scope-based pricing" />
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white/80 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 h-[520px]">
            <img
              src="/images/Why choose us.png"
              alt={`${data.title} service visual`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 pointer-events-none" />
          </div>

          <div className="text-gray-700 dark:text-gray-300 text-left md:text-center lg:text-left">
            <p className="uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400 text-sm mb-3">Service Focus</p>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight mb-8">
              What This Service Helps You Achieve
            </h2>

            <div className="space-y-4 text-left">
              {data.outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl p-5 backdrop-blur-xl transition-all bg-white border border-gray-200 shadow-sm dark:bg-gray-900/40 dark:border-gray-800"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div>
          <img
            src="/images/Rectangle_Growth.svg"
            alt="Growth analytics"
            className="rounded-3xl w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver {data.title}</h2>
          <p className="mb-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            A practical process designed around business goals, content clarity, campaign execution, and measurable improvement.
          </p>

          <ul className="space-y-5">
            {data.process.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="text-center mb-14 px-6">
          <h2 className="text-4xl font-bold mb-4">Flexible Engagement Options for {data.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pricing is customized to scope, campaign depth, and business goals. These options show how we typically structure delivery.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {data.packages.map((plan, i) => {
            const isFeatured = plan.featured || i === 1;

            return (
              <div
                key={plan.title}
                className={`rounded-3xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white scale-105"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                  <p className={`mb-6 ${isFeatured ? "text-purple-100" : "text-gray-500 dark:text-gray-400"}`}>
                    Best for: {plan.bestFor}
                  </p>
                  <p className="text-3xl font-bold mb-6">
                    {plan.price}{" "}
                    <span className={`text-base font-medium ${isFeatured ? "text-purple-100" : "text-gray-600 dark:text-gray-400"}`}>
                      ({plan.billing})
                    </span>
                  </p>

                  <Link
                    href="/contact"
                    className={`inline-flex w-full justify-center py-3 rounded-full font-semibold mb-8 transition ${
                      isFeatured
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    Request This Plan
                  </Link>
                </div>

                <div>
                  <p className="font-semibold mb-4">Features Include:</p>
                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 ${
                          isFeatured ? "text-purple-100" : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              If you have a business-specific requirement, contact us and we&apos;ll recommend the right service combination.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => {
              const isOpen = i === 0;

              return (
                <details
                  key={faq.q}
                  open={isOpen}
                  className={`group rounded-2xl border transition-all ${
                    isOpen
                      ? "bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white border-transparent"
                      : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  }`}
                >
                  <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold list-none">
                    {faq.q}
                    <span className="transition-transform group-open:rotate-180">⌃</span>
                  </summary>

                  <div className={`px-6 pb-4 text-sm leading-relaxed ${isOpen ? "text-purple-100" : "text-gray-600 dark:text-gray-300"}`}>
                    {faq.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#9616FB] to-[#3459FB] rounded-3xl text-white text-center py-16 px-8 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Use {data.title} for Better Business Growth?
            </h2>
            <p className="text-purple-100 mb-8">
              Talk to {companyProfile.name} about your goals, and we&apos;ll suggest the right digital plan for your business.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-white/30 backdrop-blur text-white font-semibold hover:bg-white/40 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = serviceMap[slug];

  if (!data) {
    return {
      title: `Service Not Found | ${companyProfile.name}`,
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${data.title} | ${companyProfile.name}`,
    description: data.subtitle,
    alternates: {
      canonical: `${companyProfile.website}/services/${data.slug}`,
    },
  };
}

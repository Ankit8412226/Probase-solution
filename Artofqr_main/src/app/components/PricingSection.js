"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

export default function PricingSection() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState("growth");
  const [expanded, setExpanded] = useState({});

  const defaultHeight = 480;
  const activeHeight = 600;

  const cards = [
    {
      id: "starter",
      name: "Starter",
      price: "Custom",
      bullets: [
        "Built for local businesses getting started",
        "Focused website or campaign foundation",
        "Basic SEO or profile setup support",
        "Practical creative direction",
        "Clear execution roadmap",
        "Affordable scope planning",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      featured: true,
      price: "Quote",
      bullets: [
        "Monthly digital marketing execution",
        "Social media and creative support",
        "Campaign and lead generation direction",
        "SEO and profile optimization support",
        "Landing page or website improvements",
        "Reporting and refinement cycle",
      ],
    },
    {
      id: "performance",
      name: "Performance",
      price: "Quote",
      bullets: [
        "Multi-channel campaign support",
        "Paid ads plus conversion input",
        "Advanced creative and content alignment",
        "Marketplace or local growth support",
        "Priority communication",
        "Custom strategy based on business goals",
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setActiveCard(id);
  };

  return (
    <section id="pricing" className="w-full relative overflow-hidden py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center mb-12">
          <p className="inline-block px-6 py-1 rounded-full text-base font-medium border border-blue-500/40 dark:border-blue-400/40 text-blue-500 dark:text-blue-400 mb-4">
            Pricing
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight mb-4">
            Choose the Engagement That Fits Your Growth Stage
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            We tailor scopes for business size, service mix, and campaign intensity rather than forcing one fixed package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {cards.map((c) => {
            const isActive = activeCard === c.id;
            const isExpanded = !!expanded[c.id];
            const visibleBullets = isExpanded ? c.bullets : c.bullets.slice(0, 6);

            return (
              <motion.div
                key={c.id}
                layout
                onMouseEnter={() => setActiveCard(c.id)}
                onMouseLeave={() => setActiveCard("growth")}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative rounded-3xl overflow-hidden flex flex-col p-7 md:p-8 border backdrop-blur-xl cursor-pointer bg-white/40 border-gray-300 text-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.05)] dark:bg-gray-900/50 dark:border-gray-800 dark:text-white self-start"
                style={{
                  minHeight: isActive || isExpanded ? activeHeight : defaultHeight,
                  transformOrigin: "top",
                  boxShadow: isActive
                    ? "0 32px 70px -15px rgba(0,0,0,0.55)"
                    : "0 12px 25px -10px rgba(0,0,0,0.25)",
                  transform: isActive ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {(c.featured || isActive) && (
                  <div className="pointer-events-none absolute inset-x-0 -top-10 h-44">
                    <div
                      style={{
                        background:
                          "radial-gradient(450px 160px at 50% 0%, rgba(124,58,237,0.26), rgba(59,130,246,0.15) 25%, transparent 60%)",
                        filter: "blur(32px)",
                      }}
                      className="w-full h-full"
                    />
                  </div>
                )}

                <div className="z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{c.name}</h3>

                    {c.featured && (
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-600 text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mt-6 mb-4">
                    <div className="flex items-end gap-3">
                      <div className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {c.price}
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Final scope depends on business goals, channels, and delivery format.
                    </div>
                  </div>

                  <div className="mt-2">
                    <button
                      onClick={() => router.push("/contact")}
                      className={`relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold transition-all overflow-hidden cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                          : "bg-white border border-gray-300 text-gray-800 dark:bg-transparent dark:border-gray-600/40 dark:text-white"
                      }`}
                    >
                      <span className="relative z-10 flex items-center">Request pricing →</span>
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  <motion.ul
                    key={isExpanded ? `expanded-${c.id}` : `collapsed-${c.id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5 md:space-y-3 mt-4 pb-2"
                  >
                    {visibleBullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-200 text-[15px]"
                      >
                        <Check size={16} className="text-blue-400 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>

                {c.bullets.length > 6 && (
                  <button
                    onClick={() => toggleExpand(c.id)}
                    className="text-sm font-medium text-blue-500 dark:text-blue-400 mt-2 mb-4"
                  >
                    {isExpanded ? "− Read Less" : `+ ${c.bullets.length - 6} More Features`}
                  </button>
                )}

                <div
                  className="pointer-events-none absolute -left-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), rgba(59,130,246,0.10) 40%, transparent 70%)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="text-left pl-6 mt-12 space-y-2">
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Pricing is customized according to service mix, campaign size, and execution timeline.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Contact us for the latest package details tailored to your business requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

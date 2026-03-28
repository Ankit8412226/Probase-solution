"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Check, Rocket, TrendingUp, Building2, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState("growth");

  const cards = [
    {
      id: "starter",
      name: "Startup Foundations",
      tagline: "Build your digital base",
      icon: Rocket,
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
      name: "Growth Acceleration",
      tagline: "Scale your presence",
      featured: true,
      icon: TrendingUp,
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
      name: "Enterprise Scale",
      tagline: "Dominate your market",
      icon: Building2,
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

  return (
    <section id="pricing" className="w-full relative overflow-hidden py-24 lg:py-32 bg-white dark:bg-black">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/50 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              Custom Solutions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Flexible Engagement <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Tailored to Your Goals
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            We don&apos;t believe in fixed packages. We design custom scopes based on your industry, goals, and growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isActive = activeCard === c.id;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveCard(c.id)}
                className="group relative h-full flex flex-col"
              >
                {/* Outer Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] transition-opacity duration-500 blur-2xl ${isActive ? 'opacity-30' : 'opacity-0'}`} />
                
                <div className={`relative flex-1 flex flex-col h-full rounded-[3rem] p-8 md:p-10 border transition-all duration-500 overflow-hidden ${
                  isActive 
                  ? 'bg-white dark:bg-gray-950 border-purple-500/50 shadow-2xl scale-[1.02]' 
                  : 'bg-white/50 dark:bg-white/[0.02] border-gray-100 dark:border-white/5 shadow-sm'
                }`}>
                  
                  {/* Internal Lighting */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition-opacity duration-500 ${isActive ? 'bg-purple-600/20' : 'bg-transparent'}`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-100/50 dark:border-purple-900/30`}>
                        <Icon size={32} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      {c.featured && (
                        <div className="px-3 py-1 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest">
                          Recommended
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {c.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-8">
                      {c.tagline}
                    </p>

                    <ul className="space-y-4 mb-12 flex-1">
                      {c.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          <Check size={18} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                      <button
                        onClick={() => router.push("/contact")}
                        className={`group relative flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                          isActive 
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25' 
                          : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:scale-[1.02]'
                        }`}
                      >
                        Request Custom Proposal 
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-[2rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Need something completely bespoke? <br className="md:hidden" />
            <button 
              onClick={() => router.push("/contact")}
              className="font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              Contact us for a Custom Enterprise Workshop.
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

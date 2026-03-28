"use client";

import { motion } from "framer-motion";
import { Car, Heart, Home, ShoppingBag, Sparkles, Store } from "lucide-react";
import { industries } from "@/content/proBaseSolution";

const iconMap = {
  Healthcare: Heart,
  "Real Estate": Home,
  Automobile: Car,
  "Spa & Wellness": Sparkles,
  "E-Commerce": ShoppingBag,
  "Local Businesses": Store,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.08,
    },
  }),
};

const IndustryCard = ({ industry, index }) => {
  const Icon = iconMap[industry.name] || Store;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -8,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="group relative overflow-hidden rounded-[28px] border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 min-h-[280px] shadow-[0_10px_35px_rgba(109,68,250,0.10)] hover:shadow-[0_20px_55px_rgba(109,68,250,0.18)] transition-all duration-300 cursor-pointer"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-[#941DFB]/8 via-transparent to-[#265BFB]/10"
        />
      </div>

      <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#941DFB] via-[#5B5CFB] to-[#265BFB]" />

      <div className="relative p-6 md:p-7 h-full flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-700 dark:text-purple-300">
            Sector Focus
          </div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ rotate: -6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-[#941DFB] to-[#265BFB] shadow-lg"
          >
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.div>
        </div>

        <motion.h3
          whileHover={{ opacity: 0.92 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-left"
        >
          {industry.name}
        </motion.h3>

        <motion.p
          whileHover={{ opacity: 0.92 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-left flex-1 max-w-[32ch]"
        >
          {industry.detail}
        </motion.p>

        <div className="mt-8 pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400 dark:text-gray-500">
            Growth-ready
          </span>
          <div className="h-2 w-16 rounded-full bg-gradient-to-r from-[#941DFB] to-[#265BFB] opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
};

const IndustriesSection = () => {
  return (
    <section id="industries" className="w-full py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="uppercase text-xs tracking-[0.4em] text-blue-400 dark:text-gray-400 mb-3 font-medium">
            Industries
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Industries We Support
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mt-12 ">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.name} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

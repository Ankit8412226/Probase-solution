"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Globe,
  Layers,
  LifeBuoy,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { serviceCatalog } from "@/content/proBaseSolution";

const services = [
  { title: serviceCatalog[0].title, description: serviceCatalog[0].shortDescription, icon: Code2, slug: serviceCatalog[0].slug },
  { title: serviceCatalog[1].title, description: serviceCatalog[1].shortDescription, icon: Globe, slug: serviceCatalog[1].slug },
  { title: serviceCatalog[2].title, description: serviceCatalog[2].shortDescription, icon: Smartphone, slug: serviceCatalog[2].slug },
  { title: serviceCatalog[3].title, description: serviceCatalog[3].shortDescription, icon: Bot, slug: serviceCatalog[3].slug },
  { title: serviceCatalog[4].title, description: serviceCatalog[4].shortDescription, icon: ShieldCheck, slug: serviceCatalog[4].slug },
  { title: serviceCatalog[5].title, description: serviceCatalog[5].shortDescription, icon: Briefcase, slug: serviceCatalog[5].slug },
  { title: serviceCatalog[6].title, description: serviceCatalog[6].shortDescription, icon: Layers, slug: serviceCatalog[6].slug },
  { title: serviceCatalog[7].title, description: serviceCatalog[7].shortDescription, icon: LifeBuoy, slug: serviceCatalog[7].slug },
  { title: serviceCatalog[8].title, description: serviceCatalog[8].shortDescription, icon: Cloud, slug: serviceCatalog[8].slug },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesSection() {
  return (
    <section className="w-full py-16 lg:py-28" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 mb-16"
        >
          <div>
            <p className="uppercase text-xs tracking-[0.4em] text-blue-500 mb-3">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Services That Build Presence and Demand
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-lg">
            Strategy, content, campaigns, listings, and websites designed to help businesses stand out and grow online.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.slug}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(109,68,250,0.14)] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#941DFB] via-[#5B5CFB] to-[#265BFB]" />

                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-700 dark:text-purple-300">
                    Service
                  </div>

                  <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-[#941DFB] to-[#265BFB] shadow-lg group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 max-w-[14ch]">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-8 min-h-[72px]">
                  {service.description}
                </p>

                <div className="pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400 dark:text-gray-500">
                    Explore
                  </span>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Read More
                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#6F44FB] text-white transition-transform duration-300 group-hover/link:translate-x-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

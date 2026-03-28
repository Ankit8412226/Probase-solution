"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BadgePercent,
  Briefcase,
  Code2,
  Globe,
  Image as ImageIcon,
  MapPinned,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { serviceCatalog } from "@/content/proBaseSolution";

const iconMap = {
  "website-development": Code2,
  seo: Search,
  "social-media-marketing": ImageIcon,
  "paid-advertising": Megaphone,
  "google-business-profile-optimization": MapPinned,
  "e-commerce-product-listing": ShoppingBag,
  "brand-positioning": Briefcase,
  "lead-generation-campaigns": BadgePercent,
  "content-and-creative-marketing": Palette,
};

export default function ServicesSection() {
  return (
    <section className="w-full py-16 lg:py-28" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/50 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Services That Build <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Presence and Demand
              </span>
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg lg:self-end leading-relaxed">
            Strategy, content, campaigns, listings, and websites designed to help businesses stand out and grow online.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCatalog.map((service, i) => {
            const Icon = iconMap[service.slug] || Globe;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-full flex flex-col"
              >
                {/* Outer Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
                
                <div className="relative flex-1 flex flex-col bg-white/70 dark:bg-gray-950/70 backdrop-blur-2xl border border-white dark:border-gray-800 rounded-[2.5rem] p-8 shadow-xl overflow-hidden">
                  {/* Accent Gradient Border (Internal) */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-200/50 dark:border-purple-800/50 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={28} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        Service {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-auto">
                    {service.shortDescription}
                  </p>

                  <div className="pt-8 mt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white group/btn"
                    >
                      View Details
                      <AnimatePresence>
                        <motion.span 
                          className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center group-hover/btn:translate-x-1 transition-transform"
                        >
                          <ArrowUpRight size={18} />
                        </motion.span>
                      </AnimatePresence>
                    </Link>
                  </div>
                  
                  {/* Card Background Patterns */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/10 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

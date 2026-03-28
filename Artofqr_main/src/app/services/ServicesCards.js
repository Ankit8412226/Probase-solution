"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

export default function ServicesCards() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cursor-pointer">
        {serviceCatalog.map((service, i) => {
          const Icon = iconMap[service.slug] || Globe;

          return (
            <motion.article
              key={service.slug}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(109,68,250,0.14)] transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#941DFB] via-[#5B5CFB] to-[#265BFB]" />

              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-700 dark:text-purple-300">
                  Service
                </div>

                <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-[#941DFB] to-[#265BFB] shadow-lg group-hover:scale-105 transition-transform">
                  <Icon size={22} className="text-white" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-3 max-w-[14ch]">{service.title}</h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 min-h-[72px]">
                {service.shortDescription}
              </p>

              <div className="pt-5 mt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-gray-400 dark:text-gray-500">
                  Explore
                </span>

                <Link
                  href={`/services/${service.slug}`}
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white"
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
      </div>
    </section>
  );
}

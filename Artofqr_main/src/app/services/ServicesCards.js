"use client";

import Link from "next/link";
import Image from "next/image";
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

const serviceImages = {
  "website-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
  "seo": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
  "paid-advertising": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2670&auto=format&fit=crop",
  "google-business-profile-optimization": "https://images.unsplash.com/photo-1572021335469-3171624c995c?q=80&w=2670&auto=format&fit=crop",
  "e-commerce-product-listing": "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
  "brand-positioning": "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2670&auto=format&fit=crop",
  "lead-generation-campaigns": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
  "content-and-creative-marketing": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
};

export default function ServicesCards() {
  return (
    <section className="pb-32 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {serviceCatalog.map((service, i) => {
          const Icon = iconMap[service.slug] || Globe;
          const serviceImg = serviceImages[service.slug] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col h-full"
            >
              <div className="relative flex-1 flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={serviceImg}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-6 left-6 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-indigo-600 dark:bg-indigo-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                      Solution {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group/btn mt-auto"
                  >
                    View Details
                    <span className="w-10 h-10 rounded-full bg-indigo-50/50 dark:bg-slate-800 flex items-center justify-center group-hover/btn:bg-indigo-600 group-hover/btn:text-white transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

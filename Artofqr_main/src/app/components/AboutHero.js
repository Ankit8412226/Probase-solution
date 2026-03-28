"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyProfile } from "@/content/proBaseSolution";

const heroImagePath = "/download (2) 1.svg";

export default function AboutHero() {
  return (
    <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-32 overflow-hidden bg-white dark:bg-gray-950">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300 tracking-wide uppercase">Who We Are</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Driving Digital <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Excellence.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <strong>{companyProfile.name}</strong> is a dedicated team of digital marketing strategists, designers, and web developers. We exist to transform local businesses into dominant digital brands through data-driven SEO, high-converting platforms, and targeted omnichannel campaigns.
            </p>
            
            {/* Stats/Highlight Row */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center lg:items-start p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-2xl shadow-inner">
                  5+
                </div>
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-bold text-lg">Years</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Industry Experience</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-800" />
              <div className="block sm:hidden h-px w-3/4 bg-gray-200 dark:bg-gray-800" />
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-2xl shadow-inner">
                  ∞
                </div>
                <div className="text-left">
                  <div className="text-gray-900 dark:text-white font-bold text-lg">Focus</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">On ROI & Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-xl aspect-square">
              {/* Image Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[80px] rounded-full" />
              <div className="absolute inset-10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-full border border-white/50 dark:border-white/10" />
              <Image
                src={heroImagePath}
                alt={`${companyProfile.name} Team`}
                fill
                className="object-contain relative z-10 drop-shadow-2xl hover:-translate-y-3 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

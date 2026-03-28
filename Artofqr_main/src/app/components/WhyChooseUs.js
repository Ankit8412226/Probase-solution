"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Zap, Settings, TrendingUp } from "lucide-react";
import Image from "next/image";
import { whyChooseUs } from "@/content/proBaseSolution";

const icons = [BadgeCheck, TrendingUp, Settings, Zap];
const gradients = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-500",
  "from-pink-500 to-rose-400",
  "from-indigo-500 to-purple-500"
];

export default function WhyChooseUsSection() {
  const items = whyChooseUs;

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-stretch relative z-10">
        
        {/* LEFT COMPOSITE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-[400px] w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/Why choose us.png"
              alt="Why Choose Us"
              fill
              className="object-cover relative z-0"
              priority
            />
          </motion.div>
          
          {/* Floating Aesthetic Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-8 left-8 right-8 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg">Proven Frameworks</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Strategies that guarantee scalable growth.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT GRID */}
        <div className="text-center xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center xl:items-start"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300 tracking-wide uppercase">Why Choose Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-12">
              Built for <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Trust,</span> <br className="hidden sm:block" />
              Designed for <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Growth.</span>
            </h2>
          </motion.div>

          {/* Premium 2x2 Card Grid instead of Accordion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const gradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] text-center sm:text-left"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto sm:mx-0 bg-gradient-to-br ${gradient} shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

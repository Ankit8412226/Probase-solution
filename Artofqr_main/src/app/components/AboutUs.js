"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Trophy, Users, Lightbulb, Rocket } from "lucide-react";
import { companyProfile } from "@/content/proBaseSolution";

const heroImagePath = "/download (2) 1.svg";

const stats = [
  { icon: Trophy, value: "5+", label: "Core Industries Served", color: "from-amber-500 to-orange-500" },
  { icon: Lightbulb, value: "9", label: "Service Capabilities", color: "from-blue-500 to-cyan-500" },
  { icon: Users, value: "2", label: "Web + Marketing Pillars", color: "from-purple-500 to-pink-500" },
  { icon: Rocket, value: "1", label: "Growth Partner", color: "from-emerald-500 to-teal-500" }
];

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Premium Abstract Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[550px] aspect-[4/5] group">
              {/* Box background with overflow-hidden for ambient glow effects */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gray-50/50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-[80px] rounded-full scale-75" />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full relative z-20 flex items-center justify-center p-8"
              >
                <Image
                  src={heroImagePath}
                  alt={`${companyProfile.name} Team & Strategy`}
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative z-10"
                  priority
                />
              </motion.div>

              {/* Floating Glass Element (Now outside the overflow-hidden container) */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-10 right-[-10px] sm:right-[-20px] lg:right-[-30px] bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-30 hidden sm:flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-white font-bold text-xl">#1</span>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider">Digital Partner</h4>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: High Impact Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 w-max mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300 tracking-wide uppercase">Who We Are</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-8 text-gray-900 dark:text-white tracking-tight">
              A True Partner For <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Dominance.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
              <strong>{companyProfile.name}</strong> is a dedicated digital marketing and web development firm designed to help ambitious businesses capture more of their market. We fuse bespoke brand positioning with high-powered SEO, aggressive paid advertising, and conversion-optimized websites to construct a digital presence that refuses to be ignored.
            </p>

            <div className="flex justify-center flex-col sm:flex-row gap-5 lg:justify-start">
              <button
                onClick={() => router.push("/contact")}
                className="group relative px-10 py-5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* STATS ROW - Ultra Premium Grid */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 text-left overflow-hidden transition-shadow hover:shadow-2xl"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${stat.color} opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-white dark:bg-gray-950 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                  
                  <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-600 to-blue-700 shadow-2xl"
        >
          {/* Animated Background Textures */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-20 gap-12">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 mx-auto md:mx-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Strategy Session
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Need the right service mix for your business? <br className="hidden lg:block" />
                <span className="text-purple-200">Let&apos;s plan it together.</span>
              </h2>

              <p className="text-purple-50/80 text-lg mb-10 max-w-xl leading-relaxed">
                Tell us what you need help with, and we&apos;ll recommend the right combination of website, SEO, social media, ads, or local visibility support.
              </p>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Let&apos;s Talk <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="w-full md:w-2/5 flex justify-center items-center">
              <div className="relative w-full max-w-[400px]">
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20"
                 >
                    <img
                      src="/images/Service_CTA.png"
                      alt="Digital Strategist CTA"
                      className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl"
                    />
                 </motion.div>
                 
                 {/* Decorative Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

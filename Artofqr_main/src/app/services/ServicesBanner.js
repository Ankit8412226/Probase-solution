"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-950 shadow-2xl"
        >
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent scale-150" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 lg:p-20 gap-12">
            <div className="w-full md:w-3/5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 mx-auto md:mx-0">
                <Sparkles size={16} className="text-indigo-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Strategy Session
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Need the right service mix for your business? <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Let&apos;s plan it together.</span>
              </h2>

              <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
                Tell us what you need help with, and we&apos;ll recommend the right combination of website, SEO, social media, ads, or local visibility support.
              </p>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700"
              >
                Get Free Audit <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="w-full md:w-2/5 flex justify-center items-center">
              <div className="relative w-full max-w-[450px]">
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20"
                 >
                    <img
                      src="https://images.unsplash.com/photo-1600880212340-02d956ea70dc?q=80&w=2670&auto=format&fit=crop"
                      alt="Digital Strategist CTA"
                      className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl border border-white/10 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                 </motion.div>
                 
                 {/* Decorative Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesHero() {
  const router = useRouter();

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24 relative z-10">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 mb-6 shadow-sm"
          >
            <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200">
              Expert Solutions
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Complete Digital Services for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Local Business Growth</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From professional web development to targeted local SEO, we provide everything you need to dominate your local market.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="group relative flex items-center gap-2 px-8 py-4 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
              Free Audit <ArrowRight size={18} />
            </span>
          </button>
        </div>

        {/* Bento Grid Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              alt="Our Digital Team"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Our Approach</p>
              <h3 className="text-white text-3xl font-bold">Collaborative Strategy</h3>
            </div>
          </motion.div>

          {/* Right Column Bento Items */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-1/2 rounded-[2.5rem] bg-white dark:bg-gray-900 p-8 border border-gray-100 dark:border-gray-800 flex flex-col justify-between shadow-xl"
            >
              <div>
                <p className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Supported Industries</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Healthcare, Real Estate & More</h3>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">120+</span>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} alt="client" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                    +80
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sub Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="h-1/2 relative rounded-[2.5rem] overflow-hidden group shadow-xl border border-white/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                alt="Strategy Meeting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-bold text-xl">Global Reach</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

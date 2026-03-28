"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/content/proBaseSolution";

const TestimonialsMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 dark:bg-purple-900/20 border border-purple-200/50 dark:border-purple-800/50 mb-6"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-700 dark:text-purple-300">
              Trusted by 120+ Businesses
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Client Stories & <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Don&apos;t just take our word for it. Hear from businesses that have transformed their digital presence with ProBase Solution.
          </p>
        </div>

        {/* Testimonials Display */}
        {isMobile ? (
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
            
            <Marquee speed={35} pauseOnHover gradient={false}>
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="mx-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </section>
  );
};

function TestimonialCard({ testimonial }) {
  const initials = testimonial.author.split(" ").map(n => n[0]).slice(0, 2).join("");
  const avatarSeed = encodeURIComponent(testimonial.author);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative w-full md:w-[400px] h-full"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      <div className="relative h-full bg-white/10 dark:bg-white/[0.03] backdrop-blur-3xl border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between overflow-hidden">
        {/* Floating Quote Icon */}
        <div className="absolute top-6 right-8 text-purple-600/10 group-hover:text-purple-600/20 transition-colors">
          <Quote size={64} fill="currentColor" />
        </div>

        <div className="relative z-10">
          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < testimonial.rating ? "text-blue-500 fill-blue-500" : "text-gray-300 dark:text-gray-700"}
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8 italic">
            &quot;{testimonial.text}&quot;
          </p>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-gray-100/50 dark:border-white/5">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/20 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`} 
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white dark:border-gray-900 w-3.5 h-3.5 rounded-full" />
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
              {testimonial.author}
            </h4>
            <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialsMarquee;

"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { companyProfile } from "@/content/proBaseSolution";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, duration: 0.6 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const FoundersVision = () => {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 dark:from-purple-400/10 dark:via-transparent dark:to-blue-300/10 text-slate-900 dark:text-slate-50">
      <motion.div
        className="relative h-[55vh] min-h-[380px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center block dark:hidden"
          style={{
            backgroundImage: "url('/images/Founder%27s%20vision%20bg-light%20theme.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute inset-0 bg-cover bg-center hidden dark:block"
          style={{
            backgroundImage: "url('/images/Founder%27s%20vision%20bg-dark%20theme.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 hidden dark:block bg-slate-900/70" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-3xl">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Founders'
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                {" "}Vision
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-slate-700 dark:text-slate-200"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
            >
              Founded by {companyProfile.founder}, {companyProfile.name} is built around one clear goal: helping businesses grow online with practical, result-driven digital marketing and website solutions.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-20 lg:space-y-24"
        >
          <motion.section
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Building Digital Solutions <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  That Bring Business Results
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We focus on the challenges that matter most to service-led businesses: low visibility, weak digital trust, inconsistent content, and campaigns that do not convert. Our work is built to improve how a business is discovered, understood, and chosen online.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-900/15 dark:shadow-black/40">
                <Image
                  src="/Building-solutuion.svg"
                  alt="Team collaborating at whiteboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why We <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">Built This</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Many local businesses offer strong services but struggle to present themselves clearly online. We built Pro Base Solution to close that gap with digital marketing that is professional, practical, and aligned with real business growth.
            </p>
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-10">
              What <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">Drives Us</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-7 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-teal-500" />
                  <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                    Integrity
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  We believe strong client relationships are built on honesty, clear communication, and realistic execution.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-7 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-teal-500" />
                  <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                    Innovation
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  We adapt strategies creatively for each industry rather than repeating the same template for every business.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-7 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-teal-500" />
                  <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">
                    Collaboration
                  </span>
                </div>
                <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  We work closely with clients so campaigns, websites, and content stay aligned with the business they are trying to grow.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center"
          >
            <div className="flex justify-center order-1 lg:order-none">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-slate-900/15 dark:shadow-black/40">
                <Image
                  src="/Looking ahead.svg"
                  alt="Looking ahead"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight">
                Looking Ahead
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We want to keep helping more businesses move from being digitally present to being digitally effective. That means sharper strategy, stronger creative, better local visibility, and websites that support measurable growth.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="pb-4">
            <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/70 px-6 sm:px-10 py-10 sm:py-12 text-center shadow-sm border border-slate-200/80 dark:border-slate-800">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Build Your Next <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">Growth Step</span>
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                If your business needs stronger digital visibility, better campaigns, or a sharper online presence, let&apos;s plan the right move.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="group relative mt-6 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                  Talk To Us
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersVision;

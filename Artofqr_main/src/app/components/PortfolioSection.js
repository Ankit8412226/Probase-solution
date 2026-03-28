"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const exampleImages = [
  "/portfolio-pbs/portfolio-page-04.pdf.png",
  "/portfolio-pbs/portfolio-page-05.pdf.png",
  "/portfolio-pbs/portfolio-page-06.pdf.png",
  "/portfolio-pbs/portfolio-page-07.pdf.png",
  "/portfolio-pbs/portfolio-page-08.pdf.png",
];

const caseStudies = [
  {
    title: "Healthcare Portfolio Snapshot",
    year: "Pro Base Solution Portfolio",
    subtitle: "Clinic branding, patient lead generation, Google Business Profile optimization, and social media support for healthcare businesses.",
    image: exampleImages[0],
  },
  {
    title: "Real Estate Marketing Portfolio",
    year: "Pro Base Solution Portfolio",
    subtitle: "Website development, social media promotion, and local property marketing strategies for real estate brands.",
    image: exampleImages[1],
  },
  {
    title: "Spa & Wellness Campaign Portfolio",
    year: "Pro Base Solution Portfolio",
    subtitle: "Brand positioning, Instagram branding, and local search support for premium spa and wellness businesses.",
    image: exampleImages[2],
  },
  {
    title: "Automobile & E-Commerce Promotions",
    year: "Pro Base Solution Portfolio",
    subtitle: "Campaign creatives, social branding, and product promotion support for tyre, motor, and e-commerce businesses.",
    image: exampleImages[3],
  },
  {
    title: "Results & Outcomes Snapshot",
    year: "Pro Base Solution Portfolio",
    subtitle: "A visual summary of better online visibility, stronger local rankings, improved engagement, and lead generation impact.",
    image: exampleImages[4],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PortfolioSection() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push("/portfolio");
  };

  return (
    <section id="work" className="w-full py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className="uppercase text-xs tracking-[0.4em] text-blue-500 dark:text-blue-400 mb-4">Work Showcase</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
            Case Studies & Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Portfolio visuals taken directly from the Pro Base Solution presentation material.
          </p>
        </motion.div>

        {/* Cards carousel/grid */}
        <div className={`${
          caseStudies.length > 3
            ? "flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        }`}>
          {caseStudies.map((study, idx) => (
            <motion.article
              key={study.title + idx}
              className={`rounded-2xl bg-white dark:bg-gray-900 shadow-md dark:shadow-none overflow-hidden snap-start ${
                caseStudies.length > 3 ? "flex-shrink-0 w-[340px] md:w-[380px]" : ""
              }`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
            >
              {/* Image top */}
              <div className="relative w-full aspect-[16/10] md:aspect-[12/7]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content area */}
              <div className="p-6 bg-white dark:bg-gray-50/0">
                {/* small meta (year / studio) */}
                <div className="text-xs text-gray-500 mb-2">{study.year}</div>

                {/* Title - clamp to 2 lines with ellipsis */}
                <h3
                  className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {study.title}
                </h3>

                {/* subtitle / short description - clamp to 3 lines */}
                <p
                  className="mt-3 text-gray-600 dark:text-gray-300 text-sm"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {study.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all button center */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleViewAll}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 text-white px-6 py-3 font-semibold shadow-lg hover:brightness-105 transition cursor-pointer"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

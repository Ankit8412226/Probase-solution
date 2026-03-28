"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, Plus, Send } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/content/proBaseSolution";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center">
          {/* FAQ Column */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Common questions about our digital marketing and website services to help you understand how we work.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex justify-between items-center w-full p-6 text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                      {item.question}
                    </span>
                    <span className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                      <Plus className="text-purple-600" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { companyProfile } from "@/content/proBaseSolution";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.data.success) {
        setSubmitStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.error || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30">
              <MessageSquare size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              Ready for <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Digital Growth?</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Share your business goals, campaign needs, or website requirements and we&apos;ll build the perfect strategy for you.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Contact Info Bento Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Phone Card */}
            <div className="group bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-colors duration-500" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{companyProfile.phones.join(" | ")}</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors duration-500" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Email</h4>
                  <a
                    href={`mailto:${companyProfile.email}`}
                    className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {companyProfile.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-gray-50/80 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-600/20 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-colors duration-500" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">Office Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    {companyProfile.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Ambient Shadow for Form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-[2.5rem] blur-2xl transform translate-y-4 -z-10" />

            <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 p-8 sm:p-10 lg:p-12 rounded-[2.5rem] shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="text-gray-900 dark:text-white font-semibold text-sm mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="
                      w-full px-5 py-4 rounded-xl
                      bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-600 font-medium
                      focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 focus:border-transparent transition-all
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-900 dark:text-white font-semibold text-sm mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="
                      w-full px-5 py-4 rounded-xl
                      bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-600 font-medium
                      focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 focus:border-transparent transition-all
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-900 dark:text-white font-semibold text-sm mb-2 block">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your business, service requirement, or campaign goal..."
                    required
                    className="
                      w-full px-5 py-4 rounded-xl resize-none
                      bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white
                      placeholder-gray-400 dark:placeholder-gray-600 font-medium
                      focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 focus:border-transparent transition-all
                    "
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm font-semibold border ${
                      submitStatus.type === "success"
                        ? "bg-green-50/80 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                        : "bg-red-50/80 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <div className="pt-2">
                  {/* PRESERVED USER BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full py-4 rounded-xl text-white font-semibold cursor-pointer
                      bg-gradient-to-r from-purple-600 to-fuchsia-500
                      hover:from-purple-700 hover:to-fuchsia-600
                      transition shadow-[0_0_25px_rgba(180,50,255,0.4)]
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

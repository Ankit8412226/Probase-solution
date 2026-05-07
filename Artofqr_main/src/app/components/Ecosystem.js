"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Search, 
  ImageIcon, 
  Globe, 
  Megaphone, 
  MapPinned, 
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  Target,
  Rocket
} from "lucide-react";

const SERVICES = [
  {
    id: "seo",
    title: "SEO Mastery",
    description: "Scale your organic reach with data-driven keyword strategies and technical precision.",
    icon: Search,
    color: "bg-blue-500",
    shadow: "shadow-blue-200",
    impact: "+320% Traffic",
    tags: ["Keywords", "Backlinks"]
  },
  {
    id: "social",
    title: "Social Growth",
    description: "Build a loyal community with viral reel strategies and high-impact storytelling.",
    icon: ImageIcon,
    color: "bg-pink-500",
    shadow: "shadow-pink-200",
    impact: "1M+ Reach",
    tags: ["Reels", "Community"]
  },
  {
    id: "web",
    title: "High-Perf Web",
    description: "Conversion-optimized landing pages and business sites built on modern tech stacks.",
    icon: Globe,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-200",
    impact: "Ultra-Fast",
    tags: ["Next.js", "UX/UI"]
  },
  {
    id: "ads",
    title: "Precision Ads",
    description: "Hyper-targeted Meta and Google campaigns designed for maximum ROI and lead flow.",
    icon: Megaphone,
    color: "bg-amber-500",
    shadow: "shadow-amber-200",
    impact: "7x ROAS",
    tags: ["PPC", "Meta Ads"]
  },
  {
    id: "maps",
    title: "Map Authority",
    description: "Dominate local search and secure the top spot in Google Map packs for your city.",
    icon: MapPinned,
    color: "bg-indigo-500",
    shadow: "shadow-indigo-200",
    impact: "#1 Ranking",
    tags: ["GBP", "Reviews"]
  },
  {
    id: "retail",
    title: "E-Com Scale",
    description: "Dominate Amazon and Flipkart marketplaces with optimized catalogs and scaling logic.",
    icon: ShoppingBag,
    color: "bg-rose-500",
    shadow: "shadow-rose-200",
    impact: "Global Sale",
    tags: ["FBA", "Catalog"]
  }
];

export default function Ecosystem() {
  const router = useRouter();

  return (
    <section className="relative py-24 md:py-32 bg-gray-50/50 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Refined Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>Growth Ecosystem</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Our Digital Growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Ecosystem
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            We don't just provide services; we build interconnected growth systems that amplify your brand's authority and revenue.
          </p>
        </div>

        {/* Clean Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => router.push('/services')}
              >
                {/* Icon Container */}
                <div className={`inline-flex p-4 rounded-2xl ${service.color} ${service.shadow} text-white mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md">
                    {service.impact}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light">
                  {service.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                  <div className="flex gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium text-gray-500 bg-gray-100/50 px-2 py-0.5 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                {/* Decorative background shine */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gray-50 rounded-full group-hover:scale-[3] transition-transform duration-700 opacity-50" />
              </motion.div>
            );
          })}
        </div>

        {/* Improved CTA Placement */}
        <div className="mt-24 text-center">
          <div className="inline-block p-1 rounded-3xl bg-gray-100 mb-8">
            <div className="flex items-center gap-6 px-6 py-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Scaling <span className="text-gray-900 font-bold">500+</span> Brands Weekly
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
            className="group relative flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg shadow-2xl hover:bg-blue-600 transition-all duration-300 mx-auto"
          >
            <Target className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Launch Your Campaign</span>
            <Rocket className="w-5 h-5 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}




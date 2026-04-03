"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionBackground, CardGlow, CardDotPattern } from "./BackgroundEffects";

export default function Features() {
  const features = [
    { title: "Award-Winning Methods", text: "Get access to our award-winning facility planning methodologies that drive results." },
    { title: "Tailored Solutions", text: "Custom development solutions designed specifically for your enterprise needs." },
    { title: "Expert Logistics", text: "Grow with confidence using our expert logistics and supply chain consulting." },
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-[#FAFAFA]">
      <SectionBackground className="opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 mb-6"
          >
            <span className="text-sm font-medium text-blue-600">Key Benefits</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6"
          >
            Discover how Bouma USA can transform your operations
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group relative p-8 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.08)] transition-all duration-300 border border-gray-100 hover:border-purple-100"
            >
              <CardGlow />
              <CardDotPattern />
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="relative z-10 text-gray-500 font-light leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

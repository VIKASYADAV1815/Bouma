"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const testimonials = [
  {
    content: "We had already tried other partners and the experience had not been positive. Their logistics and consulting expertise completely changed our trajectory.",
    author: "Lance Mekhi Staves",
    role: "Operations Director",
    company: "Bouma USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
  },
  {
    content: "A masterclass in digital execution. They unified our fragmented legacy systems into a seamless, high-performance architecture.",
    author: "Elena Rodriguez",
    role: "Head of Product",
    company: "Nexus",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop"
  },
  {
    content: "The interface is not just beautiful, it's functional. We saw a 40% increase in user engagement within the first month.",
    author: "Marcus Chen",
    role: "Lead Architect",
    company: "Vektor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  }
];

export default function PremiumTestimonials() {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-350 mx-auto px-6">
        
        {/* Minimalist Tech Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-16 border-b border-gray-200 pb-10">
          <div className="bg-blue-600 px-3 py-1 rounded-sm">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">SEC.04</span>
          </div>
          <h2 className="text-4xl font-light text-gray-900 tracking-tighter uppercase">
            User <span className="font-bold">Validation</span>
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gray-200" />
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Global Operations / 2026</p>
        </div>

        {/* The Grid - Now showing multiple cards clearly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 border border-gray-200 hover:z-10 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Corner Accent - Porsche / Leica Style */}
              <div className="absolute top-0 left-0 w-8 h-px bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-px h-8 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Rating Dots (More Industrial than Stars) */}
              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600 transition-colors" />
                ))}
              </div>

              {/* Quote Body */}
              <div className="min-h-40 mb-12">
                <p className="text-xl text-gray-800 font-medium leading-relaxed tracking-tight">
                  “{item.content}”
                </p>
              </div>

              {/* Footer / Avatar Info */}
              <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                <div className="relative">
                  {/* Avatar Animation: Pulsing Ring */}
                  <div className="absolute -inset-1 border border-blue-600/0 rounded-full group-hover:border-blue-600/20 group-hover:scale-110 transition-all duration-700" />
                  <img 
                    src={item.image} 
                    className="w-12 h-12 rounded-full object-cover filter saturate-[0.8] group-hover:saturate-[1.2] transition-all"
                    alt={item.author} 
                  />
                </div>
                
                <div>
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-tight">{item.author}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{item.company}</span>
                    <Plus className="w-2 h-2 text-gray-300" />
                    <span className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">{item.role}</span>
                  </div>
                </div>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                    <Plus className="w-3 h-3 text-gray-400" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

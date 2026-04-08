"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
];

export default function MockupCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-6xl mt-12 mb-20 -translate-y-4">
      {/* Glow Behind Mockup */}
      <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-[3rem] -z-10" />
      
      {/* Mockup Frame */}
      <div className="rounded-4xl border border-white/60 bg-white/50 backdrop-blur-xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative z-10">
        
        {/* Browser Top Bar */}
        <div className="bg-gray-50/80 border-b border-gray-200/50 px-4 py-3 flex items-center gap-2 backdrop-blur-sm">
          <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
          <div className="mx-auto flex-1 max-w-md bg-white rounded-md h-6 border border-gray-200 flex items-center px-3 justify-center shadow-sm">
            <span className="text-[10px] text-gray-400 font-medium tracking-wide">boumaholdings.com</span>
          </div>
          <div className="w-16" /> {/* Spacer to balance dots */}
        </div>

        {/* Carousel Content */}
        <div className="relative w-full h-95 md:h-162.5 bg-gray-100 overflow-hidden rounded-b-4xl">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Facility Showcase"
            />
          </AnimatePresence>
          
          {/* Subtle Inner Shadow overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroBackground } from "./BackgroundEffects";
import MockupCarousel from "./MockupCarousel";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-24 overflow-hidden min-h-screen flex flex-col justify-center bg-transparent">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-pink-100 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-600">Premium logistics for less manual work</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-gray-900 leading-[1.1]"
          >
            Facility Planning & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-orange-400">Development</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Boost your business efficiency with our specialized solutions, designed to streamline operations and maximize ROI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 justify-center px-7 py-3 md:px-8 md:py-3.5 text-[14px] md:text-[15px] font-medium text-white transition-all duration-300 bg-linear-to-r from-purple-500 to-orange-400 rounded-full hover:shadow-lg hover:shadow-orange-500/20 w-full sm:w-auto group whitespace-nowrap"
            >
              Get Instant Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3 md:px-8 md:py-3.5 text-[14px] md:text-[15px] font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm w-full sm:w-auto whitespace-nowrap"
            >
              Request a Demo
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-16 lg:mt-16"
        >
          <MockupCarousel />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { HeroBackground } from "@/components/BackgroundEffects";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] text-gray-900 selection:bg-orange-200">
      <Navbar />
      
      <div className="relative pt-32 lg:pt-48 overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Get in <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
              We’re here to help you scale your facility planning and logistics. Reach out to Bouma USA directly.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-14 relative mx-auto w-full max-w-6xl"
          >
            <div className="rounded-4xl border border-white/60 bg-white/50 backdrop-blur-xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                alt="Support Team" 
                className="w-full h-105 md:h-140 lg:h-155 object-cover object-center rounded-3xl border border-white/50 opacity-95"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-3xl border border-gray-300 border-dashed shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 text-gray-700 border border-gray-200">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">HQ Address</h3>
              <p className="text-sm text-gray-500">7619 Military pkwy Apt 73<br/>Dallas, Tx 75227</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-300 border-dashed shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 text-gray-700 border border-gray-200">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
              <p className="text-sm text-gray-500">945-396-9291</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-300 border-dashed shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 text-gray-700 border border-gray-200">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-sm text-gray-500 break-all">info@boumaholdings.com</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-300 border-dashed shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 text-gray-700 border border-gray-200">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
              <p className="text-sm text-gray-500">Mon-Fri: 9AM - 6PM<br/>CST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Embed the existing Contact Form Component below the cards */}
      <div className="-mt-32">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

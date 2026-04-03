"use client";

import { motion } from "framer-motion";
import { HardHat, Truck, MapPin, BarChart3, Settings, Users } from "lucide-react";
import { SectionBackground, CardGlow, CardDotPattern } from "./BackgroundEffects";

export default function Services() {
  const services = [
    {
      title: "Facility Planning",
      description: "Optimize space and prepare for future expansion with our comprehensive strategies.",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Development Solutions",
      description: "End-to-end development oversight ensuring projects are delivered perfectly.",
      icon: <HardHat className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Logistics Consulting",
      description: "Streamline supply chains and distribution networks for maximum performance.",
      icon: <Truck className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "Operational Strategy",
      description: "Custom strategies tailored to align your facility's operations with your goals.",
      icon: <Settings className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <SectionBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50"
            >
              <span className="text-sm font-medium text-blue-600">Our Services</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900"
            >
              Complete solutions to maximize your investment
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 mt-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team" 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-32">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#FAFAFA]/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:border-orange-100 hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(255,165,0,0.08)] transition-all duration-300 group relative overflow-hidden"
                >
                  <CardGlow />
                  <CardDotPattern />
                  <div className="relative z-10 mb-6 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-500 leading-relaxed font-light mb-6 text-[15px]">
                    {service.description}
                  </p>
                  <a href="#contact" className="relative z-10 text-orange-500 font-medium text-sm inline-flex items-center hover:underline underline-offset-4">
                    Learn more <span className="ml-1 text-lg leading-none">&rsaquo;</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

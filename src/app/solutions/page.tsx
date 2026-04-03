"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroBackground, CardDotPattern, SectionBackground } from "@/components/BackgroundEffects";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, BarChart3, Shield, Users, Globe, TrendingUp, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      id: 1,
      title: "Automated Quoting",
      description: "AI-powered quoting system that generates accurate logistics quotes in seconds.",
      icon: "1",
      color: "from-orange-400 to-pink-500",
      features: [
        "Instant quote generation",
        "99% accuracy rate",
        "Multi-carrier support",
        "API integration ready",
        "Custom pricing rules"
      ],
      impact: "Reduce turnaround time from hours to seconds"
    },
    {
      id: 2,
      title: "Smart Tracking",
      description: "Real-time supply chain visibility with predictive analytics and alerts.",
      icon: "2",
      color: "from-purple-500 to-blue-500",
      features: [
        "Real-time GPS tracking",
        "Predictive delays",
        "Automated alerts",
        "Historical analytics",
        "Mobile app access"
      ],
      impact: "Proactively prevent delays before they happen"
    },
    {
      id: 3,
      title: "Route Optimization",
      description: "AI-driven route planning that reduces fuel costs and delivery times.",
      icon: "3",
      color: "from-emerald-400 to-teal-500",
      features: [
        "Dynamic routing",
        "Real-time optimization",
        "Traffic awareness",
        "Cost analysis",
        "Emission tracking"
      ],
      impact: "Save up to 30% on fuel and reduce delivery times"
    },
    {
      id: 4,
      title: "Compliance Hub",
      description: "Automated compliance management for regulatory requirements and documentation.",
      icon: "4",
      color: "from-pink-400 to-rose-500",
      features: [
        "Automated documentation",
        "Regulatory compliance",
        "Audit trails",
        "Digital signatures",
        "Multi-jurisdiction support"
      ],
      impact: "Stay compliant and reduce paperwork by 80%"
    },
    {
      id: 5,
      title: "Analytics Platform",
      description: "Comprehensive business intelligence and data-driven insights.",
      icon: "5",
      color: "from-blue-400 to-indigo-500",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reports",
        "Benchmarking",
        "Trend analysis"
      ],
      impact: "Make data-driven decisions with actionable insights"
    },
    {
      id: 6,
      title: "Team Collaboration",
      description: "Unified platform for seamless team coordination and communication.",
      icon: "6",
      color: "from-cyan-400 to-sky-500",
      features: [
        "Centralized hub",
        "Task management",
        "Document sharing",
        "Video conferencing",
        "Integration ready"
      ],
      impact: "Improve team productivity by 40%"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Lightning Fast",
      description: "Process quotes, orders, and shipments in real-time with our AI-powered engine."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Enterprise Secure",
      description: "Bank-level encryption and compliance with international security standards."
    },
    {
      icon: <Users className="w-6 h-6 text-pink-500" />,
      title: "Dedicated Support",
      description: "24/7 expert support team ready to assist with onboarding and optimization."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Global Scale",
      description: "Support for 150+ countries and 1000+ shipping carriers worldwide."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      title: "ROI Proven",
      description: "Average client sees 35% reduction in costs within first 6 months."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
      title: "Analytics Ready",
      description: "Deep insights and reporting to optimize every aspect of operations."
    }
  ];

  const stats = [
    { value: "99%", label: "Quote Accuracy", icon: "✓" },
    { value: "30%", label: "Cost Reduction", icon: "📉" },
    { value: "24/7", label: "Support", icon: "⏰" },
    { value: "150+", label: "Countries", icon: "🌍" }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-gray-900 selection:bg-orange-200">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="text-sm font-semibold text-orange-600 tracking-wide">Intelligent Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              AI-Powered <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Solutions</span> for Modern Logistics
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Comprehensive, AI-powered tools and strategies designed to reduce manual work, scale your enterprise, and drive sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-14 relative mx-auto w-full max-w-6xl"
          >
            <div className="rounded-4xl border border-white/60 bg-white/50 backdrop-blur-xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop" 
                alt="Logistics Solutions" 
                className="w-full h-105 md:h-140 lg:h-155 object-cover object-center rounded-3xl border border-white/50 opacity-95"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Complete Suite of <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              From quoting to compliance, we have the tools to transform your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group"
              >
                <CardDotPattern />
                
                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl text-white font-bold text-xl mb-6 bg-linear-to-br ${solution.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-orange-400 group-hover:to-purple-500 transition-all">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 font-light leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-6 p-4 bg-linear-to-r from-orange-50 to-purple-50 rounded-lg border border-orange-100">
                    <p className="text-sm font-semibold text-gray-900">
                      ✨ <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">{solution.impact}</span>
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600 group/link">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Bouma USA?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We combine cutting-edge technology with expert consulting to deliver results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group"
              >
                <div className="mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 origin-left">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 to-purple-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Operations?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Join leading logistics companies using Bouma USA solutions to optimize their operations and scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-linear-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-full hover:shadow-[0_10px_30px_-5px_rgba(255,165,0,0.3)] transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="tel:+17139197313"
                className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full border border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

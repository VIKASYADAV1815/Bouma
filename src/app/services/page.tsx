"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroBackground, CardDotPattern, SectionBackground } from "@/components/BackgroundEffects";
import { HardHat, Truck, MapPin, Settings, BarChart3, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Facility Planning",
      description: "Strategic facility planning services that optimize space utilization and prepare infrastructure for future growth.",
      icon: <MapPin className="w-7 h-7" />,
      color: "from-orange-400 to-orange-500",
      benefits: [
        "Comprehensive space audits",
        "Growth capacity planning",
        "Cost optimization analysis",
        "Expansion strategy",
        "Layout optimization"
      ],
      details: "Our facility planning experts analyze your current infrastructure and develop comprehensive strategies to optimize space usage, reduce operational costs, and prepare for future expansion. We combine industry best practices with modern technology."
    },
    {
      id: 2,
      title: "Development Solutions",
      description: "End-to-end project management and development oversight for seamless execution.",
      icon: <HardHat className="w-7 h-7" />,
      color: "from-purple-400 to-purple-500",
      benefits: [
        "Project management",
        "Quality assurance",
        "Timeline tracking",
        "Budget management",
        "Team coordination"
      ],
      details: "We provide complete oversight of your development projects, from initial planning through final delivery. Our team ensures quality, adherence to timelines, and budget compliance through proven project management methodologies."
    },
    {
      id: 3,
      title: "Logistics Consulting",
      description: "Streamline supply chains and optimize distribution networks for maximum efficiency.",
      icon: <Truck className="w-7 h-7" />,
      color: "from-blue-400 to-blue-500",
      benefits: [
        "Supply chain optimization",
        "Distribution network design",
        "Route optimization",
        "Cost reduction",
        "Performance metrics"
      ],
      details: "Transform your logistics operations with our advanced consulting services. We analyze your current supply chain, identify inefficiencies, and implement data-driven solutions that reduce costs while improving delivery performance."
    },
    {
      id: 4,
      title: "Operational Strategy",
      description: "Custom strategies tailored to align your facility operations with business objectives.",
      icon: <Settings className="w-7 h-7" />,
      color: "from-pink-400 to-pink-500",
      benefits: [
        "Strategy development",
        "Process optimization",
        "Performance metrics",
        "Change management",
        "Continuous improvement"
      ],
      details: "Develop a winning operational strategy with our expert consultants. We help you align processes, systems, and people to achieve your business goals while maintaining operational excellence and employee engagement."
    },
    {
      id: 5,
      title: "Business Analysis",
      description: "Data-driven insights and recommendations to drive informed business decisions.",
      icon: <BarChart3 className="w-7 h-7" />,
      color: "from-emerald-400 to-emerald-500",
      benefits: [
        "Market analysis",
        "Competitive benchmarking",
        "Financial modeling",
        "Risk assessment",
        "Growth opportunities"
      ],
      details: "Leverage our business intelligence capabilities to understand market trends, benchmark against competitors, and identify growth opportunities. We provide comprehensive analysis to support strategic decision-making."
    },
    {
      id: 6,
      title: "Team Development",
      description: "Training and development programs to build high-performing teams.",
      icon: <Users className="w-7 h-7" />,
      color: "from-cyan-400 to-cyan-500",
      benefits: [
        "Leadership training",
        "Skills development",
        "Team building",
        "Culture development",
        "Performance coaching"
      ],
      details: "Build and empower your team with our comprehensive development programs. From leadership training to technical skills development, we help create a culture of excellence and continuous improvement."
    }
  ];

  const process = [
    { step: 1, title: "Discover", description: "We understand your business, challenges, and goals" },
    { step: 2, title: "Analyze", description: "Deep analysis of current state and opportunities" },
    { step: 3, title: "Plan", description: "Custom strategy and implementation roadmap" },
    { step: 4, title: "Execute", description: "Hands-on support through implementation" },
    { step: 5, title: "Optimize", description: "Continuous monitoring and refinement" }
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
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="text-sm font-semibold text-orange-600 tracking-wide">Premium Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Services</span> for Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Bouma USA delivers expert consulting across facility planning, logistics, operations, and team development to drive measurable business results.
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" 
                alt="Facility Planning" 
                className="w-full h-105 md:h-140 lg:h-155 object-cover object-center rounded-3xl border border-white/50 opacity-95"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 hover:border-gray-200 transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]"
              >
                <CardDotPattern />
                
                {/* Background gradient */}
                <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
                     style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-white bg-linear-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-orange-400 group-hover:to-purple-500 transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-orange-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a href="#contact" className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600 group/link">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <span className="text-sm font-semibold text-purple-600 tracking-wide">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How We <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Deliver Results</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Our proven five-step process ensures every engagement delivers maximum value and lasting impact.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] right-0 h-1 bg-linear-to-r from-orange-300 to-purple-300 opacity-30" />
                )}

                <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:border-orange-100 hover:shadow-[0_10px_30px_-10px_rgba(255,165,0,0.1)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-purple-500 text-white font-bold flex items-center justify-center mb-6 mx-auto relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{item.description}</p>
                </div>
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
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Business?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Let’s discuss how our services can drive growth and efficiency for your organization. Contact our team today.
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
                Call Us: 713-919-7313
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

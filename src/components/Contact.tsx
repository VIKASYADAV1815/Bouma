"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User, Send } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      icon: User,
      title: "Point of Contact",
      description: "Lance Mekhi Staves",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      description: "7619 Military pkwy Apt 73\nDallas, TX 75227",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "(945) 396-9291",
      href: "tel:+19453969291",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      icon: Mail,
      title: "Email",
      description: "info@boumaholdings.com",
      href: "mailto:info@boumaholdings.com",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-950 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-purple-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Have questions about our services? Reach out and our team will respond within 24 hours.
          </p>
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`${item.bgColor} rounded-xl p-4 hover:shadow-md transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <IconComponent className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`${item.color} font-medium text-xs hover:opacity-80 transition-opacity underline decoration-transparent hover:decoration-current underline-offset-2 break-all`}
                        >
                          {item.description}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium text-xs leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-gray-100/50 p-8 shadow-lg hover:shadow-xl hover:border-orange-100/50 transition-all duration-300"
          >
            <form className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2 group/input">
                  <label htmlFor="firstName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-medium text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:bg-white transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2 group/input">
                  <label htmlFor="lastName" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    required
                    className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-medium text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:bg-white transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2 group/input">
                <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-medium text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:bg-white transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Company Field */}
              <div className="space-y-2 group/input">
                <label htmlFor="company" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company"
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-medium text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:bg-white transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2 group/input">
                <label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Project Details
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 font-medium text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:bg-white transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                className="w-full bg-linear-to-r from-orange-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center gap-2 group/btn mt-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </motion.button>

              <p className="text-xs text-gray-500 text-center font-medium">
                We'll respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-500/10 to-purple-600/10 rounded-xl border border-orange-200/30 p-8 text-center"
        >
          <p className="text-gray-700 font-medium mb-4">
            Prefer a quick conversation?
          </p>
          <a
            href="tel:+19453969291"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            (945) 396-9291
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-3 left-3 right-3 md:left-8 md:right-8 z-50 transition-all duration-500 max-w-7xl mx-auto rounded-full ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] py-1" 
          : "bg-transparent py-2 sm:py-3"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-purple-500 flex items-center justify-center shadow-md group-hover:shadow-orange-500/20 transition-all">
                <span className="text-white font-bold text-lg tracking-tighter">B</span>
              </div> */}
              <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-orange-500 transition-colors">Bouma USA</span>
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-2 bg-gray-50/50 backdrop-blur-md rounded-full p-1 border border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 hover:bg-white px-5 py-2 rounded-full text-[14px] font-medium transition-all shadow-sm shadow-transparent hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex shrink-0 items-center gap-4">
            <a
              href="#contact"
              className="bg-gray-900 text-white px-6 py-2 rounded-full text-[14px] font-medium hover:bg-gray-800 transition-colors shadow-md hover:shadow-gray-900/20"
            >
              Get Started
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="md:hidden absolute top-[calc(100%+10px)] left-0 right-0 bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-2xl rounded-3xl overflow-hidden p-4"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 px-4 py-3.5 rounded-2xl text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <Link
              href="#contact"
              className="text-white block px-4 py-3.5 rounded-2xl text-base font-medium bg-blue-600 text-center shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Get started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

"use client";
import { SectionBackground } from "./BackgroundEffects";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#fdfaf8] border-t border-gray-200 pt-20 pb-10 overflow-hidden">
      <SectionBackground className="opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-orange-400 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg tracking-tighter">B</span>
              </div> */}
              <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-orange-500 transition-colors">Bouma USA</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed font-light">
              Premium facility planning, development solutions, and expert logistics consulting. Based in the USA, delivering excellence globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Services</a>
              </li>
              <li>
                <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Testimonials</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors font-light">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} Bouma USA. All rights reserved.
          </p>
          <div className="flex gap-4">
            <p className="text-gray-400 text-sm font-light">
              Lance Mekhi Staves • Dallas, TX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

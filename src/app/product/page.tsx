import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroBackground, CardDotPattern } from "@/components/BackgroundEffects";
import { ShieldCheck, Truck, Globe, Cpu } from "lucide-react";

export default function ProductPage() {
  const features = [
    {
      title: "Global Logistics Tracking",
      description: "Monitor shipments worldwide with precise, real-time GPS integration and predictive arrival models.",
      icon: <Globe className="w-6 h-6 text-orange-500" />
    },
    {
      title: "AI-Powered Dispatch",
      description: "Our proprietary AI agents automatically find the most efficient routing, saving up to 30% in fuel costs.",
      icon: <Cpu className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Compliance & Security",
      description: "End-to-end encrypted documentation ensuring full regulatory compliance across international borders.",
      icon: <ShieldCheck className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Fleet Management",
      description: "Centralized dashboard for tracking vehicle health, maintenance schedules, and driver performance.",
      icon: <Truck className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#fdfaf8] text-gray-900 selection:bg-orange-200">
      <Navbar />
      
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-orange-100 mb-6 shadow-sm">
              <span className="text-sm font-semibold text-orange-500 tracking-wide">Next-Gen Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              The core of modern <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-orange-400">Logistics & Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto">
              Bouma USA provides an elite suite of tools designed specifically for advanced facility planning and complex supply chain management.
            </p>
          </div>

          <div className="mt-10 md:mt-12 relative mx-auto w-full max-w-6xl">
            <div className="rounded-4xl border border-white/60 bg-white/50 backdrop-blur-xl p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" 
                alt="Product Dashboard Preview" 
                className="w-full h-105 md:h-140 lg:h-155 object-cover object-center rounded-3xl border border-white/50 opacity-95"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-4xl border border-gray-100 hover:border-orange-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] group transition-all duration-300 hover:shadow-orange-500/10 hover:-translate-y-1 relative overflow-hidden">
                <CardDotPattern />
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-linear-to-r from-orange-400 to-purple-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-500/20">
             <CardDotPattern />
             <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to transform your facility?</h2>
             <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
               Join industry leaders who trust Bouma USA for their logistics and planning needs.
             </p>
             <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-lg relative z-10">
               Get Started Today
             </a>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

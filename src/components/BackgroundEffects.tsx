"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center bg-[#fdfaf8]">
      {/* Central Diagonal Glowing Blobs matching the new reference (Soft Pink, Orange, Peach, and light purple) */}
      <div className="absolute top-[-20%] w-full max-w-[1600px] h-[1000px] opacity-90 transform -rotate-12 origin-center">
        <div className="absolute top-[20%] left-[5%] w-[800px] h-[500px] bg-[#ffd6e0]/60 rounded-[100%] blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[400px] bg-[#ffe1c2]/60 rounded-[100%] blur-[120px] mix-blend-multiply transform rotate-45" />
        <div className="absolute top-[40%] left-[25%] w-[900px] h-[500px] bg-[#f4d9ff]/50 rounded-[100%] blur-[140px] mix-blend-multiply transform -rotate-12" />
        <div className="absolute top-[50%] right-[20%] w-[600px] h-[400px] bg-[#fff0d4]/50 rounded-[100%] blur-[100px] mix-blend-multiply transform rotate-12" />
      </div>

      {/* Large White Grid Pattern Over the Blobs */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:100px_100px] mix-blend-overlay" 
      />
    </div>
  );
}

export function SectionBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#fdfaf8] ${className}`}>
      {/* Diagonal background blobs for other sections */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[500px] bg-[#ffd6e0]/40 rounded-[100%] blur-[140px] mix-blend-multiply transform -rotate-12" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[400px] bg-[#ffe1c2]/40 rounded-[100%] blur-[140px] mix-blend-multiply transform rotate-12" />
      <div className="absolute top-[30%] left-[50%] w-[600px] h-[400px] bg-[#f4d9ff]/40 rounded-[100%] blur-[120px] mix-blend-multiply transform -rotate-45" />
    </div>
  );
}

export function CardGlow() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(255,214,224,0.15)_0%,transparent_70%)]" />
    </div>
  );
}

export function CardDotPattern() {
  return (
    <div 
      className="absolute top-0 right-0 w-full h-64 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
      style={{ 
        backgroundImage: 'radial-gradient(#9ca3af 1.5px, transparent 1.5px)', 
        backgroundSize: '16px 16px',
        maskImage: 'linear-gradient(to bottom left, black, transparent 80%)',
        WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 80%)'
      }} 
    />
  );
}

import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Bouma USA | Premium Facility Planning & Logistics",
  description: "Bouma USA is a U.S.-based company specializing in facility planning, development solutions, logistics, and consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-slate-900 font-sans relative">
        {/* Global Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        {children}
      </body>
    </html>
  );
}

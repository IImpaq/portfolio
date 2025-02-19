"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/common/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-bg)] relative min-h-screen`}
      >
        {/* Background Pattern */}
        <motion.div
          className="fixed inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--color-fg) 2px, transparent 0)",
            backgroundSize: "32px 32px",
            y: backgroundY,
          }}
        />
        <Navigation />
        <div className="relative pt-20">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

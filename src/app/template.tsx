"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 2000], [-200, 200]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="fixed inset-0 w-full h-screen opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, var(--color-fg) 2px, transparent 0)",
          backgroundSize: "32px 32px",
          y: backgroundY,
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
          minHeight: "200vh",
          top: "-50vh",
          transform: "translateZ(0)",
        }}
      />
      <div className="relative z-10">
        <Navigation />
        <div className="flex flex-col min-h-screen pt-20">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <>
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
      <div className="flex flex-col min-h-screen pt-20">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}

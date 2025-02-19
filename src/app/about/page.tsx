"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import TechStack from "@/components/about/TechStack";
import Timeline from "@/components/about/Timeline";
import Stats from "@/components/about/Stats";
import { socials } from "@/lib/socials";

export default function About() {
  return (
    <>
      <div className="mt-[64px]">
        {" "}
        {/* Add top margin to account for navbar */}
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-start gap-16"
            >
              {/* Profile Image */}
              <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2,
                  }}
                  className="relative w-[300px] h-[300px]"
                >
                  {/* Main image container */}
                  <div className="relative w-full h-full">
                    {/* Decorative border */}
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--color-yellow)] border-opacity-20 backdrop-blur-sm" />

                    {/* Image wrapper */}
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-fg)_1px,transparent_1px)] [background-size:20px_20px]" />

                      {/* Main image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden p-3">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src="/portrait.jpg"
                            alt="Profile"
                            fill
                            className="object-cover rounded-full"
                            sizes="300px"
                            priority
                          />

                          {/* Overlay effects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] opacity-30" />
                          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] opacity-10" />

                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[var(--color-yellow)] to-transparent opacity-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-mono text-[var(--color-fg)] leading-tight"
                >
                  Creative Developer & Digital Craftsman
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base md:text-lg mb-8 text-[var(--color-gray)] leading-relaxed"
                >
                  With over 7 years of experience in crafting digital
                  experiences, I blend technical expertise with creative design
                  thinking to build memorable software solutions. I specialize
                  in creating intuitive interfaces that make complex problems
                  feel simple and elegant. Sometimes bending the lines between
                  reality and the digital world.
                </motion.p>

                {/* Social Links & Resume */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-3 justify-center md:justify-start"
                >
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg glass-card text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                  <motion.a
                    href="/resume.pdf"
                    className="px-6 py-3 rounded-lg glass-card font-mono text-sm text-[var(--color-yellow)] flex items-center gap-2 hover:bg-[var(--color-yellow)] hover:bg-opacity-10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiDownload />
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Other Sections */}
          <div className="mt-32 space-y-32">
            <TechStack />
            <Timeline />
            <Stats />
          </div>
        </main>
      </div>
    </>
  );
}

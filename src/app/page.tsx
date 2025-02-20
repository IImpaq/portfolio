"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { socials } from "@/lib/socials";
import { statistics } from "@/lib/stats";
import Stats from "@/components/about/Stats";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-60 pb-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <span className="inline-block px-4 py-2 rounded-lg text-sm font-mono text-[var(--color-yellow)] border border-[var(--color-yellow)] border-opacity-40">
                ✨ Available for new projects
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-mono text-[var(--color-fg)]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Hi! I&apos;m Marcus,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block mt-2"
              >
                I build{" "}
                <span className="text-[var(--color-orange)]">
                  delightful digital
                </span>{" "}
                experiences
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl mb-12 leading-relaxed font-mono text-[var(--color-gray)]"
            >
              Full Stack Software Engineer specializing in crafting intuitive
              interfaces and meaningful interactions. I turn complex problems
              into simple, beautiful solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 items-center mb-16"
            >
              <Link
                href="/projects"
                className="custom-button group relative inline-flex items-center gap-2 px-8 py-4 rounded-lg font-mono bg-[var(--color-yellow)] text-[var(--color-bg)]"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FiArrowRight />
                </motion.span>
              </Link>

              <Link
                href="/contact"
                className="custom-button inline-flex items-center gap-2 px-8 py-4 rounded-lg font-mono text-[var(--color-gray)] border-2 border-[var(--color-gray)] border-opacity-40"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg transition-all duration-300 text-[var(--color-gray)] hover:text-[var(--color-yellow)] hover:bg-[var(--color-gray)] hover:bg-opacity-20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <div className="mt-32">
          <Stats />
        </div>
      </main>
    </>
  );
}

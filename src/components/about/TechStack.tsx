"use client";

import { technologies } from "@/lib/technologies";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <section className="container mx-auto px-6 mb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 font-mono text-center text-[var(--color-fg)]">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl text-center group"
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                  delay: 0,
                },
              }}
            >
              <tech.icon
                size={40}
                className="mx-auto mb-4 text-[var(--color-gray)] group-hover:text-[var(--color-yellow)] transition-colors"
              />
              <p className="font-mono text-sm text-[var(--color-gray)]">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;

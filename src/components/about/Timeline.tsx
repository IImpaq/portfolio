"use client";

import { experiences } from "@/lib/timeline";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="text-3xl font-bold mb-16 font-mono text-center text-[var(--color-fg)]">
          Experience
        </h2>

        <div className="relative w-full">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-1/2 h-full w-[2px] bg-gradient-to-b from-[var(--color-yellow)] via-[var(--color-orange)] to-[var(--color-purple)] opacity-20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-start mb-12 px-6 ${
                index % 2 === 0
                  ? "md:flex-row-reverse md:pr-0 md:pl-0"
                  : "md:flex-row"
              }`}
            >
              {/* Timeline dot with glow effect */}
              <div
                className={`absolute left-[31px] md:left-1/2 w-4 h-4 transform -translate-x-1/2 mt-8`}
              >
                <div className="relative w-full h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[var(--color-yellow)] opacity-40 blur-md" />
                  {/* Dot */}
                  <div className="absolute inset-0 rounded-full bg-[var(--color-yellow)] border-2 border-[var(--color-bg)]" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`ml-0 md:ml-0 w-full md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? "md:mr-5" : "md:ml-5"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card p-6 rounded-xl border border-[var(--color-fg)] border-opacity-10 backdrop-blur-sm h-full"
                >
                  {/* Year tag */}
                  <div className="inline-block px-4 py-1.5 rounded-full text-sm font-mono bg-[var(--color-yellow)] bg-opacity-10 text-[var(--color-fg)] mb-4">
                    {exp.year}
                  </div>

                  {/* Role and Company */}
                  <h3 className="text-xl font-bold mb-2 font-mono text-[var(--color-fg)]">
                    {exp.role}
                  </h3>
                  <h4 className="text-[var(--color-gray)] mb-4 font-medium">
                    {exp.company}
                  </h4>

                  {/* Description */}
                  <p className="text-[var(--color-gray)] leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;

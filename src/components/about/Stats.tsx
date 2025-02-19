"use client";

import { statistics } from "@/lib/stats";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="container mx-auto px-6 mb-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="glass-card p-6 rounded-xl text-center"
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                  delay: 0, // No delay on hover
                  type: "spring",
                  stiffness: 300,
                },
              }}
            >
              <motion.div
                className="text-3xl font-bold mb-2 font-mono text-[var(--color-yellow)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <motion.div
                className="text-sm font-mono text-[var(--color-gray)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;

"use client";

import { motion } from "framer-motion";
import placeholder from "@/app/lib/placeholder-data"

const TimelineSection = () => {
  return (
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>
          <div className="space-y-16">
            {placeholder.timeline.map((event, index) => (
                <motion.div
                    key={event.title}
                    className="relative flex items-center"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                >
                  <div className="flex-1 pr-8 text-right">
                    <span className="text-xl font-bold">{event.period}</span>
                  </div>
                  <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <p className="text-gray-400">{event.organization}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};


export default TimelineSection;
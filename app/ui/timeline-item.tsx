"use client";

import {motion} from "framer-motion";
import React from "react";

interface TimelineItemProps {
  key: string,
  index: number,
  event: {
    iconName: string;
    title: string;
    organization: string;
    period: string;
  }
}

const TimelineItem: React.FC<TimelineItemProps> = ({ key, index, event }) => {
  return <motion.div

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
  </motion.div>;
}

export default TimelineItem;
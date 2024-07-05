"use client";

import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {getIcon} from "@/app/lib/icon-converter";

interface TimelineItemProps {
  index: number,
  item: {
    icon: string;
    title: string,
    organization: string,
    period: string,
  }
}

const TimelineItem: React.FC<TimelineItemProps> = ({item, index}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const Icon = getIcon(item.icon);

  return (
    <motion.div className="flex items-start mb-8"
                initial={{opacity: 0, x: -20}}
                animate={{opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20}}
                transition={{duration: 0.5}}>
      <div className="border border-gray-800 p-3 rounded-full mr-4">
        <Icon className="text-2xl"/>
      </div>

      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-400">{item.organization}</p>
        <p className="text-gray-500">{item.period}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;

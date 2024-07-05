"use client";

import React from "react";
import { motion } from "framer-motion";
import {IconType} from "react-icons";
import * as Fi from 'react-icons/fi';
import { getIcon } from "@/app/lib/icon-converter"

interface ExpertiseCardProps {
  index: number,
  area: {
    title: string,
    description: string;
    iconName: string;
  }
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({index, area}) => {
  const Icon = getIcon(area.iconName);

  return <motion.div
      className="bg-black border border-gray-800 p-6 rounded-lg text-center cursor-pointer"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: index * 0.1}}
      whileHover={{borderColor: "white", scale: 1.03}}>
    <Icon className="text-4xl mb-4 mx-auto"/>
    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
    <p className="text-gray-400">{area.description}</p>
  </motion.div>;
}

export default ExpertiseCard;
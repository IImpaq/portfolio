"use client";

import React from "react";
import {motion} from "framer-motion";
import {IconType} from "react-icons";
import * as Fi from 'react-icons/fi';
import {getIcon} from "@/app/lib/icon-converter"

interface ExpertiseCardProps {
  index: number,
  area: {
    icon: string,
    title: string,
    description: string;
    iconName: string;
  }
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({index, area}) => {
  const Icon = getIcon(area.icon);

  const variants = {
    initial: {opacity: 0, y: 20},
    animate: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, delay: index * 0.1}
    },
    hover: {
      scale: 1.03,
      borderColor: "rgb(255, 255, 255)",
      transition: {duration: 0.3, delay: 0}
    }
  };

  return <motion.div
      className="bg-black border border-gray-800 p-6 rounded-lg text-center cursor-pointer"
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}>
    <Icon className="text-4xl mb-4 mx-auto"/>
    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
    <p className="text-gray-400">{area.description}</p>
  </motion.div>;
}

export default ExpertiseCard;
"use client";

import {motion} from "framer-motion";
import React from "react";

interface ProjectTitleProps {
  text: string
}

const ProjectTitle: React.FC<ProjectTitleProps> = ({ text }) => {
  return <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}>
    {text}
  </motion.h1>;
}

export default ProjectTitle;

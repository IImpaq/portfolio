"use client";

import {motion} from "framer-motion";

interface SkillItemProps {
  index: number,
  text: string
}

const SkillItem: React.FC<SkillItemProps> = ({ index, text }) => {
  return <motion.div
      className="border border-gray-800 px-4 py-2 rounded-full cursor-pointer"
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, delay: index * 0.1}}
      whileHover={{scale: 1.1, borderColor: "white"}}>
    {text}
  </motion.div>;
}

export default SkillItem;

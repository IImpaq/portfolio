"use client";

import {motion} from "framer-motion";

interface SkillItemProps {
  index: number,
  text: string
}

const SkillItem: React.FC<SkillItemProps> = ({ index, text }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: index * 0.1 }
    },
    hover: {
      scale: 1.1,
      borderColor: "rgb(255, 255, 255)",
      transition: { duration: 0.2, delay: 0 }
    }
  };

  return <motion.div
      className="border border-gray-800 px-4 py-2 rounded-full cursor-pointer"
      variants={variants}
      initial="initial"
      whileHover="hover"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}>
    {text}
  </motion.div>;
}

export default SkillItem;

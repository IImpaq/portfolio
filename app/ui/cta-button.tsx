"use client";

import {motion} from "framer-motion";
import Link from "next/link";

interface CtaButtonProps {
  href: string,
  text: string
}

const CtaButton: React.FC<CtaButtonProps> = ({ href, text }) => {
  return <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                     transition={{duration: 0.8, delay: 0.6}}>
    <Link href={href}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
      {text}
    </Link>
  </motion.div>;
}

export default CtaButton;
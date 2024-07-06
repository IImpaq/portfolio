"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {FiChevronDown} from "react-icons/fi";
import Image from "next/image";
import React, {useState} from "react";

interface HeroSectionProps {
  portraitUrl: string
}

const HeroSection: React.FC<HeroSectionProps> = ({portraitUrl}) => {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);

  return (
      <section
          className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row justify-center items-center text-center md:text-left relative">
        <div className="md:w-1/2">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" initial={{opacity: 0, y: -20}}
                     animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}>
            Marcus Gugacs
          </motion.h1>

          <motion.h2 className="text-2xl md:text-3xl text-gray-400 mb-8" initial={{opacity: 0, y: -20}}
                     animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.2}}>
            Software Engineer
          </motion.h2>

          <motion.p className="text-xl text-gray-300 max-w-2xl mb-12" initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.4}}>
            Specializing in computer graphics, game engine development, and full-stack web & app solutions.
          </motion.p>

          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.8, delay: 0.6}}>
            <Link href="/projects"
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              View My Work
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/3 mt-24 md:mt-0">
          <motion.div
              className="relative w-80 h-80 mx-auto overflow-hidden rounded-full"
              initial={{opacity: 0, scale: 0.8}}
              animate={isPortraitLoaded ? {opacity: 1, scale: 1} : {}}
              transition={{duration: 0.8, delay: 0.8}}
              style={{borderRadius: '28% 72% 65% 35% / 34% 45% 55% 66%'}}
          >
            <Image
                src={portraitUrl}
                alt="Portrait"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 filter grayscale hover:filter-none"
                onLoad={() => setIsPortraitLoaded(true)}
                priority
            />
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8" animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 1.5}}>
          <FiChevronDown className="text-3xl"/>
        </motion.div>
      </section>
  );
};

export default HeroSection;

"use client";

import useSmoothScroll from "@/app/lib/hooks/smooth-scroll";
import {motion} from "framer-motion";

const AboutHeroSection = () => {
  const scrollTo = useSmoothScroll();

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hello, I&apos;m Marcus</h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A passionate software developer specializing in computer graphics, game engine development, and full-stack
          solutions.
        </p>

        <motion.div className="inline-block">
          <button onClick={() => scrollTo('expertise')}
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Discover My Expertise
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;

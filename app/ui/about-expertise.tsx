"use client";

import {FiCode, FiGlobe, FiLayers} from "react-icons/fi";
import {motion} from "framer-motion";

const AboutExpertiseSection = () => {
  const expertiseAreas = [
    {icon: FiCode, title: "Computer Graphics", description: "Crafting immersive visual experiences"},
    {icon: FiLayers, title: "Game Engine Development", description: "Building the foundations of interactive worlds"},
    {icon: FiGlobe, title: "Full-Stack Development", description: "Creating end-to-end web and mobile solutions"},
  ];

  return (
    <section id="expertise" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => (
            <motion.div key={area.title}
                        className="border border-gray-800 p-6 rounded-lg text-center"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                        whileHover={{borderColor: 'white', scale: 1.03}}>
              <area.icon className="text-4xl mb-4 mx-auto"/>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutExpertiseSection;

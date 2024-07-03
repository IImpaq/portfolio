"use client";

import {motion} from "framer-motion";

const SkillsSection = () => {
  const skills = [
    "C++", "OpenGL", "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "Swift", "GraphQL", "Three.js", "WebGL", "Unity"
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div key={skill}
                      className="border border-gray-800 px-4 py-2 rounded-full"
                      initial={{opacity: 0, scale: 0.5}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{duration: 0.5, delay: index * 0.05}}
                      whileHover={{scale: 1.1, borderColor: 'white'}}>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
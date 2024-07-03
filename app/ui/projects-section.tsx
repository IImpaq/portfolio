"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";

const ProjectsSection = () => {
  const projects = [
    { title: "Advanced Game Engine", description: "A high-performance game engine built with C++ and Vulkan" },
    { title: "Portfolio", description: "A modern web app using TypeScript and NextJS" },
    { title: "Neo Template Library", description: "A highly efficient template library to complement modern C++." },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={project.title}
                      className="border border-gray-800 p-6 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ borderColor: "white", scale: 1.03 }}>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <Link href="/projects" className="text-white hover:underline inline-flex items-center">
              Learn more <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
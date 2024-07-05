"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WorkSection = () => {
  const projects = [
    {title: "Project1", image: "/full-stack-application.jpg", tech: "C++, OpenGL"},
    {title: "Project2", image: "/game-engine-thumbnail.jpg", tech: "TypeScript, React"},
    {title: "Project3", image: "/full-stack-application.jpg", tech: "Python, WebGL"},
  ];

  return (
      <section className="flex py-20 flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
              <motion.div
                  key={project.title}
                  className="group relative overflow-hidden rounded-lg border border-gray-800"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.5, delay: index * 0.1}}
              >
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
                <div
                    className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.tech}</p>
                </div>
              </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.6}}>
          <Link href="/projects"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            View more projects
          </Link>
        </motion.div>
      </section>
  );
};

export default WorkSection;

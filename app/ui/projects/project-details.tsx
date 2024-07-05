"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {FiExternalLink, FiGithub} from "react-icons/fi";

interface ProjectDetailsProps {
  project: any,
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({project}) => {
  return <div className="relative z-10 container mx-auto px-4 max-w-screen-xl py-20">
    <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
    >
      {project.title}
    </motion.h1>

    <div className="mb-12">
      <Image src={project.image} alt={project.title} width={1200} height={600} className="rounded-lg"/>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-300 mb-8">{project.fullDescription}</p>

        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          {project.features.map((text: string, index: number) => (
              <motion.li key={index}
                         initial={{opacity: 0, x: -20}}
                         animate={{opacity: 1, x: 0}}
                         transition={{duration: 0.5, delay: index * 0.1}}>
                {text}
              </motion.li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.showcase.map((item: { type: string, alt: string, src: string }, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden">
                {item.type === "image" ? (
                    <Image src={item.src} alt={item.alt} width={600} height={400} objectFit="cover"/>
                ) : (
                    <video src={item.src} controls className="w-full"/>
                )}
              </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech: string) => (
              <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Links</h2>
        {project.githubLink && (
            <a href={project.githubLink}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center text-white hover:underline mb-2">
              <FiGithub className="mr-2"/> View on GitHub
            </a>
        )}
        {project.liveLink && (
            <a href={project.liveLink}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center text-white hover:underline">
              <FiExternalLink className="mr-2"/> Live Demo
            </a>
        )}
      </div>
    </div>
  </div>;
}

export default ProjectDetails;
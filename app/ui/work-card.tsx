"use client";

import {motion} from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  index: number,
  project: { tech: string; image: string; title: string } | { tech: string; image: string; title: string } | {
    tech: string;
    image: string;
    title: string
  }
}

const WorkCard: React.FC<ProjectCardProps> = ({index, project}) => {
  return <motion.div

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
  </motion.div>;
}

export default WorkCard;
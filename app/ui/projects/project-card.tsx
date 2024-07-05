"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {FiArrowRight} from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, slug }) => (
    <motion.div className="bg-black border border-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}>
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
              <span key={tech} className="bg-gray-800 px-2 py-1 rounded-full text-sm">
            {tech}
          </span>
          ))}
        </div>

        <Link href={`/projects/${slug}`} className="text-white hover:underline inline-flex items-center">
          View Project <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
);

export default ProjectCard;

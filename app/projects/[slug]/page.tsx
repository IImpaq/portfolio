"use client";

import Head from "next/head";
import Image from "next/image";
import {usePathname} from "next/navigation";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Navbar from "@/app/ui/common/navbar";
import Footer from "@/app/ui/common/footer";
import DynamicGrid from "@/app/ui/common/dynamic-grid";

const projectsData = {
  "advanced-game-engine": {
    title: "Advanced Game Engine",
    fullDescription: "A cutting-edge game engine built from the ground up, featuring state-of-the-art graphics capabilities, robust physics simulation, and an intuitive asset management system. This engine pushes the boundaries of real-time rendering and provides developers with powerful tools to create immersive gaming experiences.",
    image: "/game-engine-thumbnail.jpg",
    technologies: ["C++", "Vulkan", "GLSL", "ImGui"],
    githubLink: "https://github.com/IImpaq/portfolio",
    features: [
      "Advanced rendering pipeline with PBR support",
      "Real-time global illumination",
      "Physics-based animation system",
      "Intuitive scene editor with live preview",
      "Cross-platform support (Windows, macOS, Linux)",
    ],
    showcase: [
      { type: "video", src: "/test1.mp4", alt: "Engine demo video 1" },
      { type: "video", src: "/test2.mp4", alt: "Engine demo video 2" },
      { type: "video", src: "/test3.mp4", alt: "Engine demo video 3" },
      { type: "video", src: "/test4.mp4", alt: "Engine demo video 4" },
      { type: "image", src: "/images/game-engine-showcase-1.jpg", alt: "Rendering showcase" },
      { type: "image", src: "/images/game-engine-showcase-2.jpg", alt: "Physics simulation" },
    ],
  },
};

const ProjectDetail = () => {
  const router = usePathname();
  const slug = router.split("/")[2];
  // @ts-ignore
  const project = projectsData[slug];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>{project.title} - Your Name</title>
        <meta name="description" content={`Detailed information about ${project.title} by [Your Name].`} />
      </Head>

      <Navbar />

      <main className="relative pt-16">
        <DynamicGrid cellSize={50} lineColor="rgba(255,255,255,0.1)" />

        <div className="relative z-10 container mx-auto px-4 max-w-screen-xl py-20">
          <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>

          <div className="mb-12">
            <Image src={project.image} alt={project.title} width={1200} height={600} className="rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 mb-8">{project.fullDescription}</p>

              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-300 mb-8">
                {// @ts-ignore
                  project.features.map((feature, index) => (
                  <motion.li key={index}
                             initial={{ opacity: 0, x: -20 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.5, delay: index * 0.1 }}>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Showcase</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {// @ts-ignore
                  project.showcase.map((item, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    {item.type === "image" ? (
                        <Image src={item.src} alt={item.alt} width={600} height={400} objectFit="cover" />
                    ) : (
                        <video src={item.src} controls className="w-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {// @ts-ignore
                  project.technologies.map((tech) => (
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
                  <FiGithub className="mr-2" /> View on GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center text-white hover:underline">
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

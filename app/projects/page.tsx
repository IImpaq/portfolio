"use client";

import type {NextPage} from "next";
import Head from "next/head";
import {motion} from "framer-motion";
import Navbar from "@/app/ui/common/navbar";
import Footer from "@/app/ui/common/footer";
import DynamicGrid from "@/app/ui/common/dynamic-grid";
import ProjectCard from "@/app/ui/projects/project-card";

const Projects: NextPage = () => {
  return (
      <div className="bg-black text-white min-h-screen">
        <Head>
          <title>Projects - Your Name</title>
          <meta name="description"
                content="Showcase of projects by [Your Name], including game engines, web applications, and more."/>
        </Head>

        <Navbar/>

        <main className="relative pt-16">
          <DynamicGrid cellSize={50} lineColor="rgba(255,255,255,0.1)"/>

          <div className="relative z-10 container mx-auto px-4 max-w-screen-xl py-20">
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-10 text-center"
                       initial={{opacity: 0, y: -20}}
                       animate={{opacity: 1, y: 0}}
                       transition={{duration: 0.5}}>
              My Projects
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                  title="Advanced Game Engine"
                  description="A high-performance game engine built with C++ and Vulkan, featuring real-time rendering"
                  image="/game-engine-thumbnail.jpg"
                  technologies={["C++", "OpenGL", "GLSL", "ImGui"]}
                  slug="advanced-game-engine"
              />

              <ProjectCard
                  title="Portfolio"
                  description="A modern web app using TypeScript, NextJS, showcasing responsive design and real-time data updates."
                  image="/full-stack-application.jpg"
                  technologies={["TypeScript", "Next.js", "Tailwind CSS"]}
                  slug="full-stack-web-application"
              />

              <ProjectCard
                  title="Advanced Game Engine 2"
                  description="A high-performance game engine built with C++ and Vulkan, featuring real-time rendering"
                  image="/full-stack-application.jpg"
                  technologies={["C++", "OpenGL", "GLSL", "ImGui"]}
                  slug="advanced-game-engine"
              />

              <ProjectCard
                  title="Portfolio 2"
                  description="A modern web app using TypeScript, NextJS, showcasing responsive design and real-time data updates."
                  image="/game-engine-thumbnail.jpg"
                  technologies={["TypeScript", "Next.js", "Tailwind CSS"]}
                  slug="full-stack-web-application"
              />
            </div>
          </div>
        </main>

        <Footer/>
      </div>
  );
};

export default Projects;

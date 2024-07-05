import Head from "next/head";
import Navbar from "@/app/ui/common/navbar";
import Footer from "@/app/ui/common/footer";
import DynamicGrid from "@/app/ui/common/dynamic-grid";
import ProjectDetails from "@/app/ui/projects/project-details";
import React from "react";
import {createClient} from "@/app/lib/supabase/server";
import {fetchProjectData, fetchShowcaseData} from "@/app/lib/data";

const projectsData = {
  "advanced-game-engine": {
    title: "Advanced Game Engine",
    description: "A cutting-edge game engine built from the ground up, featuring state-of-the-art graphics capabilities, robust physics simulation, and an intuitive asset management system. This engine pushes the boundaries of real-time rendering and provides developers with powerful tools to create immersive gaming experiences.",
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

interface ProjectProps {
  params: { slug: string },
  searchParams: { page: string }
}

const Project: React.FC<ProjectProps> = async ({ params, searchParams }) => {
  const { slug } = params;

  const supabase = createClient();
  const project = await fetchProjectData(supabase, slug);

  if (!project) return <div>Project not found</div>;

  const showcase = await fetchShowcaseData(supabase, project.id);

  return (
      <div className="bg-black text-white min-h-screen">
        <Head>
          <title>{project.title} - Your Name</title>
          <meta name="description" content={`Detailed information about ${project.title} by [Your Name].`}/>
        </Head>

        <Navbar/>

        <main className="relative pt-16">
          <DynamicGrid cellSize={50} lineColor="rgba(255,255,255,0.1)"/>

          <ProjectDetails project={project} showcase={showcase}/>
        </main>

        <Footer/>
      </div>
  );
};

export default Project;

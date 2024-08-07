import Head from "next/head";
import Navbar from "@/app/ui/common/navbar";
import Footer from "@/app/ui/common/footer";
import DynamicGrid from "@/app/ui/common/dynamic-grid";
import ProjectTitle from "@/app/ui/projects/project-title";
import {createClient} from "@/app/lib/supabase/server";
import {fetchProjectsData, fetchPublicContentURL} from "@/app/lib/data";
import React from "react";
import LazyProjectCard from "@/app/ui/projects/lazy-project-card";
import ProjectCard from "@/app/ui/projects/project-card";

const Projects = async () => {
  const supabase = createClient();
  const projects = await fetchProjectsData(supabase);

  if (!projects) return <div>Projects not found</div>;

  for(let i = 0; i < projects.length; i++) {
    projects[i].image = await fetchPublicContentURL(supabase, "projects/" + projects[i].image);
  }

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
            <ProjectTitle text="Projects"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project: any, index: number) => (
                  <LazyProjectCard
                      key={index}
                      title={project.title}
                      description={project.overview}
                      image={project.image}
                      technologies={project.technologies}
                      slug={project.slug}
                  />
              ))}
            </div>
          </div>
        </main>

        <Footer/>
      </div>
  );
};

export default Projects;

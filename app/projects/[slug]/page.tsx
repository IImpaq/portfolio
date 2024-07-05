import Head from "next/head";
import Navbar from "@/app/ui/common/navbar";
import Footer from "@/app/ui/common/footer";
import DynamicGrid from "@/app/ui/common/dynamic-grid";
import ProjectDetails from "@/app/ui/projects/project-details";
import React from "react";
import {createClient} from "@/app/lib/supabase/server";
import {fetchProjectData, fetchShowcaseData} from "@/app/lib/data";

interface ProjectProps {
  params: { slug: string },
  searchParams: { page: string }
}

const Project: React.FC<ProjectProps> = async ({ params, searchParams }) => {
  const { slug } = params;

  const supabase = createClient();
  const project = await fetchProjectData(supabase, slug);

  if (!project) return <div>Project not found</div>;

  let showcase = await fetchShowcaseData(supabase, project.id);

  if(!showcase) showcase = [];

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

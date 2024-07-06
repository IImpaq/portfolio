import WorkCard from "@/app/ui/work-card";
import PrimaryButton from "@/app/ui/common/primary-button";
import {createClient} from "@/app/lib/supabase/server";
import {fetchProjectsData, fetchPublicContentURL} from "@/app/lib/data";
import React from "react";

const WorkSection = async () => {
  const supabase = createClient();
  const projects = await fetchProjectsData(supabase, 3);

  if (!projects) return <div>Projects not found</div>;

  for(let i = 0; i < projects.length; i++) {
    projects[i].image = await fetchPublicContentURL(supabase, "projects/" + projects[i].image);
  }

  return (
      <section className="flex py-20 flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project: any, index: any) => (
              <WorkCard key={index} index={index} project={project}/>
          ))}
        </div>
        <PrimaryButton href="/projects" text="View more projects"/>
      </section>
  );
};

export default WorkSection;

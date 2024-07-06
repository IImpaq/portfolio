"use client";

import {ProjectCardSkeleton} from "@/app/ui/common/skeletons";
import ProjectCard, {ProjectCardProps} from "@/app/ui/projects/project-card";
import {useRef} from "react";
import {useInView} from "framer-motion";

const LazyProjectCard: React.FC<ProjectCardProps> = (props) => {
  const ref = useRef()
  // @ts-ignore
  const isInView = useInView(ref, {
    margin: '200px 0px',
    once: true
  });

  return (
      // @ts-ignore
      <div ref={ref}>
        {isInView ? (
            <ProjectCard {...props}/>
        ) : (
            <ProjectCardSkeleton />
        )}
      </div>
  )
}

export default LazyProjectCard;

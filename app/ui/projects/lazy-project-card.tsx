import dynamic from 'next/dynamic'
import {ProjectCardProps} from "@/app/ui/projects/project-card"
import {ProjectCardSkeleton} from "@/app/ui/common/skeletons";

const LazyProjectCard = dynamic<ProjectCardProps>(() => import("@/app/ui/projects/project-card"), {
  loading: () => <ProjectCardSkeleton />,
  ssr: false
})

export default LazyProjectCard;

import WorkCard from "@/app/ui/work-card";
import PrimaryButton from "@/app/ui/common/primary-button";

const WorkSection = () => {
  const projects = [
    {title: "Project1", image: "/full-stack-application.jpg", tech: "C++, OpenGL"},
    {title: "Project2", image: "/game-engine-thumbnail.jpg", tech: "TypeScript, React"},
    {title: "Project3", image: "/full-stack-application.jpg", tech: "Python, WebGL"},
  ];

  return (
      <section className="flex py-20 flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
              <WorkCard key={project.title} index={index} project={project}/>
          ))}
        </div>
        <PrimaryButton href="/projects" text="View more projects"/>
      </section>
  );
};

export default WorkSection;

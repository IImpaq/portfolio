import placeholder from "@/app/lib/placeholder-data"
import SkillItem from "@/app/ui/about/skill-item";

const SkillsSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {placeholder.skills.map((skill, index) => (
          <SkillItem key={index} index={index} text={skill}/>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

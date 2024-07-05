import placeholder from "@/app/lib/placeholder-data"
import ExpertiseCard from "@/app/ui/common/expertise-card";

const ExpertiseSection = () => {
  return (
      <section id="expertise" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholder.expertiseAreas.map((area, index) => (
              <ExpertiseCard key={area.title} index={index} area={area}/>
          ))}
        </div>
      </section>
  );
};

export default ExpertiseSection;

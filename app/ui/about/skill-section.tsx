import SkillItem from "@/app/ui/about/skill-item";
import {createClient} from "@/app/lib/supabase/server";
import {fetchSkillsData} from "@/app/lib/data";

const SkillsSection = async () => {
  const supabase = createClient();
  const data = await fetchSkillsData(supabase);

  if(!data) return <div>Could not fetch data</div>;

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {data.map((skill: any, index: any) => (
          <SkillItem key={index} index={index} text={skill.name}/>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

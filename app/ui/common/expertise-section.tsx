import ExpertiseCard from "@/app/ui/common/expertise-card";
import {createClient} from "@/app/lib/supabase/server";
import {fetchExpertiseData} from "@/app/lib/data";

const ExpertiseSection = async () => {
  const supabase = createClient();
  const data = await fetchExpertiseData(supabase);

  if(!data) return <div>Could not fetch data</div>;

  return (
      <section id="expertise" className="py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((area: any, index: any) => (
              <ExpertiseCard key={index} index={index} area={area}/>
          ))}
        </div>
      </section>
  );
};

export default ExpertiseSection;

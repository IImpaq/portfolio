import TimelineItem from "@/app/ui/about/timeline-item";
import {createClient} from "@/app/lib/supabase/server";
import {fetchTimelineData} from "@/app/lib/data";

const TimelineSection = async () => {
  const supabase = createClient();
  const data = await fetchTimelineData(supabase);

  if(!data) return <div>Could not fetch data</div>;

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
      <div className="max-w-3xl mx-auto">
        {data.map((item: any, index: any) => (
          <TimelineItem key={item.title} item={item} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
import TimelineItem from "@/app/ui/timeline-item";
import {createClient} from "@/app/lib/supabase/server";
import {fetchTimelineData} from "@/app/lib/data";

const TimelineSection = async () => {
  const supabase = createClient();
  const data = await fetchTimelineData(supabase);

  if(!data) return <div>Could not fetch data</div>;

  return (
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>
          <div className="space-y-16">
            {data.map((event: any, index: any) => (
                <TimelineItem key={event.title} index={index} event={event}/>
            ))}
          </div>
        </div>
      </section>
  );
};


export default TimelineSection;
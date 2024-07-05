import placeholder from "@/app/lib/placeholder-data"
import TimelineItem from "@/app/ui/timeline-item";

const TimelineSection = () => {
  return (
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>
          <div className="space-y-16">
            {placeholder.timeline.map((event, index) => (
                <TimelineItem key={event.title} index={index} event={event}/>
            ))}
          </div>
        </div>
      </section>
  );
};


export default TimelineSection;
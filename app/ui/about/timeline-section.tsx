"use client";

import TimelineItem from "@/app/ui/about/timeline-item";
import placeholder from "@/app/lib/placeholder-data"

const TimelineSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
      <div className="max-w-3xl mx-auto">
        {placeholder.timeline.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
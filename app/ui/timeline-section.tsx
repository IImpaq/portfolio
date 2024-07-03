"use client";

import {FiAward, FiBook, FiBriefcase} from "react-icons/fi";
import TimelineItem from "@/app/ui/timeline-item";

const TimelineSection = () => {
  const timelineItems = [
    {
      icon: FiBook,
      title: "Bachelor's in Software Engineering",
      organization: "Graz University of Technology",
      period: "2021 - Now"
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
      <div className="max-w-3xl mx-auto">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
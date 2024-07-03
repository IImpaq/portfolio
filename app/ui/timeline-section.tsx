"use client";

import {FiAward, FiBook, FiBriefcase} from "react-icons/fi";
import TimelineItem from "@/app/ui/timeline-item";

const TimelineSection = () => {
  const timelineItems = [
    {
      icon: FiBriefcase,
      title: "Senior Software Engineer",
      organization: "Tech Innovators Inc.",
      period: "2020 - Present"
    },
    {icon: FiBriefcase, title: "Graphics Engineer", organization: "GameCraft Studios", period: "2017 - 2020"},
    {
      icon: FiAward,
      title: "Master's in Computer Science",
      organization: "University of Technology",
      period: "2015 - 2017"
    },
    {
      icon: FiBook,
      title: "Bachelor's in Software Engineering",
      organization: "State University",
      period: "2011 - 2015"
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
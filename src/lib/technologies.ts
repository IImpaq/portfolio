import { Technology } from "@/types";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiSwift,
  SiMongodb,
  SiCplusplus,
  SiPython,
  SiDigitalocean,
  SiVercel,
  SiSupabase,
} from "react-icons/si";

export const technologies: Technology[] = [
  { icon: SiCplusplus, name: "C++" },
  { icon: SiPython, name: "Python" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiSwift, name: "Swift" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiDigitalocean, name: "DigitalOcean" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiSupabase, name: "Supabase" },
];

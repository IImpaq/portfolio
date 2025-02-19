"use client";

import { Repository } from "@/types";
import { motion } from "framer-motion";
import { FiExternalLink, FiGitBranch, FiGithub, FiStar } from "react-icons/fi";

interface ProjectCardProps {
  repo: Repository;
  index: number;
}

const ProjectCard = ({ repo, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.3,
      delay: index * 0.05,
      ease: "easeOut",
    }}
    layout
    className="border border-[var(--color-gray)] border-opacity-20 rounded-lg p-6 bg-[var(--color-bg)] hover:border-[var(--color-yellow)] transition-colors"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-[var(--color-fg)]">{repo.name}</h3>
      <div className="flex gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-gray)] hover:text-[var(--color-yellow)]"
        >
          <FiGithub size={20} />
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gray)] hover:text-[var(--color-yellow)]"
          >
            <FiExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
    <p className="text-[var(--color-gray)] mb-4 line-clamp-2">
      {repo.description || "No description provided"}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {repo.topics.map((topic) => (
        <span
          key={topic}
          className="px-2 py-1 text-xs rounded-full bg-[var(--color-yellow)] bg-opacity-10 text-[var(--color-fg)]"
        >
          {topic}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-4 text-[var(--color-gray)]">
      {repo.language && (
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[var(--color-yellow)]"></span>
          {repo.language}
        </span>
      )}
      <span className="flex items-center gap-1">
        <FiStar />
        {repo.stargazers_count}
      </span>
      <span className="flex items-center gap-1">
        <FiGitBranch />
        {repo.forks_count}
      </span>
    </div>
  </motion.div>
);

export default ProjectCard;

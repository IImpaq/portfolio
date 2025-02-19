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
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="glass-card rounded-lg p-6 hover:border-[var(--color-yellow)] transition-all duration-300 group"
  >
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold font-mono text-[var(--color-fg)] group-hover:text-[var(--color-yellow)] transition-colors">
          {repo.name}
        </h3>
        <div className="flex gap-2">
          <motion.a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[var(--color-yellow)] hover:bg-opacity-10 text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub size={18} />
          </motion.a>
          {repo.homepage && (
            <motion.a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[var(--color-yellow)] hover:bg-opacity-10 text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>

      <p className="text-[var(--color-gray)] mb-6 flex-grow">
        {repo.description || "No description provided"}
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs rounded-full bg-[var(--color-yellow)] bg-opacity-10 text-[var(--color-fg)] font-mono"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-[var(--color-gray)]">
          {repo.language && (
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-yellow)]"></span>
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <FiStar size={14} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <FiGitBranch size={14} />
            {repo.forks_count}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;

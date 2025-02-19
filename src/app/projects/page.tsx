"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import {
  FiStar,
  FiGitBranch,
  FiCode,
  FiHash,
  FiTag,
  FiClock,
  FiType,
  FiFolder,
} from "react-icons/fi";
import Select from "@/components/common/Select";
import { Repository } from "@/types";
import ProjectCard from "@/components/projects/ProjectCard";
import FilterTag from "@/components/projects/FilterTag";
import ProjectSkeleton from "@/components/projects/ProjectSkeleton";

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_GITHUB_API}?per_page=100&sort=created&direction=desc`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch repositories",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Get unique languages
  const languageOptions = useMemo(() => {
    const languages = Array.from(
      new Set(repos.map((repo) => repo.language).filter(Boolean)),
    ).sort();

    return [
      { value: "all", label: "All Languages", icon: <FiCode /> },
      ...languages.map((lang) => ({
        value: lang,
        label: lang,
        icon: <FiCode />,
      })),
    ];
  }, [repos]);

  // Get unique topics
  const topicOptions = useMemo(() => {
    const topics = Array.from(
      new Set(repos.flatMap((repo) => repo.topics)),
    ).sort();

    return [
      { value: "all", label: "All Topics", icon: <FiTag /> },
      ...topics.map((topic) => ({
        value: topic,
        label: topic,
        icon: <FiHash />,
      })),
    ];
  }, [repos]);

  // Sorting options
  const sortOptions = [
    { value: "newest", label: "Newest First", icon: <FiClock /> },
    { value: "oldest", label: "Oldest First", icon: <FiClock /> },
    { value: "stars", label: "Most Stars", icon: <FiStar /> },
    { value: "forks", label: "Most Forks", icon: <FiGitBranch /> },
    { value: "name", label: "Name", icon: <FiType /> },
  ];

  // Sorting function
  const sortRepositories = (repos: Repository[], sortType: string) => {
    return [...repos].sort((a, b) => {
      switch (sortType) {
        case "newest":
          return Date.parse(b.created_at) - Date.parse(a.created_at);
        case "oldest":
          return Date.parse(a.created_at) - Date.parse(b.created_at);
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "forks":
          return b.forks_count - a.forks_count;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    let result = [...repos];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.topics?.some((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // Apply language filter
    if (languageFilter !== "all") {
      result = result.filter(
        (repo) => repo.language?.toLowerCase() === languageFilter.toLowerCase(),
      );
    }

    // Apply topic filter
    if (topicFilter !== "all") {
      result = result.filter((repo) => repo.topics?.includes(topicFilter));
    }

    // Apply sorting
    result = sortRepositories(result, sort);

    setFilteredRepos(result);
  }, [repos, searchTerm, languageFilter, topicFilter, sort]);

  // Loading state with skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="h-12 bg-[var(--color-gray)] bg-opacity-20 rounded w-1/4 animate-pulse mb-4"></div>
            <div className="h-6 bg-[var(--color-gray)] bg-opacity-20 rounded w-2/4 animate-pulse"></div>
          </div>

          <div className="mb-8 flex items-center gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-10 w-32 bg-[var(--color-gray)] bg-opacity-20 rounded animate-pulse"
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="text-[var(--color-red)] text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[64px]">
      {" "}
      {/* Add top margin to account for navbar */}
      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-[var(--color-yellow)] border border-[var(--color-yellow)] border-opacity-40">
              <FiFolder />
              Featured Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-mono text-[var(--color-fg)]"
          >
            Open Source Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[var(--color-gray)] max-w-2xl mx-auto"
          >
            A showcase of my personal projects and contributions to the
            open-source community. Each project represents a unique challenge
            and learning experience.
          </motion.p>
        </motion.section>

        {/* Filters Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="glass-card p-6 rounded-lg">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="w-full md:w-[300px]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-gray)] border-opacity-20 text-[var(--color-fg)] focus:outline-none focus:border-[var(--color-yellow)] transition-colors pl-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                {[
                  {
                    options: languageOptions,
                    value: languageFilter,
                    onChange: setLanguageFilter,
                    placeholder: "Language",
                  },
                  {
                    options: topicOptions,
                    value: topicFilter,
                    onChange: setTopicFilter,
                    placeholder: "Topic",
                  },
                  {
                    options: sortOptions,
                    value: sort,
                    onChange: setSort,
                    placeholder: "Sort by",
                  },
                ].map((select, index) => (
                  <div key={index} className="w-full md:w-[200px]">
                    <Select {...select} className="w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {(languageFilter !== "all" || topicFilter !== "all") && (
                <>
                  {languageFilter !== "all" && (
                    <FilterTag
                      label={`Language: ${languageFilter}`}
                      onRemove={() => setLanguageFilter("all")}
                    />
                  )}
                  {topicFilter !== "all" && (
                    <FilterTag
                      label={`Topic: ${topicFilter}`}
                      onRemove={() => setTopicFilter("all")}
                    />
                  )}
                  <button
                    onClick={() => {
                      setLanguageFilter("all");
                      setTopicFilter("all");
                    }}
                    className="text-sm text-[var(--color-yellow)] hover:underline transition-all"
                  >
                    Clear all filters
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectSkeleton key={i} />
              ))}
            </div>
          ) : filteredRepos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-[var(--color-gray)] text-lg">
                No projects found matching your criteria.
              </div>
            </motion.div>
          )}
        </motion.section>
      </main>
    </div>
  );
}

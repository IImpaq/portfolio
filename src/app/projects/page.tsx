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
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-[var(--color-fg)]">
            Projects
          </h1>
          <p className="text-[var(--color-gray)]">
            A collection of my open source projects and experiments.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Search Bar - Left Side */}
          <div className="w-full md:w-[300px]">
            {" "}
            {/* Fixed width for search bar */}
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-lg bg-[var(--color-bg)] border border-[var(--color-gray)] border-opacity-20 text-[var(--color-fg)] focus:outline-none focus:border-[var(--color-yellow)] transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Selects - Right Side */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="w-full md:w-[200px]">
              {" "}
              {/* Fixed width for each select */}
              <Select
                options={languageOptions}
                value={languageFilter}
                onChange={setLanguageFilter}
                placeholder="Language"
                className="w-full"
              />
            </div>

            <div className="w-full md:w-[200px]">
              <Select
                options={topicOptions}
                value={topicFilter}
                onChange={setTopicFilter}
                placeholder="Topic"
                className="w-full"
              />
            </div>

            <div className="w-full md:w-[200px]">
              <Select
                options={sortOptions}
                value={sort}
                onChange={setSort}
                placeholder="Sort by"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
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
          {(languageFilter !== "all" || topicFilter !== "all") && (
            <button
              onClick={() => {
                setLanguageFilter("all");
                setTopicFilter("all");
              }}
              className="text-sm text-[var(--color-gray)] hover:text-[var(--color-yellow)] transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--color-gray)] py-12"
          >
            No projects found matching your criteria.
          </motion.div>
        )}
      </div>
    </div>
  );
}

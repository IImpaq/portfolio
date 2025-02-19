import { IconType } from "react-icons";

export interface SocialLink {
  icon: IconType;
  label: string;
  href: string;
}

export interface Statistic {
  label: string;
  value: string;
}

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Experience {
  year: string;
  company: string;
  role: string;
  description: string;
}

export interface Contact {
  icon: IconType;
  label: string;
  href: string;
  username: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  created_at: string;
}

export interface Post {
  id: string;
  text: string;
  createdAt: string;
  stats: {
    likes: number;
    reposts: number;
    replies: number;
  };
  images?: string[];
}

export interface BlueskyPost {
  post: {
    uri: string;
    record: {
      text: string;
      reply?: unknown;
      embed?: {
        images?: Array<{
          fullsize: string;
        }>;
      };
    };
    indexedAt: string;
    likeCount: number;
    repostCount: number;
    replyCount: number;
  };
}

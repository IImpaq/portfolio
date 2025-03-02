"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchUserPosts } from "@/utils/bluesky";
import { BlueskyPost, Post } from "@/types";
import PostCard from "@/components/posts/PostCard";
import PostSkeleton from "@/components/posts/PostSkeleton";
import { FiRss } from "react-icons/fi";
import { BSKY_USER_TAG } from "@/lib/constants";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetchUserPosts(BSKY_USER_TAG);

        const transformedPosts: Post[] = response
          .filter((item: BlueskyPost) => !item.post.record.reply)
          .map((item: BlueskyPost) => ({
            id: item.post.uri.split("/").pop() || "",
            text: item.post.record.text,
            createdAt: item.post.indexedAt,
            stats: {
              likes: item.post.likeCount || 0,
              reposts: item.post.repostCount || 0,
              replies: item.post.replyCount || 0,
            },
            images:
              item.post.record.embed?.images?.map((img) => img.fullsize) ||
              undefined,
          }));

        setPosts(transformedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass-card p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-red)]">
            Error
          </h2>
          <p className="text-[var(--color-gray)]">{error}</p>
        </motion.div>
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block cursor-default"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-[var(--color-yellow)] border border-[var(--color-yellow)] border-opacity-40">
              <FiRss />
              Latest Updates
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-mono text-[var(--color-fg)]"
          >
            Thoughts & Updates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[var(--color-gray)] max-w-2xl mx-auto"
          >
            A collection of my latest posts from Bluesky, where I share insights
            about technology, development, and creative processes.
          </motion.p>
        </motion.section>

        {/* Posts Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {isLoading ? (
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <PostSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </motion.section>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchUserPosts } from "@/utils/bluesky";
import { BlueskyPost, Post } from "@/types";
import PostCard from "@/components/posts/PostCard";
import PostSkeleton from "@/components/posts/PostSkeleton";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetchUserPosts("iimpaq.bsky.social");

        // Filter out replies and transform the response
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          {[1, 2, 3].map((i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

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
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-[var(--color-fg)]">
            Posts
          </h1>
          <p className="text-[var(--color-gray)]">
            My latest thoughts and updates from Bluesky.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

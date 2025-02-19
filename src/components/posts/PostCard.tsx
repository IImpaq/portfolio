"use client";

import { motion } from "framer-motion";
import {
  FiClock,
  FiHeart,
  FiRepeat,
  FiMessageCircle,
  FiExternalLink,
} from "react-icons/fi";
import { Post } from "@/types";
import Image from "next/image";

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  const getPostUrl = (post: Post) => {
    return `https://bsky.app/profile/iimpaq.bsky.social/post/${post.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="glass-card rounded-lg p-6 hover:border-[var(--color-yellow)] transition-all duration-300 group"
    >
      <div className="space-y-4">
        {/* Content */}
        <div className="space-y-4">
          <p className="text-[var(--color-fg)] text-lg leading-relaxed">
            {post.text}
          </p>

          {/* Images Grid */}
          {post.images && (
            <div className="grid grid-cols-2 gap-3">
              {post.images.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(image, "_blank");
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-gray)] border-opacity-20">
          <div className="flex items-center gap-4 text-sm text-[var(--color-gray)]">
            <span className="flex items-center gap-1">
              <FiHeart className="text-[var(--color-yellow)]" />
              {post.stats.likes}
            </span>
            <span className="flex items-center gap-1">
              <FiRepeat />
              {post.stats.reposts}
            </span>
            <span className="flex items-center gap-1">
              <FiMessageCircle />
              {post.stats.replies}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--color-gray)] flex items-center gap-1">
              <FiClock size={14} />
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <a
              href={getPostUrl(post)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[var(--color-yellow)] hover:bg-opacity-10 text-[var(--color-yellow)] transition-colors"
            >
              <FiExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;

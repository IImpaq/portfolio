import { motion } from "framer-motion";
import { FiClock, FiHeart, FiRepeat, FiMessageCircle } from "react-icons/fi";
import { Post } from "@/types";
import Image from "next/image";

const PostCard = ({ post, index }: { post: Post; index: number }) => {
  // Function to construct Bluesky post URL
  const getPostUrl = (post: Post) => {
    return `https://bsky.app/profile/iimpaq.bsky.social/post/${post.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={() => window.open(getPostUrl(post), "_blank")}
      className="border border-[var(--color-gray)] border-opacity-20 rounded-lg p-6 bg-[var(--color-bg)] hover:border-[var(--color-yellow)] transition-colors cursor-pointer"
    >
      <div className="mb-4">
        <p className="text-[var(--color-fg)] mb-3">{post.text}</p>
        {post.images && (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {post.images.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt=""
                className="rounded-lg w-full h-48 object-cover"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent onClick from firing
                  window.open(image, "_blank");
                }}
              />
            ))}
          </div>
        )}
        <div className="text-sm text-[var(--color-gray)] flex items-center gap-2">
          <FiClock size={14} />
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </div>

      <div className="flex items-center gap-6 text-[var(--color-gray)]">
        <span className="flex items-center gap-1">
          <FiHeart size={16} />
          {post.stats.likes}
        </span>
        <span className="flex items-center gap-1">
          <FiRepeat size={16} />
          {post.stats.reposts}
        </span>
        <span className="flex items-center gap-1">
          <FiMessageCircle size={16} />
          {post.stats.replies}
        </span>
      </div>
    </motion.div>
  );
};

export default PostCard;

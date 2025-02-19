const PostSkeleton = () => (
  <div className="border border-[var(--color-gray)] border-opacity-20 rounded-lg p-6 mb-6">
    <div className="space-y-3 mb-4">
      <div className="h-4 bg-[var(--color-gray)] bg-opacity-20 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-[var(--color-gray)] bg-opacity-20 rounded w-4/5 animate-pulse"></div>
    </div>
    <div className="flex items-center gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-4 w-16 bg-[var(--color-gray)] bg-opacity-20 rounded animate-pulse"
        ></div>
      ))}
    </div>
  </div>
);

export default PostSkeleton;

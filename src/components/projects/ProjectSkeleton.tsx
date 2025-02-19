const ProjectSkeleton = () => (
  <div className="border border-[var(--color-gray)] border-opacity-20 rounded-lg p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="h-7 bg-[var(--color-gray)] bg-opacity-20 rounded w-2/3 animate-pulse"></div>
      <div className="flex gap-2">
        <div className="w-5 h-5 bg-[var(--color-gray)] bg-opacity-20 rounded animate-pulse"></div>
        <div className="w-5 h-5 bg-[var(--color-gray)] bg-opacity-20 rounded animate-pulse"></div>
      </div>
    </div>
    <div className="space-y-2 mb-4">
      <div className="h-4 bg-[var(--color-gray)] bg-opacity-20 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-[var(--color-gray)] bg-opacity-20 rounded w-4/5 animate-pulse"></div>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-6 w-16 bg-[var(--color-gray)] bg-opacity-20 rounded-full animate-pulse"
        ></div>
      ))}
    </div>
    <div className="flex items-center gap-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-4 w-12 bg-[var(--color-gray)] bg-opacity-20 rounded animate-pulse"
        ></div>
      ))}
    </div>
  </div>
);

export default ProjectSkeleton;

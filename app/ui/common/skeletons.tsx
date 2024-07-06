import React from "react";

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

function ProjectCardSkeleton() {
  return (
      <div className={`bg-black border border-gray-800 rounded-lg overflow-hidden relative ${shimmer}`}>
        <div className="relative h-48 bg-gray-800"></div>

        <div className="p-6">
          <div className="h-8 w-3/4 bg-gray-800 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-800 rounded mb-4"></div>

          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="h-6 w-16 bg-gray-800 rounded-full"></div>
            ))}
          </div>

          <div className="h-6 w-32 bg-gray-800 rounded"></div>
        </div>
      </div>
  );
}

export function ProjectsSkeleton() {
  return (
      <div className="bg-black text-white min-h-screen">
        <div className="relative pt-16">
          <div className="relative z-10 container mx-auto px-4 max-w-screen-xl py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, index) => (
                  <ProjectCardSkeleton key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
      <div className="relative z-10 container mx-auto px-4 max-w-screen-xl py-40">
        <div className="fixed inset-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ backgroundSize: '200% 100%' }}></div>

        <div className="relative">
          <div className="h-12 w-3/4 bg-gray-800 mb-6 mx-auto rounded"></div>

          <div className="mb-12 h-[600px] bg-gray-800 rounded-lg"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="h-8 w-1/4 bg-gray-800 mb-4 rounded"></div>
              <div className="h-4 w-full bg-gray-800 mb-8 rounded"></div>

              <div className="h-8 w-1/3 bg-gray-800 mb-4 rounded"></div>
              {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-4 w-5/6 bg-gray-800 mb-2 rounded"></div>
              ))}

              <div className="h-8 w-1/4 bg-gray-800 mt-8 mb-4 rounded"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="h-[200px] bg-gray-800 rounded-lg"></div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-8 w-2/3 bg-gray-800 mb-4 rounded"></div>
              <div className="flex flex-wrap gap-2 mb-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="h-6 w-20 bg-gray-800 rounded-full"></div>
                ))}
              </div>

              <div className="h-8 w-1/2 bg-gray-800 mb-4 rounded"></div>
              <div className="h-6 w-40 bg-gray-800 mb-2 rounded"></div>
              <div className="h-6 w-40 bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
  );
}

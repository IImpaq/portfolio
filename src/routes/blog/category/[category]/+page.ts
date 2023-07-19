import type { LoadEvent } from "@sveltejs/kit";

export const load = async ({ fetch, params }: LoadEvent ) => {
  const { category } = params;
  const response = await fetch("/api/posts");
  const posts = await response.json();

  const filteredPosts = posts.filter((post: any) => post.meta.categories.includes(category));

  return {
    category,
    posts: filteredPosts
  }
}

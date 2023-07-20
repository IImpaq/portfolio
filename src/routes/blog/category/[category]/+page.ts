import type { LoadEvent } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { fetchPosts } from "$lib/utils";

export const load = async ({ params }: LoadEvent ) => {
  const { category } = params;
  const response = await fetchPosts();
  const posts = await json(response).json();

  const filteredPosts = posts.filter((post: any) => post.meta.categories.includes(category));

  return {
    category,
    posts: filteredPosts
  }
}

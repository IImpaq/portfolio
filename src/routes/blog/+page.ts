import { json } from "@sveltejs/kit";
import { fetchPosts } from "$lib/utils";

export const load = async () => {
  const response = await fetchPosts();
  const posts = await json(response).json();

  return { posts };
}

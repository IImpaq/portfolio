import { json } from "@sveltejs/kit";
import { fetchProjects } from "$lib/utils/projects";

export const load = async () => {
  const response = await fetchProjects();
  const projects = await json(response).json();

  return { projects };
}


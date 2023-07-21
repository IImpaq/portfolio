import { json } from "@sveltejs/kit";
import { fetchResume } from "$lib/utils/resume";

export const load = async () => {
  const response = await fetchResume();
  const jobs = await json(response).json();

  return { jobs };
}


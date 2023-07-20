import type { LoadEvent } from "@sveltejs/kit";

export const load = ({ url }: LoadEvent) => {
  const currentRoute = url.pathname

  return {
    currentRoute
  }
}

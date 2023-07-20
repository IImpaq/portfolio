import type { LoadEvent } from "@sveltejs/kit";

export async function load({ params }: LoadEvent ) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, categories }: any = post.metadata;
  const content = post.default;
  const dateFormatted = new Date(date).toLocaleDateString();

  return {
    content,
    title,
    date: dateFormatted,
    categories
  }
}

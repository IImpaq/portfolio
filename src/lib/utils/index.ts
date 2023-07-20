export const fetchPosts = async () => {
  const postFiles = import.meta.glob("/src/routes/blog/*.md");
  const postObjs = Object.entries(postFiles);

  const posts = await Promise.all(
    postObjs.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      const dateFormatted = new Date(metadata.date).toLocaleDateString();

      return {
        meta: metadata,
        path: postPath,
        date: dateFormatted
      }
    })
  );

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  });

  return sortedPosts;
}

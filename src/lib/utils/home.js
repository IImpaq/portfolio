export const fetchResume = async () => {
  const postFiles = import.meta.glob("/src/lib/data/home/*.md");
  const postObjs = Object.entries(postFiles);

  const posts = await Promise.all(
    postObjs.map(async ([, resolver]) => {
      const { metadata } = await resolver();

      return {
        title: metadata.title,
        subtitle: metadata.subtitle,
        description: metadata.description
      }
    })
  );

  const sortedPosts = posts.sort((a, b) => {
    return (a.date < b.date);
  });

  return sortedPosts;
}


export const fetchResume = async () => {
  const postFiles = import.meta.glob("/src/lib/data/resume/*.md");
  const postObjs = Object.entries(postFiles);

  const posts = await Promise.all(
    postObjs.map(async ([, resolver]) => {
      const { metadata } = await resolver();

      return {
        title: metadata.title,
        date: metadata.date,
        description: metadata.preview
      }
    })
  );

  return posts.sort((a, b) => {
      return (a.date < b.date);
  });
}


export const fetchProjects = async () => {
  const projectFiles = import.meta.glob("/src/lib/data/projects/*.md");
  const projectObjs = Object.entries(projectFiles);

  const projects = await Promise.all(
    projectObjs.map(async ([, resolver]) => {
      const { metadata } = await resolver();

      return {
        title: metadata.title,
        date: metadata.date,
        url: metadata.url,
        description: metadata.preview,
        tags: metadata.tags
      }
    })
  );

  return projects.sort((a, b) => {
    return (a.date < b.date);
  });
}


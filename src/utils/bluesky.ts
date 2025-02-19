export async function fetchUserPosts(did: string, limit: number = 40) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BSKY_API}?actor=${did}&limit=${limit}`,
      {
        method: "GET",
      },
    );

    const data = await response.json();
    return data.feed;
  } catch (error) {
    console.error("Error fetching Bluesky posts:", error);
    return [];
  }
}

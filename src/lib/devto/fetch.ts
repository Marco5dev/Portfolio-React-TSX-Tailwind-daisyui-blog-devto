import { Post, PostDetails } from "./types";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`https://dev.to/api/articles?username=marco5dev`);

  return res.json();
}

export async function fetchPost(slug: string): Promise<PostDetails> {
  const res = await fetch(`https://dev.to/api/articles/marco5dev/${slug}`);

  return res.json();
}

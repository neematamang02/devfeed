import { cacheLife } from "next/cache";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getPosts(): Promise<Post[]> {
    await sleep(3000);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

export async function getPostsCached() {
  'use cache';
  cacheLife('max');            // effectively static: computed once, reused
  return getPosts();
}

export async function getPostsISR() {
  'use cache';
  cacheLife({ stale: 30, revalidate: 30, expire: 300 }); // refresh roughly every 30s
  return getPosts();
}
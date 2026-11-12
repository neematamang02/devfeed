import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PostList from "@/components/PostList";
import { getPosts } from "@/lib/posts";

async function Posts() {
  const posts = await getPosts(); // uncached and slow, so it streams in
  return <PostList posts={posts} />;
}

export default function Page() {
    return (
        <>
        <h1>Feed</h1>
        <Suspense fallback= {<Skeleton />}>
        <Posts />
        </Suspense>
        </>
    )
}
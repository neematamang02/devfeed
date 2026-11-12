import PostList from "@/components/PostList";
import { getPosts } from "@/lib/posts";
import { cookies } from "next/headers";
import { Suspense } from "react";

async function Posts() {
  await cookies();            // request-time data, so it must be under Suspense
  const posts = await getPosts();
  return <PostList posts={posts} />;
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading posts…</p>}>
      <Posts />
    </Suspense>
  );
}
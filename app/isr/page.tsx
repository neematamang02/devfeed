import PostList from "@/components/PostList";
import { getPostsISR } from "@/lib/posts";

export default async function Page() {
    const posts = await getPostsISR();
    return <PostList posts = {posts} />
}
import PostList from "@/components/PostList";
import { getPostsCached } from "@/lib/posts";

export default async function Page() {
    const posts = await getPostsCached();
    return <PostList posts = {posts} />
}
import { Post } from "@/lib/posts";

export default function PostList({ posts }: { posts: Post[]}) {
    return (
        <ul>
            {posts.map((p) => (
                <li key={p.id}>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                </li>
            ))}
        </ul>
    )

}
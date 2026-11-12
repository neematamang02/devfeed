'use client';

import { useEffect, useState } from 'react';
import PostList from '@/components/PostList';
import { Post } from '@/lib/posts';

export default function Page() {
    const [ posts, setPosts ] = useState<Post[] | null>(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()).then(setPosts);
    }, []);
    if(!posts) {
        return <p>Loading...</p>;
    }
    return <PostList posts={posts} />
}
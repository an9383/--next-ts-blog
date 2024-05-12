// import { posts } from '@/data/posts'
// import PostItem from './PostItem'

// const PostList = () => {
//     return (
//         <div>
//             {posts.map((post) => (
//                 <PostItem key={post.id} post={post} />
//             ))}
//         </div>
//     )
// }

// export default PostList

import React, { useState, useEffect } from 'react'
import { db } from '@/firebase/firebase' // 경로가 정확한지 확인하세요.
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

interface Post {
    id: string
    title: string
    content: string
}

const PostsList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])

    // Firestore에서 모든 글을 가져와 상태로 설정
    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('title')))
            const postsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                title: doc.data().title,
                content: doc.data().content,
            }))
            setPosts(postsData)
        }

        fetchPosts()
    }, [])

    // 글 목록 렌더링
    return (
        <div>
            <h2>Posts List</h2>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    )
}

export default PostsList

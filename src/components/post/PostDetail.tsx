import { Post } from '@/types/types'
import Link from 'next/link'
import React from 'react'

interface PostProps {
    post: Post
}

const PostDetail = ({ post }: PostProps) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <p>{post.content}</p>
            <ul>
                {/* post.tags map() 돌려서 출력 */}
                {/* 태그가 있을 경우에만 map() 돌림 */}
                {post.tags?.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <div>{post.date}</div>
        </div>
    )
}

export default PostDetail

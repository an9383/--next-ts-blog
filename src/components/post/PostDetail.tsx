import type { Post } from '@/types/types'
import Link from 'next/link' // Link 컴포넌트를 임포트합니다.

// PostProps 타입을 정의합니다.
interface PostProps {
    post: Post
}

const PostDetail = ({ post }: PostProps) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <p>{post.date}</p>
            {/* && 연산자를 사용하여 tags가 존재하는 경우에만 출력합니다. */}
            <ul>{post.tags && post.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
        </div>
    )
}

export default PostDetail
import type { Post } from '@/types/types'
import Link from 'next/link'
import styles from '@/styles/Post.module.css'

// PostProps 타입을 정의합니다.
interface PostProps {
    post: Post
}

const PostItem = ({ post }: PostProps) => {
    return (
        <div className={styles.post}>
            {/* 제목을 Link 컴포넌트로 감싸고 href에 동적 경로를 지정합니다. */}
            <h2>
                <Link href={`/post/${post.id}`}>
                    <span className={styles.postTitle}>{post.title}</span>
                </Link>
            </h2>
            <p className={styles.postContent}>{post.content}</p>
            <p className={styles.postDate}>{post.date}</p>
        </div>
    )
}

export default PostItem
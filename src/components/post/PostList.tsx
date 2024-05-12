import { posts } from '@/data/posts'
import PostItem from './PostItem'

const PostList = () => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList

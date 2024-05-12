// import PostItem from '@/components/post/PostItem'
// import PostList from '@/components/post/PostList'
// import React from 'react'

// const PostPage = () => {
//     return (
//         <div>
//             <PostList />
//         </div>
//     )
// }

// export default PostPage

import PostsList from '@/components/post/PostList'

const PostsPage: React.FC = () => {
    return (
        <div>
            <h1>Posts</h1>
            <PostsList />
        </div>
    )
}

export default PostsPage

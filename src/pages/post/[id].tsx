import PostDetail from '@/components/post/PostDetail'
import { posts } from '@/data/posts'
import { Post } from '@/types/types'
import { GetStaticPaths, GetStaticProps } from 'next'

interface PostProps {
    post: Post
}

// 동적 경로 생성 함수
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))
    return { paths, fallback: false }
}

// 동적 경로 데이터 생성 함수

// GetStaticProps는 2개의 인자를 받음
// 첫 번째 인자는 페이지 컴포넌트의 props로 전달될 값
// 두 번째 인자는 페이지 경로의 params를 받음

// getStaticProps 함수의 첫 번째 인자로 params가 전달됨
// params는 getStaticPaths 함수에서 생성한 경로의 params를 가지고 있음
// params.id로 접근해서 id 값을 가져올 수 있음
// id 값으로 해당 포스트를 찾아서 props로 전달

export const getStaticProps: GetStaticProps<PostProps, { id: string }> = async ({ params }) => {
    const post = posts.find((post) => post.id === Number(params?.id))

    if (!post) {
        return { notFound: true }
    }

    return {
        // `props`를 객체로 전달하는 것은 Next.js에서 정적 생성 (getStaticProps) 또는 서버 사이드 렌더링 (getServerSideProps)을 사용할 때 일반적인 패턴입니다
        props: {
            post,
        },
    }
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div>
            <PostDetail post={post} />
        </div>
    )
}

export default Post

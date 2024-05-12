import { GetStaticProps, GetStaticPaths } from 'next'
import { posts } from '@/data/posts' // 가정한 경로
import PostDetail from '@/components/post/PostDetail'
import React from "react";

// PostType 타입을 정의합니다.
interface PostType {
    id: number
    title: string
    content: string
    author: string
    date: string
    tags?: string[]
}

// PostType 타입을 사용하여 PostProps 타입을 정의합니다.
interface PostProps {
    post: PostType
}

// getStaticPaths 함수를 사용하여 동적 경로를 생성합니다.
// async 함수를 사용하여 비동기 처리를 수행합니다.
export const getStaticPaths: GetStaticPaths = async () => {
    // posts 배열의 id 값을 사용하여 동적 경로를 생성합니다.
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
        // id 값을 문자열로 변환하여 params에 저장합니다.
        // 예: { params: { id: '1' } }
    }))

    return {
        paths, // 생성된 동적 경로를 반환합니다.
        fallback: false, // fallback을 false로 설정하여 없는 페이지는 404 페이지를 반환합니다.
    }
}

// getStaticProps 함수를 사용하여 각 동적 경로에 필요한 데이터를 전달합니다.
// async 함수를 사용하여 비동기 처리를 수행합니다.
export const getStaticProps: GetStaticProps<PostProps, { id: string }> = async ({ params }) => {
    // params.id 값을 사용하여 해당 포스트를 찾습니다.
    const post = posts.find((post) => post.id === Number(params?.id))
    // params.id는 문자열이므로 Number로 변환합니다.
    // params가 undefined인 경우를 대비하여 옵셔널 체이닝 연산자(?.)를 사용해 에러를 방지합니다.

    if (!post) {
        return { notFound: true } // 포스트가 없는 경우 404 페이지를 반환
    }

    return {
        props: {
            post,
        },
    }
}

// Post 컴포넌트를 정의합니다.
const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div>
            <h1>Post</h1>
            <PostDetail post={post} />
        </div>
    )
}

export default Post
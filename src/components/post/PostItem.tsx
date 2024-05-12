import { Post } from "@/types/types";
import Link from "next/link"; // Link 컴포넌트를 임포트합니다.

// PostProps 타입을 정의합니다.
interface PostProps {
  post: Post;
}

const PostItem = ({ post }: PostProps) => {
  return (
    <div>
      {/* 제목을 Link 컴포넌트로 감싸고 href에 동적 경로를 지정합니다. */}
      <h2>
        <Link href={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p
        style={{
          whiteSpace: "nowrap",
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {post.content}
      </p>
      <ul>
        {post.tags?.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{post.date}</p>
    </div>
  );
};

export default PostItem;

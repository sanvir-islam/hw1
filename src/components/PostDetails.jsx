export default function PostDetails({ post }) {
  return (
    <div>
      <div>
        <p>
          <span>ID</span>: {post.id}
        </p>
        <p>
          <span>Title</span> : {post.title}
        </p>
      </div>
      <p>
        <span>Body</span>: {post.body}
      </p>
    </div>
  );
}

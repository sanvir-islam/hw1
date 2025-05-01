import "./Post.css";
export default function Post({ id, title }) {
  return (
    <div>
      <h1>
        <span>ID</span>: {id} , <span>Title</span> : {title}
        <br />
        <button onClick={() => (window.location.href = `https://jsonplaceholder.typicode.com/posts/${id}`)}>
          Details
        </button>
        <br />
        <br />
      </h1>
    </div>
  );
}

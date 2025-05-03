import "./Post.module.css";
import "./../index.css";
export default function Post({ id, title }) {
  return (
    <div>
      <h2>
        <p>
          <span>ID</span>: {id} , <span>Title</span> : {title}
        </p>
        <button>
          <a href={`https://jsonplaceholder.typicode.com/posts/${id}`} target="blank">
            Details
          </a>
        </button>
      </h2>
    </div>
  );
}

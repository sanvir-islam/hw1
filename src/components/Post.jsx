import "./Post.module.css";
import "./../index.css";
import PostDetails from "./PostDetails";
import { useState } from "react";
export default function Post({ post }) {
  const [detailsStatus, setDetailsStatus] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "space-around", width: "80vw", height: "10rem" }}>
      <h2 style={{ marginRight: "2rem" }}>
        <p>
          <span>ID</span>: {post.id} , <span>Title</span> : {post.title}
        </p>
        <button onClick={() => setDetailsStatus(!detailsStatus)}>{detailsStatus ? "Cancel" : "Details"}</button>
      </h2>
      <div style={{ width: "800px" }}>{detailsStatus && <PostDetails post={post} />}</div>
    </div>
  );
}

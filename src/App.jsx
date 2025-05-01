import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  function handleUserData(data) {
    const finalData = data.filter((post) => post.id <= 10);
    console.log(finalData);
    setPosts(finalData);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => handleUserData(data));
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Post from "./components/Post";
import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const finalData = data.slice(0, counter);
        setPosts(finalData);
      });
  }, [counter]);

  function handleSetCounter(newCounter) {
    setCounter(newCounter);
  }
  return (
    <>
      <Counter counter={counter} handleSetCounter={handleSetCounter} />
      <hr />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;

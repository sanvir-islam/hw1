import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const finalData = data.filter((post) => post.id <= counter);
        setPosts(finalData);
      });
  }, [counter]);

  function handleIncrement() {
    if (counter === 20) return;
    setCounter((prevCount) => prevCount + 1);
    setPosts([]);
  }
  function handleDecrement() {
    if (counter === 5) return;
    setCounter((prevCount) => prevCount - 1);
    setPosts([]);
  }

  return (
    <>
      <h1>
        Number of posts (5-20) :{" "}
        <span style={{ fontSize: "3rem", width: "30px", display: "inline-block" }}>{counter}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleDecrement}>-</button>
        &nbsp;
        <button onClick={handleIncrement}>+</button>
      </h1>
      <p>--------------------------------------------------------------------------------------------------</p>
      <br />

      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(5); //5-20 limit

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const finalData = data.filter((post) => post.id <= counter);
        setPosts(finalData);
      });
  }, [counter]);

  function handleIncrement() {
    if (counter === 10) return;
    setCounter((prevCount) => prevCount + 1);
  }
  function handleDecrement() {
    // if (counter === 5) return;
    setCounter((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h1>
        Number of posts (1-10) :{" "}
        <span style={{ fontSize: "3rem", width: "30px", display: "inline-block" }}>{counter}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button disabled={counter === 1} onClick={handleDecrement}>
          -
        </button>
        &nbsp;
        <button onClick={handleIncrement}>+</button>
      </h1>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default App;

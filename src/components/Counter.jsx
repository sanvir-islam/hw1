export default function Counter({ counter, handleSetCounter }) {
  function handleIncrement() {
    if (counter === 10) return;
    handleSetCounter(counter + 1);
  }
  function handleDecrement() {
    // if (counter === 1) return;
    handleSetCounter(counter - 1);
  }

  return (
    <h1 style={{ textAlign: "center" }}>
      Number of posts (1-10) :{" "}
      <span style={{ fontSize: "3rem", width: "30px", display: "inline-block" }}>{counter}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button disabled={counter === 1} onClick={handleDecrement}>
        -
      </button>
      &nbsp;
      <button onClick={handleIncrement}>+</button>
    </h1>
  );
}

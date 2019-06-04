import React, { useState } from "react";

const Counter = () => {
  // state = {
  //   count: 0
  // };

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div>
      <div> count: {count} </div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}> reset</button>
    </div>
  );
};

export default Counter;

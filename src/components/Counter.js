import React, { useState, useEffect } from "react";

const Counter = () => {
  // state = {
  //   count: 0
  // };

  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countClicked, setCountClicked] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCountClicked(countClicked + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    setCountClicked(countClicked + 1);
  };

  const reset = () => {
    setCount(0);
    setCountClicked(countClicked + 1);
  };

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item] = data.results;
    setPerson(item);
    setLoading(false);
  }, []);

  return (
    <div>
      <div> count: {count} </div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}> reset</button>
      <p>{countClicked}</p>
      {loading ? <div>loading... </div> : <div>{person.name.first}</div>}
    </div>
  );
};

export default Counter;

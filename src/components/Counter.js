import React, { useState, useEffect } from "react";

const Counter = () => {
  // state = {
  //   count: 0
  // };

  // const [count, setCount] = useState(0);
  // const [person, setPerson] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [countClicked, setCountClicked] = useState(0);

  const [state, setState] = useState({
    count: 0,
    person: null,
    loading: true,
    countClicked: 0
  });

  const increment = () => {
    setState({
      ...state,
      count: state.count + 1,
      countClicked: state.countClicked + 1
    });
  };
  const decrement = () => {
    setState({
      ...state,
      count: state.count - 1,
      countClicked: state.countClicked + 1
    });
  };

  const reset = () => {
    setState({ ...state, count: 0, countClicked: state.countClicked + 1 });
  };

  useEffect(async () => {
    const response = await fetch("https://api.randomuser.me/");
    const data = await response.json();
    const [item] = data.results;
    setState({ ...state, person: item, loading: false });
  }, []);

  return (
    <div>
      <div> count: {state.count} </div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}> reset</button>
      <p>{state.countClicked}</p>
      {state.loading ? (
        <div>loading... </div>
      ) : (
        <div>{state.person.name.first}</div>
      )}
    </div>
  );
};

export default Counter;

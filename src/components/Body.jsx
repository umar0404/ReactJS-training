import React, { useState } from "react";

const Body = () => {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));
  const plus = () => {
    localStorage.setItem("count", count + 1);
    setCount(count + 1);
  };

  const minus = () => {
    // when we set item as NoNprimitive we should include it with JSON.stringify()
    // localStorage.setItem("count", JSON.stringify({ data: count - 1 }));
    localStorage.setItem("count", count - 1);
    setCount(count - 1);
  };
  // when we get item which is type nonprimitive we should include it with JSON.parse()
  // console.log(JSON.parse(localStorage.getItem('count')));
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <button onClick={() => localStorage.removeItem("count")}>
        Delete Count
      </button>
      <button onClick={() => localStorage.clear()}>Clear</button>
    </div>
  );
};

export default Body;

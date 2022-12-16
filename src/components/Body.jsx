import React, { useCallback, useMemo, useState } from "react";
import Navbar from "./Navbar";

const Body = () => {
  const [count, setCount] = useState(0);
  console.log("Parent render");

  const data = useMemo(() => {
    return { title: "Umar" };
  }, []);

  const dataCall = useCallback((param) => {
    return { title: param };
  }, []);

  return (
    <div>
      <Navbar dataCall={dataCall} data={data} />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Body;

// =======================
// =======================

// optimization
// memo => child component, trigger re-render
// memo vs useMome()
// useMemo = > return value
// useCallback => return function
// useCallback vs useMemo

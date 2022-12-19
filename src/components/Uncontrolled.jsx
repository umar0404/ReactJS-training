import React, { useRef } from "react";

export const Uncontrolled = () => {
  const title = useRef("");
  return (
    <div>
      <h1>Uncontrolled</h1>
      <input ref={title} type="text" />
      <button
        onClick={() => { 
          console.log("Uncontrolled", title);
          alert(title.current.value);
        }}>
        alert
      </button>
    </div>
  );
};
export default Uncontrolled;

// =======================
// =======================

// useRef?
// Controlled vs Uncontrolled

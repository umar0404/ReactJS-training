import React, { useState } from "react";

export const Controlled = () => {
  const [title, setTitle] = useState();

  return (
    <div>
      <h1>Controlled: {title}</h1>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};
export default Controlled;

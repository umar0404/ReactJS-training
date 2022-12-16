import React from "react";
import Body from "../components/Body";
import Controlled from "../components/Controlled";
import Uncontrolled from "../components/Uncontrolled";

const Main = () => {
  return (
    <div>
      <Controlled />
      <hr />
      <Uncontrolled />
    </div>
  );
};

export default Main;

import React from "react";
import Friends from "./Friends";
import Department from "./Department";
import Factory from "./Factory";
import Students from "./Students";

const Contex = ({ children }) => {
  return (
    <Friends>
      <Factory>
        <Department>
          <Students>{children}</Students>
        </Department>
      </Factory>
    </Friends>
  );
};

export default Contex;

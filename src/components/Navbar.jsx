import React, { memo } from "react";
import { Container } from "./style";

const Navbar = ({ data, dataCall }) => {
  console.log("Child render");
  return (
    <Container>
      <h1>Students: {data.title} </h1>
      <h1>{dataCall("Umar").title} </h1>
      <h1>Body</h1>
      <h1>About</h1>
    </Container>
  );
};

export default memo(Navbar);

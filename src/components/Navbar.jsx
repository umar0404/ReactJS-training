import React from "react";
import { Friend } from "../contex/Friends";
import { Container } from "./style";

const Navbar = () => {
  const [data] = Friend();
  return (
    <Container>
      <h1>Students: {data.length} </h1>
      <h1>Main</h1>
      <h1>Body</h1>
      <h1>About</h1>
    </Container>
  );
};

export default Navbar;

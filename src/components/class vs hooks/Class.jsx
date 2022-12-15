import React, { useContext } from "react";
import { FriendsContex } from "./contex";
import { Container } from "./style";

const Navbar = () => {
  const [data] = useContext(FriendsContex);
  return (
    <Container>
      <h1>Students: {data.length}</h1>
      <h1>Main</h1>
      <h1>Body</h1>
      <h1>About</h1>
    </Container>
  );
};

export default Navbar;

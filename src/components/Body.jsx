import React from "react";
import { Friend } from "../contex/Friends";

const Body = () => {
  const [friends, setFriends] = Friend();
  const onDelete = (id) => {
    let res = friends.filter((fr) => fr.id !== id);
    setFriends(res);
  };
  return (
    <div>
      <h1>Friends {friends.length} </h1>
      {friends.map((value) => {
        return (
          <h1>
            Name:{value.name}
            <button onClick={() => onDelete(value.id)}>Delete</button>
          </h1>
        );
      })}
    </div>
  );
};

export default Body;

import React, { useContext } from "react";
import { FriendsContex } from "./contex";

const Body = () => {
  const [friends, setFriends] = useContext(FriendsContex);
  const onDelete = (id) => {
    let res = friends.filter((fr) => fr.id !== id);
    setFriends(res);
  };
  return (
    <div>
      <h1>Friends : {friends.length}</h1>
      {friends.map((val) => {
        return (
          <h1>
            Name: {val.name}
            <button onClick={() => onDelete(val.id)}>Delete</button>
          </h1>
        );
      })}
    </div>
  );
};

export default Body;

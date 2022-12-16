import React, { createContext, useState } from "react";

export const FriendsContex = createContext();

const FriendsList = ({ children }) => {
  const [friends, setFriends] = useState([
    { id: 1, name: "Umar", Surname: "Azimov" },
    { id: 2, name: "Elbek", Surname: "Berdaliyev" },
    { id: 4, name: "Doniyot", Surname: "Abdumutalliyev" },
    { id: 3, name: "Botirjon", Surname: "Ataxanov" },
    { id: 5, name: "Qodirali", Surname: "Jurayev" },
  ]);
  return (
    <FriendsContex.Provider value={[friends, setFriends]}>
      {children}
    </FriendsContex.Provider>
  );
};

export default FriendsList;

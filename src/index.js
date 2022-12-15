import React from "react";
import ReactDOM from "react-dom/client";
import FriendsList from "./components/class vs hooks/contex";
import "./index.css";
import Main from "./main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FriendsList>
      <Main />
    </FriendsList>
  </React.StrictMode>
);

// [
//   { id: 1, name: "Umar", Surname: "Azimov" },
//   { id: 2, name: "Elbek", Surname: "Berdaliyev" },
//   { id: 4, name: "Doniyot", Surname: "Abdumutalliyev" },
//   { id: 3, name: "Botirjon", Surname: "Ataxanov" },
//   { id: 5, name: "Qodirali", Surname: "Jurayev" },
// ]

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./root/Root";
import Contex from "./contex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contex>
      <Main />
    </Contex>
  </React.StrictMode>
);

// const [friends, setFriends] = useState([
//   { id: 1, name: "Umar", Surname: "Azimov" },
//   { id: 2, name: "Elbek", Surname: "Berdaliyev" },
//   { id: 4, name: "Doniyot", Surname: "Abdumutalliyev" },
//   { id: 3, name: "Botirjon", Surname: "Ataxanov" },
//   { id: 5, name: "Qodirali", Surname: "Jurayev" },
// ]);

import React from "react";
import ReactDOM from "react-dom/client";
import Render from "./components/Render";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Render />
  </React.StrictMode>
);

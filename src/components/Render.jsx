import React, { Component } from "react";
// import Signin from "./Signin";
// import Signup from "./Signup";

const list = [
  { id: 1, surname: "Azimov", name: "Umar" },
  { id: 2, surname: "Berdaliev", name: "Elbek" },
  { id: 3, surname: "Abdumutalliev", name: "Doniyor" },
  { id: 4, surname: "Jorayev", name: "Qodirali" },
  { id: 5, surname: "Ataxanov", name: "Botirjon" },
];

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      list: list,
    };
  }
  render() {
    const onFilter = (event) => {
      let res = list.filter(
        (value) =>
          value.surname
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          value.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      this.setState({ list: res });
    };

    const onDelete = (id) => {
      let res = this.state.list.filter((val) => val.id !== id);
      this.setState({ list: res });
    };
    return (
      <div>
        <h1>List</h1>
        <input onChange={onFilter} placeholder="search" type="text" />
        {this.state.list.map((value, index) => (
          <div key={value.id}>
            <h1>
              {index + 1}. {value.surname} {value.name}
              <button onClick={() => onDelete(value.id)}>Delete</button>
            </h1>
          </div>
        ))}
      </div>
    );
  }
}

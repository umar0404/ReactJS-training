import React, { Component } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    const getRes = (value) => {
      console.log(value);
      this.setState({ active: value });
    };
    return (
      <div>
        {this.state.active ? (
          <Signup getRes={getRes} />
        ) : (
          <Signin getRes={getRes} />
        )}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Signin extends Component {
  render() {
    return (
      <div>
        <h1>Signin</h1>
        <button onClick={() => this.props.getRes(true)}>Signup</button>
      </div>
    );
  }
}
  
import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <button onClick={() => this.props.getRes(false)}>SignIp</button>
      </div>
    );
  }
}

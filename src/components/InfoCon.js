import React, { Component } from "react";

class InfoCon extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div>
        <h1>General Information</h1>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    );
  }
}

export default InfoCon;

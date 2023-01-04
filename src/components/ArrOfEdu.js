import React, { Component } from "react";
import Education from "./Edu";

export default class ArrayOfEducation extends Component {
  render() {
    const arrOfEdu = this.props.arr;
    const edit = this.props.edit;
    return (
      <>
        {arrOfEdu.map((edu) => (
          <Education key={edu.id} handleEditChange={edit} {...edu} />
        ))}
      </>
    );
  }
}

import React, { Component } from "react";
import EduCon from "./EduCon";

class EduArrCon extends Component {
  render() {
    const eduArr = this.props.arr;
    return (
      <ul>
        {eduArr.map((edu) => {
          const eduProps = {
            school: edu.school,
            study: edu.study,
            startDate: edu.startDate,
            endDate: edu.endDate,
            id: edu.id,
          };
          return (
            <li key={edu.id}>
              <EduCon
                eduProps={eduProps}
                save={this.props.saveOnEdit}
                // handleChange={this.props.handleChange}
                // save={this.props.save}
                delete={this.props.delete}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default EduArrCon;

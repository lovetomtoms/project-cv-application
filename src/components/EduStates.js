import React, { Component } from "react";
import uniqid from "uniqid";

const eduStates = (Edu) => {
  class EduStates extends Component {
    constructor() {
      super();
      this.state = {
        edu: {
          school: "",
          study: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      };
    }

    handleChange = (e) => {
      const targetId = e.target.id;
      switch (targetId) {
        case "school":
          this.setState({
            edu: { ...this.state.edu, school: e.target.value },
          });
          break;
        case "study":
          this.setState({
            edu: { ...this.state.edu, study: e.target.value },
          });
          break;
        case "start-date":
          this.setState({
            edu: { ...this.state.edu, startDate: e.target.value },
          });
          break;
        case "end-date":
          this.setState({
            edu: { ...this.state.edu, endDate: e.target.value },
          });
          break;
        default:
          return;
      }
    };

    resetEdu = () => {
      this.setState({
        edu: {
          school: "",
          study: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      });
    };

    render() {
      return (
        <Edu
          edu={this.state.edu}
          handleChange={this.handleChange}
          resetEdu={this.resetEdu}
          {...this.props}
        />
      );
    }
  }
  return EduStates;
};
export default eduStates;

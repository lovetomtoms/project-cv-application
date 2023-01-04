import React, { Component } from "react";
import Education from "./Edu";
import uniqid from "uniqid";

export default class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormShown: true,
      edu: {
        school: "",
        study: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
      arrOfEdu: [],
    };
  }

  showForm = () => {
    this.setState({ isFormShown: !this.state.isFormShown });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      edu: { ...this.state.edu, [name]: value },
    });
  };

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      arrOfEdu: this.state.arrOfEdu.concat(this.state.edu),
      edu: {
        school: "",
        study: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
    });
    this.showForm();
  };

  handleEditChange = (e, id) => {
    this.setState({
      arrOfEdu: this.state.arrOfEdu.map((edu) => {
        if (edu.id === id) {
          const name = e.target.name;
          const value = e.target.value;
          return { ...edu, [name]: value };
        }
        return edu;
      }),
    });
  };

  render() {
    const show = this.state.isFormShown ? (
      <button onClick={this.showForm}>Add education</button>
    ) : (
      <div>
        <form onSubmit={this.addEducation}>
          <Education {...this.state.edu} handleChange={this.handleChange} />
          <button type="submit">Add</button>
          <button type="button" onClick={this.showForm}>
            Cancel
          </button>
        </form>
      </div>
    );
    return (
      <div>
        <h1>Educational Experience</h1>
        {show}
        <div>
          {this.state.arrOfEdu.map((edu) => (
            <Education
              key={edu.id}
              handleChange={(event) => this.handleEditChange(event, edu.id)}
              {...edu}
            />
          ))}
        </div>
      </div>
    );
  }
}

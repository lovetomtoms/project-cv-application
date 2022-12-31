import React, { Component } from "react";
// import EduFormCon from "./EduFormCon";
// import eduStates from "./EduStates";

class EduCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormShowed: false,
      edu: this.props.eduProps,
    };
  }

  showFormEdu = () => {
    this.setState({
      isFormShowed: true,
    });
  };

  hideFormEdu = () => {
    this.setState({
      isFormShowed: false,
    });
  };

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

  save = (e) => {
    e.preventDefault();
    this.props.save(this.state.edu, this.state.edu.id);
    this.hideFormEdu();
  };

  render() {
    // console.log(this.props.edu);
    const {
      isFormShowed,
      edu: { school, study, startDate, endDate, id },
    } = this.state;
    const {
      school: propSchool,
      study: propStudy,
      startDate: propStartDate,
      endDate: propEndDate,
    } = this.props.eduProps;
    // const isFormShowed = this.state.edit.isFormShowed;
    const buttons = (
      <>
        <button onClick={this.showFormEdu}>Edit</button>
        <button onClick={() => this.props.delete(id)}>Delete</button>
      </>
    );
    const form = (
      <div>
        <form onSubmit={this.save}>
          <div>
            <label htmlFor="school">Enter school name </label>
            <input
              type="text"
              id="school"
              onChange={this.handleChange}
              value={school}
            />
          </div>
          <div>
            <label htmlFor="study">Enter title of study </label>
            <input
              type="text"
              id="study"
              onChange={this.handleChange}
              value={study}
            />
          </div>
          <div>
            <label htmlFor="start-date">Enter start date </label>
            <input
              type="date"
              id="start-date"
              onChange={this.handleChange}
              value={startDate}
            />
          </div>
          <div>
            <label htmlFor="end-date">Enter end date </label>
            <input
              type="date"
              id="end-date"
              onChange={this.handleChange}
              value={endDate}
            />
          </div>
          <button type="submit">Save</button>
          <button onClick={this.hideFormEdu}>Cancel</button>
        </form>
      </div>
    );
    return (
      <>
        <p>{propSchool}</p>
        <p>{propStudy}</p>
        <p>
          {propStartDate} to {propEndDate}
        </p>
        {isFormShowed ? form : buttons}
      </>
    );
  }
}

export default EduCon;

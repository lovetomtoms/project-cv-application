import React, { Component } from "react";

class EduFormCon extends Component {
  render() {
    const handleChange = this.props.handleChange;
    const onSave = this.props.save;
    const onCancel = this.props.cancel;
    const type = this.props.type;
    const showAdd = "Add";
    const showSave = "Save";

    let edu;

    if (type !== "edit") {
      edu = this.props.edu;
    } else {
      edu = this.props.eduProps;
    }
    const { school, study, startDate, endDate } = edu;

    console.log(type);

    return (
      <div>
        <form onSubmit={onSave}>
          <div>
            <label htmlFor="school">Enter school name </label>
            <input
              type="text"
              id="school"
              onChange={handleChange}
              value={school}
            />
          </div>
          <div>
            <label htmlFor="study">Enter title of study </label>
            <input
              type="text"
              id="study"
              onChange={handleChange}
              value={study}
            />
          </div>
          <div>
            <label htmlFor="start-date">Enter start date </label>
            <input
              type="date"
              id="start-date"
              onChange={handleChange}
              value={startDate}
            />
          </div>
          <div>
            <label htmlFor="end-date">Enter end date </label>
            <input
              type="date"
              id="end-date"
              onChange={handleChange}
              value={endDate}
            />
          </div>
          <button type="submit">{type === "add" ? showAdd : showSave}</button>
          <button onClick={onCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default EduFormCon;

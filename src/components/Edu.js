import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { school, study, startDate, endDate, handleChange } = this.props;
    return (
      <>
        <hr />
        <div>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="Enter school name"
            onChange={handleChange}
            value={school}
          />
        </div>
        <div>
          <input
            type="text"
            name="study"
            placeholder="Enter title of study"
            onChange={handleChange}
            value={study}
          />
        </div>
        <div>
          <label htmlFor="start-date">Starting Date: </label>
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            value={startDate}
          />
          <label htmlFor="end-date"> Ending Date: </label>
          <input
            type="date"
            id="end-date"
            name="endDate"
            onChange={handleChange}
            value={endDate}
          />
        </div>
        <hr />
      </>
    );
  }
}

import React, { Component } from "react";

class InfoFormCon extends Component {
  render() {
    const { name, email, handleChange, onSave, hideForm } = this.props;
    return (
      <div>
        <form onSubmit={onSave}>
          <div>
            <label htmlFor="name">Enter name </label>
            <input type="text" id="name" onChange={handleChange} value={name} />
          </div>
          <div>
            <label htmlFor="email">Enter email </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <button type="submit">Save</button>
          <button onClick={hideForm}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default InfoFormCon;

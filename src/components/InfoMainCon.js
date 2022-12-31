import React, { Component } from "react";
import InfoCon from "./InfoCon";
import InfoFormCon from "./InfoFormCon";

class InfoMainCon extends Component {
  constructor() {
    super();
    this.state = {
      isFormShowed: false,
      info: { name: "(Your Name)", email: "(Your Email)" },
    };
  }
  showForm = () => {
    this.setState({
      isFormShowed: true,
    });
  };

  hideForm = () => {
    this.setState({
      isFormShowed: false,
    });
  };

  handleChange = (e) => {
    const id = e.target.id;
    if (id === "name") {
      this.setState({ info: { ...this.state.info, name: e.target.value } });
    }
    if (id === "email") {
      this.setState({ info: { ...this.state.info, email: e.target.value } });
    }
  };

  onSave = (e) => {
    e.preventDefault();
    this.setState({
      isFormShowed: false,
      info: { name: this.state.info.name, email: this.state.info.email },
    });
  };

  render() {
    const props = {
      name: this.state.info.name,
      email: this.state.info.email,
      handleChange: this.handleChange,
      onSave: this.onSave,
      hideForm: this.hideForm,
    };
    const isFormShowed = this.state.isFormShowed;
    const form = <InfoFormCon {...props} />;
    const editButton = <button onClick={this.showForm}>Edit</button>;

    return (
      <div>
        <InfoCon name={props.name} email={props.email} />
        {isFormShowed ? form : editButton}
      </div>
    );
  }
}

export default InfoMainCon;

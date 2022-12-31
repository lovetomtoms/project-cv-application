import React, { Component } from "react";
// import EduFormCon from "./EduFormCon";
import EduArrCon from "./EduArrCon";
// import eduStates from "./EduStates";
import uniqid from "uniqid";

class EduMainCon extends Component {
  constructor() {
    super();
    this.state = {
      isFormShowed: false,
      edu: {
        school: "",
        study: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
      eduArr: [],
    };
  }

  showFormEduMain = () => {
    this.setState({
      isFormShowed: true,
    });
  };

  hideFormEduMain = () => {
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

  saveOnAdd = (e) => {
    e.preventDefault();
    this.setState({
      eduArr: this.state.eduArr.concat(this.state.edu),
      edu: {
        school: "",
        study: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },
    });
    this.hideFormEduMain();
  };

  saveOnEdit = (element, id) => {
    this.setState({
      eduArr: this.state.eduArr.map((edu) => {
        if (edu.id === id) {
          return (edu = {
            school: element.school,
            study: element.study,
            startDate: element.startDate,
            endDate: element.endDate,
            id: element.id,
          });
        } else {
          return edu;
        }
      }),
    });
  };

  onDelete = (id) => {
    this.setState({
      eduArr: this.state.eduArr.filter((edu) => edu.id !== id),
    });
  };

  render() {
    const {
      isFormShowed,
      edu: { school, study, startDate, endDate },
    } = this.state;
    const addButton = (
      <button onClick={this.showFormEduMain}>Add education</button>
    );
    const form = (
      <div>
        <form onSubmit={this.saveOnAdd}>
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
          <button type="submit">Add</button>
          <button onClick={this.hideFormEduMain}>Cancel</button>
        </form>
      </div>
    );
    return (
      <div>
        <h1>Eduational Experience</h1>
        {isFormShowed ? form : addButton}
        <EduArrCon
          arr={this.state.eduArr}
          // handleChange={this.props.handleChange}
          saveOnEdit={this.saveOnEdit}
          delete={this.onDelete}
        />
      </div>
    );
  }
}

export default EduMainCon;

// import React, { Component } from "react";
// import EduFormCon from "./EduFormCon";
// import uniqid from "uniqid";
// import EduArrCon from "./EduArrCon";

// class EduMainCon extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       add: {
//         isFormShowed: false,
//         type: "add",
//       },
//       edu: {
//         school: "",
//         study: "",
//         startDate: "",
//         endDate: "",
//         id: uniqid(),
//       },
//       eduArr: [],
//     };
//   }

//   showFormEduMain = () => {
//     this.setState({
//       add: { isFormShowed: true, type: "add" },
//     });
//   };

//   hideFormEduMain = () => {
//     this.setState({
//       add: { isFormShowed: false, type: "add" },
//     });
//   };

//   handleSchoolChange = (e) => {
//     this.setState({
//       edu: { ...this.state.edu, school: e.target.value },
//     });
//   };

//   handleStudyChange = (e) => {
//     this.setState({
//       edu: { ...this.state.edu, study: e.target.value },
//     });
//   };

//   handleStartDateChange = (e) => {
//     this.setState({
//       edu: { ...this.state.edu, startDate: e.target.value },
//     });
//   };

//   handleEndDateChange = (e) => {
//     this.setState({
//       edu: { ...this.state.edu, endDate: e.target.value },
//     });
//   };

//   saveOnAdd = (e) => {
//     e.preventDefault();
//     this.setState({
//       eduArr: this.state.eduArr.concat(this.state.edu),
//       edu: {
//         school: "",
//         study: "",
//         startDate: "",
//         endDate: "",
//         id: uniqid(),
//       },
//     });
//     this.hideFormEduMain();
//   };

//   saveOnEdit = (e) => {
//     e.preventDefault();
//   };

//   onDelete = (id) => {};

//   render() {
//     const commonMethods = {
//       handleSchoolChange: this.handleSchoolChange,
//       handleStudyChange: this.handleStudyChange,
//       handleStartDateChange: this.handleStartDateChange,
//       handleEndDateChange: this.handleEndDateChange,
//     };
//     const commonProps = {
//       school: this.state.edu.school,
//       study: this.state.edu.study,
//       startDate: this.state.edu.startDate,
//       endDate: this.state.edu.endDate,
//     };
//     const isFormShowed = this.state.add.isFormShowed;
//     const form = (
//       <EduFormCon
//         save={this.saveOnAdd}
//         cancel={this.hideFormEduMain}
//         type={this.state.add.type}
//         cProps={commonProps}
//         cMethods={commonMethods}
//       />
//     );
//     const addButton = (
//       <button onClick={this.showFormEduMain}>Add education</button>
//     );
//     return (
//       <div>
//         <h1>Eduational Experience</h1>
//         {isFormShowed ? form : addButton}
//         <EduArrCon
//           arr={this.state.eduArr}
//           methods={commonMethods}
//           save={this.saveOnEdit}
//           delete={this.onDelete}
//         />
//       </div>
//     );
//   }
// }

// export default EduMainCon;

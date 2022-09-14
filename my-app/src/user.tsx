import * as React from "react";
import UserInterface from "./App";
import "./spinner.css";

export default class UserComponent extends React.Component<UserInterface, {}> {
  //   constructor(props: UserInterface) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        {/* <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div> */}
        <h1>User Component</h1>
        Hello, <b>{this.props.name}</b>
        <br />
        You are <b>{this.props.age} years old</b>
        <br />
        You live at: <b>{this.props.address}</b>
        <br />
        You were born: <b>{this.props.dob.toDateString()}</b>
      </div>
    );
  }
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import UserComponent from "./user";
ReactDOM.render(
  <div>
    <h1>Hello, Welcome to React and TypeScript</h1>
    <UserComponent
      name="John Doe"
      age={26}
      address="87 Summer St, Boston, MA 02110"
      dob={new Date()}
    />
  </div>,
  document.getElementById("root")
);

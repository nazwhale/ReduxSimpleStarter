import React, { Component } from "react";

import BugList from "../containers/bug-list";

export default class App extends Component {
  render() {
    return (
      <div className="app-body">
        <BugList />
      </div>
    );
  }
}

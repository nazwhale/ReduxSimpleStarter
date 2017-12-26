import React, { Component } from "react";
import { connect } from "react-redux";

class BugList extends Component {
  renderList() {
    return this.props.bugs.map(bug => {
      return (
        <li key={bug.summary} className="list-group-item">
          {bug.summary}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    bugs: state.bugs
  };
}

export default connect(mapStateToProps)(BugList);

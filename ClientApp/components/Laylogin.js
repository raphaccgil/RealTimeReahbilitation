import React, { Component } from "react";

export class Laylogin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
          <h1>Test</h1>
          </div>
          <div className="col-sm-9">{this.props.children}</div>
        </div>
      </div>
    );
  }
}


import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class NavMenu extends Component {
  constructor(props) {
    super(props);
    console.log("Verificar");
  }
  render() {
    return (
      <div className="main-nav">
        <div className="navbar navbar-inverse">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to={"/"}>
              WebAPP_Reahb_Server
            </Link>
          </div>
          <div className="clearfix" />
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to={"/home"} exact activeClassName="active">
                  <span className="glyphicon glyphicon-home" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/graphdata"} activeClassName="active">
                  <span className="glyphicon glyphicon-th-list" /> Graph data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

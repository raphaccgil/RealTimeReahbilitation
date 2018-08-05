import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import {Laylogin} from "./Laylogin"
import '../css/login.css'

export class Mylogin extends Component {
   constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
        <div className="center">
            <div className="card">
                <Laylogin/>
                <h1>Login</h1>
                <h2></h2>
                <form>
                    <input
                        className="form-item"
                        placeholder="Username goes here..."
                        name="username"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-item"
                        placeholder="Password goes here..."
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-submit"
                        value="Enviar"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}

handleChange(e){
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
}
}



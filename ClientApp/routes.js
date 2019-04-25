import React, { Component } from "react";
import { Switch, Router, Route, browserHistory, hashHistory } from "react-router-dom";
import { Layout11 } from "./components/Layout";
import { Layout21 } from "./components/Laylogin";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Graph } from "./components/graph/Graph";
import { Mylogin } from "./components/Mylogin";
import { NavMenu } from "./components/NavMenu";
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

export const routes = (
  <Router history={newHistory}>
    <div>
    <Switch>
          {/* <Route exact path="/" component={Mylogin}/> */}
          <Route path="/home" component={Home}/>
          <Route path="/graphdata" component={Graph}/>
    </Switch>
    </div>
  </Router>
);

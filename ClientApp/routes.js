import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Graph } from "./components/graph/Graph";
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

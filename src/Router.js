import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = () => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/blog/:title/:issueNumber" component={BlogPost} />
      </Switch>
    </HashRouter>
  );
};

export default Router;

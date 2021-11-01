import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/Home";
import Page404 from "pages/404";
import Character from "pages/Character";
import Search from "pages/Search";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/characterDetail/:id" component={Character} />
      <Route path="/search/:props" component={Search} />
      <Route exact path="/404" component={Page404} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};

export default App;

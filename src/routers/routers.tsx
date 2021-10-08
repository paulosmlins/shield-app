import React from "react";
import Home from "../pages/Home";
import Character from "pages/Character";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/CharacterDetail/:id" component={Character} />
      </Switch>
    </Router>
  );
};

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NavBar from "./components/NavBar";
import './App.css';

class App extends Component {

  render() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/noMatch" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
  };
};

export default App;

import React, { component } from "react";
import Login from "./components/Login/Login.js";
import "./style.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/signup/signup";
import Homepage from "./components/StudentPortal/Homepage.js";
import About from "./components/About/about.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={() => <p>This is our homepage</p>} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/student-portal" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;

import React, { component } from "react";
import Login from "./components/Login/Login.js";
import "./style.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Homepage from "./components/StudentPortal/Homepage.js";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <p>This is our homepage</p>} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/student-portal" component={Homepage} />
      </Switch>
      {/* <Login /> */}
    </div>
  );
}

export default App;

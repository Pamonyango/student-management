import React, { component } from "react";
import Login from "./components/Login";
import SignIn from "./components/signin";
import "./style.css";

function App() {
  return (
    <div>
      <Login />
      <p>student management</p>
      <SignIn />
    </div>
  );
}

export default App;

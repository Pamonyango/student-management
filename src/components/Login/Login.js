import React from "react";
import Nav from "../Nav";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  // some handler fuctions --> (build using arrow functions to avoid binding issues)

  handleSubmit = () => this.props.history.push("/student-portal");

  render() {
    return (
      <div className="container login-container">
        <div className="card card-login mx-auto text-center bg-dark">
          <div className="card-header mx-auto bg-dark">
            <span>
              <img
                src="https://amar.vote/assets/img/amarVotebd.png"
                className="w-75"
                alt="Logo"
              />
            </span>
            <br />
            <span className="logo_title mt-5"> Login Dashboard </span>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="btn"
                  defaultValue="Login"
                  className="btn btn-outline-danger float-right login_btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

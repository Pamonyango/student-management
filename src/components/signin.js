import React, { Component } from "react";

class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idNumber: null,
      tscNumber: null
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({
      idNumber: event.target.name
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.idNumber);
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Log in</legend>
          <label>
            Id Number:
            <input onChange={this.handleChange} type="number" />
          </label>
          <label>
            TSC Number:
            <input type="number" />
          </label>
        </fieldset>
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default signIn;

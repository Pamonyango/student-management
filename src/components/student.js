import React from "react";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admissionNumber: null,
      class: null
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({
      admissionNumber: event.target.name
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.admissionNumber);
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend> Enter </legend>
          <label>
            Admission Number:
            <input onChange={this.handleChange} type="number" />
          </label>
          <label>
            class:
            <input type="number" />
          </label>
        </fieldset>
        <button type="submit"> Enter </button>
      </form>
    );
  }
}

export default Student;

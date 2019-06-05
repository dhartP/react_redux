import React, { Component } from "react";
import { newTodo } from "../actions/todoActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TodoForm extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newData = {
      title: this.state.title
    };
    this.props.newTodo(newData);
  };

  render() {
    return (
      <div>
        <h1>Todo Form</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter Todo"
            onChange={this.onChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  newTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { newTodo }
)(TodoForm);

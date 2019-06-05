import React, { Component } from "react";
import { fetchTodos } from "../actions/todoActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Todo extends Component {
  //   state = {
  //     todos: []
  //   };
  componentDidMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo);
    }
  }
  render() {
    const todoItems = this.props.todos.map(todo => (
      <div key={todo.id}>
        <h3>{todo.title}</h3>
      </div>
    ));
    return <div>{todoItems}</div>;
  }
}

Todo.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object
};

const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item
});

export default connect(
  mapStateToProps,
  { fetchTodos }
)(Todo);

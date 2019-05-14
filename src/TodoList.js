import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    const todoElements = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem title={todo.title} completed={todo.completed} />
      </li>
    ));
    return <ul>{todoElements}</ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
};

import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { todos, onUpdateTodo, onDeleteTodo, onToggleTodo } = this.props;

    const todoElements = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onUpdate={content => onUpdateTodo && onUpdateTodo(todo.id, content)}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={completed =>
            onToggleTodo && onToggleTodo(todo.id, completed)
          }
        />
      </li>
    ));
    return <ul>{todoElements}</ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func
};

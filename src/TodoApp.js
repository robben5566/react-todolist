import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import InputField from "./InputField";

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex(todo => todo.id === id);
  if (idx !== -1) {
    todos.splice(idx, 1);
  }
  return todos;
};

const _toggleTodo = (todos, id, completed) => {
  const target = todos.find(todo => todo.id === id);
  if (target) {
    target.completed = completed;
  }
  return todos;
};

const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};

const _updateTodo = (todos, id, title) => {
  const target = todos.find(todo => todo.id === id);
  if (target) {
    target.title = title;
  }
  return todos;
};

export default class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: [
        { id: 0, title: "Item 1", completed: true },
        { id: 1, title: "Item 2", completed: true },
        { id: 2, title: "Item 3", completed: false }
      ]
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoHeader
          title="挖操"
          username="Fuck"
          todoCount={todos.filter(todo => !todo.completed).length}
        />
        <InputField
          placeholder="你還有什麼事沒做完啦"
          // onSubmitEditing={title =>
          //   this.setState({ todos: _createTodo(todos, title) })
          // }
        />
        <TodoList
          todos={todos}
          onDeleteTodo={id => this.setState({ todos: _deleteTodo(todos, id) })}
          onToggleTodo={(id, completed) =>
            this.setState({ todos: _toggleTodo(todos, id, completed) })
          }
          onUpdateTodo={(id, title) =>
            this.setState({ todos: _updateTodo(todos, id, title) })
          }
        />
      </>
    );
  }
}

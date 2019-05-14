import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import InputField from "./InputField";

const todos = [
  { id: 0, title: "Item 1", completed: true },
  { id: 1, title: "Item 2", completed: true },
  { id: 2, title: "Item 3", completed: false }
];
export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoHeader
          title="挖操"
          username="Fuck"
          todoCount={todos.filter(todo => !todo.completed).length}
        />
        <InputField placeholder="你還有什麼事沒做完啦" />
        <TodoList todos={todos} />
      </div>
    );
  }
}

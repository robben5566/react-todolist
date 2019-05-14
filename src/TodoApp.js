import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import InputField from "./InputField";

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoHeader title="挖操" username="Fuck" todoCount={999} />
        <InputField placeholder="你還有什麼事沒做完啦" />
        <TodoList />
      </div>
    );
  }
}

import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>
          <TodoItem title="Item 1" completed={true} />
        </li>
        <li>
          <TodoItem title="Item 2" completed={true} />
        </li>
        <li>
          <TodoItem title="Item 3" completed={false} />
        </li>
      </ul>
    );
  }
}

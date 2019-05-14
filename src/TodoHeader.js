import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoHeader extends Component {
  render() {
    const { title, username, todoCount } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>
          哈囉，{username}：你居然有 {todoCount} 項未完成待辦事項
        </span>
      </div>
    );
  }
}

TodoHeader.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  todoCount: PropTypes.number
};

TodoHeader.defaultProps = {
  title: "Title",
  username: "Guest",
  todoCount: 0
};

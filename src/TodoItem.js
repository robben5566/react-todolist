import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  render() {
    const { title, completed } = this.props;

    return (
      <div>
        <input type="checkbox" checked={completed} />
        <span>{title}</span>
        <button>x</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

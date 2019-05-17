import React, { useState, Component } from "react";
import InputField from "./InputField";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { editable: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({ editable: !this.state.editable });
  }

  renderViewMode() {
    const { completed, onDelete, onToggle } = this.props;
    return (
      <>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => onToggle && onToggle(!completed)}
        />
        <span onDoubleClick={this.toggleEditMode}>{this.props.title}</span>
        <button onClick={() => onDelete && onDelete()}>x</button>
      </>
    );
  }

  renderEditMode() {
    const { title, onUpdate } = this.props;

    return (
      <InputField
        autoFocus
        placeholder="編輯拉幹"
        value={title}
        onBlur={this.toggleEditMode}
        onKeyDown={e => {
          if (e.keyCode === 27) {
            e.preventDefault();
            this.toggleEditMode();
          }
        }}
        // onSubmitEditing={content => {
        //   onUpdate && onUpdate(content);
        //   this.toggleEditMode();
        // }}
      />
    );
  }

  render() {
    return this.state.editable ? this.renderEditMode() : this.renderViewMode();
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
};

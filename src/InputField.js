import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InputField extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: props.value || "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    const { onKeyDown, onSubmitEditing } = this.props;
    const { value } = this.state;
    switch (e.keyCode) {
      case 13:
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value);
        }
        this.setState({ value: "" });
        break;
      default:
        break;
    }
    onKeyDown && onKeyDown(e);
  }
  render() {
    return (
      <input
        type="text"
        {...this.props}
        value={this.state.value}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
      />
    );
  }
}
InputField.propTypes = {
  onSubmitEditing: PropTypes.func
};

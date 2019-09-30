import React, { Component } from "react";
import "./button.css";

export class Button extends Component {
  render() {
    const buttonText = this.props.buttonText;
    const clickHandler = this.props.onClick;
    return (
      <div className="button">
        <button className="btn" onClick={() => clickHandler()}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Button;

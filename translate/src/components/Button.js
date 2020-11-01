import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

export default class Button extends Component {
  renderValue = (value) => {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{this.renderValue}</LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {this.renderButton}
      </ColorContext.Consumer>
    );
  }
}

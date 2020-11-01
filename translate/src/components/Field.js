import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Field extends Component {
  renderName(value) {
    return value.language === "english" ? "Name" : "Naam";
  }

  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>{this.renderName}</LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

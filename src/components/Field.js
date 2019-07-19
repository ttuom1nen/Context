import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "Nimi";

    return (
      <div>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

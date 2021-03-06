import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="eigth wide column centered m4">
          <LanguageStore>
            <ColorContext.Provider value="primary">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
      </div>
    );
  }
}

export default App;

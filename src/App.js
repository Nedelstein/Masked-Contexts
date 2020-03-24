import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingText from "./components/LandingText";
import LandingTypeWriter from "./components/LandingTypewriter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title-text">Masked Contexts</div>
        <LandingText></LandingText>
        <LandingTypeWriter></LandingTypeWriter>
      </header>
    </div>
  );
}

export default App;

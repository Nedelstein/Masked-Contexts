import React, { useState } from "react";
import "./App.css";
import LandingText from "./components/LandingText";
import LandingTypeWriter from "./components/LandingTypewriter";
import Burger from "./components/Burger";
import Menu from "./components/Menu";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Title-text">Masked Contexts</div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <LandingText />
        <LandingTypeWriter />
      </header>
    </div>
  );
}

export default App;

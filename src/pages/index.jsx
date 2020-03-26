import React, { useState } from "react";
import LandingText from "../components/LandingText";
import LandingTypeWriter from "../components/LandingTypewriter";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import LandingMasonry from "../components/LandingMasonry";

const MainPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="App-header">
        <div className="Title-text">Masked Contexts</div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <LandingText />
        <LandingTypeWriter />
        <LandingMasonry />
      </header>
    </div>
  );
};

export default MainPage;

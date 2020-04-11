import React, { useState, useRef } from "react";

//components
import LandingText from "../components/LandingText";
import LandingTypeWriter from "../components/LandingTypewriter";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import LandingMasonry from "../components/LandingMasonry";
import { useOnClickOutside } from "../hooks";
import FocusLock from "react-focus-lock";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <header className="App-header">
        <div className="emptyBox">
          <div className="Title-text">Masked Contexts</div>
        </div>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
        {/* <LandingText /> */}
        <LandingTypeWriter />
        <LandingMasonry></LandingMasonry>
      </header>
    </div>
  );
};

export default MainPage;

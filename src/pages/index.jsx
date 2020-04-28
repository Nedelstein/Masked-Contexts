import React, { useState, useRef, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";
import ScaleLoader from "react-spinners/ScaleLoader";

import LandingTypeWriter from "../components/LandingTypewriter";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import LandingMasonry from "../components/LandingMasonry";
import { useOnClickOutside } from "../hooks";
import FocusLock from "react-focus-lock";
// import NavBar from "../components/NavBar";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [active, isActive] = useState(true);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    setTimeout(() => {
      isActive(false);
    }, 1500);
  }, []);

  window.addEventListener(
    "unload",
    () => {
      isActive(true);
      // console.log("loaded");
    },
    false
  );

  const spinnerStyle = {
    display: "block",
    margin: "0, auto",
    paddingBottom: "15px",
  };

  return (
    <>
      <LoadingOverlay
        active={active}
        spinner={<ScaleLoader css={spinnerStyle} size={100} color={"#fff"} />}
        fadeSpeed={1000}
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(0,0,0,1)",
          }),

          content: (base) => ({
            ...base,
            fontFamily: "Big Caslon",
            marginTop: "30%",
            left: "50%",
          }),
        }}
        text="hang tight i'm loading"
      >
        <div ref={node}>
          <div style={{ display: "block" }}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <header className="App-header">
            <a href="/">
              <div className="Title-text">Masked Contexts</div>
            </a>
            <LandingMasonry></LandingMasonry>
            <LandingTypeWriter />
          </header>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default MainPage;

import React, { useState, useRef, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useOnClickOutside } from "../hooks";

import LandingTypeWriter from "../components/LandingTypewriter";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import LoadingOverlayText from "../components/LoadingOverlayText";

const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [active, isActive] = useState(true);
  const [page, switchPage] = useState(true);

  const node = useRef();

  useEffect(() => {
    setTimeout(() => {
      isActive(false);
    }, 1500);
  }, []);

  window.addEventListener(
    "unload",
    () => {
      isActive(true);
    },
    false
  );

  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  const spinnerStyle = {
    display: "block",
    margin: "0, auto",
    paddingBottom: "15px",
  };

  function changePageState() {
    switchPage(false);
    window.scrollTo(0, 0);
  }

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
            // background: "#fedcd2",
          }),

          content: (base) => ({
            ...base,
            fontFamily: "Rokkitt-Medium",
            // marginTop: "30%",
            marginTop: "35%",
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
            {page ? (
              <LoadingOverlayText buttonClick={() => changePageState()} />
            ) : (
              <>
                <a href="/">
                  <div className="Title-text">Masked Contexts</div>
                </a>
                <LandingTypeWriter />
              </>
            )}
          </header>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default MainPage;

import React, { useRef, useState, useEffect } from "react";
import LandingMasonry from "../components/LandingMasonry";
import LoadingOverlay from "react-loading-overlay";
import ScaleLoader from "react-spinners/ScaleLoader";

const MainPage = () => {
  // const [open, setOpen] = useState(false);
  const node = useRef();
  const [active, isActive] = useState(true);
  // const menuId = "main-menu";
  // useOnClickOutside(node, () => setOpen(false));

  const comingSoonStyle = {
    position: "fixed",
    fontFamily: "Big Caslon",
    fontWeight: "bold",
    fontSize: "32px",
    textAlign: "center",
    backgroundColor: "yellow",
    color: "black",
    zIndex: "10",
    padding: "5px",
    transform: "translate(-50%,-50%)",
    left: "50%",
    top: "50%",
  };

  const spinnerStyle = {
    display: "block",
    margin: "0 auto",
    paddingBottom: "15px",
  };

  useEffect(() => {
    setTimeout(() => {
      isActive(false);
    }, 1500);
  }, []);

  return (
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
        <header className="App-header">
          <div className="emptyBox">
            <a href="/">
              <div className="Title-text">Masked Contexts</div>
            </a>
          </div>
          <p style={comingSoonStyle}>COMING SOON</p>
          <LandingMasonry></LandingMasonry>
        </header>
      </div>
    </LoadingOverlay>
  );
};

export default MainPage;

import React, { useRef } from "react";
import LandingMasonry from "../components/LandingMasonry";

const MainPage = () => {
  // const [open, setOpen] = useState(false);
  const node = useRef();
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

  return (
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
  );
};

export default MainPage;

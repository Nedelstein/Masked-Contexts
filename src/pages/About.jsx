import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const About = () => {
  const [open, setOpen] = useState(false);

  const textStyle = {
    position: "fixed",
    color: "white",
    fontFamily: "Big Caslon",
    fontWeight: "normal",
    fontSize: "24px",
    textAlign: "left",
    lineHeight: "36px",
    justifyContent: "center",
    top: "30%",
    left: "10%",
    width: "33%",
  };

  return (
    <header className="App-header">
      <a href="/">
        <div className="Title-text">Masked Contexts</div>
      </a>{" "}
      <div style={textStyle}>
        Masked Contexts is an exploration into the MS-COCO image dataset and a
        dialogue with the photographers whose images were scraped by the
        dataset’s authors without their knowledge or consent.
      </div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </header>
  );
};

export default About;

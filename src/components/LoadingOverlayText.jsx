import React from "react";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";

import LandingMasonry from "./LandingMasonry";

const EnterButton = styled.button`
  color: white;
  background-color: black;
  font-family: Courier;
  font-size: 1.7rem;
  text-align: center;
  line-height: 33px;
  letter-spacing: 0.1rem;
  transform: translate(-50%, 0%);
  margin-top: 3.5%;
  margin-left: 50%;
  margin-bottom: 6%;
  width: auto;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border: 0.1px solid white;
  z-indez: 1;
  transition: 200ms color linear, 200ms background-color linear;
  cursor: help;
  @media only screen and (max-device-width: 500px) {
    font-size: 1rem;
    line-height: 22px;
  }
  &:hover {
    background-color: cyan;
    color: red;
  }
  ,

`;

const LoadingOverlayText = (props) => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  let textSize, textLineHeight, textMarginTop, textWidth;
  if (isMobileDevice) {
    textSize = "12px";
    textLineHeight = "24px";
    textMarginTop = "5%";
    textWidth = "90%";
  } else {
    textSize = "16px";
    textLineHeight = "30px";
    textMarginTop = "1%";
    textWidth = "50%";
  }

  const textStyle = {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.9)",
    fontFamily: "RobotoMono",
    fontSize: textSize,
    textAlign: "center",
    lineHeight: textLineHeight,
    transform: "translate(-50%, 0%)",
    marginTop: textMarginTop,
    marginLeft: "50%",
    //   marginBottom: "6%",
    width: textWidth,
    padding: "5px",
    zIndex: "1",
  };

  function fadeAndSwitch() {
    document.getElementById("openingText").classList.add("fade-exit");

    setTimeout(() => {
      document.getElementById("landingMasonry").classList.add("fade-exit");
    }, 2000);

    setTimeout(() => {
      props.buttonClick();
    }, 2500);
  }

  return (
    <>
      <span id="landingMasonry">
        <LandingMasonry></LandingMasonry>
      </span>
      {/* <header className="App-header"> */}
      <div id="openingText" style={{ width: "100%" }}>
        <a href="/">
          <div className="Title-text-landing">Masked Contexts</div>
        </a>

        {/* </header> */}
        <div>
          <p style={textStyle}>
            An exploration into the COCO dataset and a dialogue with the
            photographers whose images were scraped by the dataset's authors
            without their knowledge or consent
          </p>
        </div>
        <EnterButton onClick={() => fadeAndSwitch()}>Enter</EnterButton>
      </div>
    </>
  );
};

export default LoadingOverlayText;

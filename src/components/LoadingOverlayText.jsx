import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import LandingMasonry from "./LandingMasonry";

const textStyle = {
  color: "white",
  backgroundColor: "rgba(0,0,0,0.9)",
  fontFamily: "RobotoMono",
  fontSize: "16px",
  textAlign: "left",
  lineHeight: "30px",
  transform: "translate(-50%, 0%)",
  marginTop: "2%",
  marginLeft: "50%",
  //   marginBottom: "6%",
  width: "60%",
  padding: "12px",
  zIndex: "1",
};

const buttonStyle = {
  color: "white",
  backgroundColor: "black",
  fontFamily: "RobotoMono",
  fontSize: "1.7rem",
  textAlign: "center",
  lineHeight: "33px",
  letterSpacing: "0.05rem",
  transform: "translate(-50%, 0%)",
  marginTop: "2%",
  marginLeft: "50%",
  marginBottom: "6%",
  width: "auto",
  paddingLeft: "18px",
  paddingRight: "18px",
  border: "none",
  zIndex: "1",
};

const LoadingOverlayText = (props) => {
  const [appear, setAppear] = useState(true);

  function fadeAndSwitch() {
    document.getElementById("openingText").classList.add("fade-exit");

    setTimeout(() => {
      document.getElementById("landingMasonry").classList.add("fade-exit");
    }, 2500);

    setTimeout(() => {
      props.buttonClick();
    }, 3000);
  }

  return (
    <>
      <span id="landingMasonry">
        <LandingMasonry></LandingMasonry>
      </span>
      {/* <CSSTransition in={appear} appear={true} timeout={1000} classNames="fade"> */}
      <div id="openingText" style={{ marginTop: "10%" }}>
        <p style={textStyle}>
          Masked Contexts is an exploration into the COCO dataset and a dialogue
          with the photographers whose images were scraped by the dataset’s
          authors without their knowledge or consent. Email correspondence
          paired with the photographers' original images, the segmented masks
          and captions that they have been transformed into, and the
          photographers' possible reappropriations of their photos, all come
          together to present a multi-layered glimpse into the process of
          converting personal images into universal pieces of big data.
        </p>
        <p style={textStyle}>
          The COCO (common objects in context) dataset contains 330,000 photos
          scraped from Flickr, many of which are intimate photos uploaded by
          ameature photohraphers for personal use. Image datasets like COCO are
          often used to train surveillance technologies, amongst other computer
          vision programs.
        </p>
        <p style={textStyle}>
          These conversations can be viewed by clicking on the quotes you are
          about to see.
        </p>
        <p style={textStyle}>
          All images shown on this site are from this public dataset.
        </p>
        <button onClick={() => fadeAndSwitch()} style={buttonStyle}>
          Enter
        </button>
      </div>
      {/* </CSSTransition> */}
    </>
  );
};

export default LoadingOverlayText;

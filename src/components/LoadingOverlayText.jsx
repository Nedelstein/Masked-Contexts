import React from "react";
import styled from "styled-components";

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

const EnterButton = styled.button`
  color: white;
  background-color: black;
  font-family: Courier;
  font-size: 1.7rem;
  text-align: center;
  line-height: 33px;
  letter-spacing: 0.1rem;
  transform: translate(-50%, 0%);
  margin-top: 2%;
  margin-left: 50%;
  margin-bottom: 6%;
  width: auto;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border: 0.1px solid white;
  z-indez: 1;
  transition: 200ms color linear, 200ms background-color linear ;
  cursor: help;
  &:hover {
    background-color: cyan;
    color: red;
  },
`;

const LoadingOverlayText = (props) => {
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
      <div id="openingText" style={{ marginTop: "6%" }}>
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
          often used to train surveillance technologies, amongst other types of
          computer vision programs.
        </p>
        <p style={textStyle}>
          Conversations can be viewed by clicking on the quotes you are about to
          see. Parts of these conversations were lost as a result of Flickr
          terminating some of my accounts.
        </p>
        <p style={textStyle}>
          All images shown on this site are from this public dataset.
        </p>
        <EnterButton onClick={() => fadeAndSwitch()}>Enter</EnterButton>
      </div>
    </>
  );
};

export default LoadingOverlayText;

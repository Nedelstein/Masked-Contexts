import React, { useState } from "react";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import Burger from "../components/Burger";
import Menu from "../components/Menu";

import SpeakText from "../components/SpeakText";
import { typeText, clearText } from "../components/TextIsTyping";

const json = require("../assets/masks_filenames_captions.json");

const ModalStyle = {
  content: {
    transform: "translate(-50%, -50%)",
    top: "50%",
    right: "auto",
    bottom: "auto",
    width: "100vw",
    height: "100vh",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "0",
    paddingBottom: "0",
    left: "50%",
    backgroundColor: "rgba(0,0,0,.9)",
    // backgroundColor: "#fedcd2",
    border: "none",
  },
};

const headerStyle = {
  display: "inline-block",
  position: "relative",
  // background-color: rgba(67, 3, 84, 1);
  color: "white",
  marginTop: "33vh",
  marginLeft: "50%",
  transform: "translate(-50%, 0%)",
  textAlign: "center",
  // width: auto;
  fontFamily: "Courier",
  overflow: "hidden",
  textTransform: "uppercase",
  fontSize: "42px",
  // letterSpacing: "0.07em",
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
  margin-top: 3%;
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

const IMG = (imgName) => {
  return require(`../assets/images/masks/image_masks/${imgName}`);
};

let filenames = [];
let captions = [];

const Mask = () => {
  const [open, setOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  let imgDivMargin,
    imgStylePadding,
    imgStyleWidth,
    imgStyleHeight,
    pageMarginTop;

  let textSize, textLineHeight, textMarginTop, textWidth;
  let gridColCount;

  if (isMobileDevice) {
    imgDivMargin = "0.5%";
    imgStylePadding = "1%";
    imgStyleWidth = "132px";
    imgStyleHeight = "72px";
    pageMarginTop = "15%";
    textSize = "12px";
    textLineHeight = "24px";
    textMarginTop = "50%";
    textWidth = "90%";
    gridColCount = "3";
  } else if (isBigScreen) {
    imgDivMargin = "1%";
    imgStyleWidth = "330px";
    imgStyleHeight = "180px";
    pageMarginTop = "2.5%";
    textSize = "22px";
    textLineHeight = "35px";
    textMarginTop = "5";
    textWidth = "50%";
    gridColCount = "10";
  } else {
    imgDivMargin = "1%";
    imgStyleWidth = "220px";
    imgStyleHeight = "120px";
    pageMarginTop = "2.5%";
    textSize = "16px";
    textLineHeight = "30px";
    textMarginTop = "3%";
    textWidth = "50%";
    gridColCount = "6";
  }

  const MaskPageStyle = {
    display: "block",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "#430354",
    overflow: "auto",
    marginTop: pageMarginTop,
  };

  const ImgDivStyle = {
    display: "inline-block",
    // position: "fixed",
    alignItems: "center",
    margin: "0%",
    overflow: "hidden",
    // cursor: "help",
  };

  const gridStyle = {
    // lineHeight: "0",
    columnCount: gridColCount,
    columnGap: "10px",
    backgroundColor: "#430354",
    overflow: "hidden",
  };

  const imgStyle = {
    // margin: "12%",
    // padding: imgStylePadding,
    // width: imgStyleWidth,
    // height: imgStyleHeight,
    width: "90%",
    height: "auto",
    marginTop: "5px",
    // overflow: "hidden",
  };

  const textStyle = {
    color: "white",
    // backgroundColor: "rgba(0,0,0,0.9)",
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

  const masksGrid = new Array(json.length).fill().map((item, i) => {
    filenames.push(json[i].filename);
    captions.push(json[i].caption);
    return (
      <>
        {/* <div className="maskImgs" style={ImgDivStyle} key={i}> */}
        <img
          style={imgStyle}
          className="maskImgs"
          id={filenames[i]}
          src={IMG(filenames[i])}
          alt="whoops"
          onMouseOver={() => {
            SpeakText(captions[i]);
            setTimeout(() => typeText(captions[i]), 300);
          }}
          onMouseLeave={() => {
            speechSynthesis.cancel();
            typeText("");
            clearText();
          }}
        ></img>
        {/* </div> */}
      </>
    );
    // };
  });

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#430354" }}
    >
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel={"conversation"}
        htmlOpenClassName={"ReactModal__Html--open"}
        bodyOpenClassName={"ReactModal__Body--open"}
      >
        <div style={{ width: "100%" }}>
          <div style={headerStyle}>Masks & Captions</div>
          <p style={textStyle}>
            The COCO metadata provides annotations for each image in two forms,
            masks and captions. Both of these methods of annotation were made by
            hired Amazon Mechanical Turks and are showcased here.
          </p>
          <EnterButton onClick={closeModal}>Enter</EnterButton>
        </div>
      </Modal>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div id="maskTextDiv"></div>
      <section style={gridStyle}>{masksGrid}</section>
    </div>
  );
};
export default Mask;

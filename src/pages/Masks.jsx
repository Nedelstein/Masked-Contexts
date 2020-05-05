import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import { useMediaQuery } from "react-responsive";

import SpeakText from "../components/SpeakText";
import { typeText, clearText } from "../components/TextIsTyping";

const json = require("../assets/masks_filenames_captions.json");

const IMG = (imgName) => {
  return require(`../assets/images/masks/image_masks/${imgName}`);
};

let filenames = [];
let captions = [];

const Mask = () => {
  const [open, setOpen] = useState(false);
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  let imgDivMargin,
    imgStylePadding,
    imgStyleWidth,
    imgStyleHeight,
    pageMarginTop;

  if (isMobileDevice) {
    imgDivMargin = "0.5%";
    imgStylePadding = "1%";
    imgStyleWidth = "132px";
    imgStyleHeight = "72px";
    pageMarginTop = "15%";
  } else {
    imgDivMargin = "1%";
    imgStyleWidth = "220px";
    imgStyleHeight = "120px";
    pageMarginTop = "2.5%";
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
    margin: imgDivMargin,
    overflow: "hidden",
    cursor: "help",
  };

  const imgStyle = {
    // margin: "12%",
    padding: imgStylePadding,
    width: imgStyleWidth,
    height: imgStyleHeight,
  };

  const masksGrid = new Array(json.length).fill().map((item, i) => {
    filenames.push(json[i].filename);
    captions.push(json[i].caption);
    return (
      <>
        <div className="maskImgs" style={ImgDivStyle} key={i}>
          <img
            id={filenames[i]}
            style={imgStyle}
            src={IMG(filenames[i])}
            alt="whoops"
            onMouseEnter={() => {
              SpeakText(captions[i]);
              setTimeout(() => typeText(captions[i]), 350);
            }}
            onMouseLeave={() => {
              speechSynthesis.cancel();
              clearText();
            }}
          ></img>
        </div>
      </>
    );
    // };
  });

  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#430354" }}
    >
      <div id="maskTextDiv"></div>
      <div style={MaskPageStyle}>{masksGrid}</div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};
export default Mask;

import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

import SpeakText from "../components/SpeakText";
import { typeText, clearText } from "../components/TextIsTyping";

const json = require("../assets/masks_filenames_captions.json");

// let imgDiv;

let textDiv;

const MaskPageStyle = {
  display: "block",
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#430354",
  overflow: "auto",
};

const ImgDivStyle = {
  display: "inline-block",
  // position: "fixed",
  alignItems: "center",
  margin: "1%",
  overflow: "hidden",
};

const imgStyle = {
  // margin: "12%",
  padding: "3%",
  width: "220px",
  height: "120px",
};

const IMG = (imgName) => {
  return require(`../assets/images/masks/image_masks/${imgName}`);
};

let filenames = [];
let captions = [];
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

const Mask = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="maskTextDiv"></div>
      <div style={MaskPageStyle}>{masksGrid}</div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};
export default Mask;

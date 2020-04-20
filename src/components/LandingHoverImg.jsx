import React from "react";
import conversations from "../conversations_lookup";

let randY, randX;

const ImageDivStyleRight = {
  position: "fixed",
  width: "inherit",
  top: "30vh",
  left: "2vw",
};

const ImageStyle = {
  border: "solid black",
  opacity: "0.9",
  readOnly: "false",
  width: "90%",
  height: "auto",
};

export const LandingHoverImgRight = (props) => {
  let imageSource = props.details.filename_orig;

  imageSource =
    "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/" +
    imageSource;
  return (
    <div className="hoverImg" style={ImageDivStyleRight}>
      <img style={ImageStyle} alt="whoops" src={imageSource}></img>
    </div>
  );
};

const ImageDivStyleLeft = {
  position: "fixed",
  width: "inherit",
  readOnly: "false",
  top: "30vh",
  left: "50vw",
};

export const LandingHoverImgLeft = (props) => {
  let imageSource = props.details.filename_orig;

  imageSource =
    "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/" +
    imageSource;

  return (
    <div className="hoverImg" style={ImageDivStyleLeft}>
      <img style={ImageStyle} alt="whoops" src={imageSource}></img>
    </div>
  );
};

// export default { LandingHoverImg, LandingHoverImgLeft };

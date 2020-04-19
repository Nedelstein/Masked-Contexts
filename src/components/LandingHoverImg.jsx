import React from "react";
import conversations from "../conversations_lookup";

let randY, randX;

const ImageDivStyleRight = {
  //   width: "auto",
  position: "absolute",
  readOnly: "false",
  width: "70%",
  top: "30%",
  left: "0",

  //   zIndex: "-1",
};

const ImageStyle = {
  // position: "absolute",
  height: "auto",
  border: "solid black",
  opacity: "0.9",
  readOnly: "false",
};

function getRandomPosition() {
  let x = document.body.offsetHeight;
  let y = document.body.offsetWidth;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

export const LandingHoverImgRight = (props) => {
  let imageSource = props.details.filename_orig;

  imageSource =
    "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/" +
    imageSource;

  let xy = getRandomPosition();
  randX = xy[0] + "px";
  randY = xy[1] + "px";

  //   ImageStyle.top = randY;
  //   ImageStyle.left = randX;
  return (
    <div className="hoverImg" style={ImageDivStyleRight}>
      <img style={ImageStyle} alt="whoops" src={imageSource}></img>
    </div>
  );
};

const ImageDivStyleLeft = {
  //   width: "auto",
  position: "absolute",
  readOnly: "false",
  width: "70%",
  top: "30%",
  left: "50%",

  //   zIndex: "-1",
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

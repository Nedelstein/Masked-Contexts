import React from "react";
import { useMediaQuery } from "react-responsive";

let posX, posY;

export const LandingHoverImg = (props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  let imageSource = props.details.filename_orig;
  let mousePosX = props.mousePos[0];
  let mousePosY = props.mousePos[1];

  if (mousePosX <= window.innerWidth / 2) {
    posX = "50vw";
  } else if (mousePosX > window.innerWidth / 2) {
    posX = "20vw";
  }

  if (mousePosY <= window.innerHeight / 2) {
    posY = "40vh";
  } else if (mousePosY > window.innerHeight / 2) {
    posY = "10vh";
  }

  let imgHeight;

  isBigScreen ? (imgHeight = "100%") : (imgHeight = "58vh");

  const ImageStyle = {
    readOnly: "false",
    // width: "100%",
    maxHeight: imgHeight,
    width: "auto",
    zIndex: "0",
  };

  const ImageDivStyle = {
    position: "fixed",
    width: "inherit",
    readOnly: "false",
    top: posY,
    left: "45vw",
    zIndex: "99",
  };

  imageSource =
    "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/master/src/assets/images/conversations/original_imgs/" +
    imageSource;

  return (
    <div className="hoverImg" style={ImageDivStyle}>
      <img style={ImageStyle} alt="whoops" src={imageSource}></img>
    </div>
  );
};

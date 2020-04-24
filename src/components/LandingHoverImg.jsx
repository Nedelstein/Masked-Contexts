import React from "react";
// import conversations from "../conversations_lookup";

const ImageStyle = {
  // border: "solid black",
  // opacity: "0.9",
  readOnly: "false",
  width: "90%",
  height: "auto",
};

let posX;

export const LandingHoverImg = (props) => {
  let imageSource = props.details.filename_orig;
  let mousePosX = props.mousePos[0];

  if (mousePosX <= window.innerWidth / 2) {
    posX = "50vw";
  } else if (mousePosX > window.innerWidth / 2) {
    posX = "20vw";
  }

  const ImageDivStyle = {
    position: "fixed",
    width: "inherit",
    readOnly: "false",
    top: "30vh",
    left: posX,
  };

  imageSource =
    "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/" +
    imageSource;

  return (
    <div className="hoverImg" style={ImageDivStyle}>
      <img style={ImageStyle} alt="whoops" src={imageSource}></img>
    </div>
  );
};

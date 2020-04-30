import React from "react";

const ImageStyle = {
  // border: "solid black",
  // opacity: "0.9",
  readOnly: "false",
  width: "90%",
  height: "auto",
  zIndex: "99",
};

let posX;

export const LandingHoverImg = (props) => {
  let imageSource = props.details.filename_orig;
  let mousePosX = props.mousePos[0];

  if (mousePosX <= window.innerWidth / 2) {
    posX = "50vw";
  } else if (mousePosX > window.innerWidth / 2) {
    posX = "5vw";
  }

  const ImageDivStyle = {
    position: "fixed",
    width: "inherit",
    readOnly: "false",
    top: "30vh",
    left: posX,
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

import React from "react";
import conversations from "../conversations_lookup";

const ImageDivStyle = {
  //   position: "inherit",
  width: "auto",
  top: "20%",
  left: "50%",
};

const ImageStyle = {
  position: "fixed",
  width: "70%",
  height: "auto",
  border: "solid black",
  top: "20%",
  left: "50%",
};

const LandingHoverImg = (props) => {
  let image = props.details.filename_orig;

  image =
    "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/" +
    image;

  console.log(image);
  return (
    <div style={ImageDivStyle}>
      <img style={ImageStyle} alt="whoops" src={image}></img>
    </div>
  );
};

export default LandingHoverImg;

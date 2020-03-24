import React from "react";

const textStyle = {
  position: "absolute",
  color: "white",
  fontFamily: "Big Caslon",
  fontWeight: "normal",
  fontSize: "24px",
  textAlign: "left",
  lineHeight: "36px",
  top: "40%",
  left: "8%",
  width: "33%"
};

let LandingText = () => {
  return (
    <div style={textStyle}>
      Masked Contexts is an exploration into the MS-COCO image dataset and a
      dialogue with the photographers whose images were scraped by the dataset’s
      authors without their knowledge or consent.
    </div>
  );
};

export default LandingText;

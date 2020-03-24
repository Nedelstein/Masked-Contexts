import React from "react";
import Typewriter from "typewriter-effect";

const textStyle = {
  position: "absolute",
  color: "white",
  fontFamily: "Big Caslon",
  fontWeight: "normal",
  fontSize: "24px",
  textAlign: "left",
  lineHeight: "36px",
  top: "40%",
  left: "60%",
  width: "10%"
};

let LandingTypewriter = () => {
  return (
    <div style={textStyle}>
      <Typewriter
        onInit={typewriter => {
          typewriter
            .typeString("SCRAPERS GONNA SCRAPE")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default LandingTypewriter;

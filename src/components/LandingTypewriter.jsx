import React from "react";
import Typewriter from "typewriter-effect";

const textStyle = {
  position: "absolute",
  color: "white",
  fontFamily: "Big Caslon",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "left",
  lineHeight: "40px",
  top: "40%",
  left: "60%",
  wordSpacing: "9999rem"
};

let LandingTypewriter = () => {
  return (
    <div style={textStyle}>
      <Typewriter
        options={{
          strings: [
            "SCRAPERS GONNA SCRAPE",
            "ARE YOU A BOT YOURSELF?",
            "I HAVE NOTHING TO HIDE",
            "YOU CAN'T FIGHT MICROSOFT"
          ],
          autoStart: true,
          loop: true,
          pauseFor: 2500,
          cursor: "*/"
        }}
      />
    </div>
  );
};

export default LandingTypewriter;

import React from "react";
import Typewriter from "typewriter-effect";
import { theme } from "../theme";

const textStyle = {
  position: "fixed",
  color: "white",
  backgroundColor: theme.purple,
  fontFamily: "Big Caslon",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "left",
  // textTransform: "uppercase",
  lineHeight: "40px",
  top: "40%",
  left: "52%",
  wordSpacing: "5px",
  textTransform: "uppercase",
  zIndex: "100",
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
            "YOU CAN'T FIGHT MICROSOFT",
            "I really hope the Coco thing is only a game",
          ],
          autoStart: true,
          loop: true,
          pauseFor: 2500,
          cursor: "*/",
        }}
      />
    </div>
  );
};

export default LandingTypewriter;

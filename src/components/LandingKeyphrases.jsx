import React from "react";
import Typewriter from "typewriter-effect";

import conversations from "../conversations_lookup";
import { theme } from "../theme";

const keyphraseStyle = {
  //   position: "absolute",
  display: "block",
  overflow: "auto",
  fontFamily: "Big Caslon",
  fontWeight: "bold",
  fontSize: "20px",
  textAlign: "left",
  lineHeight: "30px",
  marginTop: "5%",
  transform: "translate(-50%, 0)",
  marginLeft: "50%",
  wordSpacing: "5px",
  textTransform: "uppercase",
  zIndex: "100",
  width: "70%",
};

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
  flex: "1",
  margin: "20px",
};

const KeyphraseText = () => {
  let keyphrases = [];
  for (let i in conversations) {
    keyphrases.push(conversations[i].keyphrase);
  }
  let half_keyphrases = Math.ceil(keyphrases.length / 2);
  let left_side = keyphrases.splice(0, half_keyphrases);
  console.log(left_side);
  return (
    <div style={keyphraseStyle}>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <div>
            {left_side.map((keyphrase) => (
              <p className="keyphraseP">
                <span>"{keyphrase}"</span>
              </p>
            ))}
          </div>
        </div>
        <div style={columnStyle}>
          <div>
            {keyphrases.map((keyphrase) => (
              <p className="keyphraseP">
                <span>"{keyphrase}"</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingKeyphrases = () => {
  return (
    <>
      <KeyphraseText />
    </>
  );
};

export default LandingKeyphrases;

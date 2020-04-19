import React, { useState } from "react";
// import Typewriter from "typewriter-effect";

import conversations from "../conversations_lookup";
// import { theme } from "../theme";

import { LandingHoverImgRight, LandingHoverImgLeft } from "./LandingHoverImg";

const keyphraseStyle = {
  //   position: "absolute",
  display: "block",
  overflow: "auto",
  fontFamily: "Big Caslon",
  fontWeight: "bold",
  fontSize: "18px",
  textAlign: "left",
  lineHeight: "30px",
  marginTop: "5%",
  transform: "translate(-50%, 0)",
  marginLeft: "50%",
  wordSpacing: "5px",
  textTransform: "uppercase",
  zIndex: "100",
  width: "90%",
  opacity: "0",
  transition: "opacity 1s ease-in-out",
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
  const [isHoverRight, setHoverRight] = useState(null);
  const [isHoverLeft, setHoverLeft] = useState(null);

  let keyphrases = [];
  for (let i in conversations) {
    keyphrases.push(conversations[i].keyphrase);
  }

  let half_keyphrases = Math.ceil(keyphrases.length / 2);
  let left_side = keyphrases.splice(0, half_keyphrases);

  return (
    <div className="keyphrases" style={keyphraseStyle}>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <div>
            {left_side.map((keyphrase, index) => (
              <p className="keyphraseP">
                <span
                  onMouseEnter={() => {
                    setHoverLeft(conversations[index]);
                    console.log(conversations[index]);
                  }}
                  onMouseLeave={() => {
                    setHoverLeft(null);
                  }}
                >
                  "{keyphrase}"
                </span>
              </p>
            ))}
          </div>
        </div>
        <div style={columnStyle}>
          <div>
            {keyphrases.map((keyphrase, index) => (
              <p className="keyphraseP">
                <span
                  onMouseEnter={() => {
                    setHoverRight(conversations[index + 11]);
                    console.log(conversations[index + 11]);
                  }}
                  onMouseLeave={() => {
                    setHoverRight(null);
                  }}
                >
                  "{keyphrase}"
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        {isHoverRight && (
          <LandingHoverImgRight
            details={isHoverRight}
            setHover={setHoverRight}
          />
        )}
        {isHoverLeft && (
          <LandingHoverImgLeft details={isHoverLeft} setHover={setHoverLeft} />
        )}
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

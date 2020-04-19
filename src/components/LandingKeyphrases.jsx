import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import conversations from "../conversations_lookup";
import { theme } from "../theme";

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

const ImageDivStyle = {
  position: "fixed",
  width: "auto",
};

const KeyphraseText = () => {
  const [isHover, setHover] = useState(false);

  let images = [];
  let keyphrases = [];
  let filenames = [];

  for (let i in conversations) {
    keyphrases.push(conversations[i].keyphrase);
    images.push(
      "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/" +
        conversations[i]["filename_orig"]
    );
  }

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    // filename = images[i].replace("/static/media/", "");
    // filename = filename.substring(0, filename.indexOf("_"));
    filenames.push(
      images[i].replace(
        "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/alt_homepage/src/assets/images/conversations/original_imgs/",
        ""
      )
    );
    return (
      <div style={ImageDivStyle}>
        <img
          id={filenames[i]}
          src={images[i]}
          alt="no find"
          style={{
            width: "70%",
            position: "absolute",
          }}
        ></img>
      </div>
    );
  });

  let half_keyphrases = Math.ceil(keyphrases.length / 2);
  let left_side = keyphrases.splice(0, half_keyphrases);
  console.log(left_side);
  return (
    <div style={keyphraseStyle}>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <div>
            {left_side.map((keyphrase) => (
              <p
                onMouseEnter={() => {
                  setHover(true);
                  console.log("inside");
                }}
                className="keyphraseP"
              >
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
      {isHover && imagesDiv}
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

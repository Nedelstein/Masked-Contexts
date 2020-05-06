import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";
import "../App.scss";

// import Button from "./EnterButton";
import LandingKeyphrases from "./LandingKeyphrases";

const LandingTypewriter = () => {
  const [keyphrases, setKeyphrases] = useState(null);
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });

  let typeFontSize, typeLineHeight, typeMarginTop, typeWidth;
  if (isMobileDevice) {
    typeFontSize = "12px";
    typeLineHeight = "24px";
    typeMarginTop = "25%";
    typeWidth = "90%";
  } else if (isBigScreen) {
    typeFontSize = "20px";
    typeLineHeight = "32px";
    typeMarginTop = "15%";
    typeWidth = "55%";
  } else {
    typeFontSize = "16px";
    typeLineHeight = "32px";
    typeMarginTop = "15%";
    typeWidth = "55%";
  }
  const letterStyle = {
    display: "inline-block",
    position: "relative",
    // overflow: "auto",
    color: "white",
    backgroundColor: "black",
    fontFamily: "RobotoMono",
    fontSize: typeFontSize,
    textAlign: "left",
    // wordSpacing: "3px",
    lineHeight: typeLineHeight,
    width: typeWidth,
    left: "50%",
    transform: "translate(-50%, 0%)",
    marginTop: typeMarginTop,
    padding: "12px",
    zIndex: "1",
  };

  const textAppear = () => {
    setKeyphrases(LandingKeyphrases);
  };

  const opacityChange = () => {
    document.querySelector("#keyphraseStyle").style.opacity = "1";
  };

  return (
    <div style={{ width: "100vw" }}>
      <div style={letterStyle}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span>Hi _________,</br></br>I am writing to let you know that your photo was used as part of an image dataset that Microsoft created a number of years ago. The name of the dataset is called COCO and comprises of hundreds of thousands of images scraped from Flickr accounts without the knowledge of the Flickr members such as yourself. This dataset is often used to build computer programs that are used for surveillance cameras and other detection purposes. I found your image here: ____________. I thought it was important that you know your image was used for this...</span>"
              )
              .callFunction(textAppear)
              .callFunction(opacityChange)
              .pauseFor(9999999999999)
              .start();
          }}
          options={{
            delay: 0,
            // delay: 25
            autoStart: true,
            loop: true,
            cursor: "*/",
          }}
        />
      </div>
      {keyphrases}
    </div>
  );
};

export default LandingTypewriter;

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "../App.scss";

// import Button from "./EnterButton";
import LandingKeyphrases from "./LandingKeyphrases";

const typeWriterContainer = {
  display: "block",
  width: "55%",
};

const letterStyle = {
  display: "inline-block",
  position: "relative",
  // overflow: "auto",
  color: "white",
  backgroundColor: "black",
  fontFamily: "RobotoMono",
  fontSize: "18px",
  textAlign: "left",
  // wordSpacing: "3px",
  lineHeight: "32px",
  width: "55%",
  left: "50%",
  transform: "translate(-50%, 0%)",
  marginTop: "15%",
  padding: "12px",
  zIndex: "1",
};

const LandingTypewriter = () => {
  const [keyphrases, setKeyphrases] = useState(null);

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

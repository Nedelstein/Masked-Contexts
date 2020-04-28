import React from "react";
import Typewriter from "typewriter-effect";
import "../App.scss";

// import Button from "./EnterButton";
import LandingKeyphrases from "./LandingKeyphrases";

const letterStyle = {
  // position: "absolute",
  overflow: "auto",
  color: "white",
  backgroundColor: "rgba(0,0,0,0.7)",
  fontFamily: "Courier",
  fontSize: "22px",
  textAlign: "left",
  // wordSpacing: "3px",
  lineHeight: "30px",
  transform: "translate(-50%, 0%)",
  marginTop: "15%",
  marginLeft: "50%",
  width: "55%",
  // height: "100%",
  padding: "7px",
  zIndex: "1",
};

let textAppear = () => {
  let textElement = document.querySelector(".keyphrases");
  textElement.classList.add("text-fade-in");
};

let LandingTypewriter = () => {
  return (
    <div>
      <div style={letterStyle}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span>Hi __________</br></br>I am writing to let you know that your photo was used as part of an image dataset that Microsoft created a number of years ago. The name of the dataset is called COCO and comprises of hundreds of thousands of images scraped from Flickr accounts without the knowledge of the Flickr members such as yourself. This dataset is often used to build computer programs that are used for surveillance cameras and other detection purposes. I found your image here:_________________. I thought it was important that you know your image was used for this..."
              )
              .callFunction(textAppear)
              .pauseFor(9999999999999)
              .start();
          }}
          options={{
            delay: 25,
            autoStart: true,
            loop: false,
            cursor: "*/",
          }}
        />
        {/* <Button /> */}
      </div>
      <LandingKeyphrases />
    </div>
  );
};

export default LandingTypewriter;

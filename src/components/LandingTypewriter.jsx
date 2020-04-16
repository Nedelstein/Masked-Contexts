import React from "react";
import Typewriter from "typewriter-effect";
import "../App.scss";

import Button from "./EnterButton";

// import { theme } from "../theme";
// const quoteStyle = {
//   position: "fixed",
//   color: "white",
//   backgroundColor: theme.purple,
//   fontFamily: "Big Caslon",
//   fontWeight: "bold",
//   fontSize: "24px",
//   textAlign: "left",
//   lineHeight: "40px",
//   top: "40%",
//   left: "52%",
//   wordSpacing: "5px",
//   textTransform: "uppercase",
//   zIndex: "100",
// };

const letterStyle = {
  position: "absolute",
  overflow: "auto",
  color: "white",
  backgroundColor: "rgba(0,0,0,0.7)",
  fontFamily: "Big Caslon",
  fontSize: "24px",
  textAlign: "left",
  // wordSpacing: "3px",
  // lineHeight: "30px",
  transform: "translate(-50%, 0%)",
  top: "15%",
  left: "50%",
  width: "55%",
  // height: "100%",
  padding: "7px",
};

let buttonAppear = () => {
  let btnElement = document.querySelector(".enterButton");
  btnElement.classList.add("button-fade-in");
};

let LandingTypewriter = () => {
  return (
    <div>
      <div style={letterStyle}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span>Hi __________</br></br>I am writing to let you know that your photo was used as part of an image dataset that Microsoft created a number of years ago. The name of the dataset is called COCO and comprises of hundreds of thousands of images scraped from Flickr accounts without the knowledge of the Flickr members such as yourself. This dataset is often used to build computer programs that are used for surveillance cameras and other detection purposes. I found your image here:_________________. I thought it was important that you know your image was used for this. </br></br> Now that you are aware, I was wondering if you could tell me a little more about the photo. What was the original context for it being taken? Where/why did you shoot it? If there is any backstory, I would love to hear about it. </br></br>Lastly, if you have any opinions about your image being used in this regard, I’d love to hear from you about that as well.</br></br>Thanks,</br>Noah</span>"
              )
              .callFunction(buttonAppear)
              .pauseFor(9999999999999)
              .start();
          }}
          options={{
            delay: 3,
            autoStart: true,
            loop: false,
            cursor: "*/",
          }}
        />
        <Button />
      </div>

      {/* <div style={quoteStyle}>
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
            // cursor: "*
          }}
        />
      </div> */}
    </div>
  );
};

export default LandingTypewriter;

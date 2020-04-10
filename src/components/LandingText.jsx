import React from "react";

const textStyle = {
  position: "fixed",
  color: "white",
  fontFamily: "Big Caslon",
  fontWeight: "normal",
  fontSize: "24px",
  textAlign: "left",
  lineHeight: "36px",
  justifyContent: "center",
  top: "40%",
  left: "8%",
  width: "33%",
};

let LandingText = () => {
  const letterText =
    "Hi (flickr user), \n\n I just wanted to let you know that your photo was used as part of an image dataset that Microsoft created a number of years ago. The name of the dataset is called COCO and comprises of hundreds of thousands of images scraped from Flickr accounts without the knowledge of the Flickr members such as yourself. This dataset is often used to build computer programs that are used for surveillance cameras and other detection purposes. I found your image here: http://cocodataset.org/#explore?id=. I thought it was important that you know your image was used for this. \n\n Now that you are aware, I was wondering if you could tell me a little more about the photo. What was the original context for it being taken? Where/why did you shoot it? If there is any backstory, I would love to hear about it. \n\n Lastly, if you have any opinions about your image being used in this regard, I’d love to hear from you about that as well.\n\n Thanks";
  return (
    <div style={textStyle}>
      Masked Contexts is an exploration into the MS-COCO image dataset and a
      dialogue with the photographers whose images were scraped by the dataset’s
      authors without their knowledge or consent.
    </div>
  );
};

export default LandingText;

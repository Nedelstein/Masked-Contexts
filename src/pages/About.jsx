import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";

const About = () => {
  const [open, setOpen] = useState(false);

  const textStyle = {
    position: "relative",
    color: "black",
    fontFamily: "Big Caslon",
    fontWeight: "normal",
    fontSize: "24px",
    textAlign: "left",
    lineHeight: "36px",
    justifyContent: "center",
    marginTop: "5%",
    left: "10%",
    width: "50%",
  };

  return (
    <>
      {/* <header className="App-header"> */}
      {/* <a href="/">
          <div className="Title-text">Masked Contexts</div>
        </a> */}
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      {/* </header> */}
      <div>
        <p style={textStyle}>
          Masked Contexts is an exploration into the MS-COCO image dataset and a
          dialogue with the photographers whose images were scraped by the
          dataset’s authors without their knowledge or consent.
        </p>
        <p style={textStyle}>
          Masked Contexts is an exploration into the COCO dataset and a dialogue
          with the photographers whose images were scraped by the dataset’s
          authors without their knowledge or consent. Email correspondence
          paired with the photographers' original images, the segmented masks
          and captions that they have been transformed into, and the
          photographers' possible reappropriations of their photos, all come
          together to present a multi-layered glimpse into the process of
          converting personal images into universal pieces of big data.
        </p>
        <p style={textStyle}>
          The COCO (common objects in context) dataset contains 330,000 photos
          scraped from Flickr, many of which are intimate photos uploaded by
          ameature photohraphers for personal use. Image datasets like COCO are
          often used to train surveillance technologies, amongst other types of
          computer vision programs.
        </p>
        <p style={textStyle}>
          Conversations can be viewed by clicking on the quotes you are about to
          see. Parts of these conversations were lost as a result of Flickr
          terminating some of my accounts.
        </p>
        <p style={textStyle}>
          All images shown on this site are from this public dataset.
        </p>
      </div>
    </>
  );
};

export default About;

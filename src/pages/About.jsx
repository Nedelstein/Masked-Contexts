import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Burger from "../components/Burger";
import Menu from "../components/Menu";

import cocoScreenshot from "../assets/images/about/coco_screenshot.png";
import boySuitcase from "../assets/images/about/boySuitcase.png";
import emailImg from "../assets/images/about/email.png";

const About = () => {
  const [open, setOpen] = useState(false);
  const [isHover, setHover] = useState(null);
  const [isEmailHover, setEmailHover] = useState(null);

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  let textSize,
    textLineHeight,
    textMarginTop,
    textWidth,
    titleTextSize,
    textTitleMargTop;

  let imgLeft, imgTop;

  let emailImgLeft, emailImgTop;

  if (isMobileDevice) {
    textSize = "12px";
    textLineHeight = "24px";
    textMarginTop = "3%";
    textWidth = "90%";
    titleTextSize = "16px";
    textTitleMargTop = "10%";
  } else if (isBigScreen) {
    textSize = "22px";
    textLineHeight = "32px";
    textMarginTop = "2%";
    textWidth = "55%";
    titleTextSize = "30px";
    textTitleMargTop = "3%";
    imgLeft = "66%";
    imgTop = "17%";
    emailImgLeft = "62%";
    emailImgTop = "25%";
  } else {
    textSize = "16px";
    textLineHeight = "30px";
    textMarginTop = "2%";
    textWidth = "45%";
    titleTextSize = "24px";
    textTitleMargTop = "3%";
    imgLeft = "55%";
    imgTop = "8%";
    emailImgLeft = "50%";
    emailImgTop = "20%";
  }

  const textStyle = {
    position: "relative",
    color: "black",
    fontFamily: "RobotoMono",
    fontWeight: "normal",
    fontSize: textSize,
    textAlign: "left",
    lineHeight: textLineHeight,
    marginTop: textMarginTop,
    left: "4%",
    width: textWidth,
  };

  const textLinkStyle = {
    position: "relative",
    color: "#7a49a5",
    fontFamily: "RobotoMono",
    fontWeight: "normal",
    fontSize: textSize,
    textAlign: "left",
    textDecoration: "underline",
    lineHeight: textLineHeight,
    marginTop: textMarginTop,
    width: textWidth,
    cursor: "help",
  };

  const subtitleStyle = {
    position: "relative",
    color: "black",
    fontFamily: "RobotoMono",
    fontWeight: "normal",
    fontSize: titleTextSize,
    textAlign: "left",
    lineHeight: "36px",
    marginTop: textTitleMargTop,
    left: "4%",
    width: "50%",
  };

  const imgStyle = {
    position: "fixed",
    left: imgLeft,
    top: imgTop,
    maxWidth: "40vw",
    height: "auto",
  };

  const emailImgStyle = {
    position: "fixed",
    left: emailImgLeft,
    top: emailImgTop,
    maxWidth: "50vw",
    height: "auto",
  };

  return (
    <>
      {/* <div ref={node}> */}
      <header className="App-header">
        <div style={{ display: "block" }}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>

        <a href="/">
          <div className="Title-text">Masked Contexts</div>
        </a>
        {/* </div> */}
        <div style={{ marginTop: "10%", marginBottom: "5%" }}>
          <p style={subtitleStyle}>About</p>
          <p style={textStyle}>
            Masked Contexts is an exploration into the COCO dataset and a
            dialogue with the photographers whose images were scraped by the
            dataset’s authors without their knowledge or consent. Email
            correspondence paired with the photographers' original images, the
            segmented masks and captions that they have been transformed into,
            and the photographers' possible reappropriations of their photos,
            all come together to present a multi-layered glimpse into the
            process of converting personal images into universal pieces of big
            data.
          </p>
          <p style={textStyle}>
            Originally published by Microsoft, the COCO (common objects in
            context) dataset contains 330,000 photos scraped from Flickr, many
            of which are intimate{" "}
            <span
              onMouseEnter={() => setHover(boySuitcase)}
              onMouseLeave={() => setHover(null)}
            >
              {" "}
              <a
                style={textLinkStyle}
                href="http://cocodataset.org/#explore?id=283548"
                target="_blank"
                rel="noopener noreferrer"
              >
                family photos
              </a>
            </span>{" "}
            uploaded by amateur photographers for personal use. Image datasets
            like COCO are often used to train surveillance technologies, amongst
            other types of computer vision programs. In 2019, I began contacting
            Flickr users to inform them that their images were scraped for this
            purpose, and documentation of those conversations are displayed on
            this site alongside the photographers' images. Parts of these
            conversations have been lost as a result of Flickr
            <span
              onMouseEnter={() => setEmailHover(emailImg)}
              onMouseLeave={() => setEmailHover(null)}
            >
              {" "}
              <span style={textLinkStyle}>deleting some of my accounts.</span>
            </span>{" "}
          </p>
          <p style={textStyle}>
            Masked Contexts seeks to present a multi-layered glimpse into the
            process of converting personal images into universal pieces of big
            data. This is a project by Noah Edelstein.
          </p>
          <p style={subtitleStyle}>Process</p>
          <p style={textStyle}>
            While the COCO dataset provides metadata that contains information
            about each image, no credit or reference is made to the original
            uploader.
          </p>
          <p style={textStyle}>
            The dataset was reverse engineered through a custom script to
            provide additional metadata, including the Flickr username
            associated with each image. 365 of these Flickr users were contacted
            and informed that their photos were part of the dataset. They were
            additionally asked to provide the original context of their photos,
            as well as their feelings regarding their images being used in a
            dataset like COCO.
          </p>
          <p style={textStyle}>
            The COCO metadata also provides{" "}
            <span
              onMouseEnter={() => setHover(cocoScreenshot)}
              onMouseLeave={() => setHover(null)}
            >
              {" "}
              <a
                style={textLinkStyle}
                href="http://cocodataset.org/#explore?id=566536"
                target="_blank"
                rel="noopener noreferrer"
              >
                annotations for each image
              </a>
            </span>{" "}
            in two forms, masks and captions. Both of these methods of
            annotation were made by hired Amazon Mechanical Turks. The masks
            outline particular object types found in each image, while the
            captions are meant to objectively describe each image. These
            captions are used for training computer vision programs so they can
            learn to analyze and describe visual inputs. There are five captions
            provided for each image. Masked Contexts showcases these annotations
            juxtaposed with the image authors’ response. The masks are
            additionally organized as a grid of meaningless visuals. When
            hovered over, their corresponding captions are read aloud.
          </p>
        </div>
        {isHover && <img style={imgStyle} src={isHover} alt="whoops"></img>}
        {isEmailHover && (
          <img style={emailImgStyle} src={isEmailHover} alt="whoops"></img>
        )}
      </header>
    </>
  );
};

export default About;

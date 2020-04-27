import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import { noah_email } from "../conversations_lookup";
import speakText from "./SpeakText";

const ModalTextStyle = {
  position: "fixed",
  color: "black",
  top: "0",
  height: "100%",
  minHeight: "100%",
  marginLeft: "4%",
  marginRight: "55%",
  marginTop: "0",
  whiteSpace: "pre-wrap",
  fontFamily: "Big Caslon",
  fontSize: "16px",
  lineHeight: "25px",
  paddingLeft: "7px",
  paddingRight: "7px",
  borderRight: "1.5px solid black",
  borderLeft: "1.5px solid black",
  overflowY: "auto",
};

const ModalHeaderStyle = {
  color: "black",
  fontSize: "12px",
  paddingTop: "25px",
};

const imgStyle = {
  // position: "-webkit-sticky",
  // position: "sticky",
  position: "relative",
  display: "inline-block",
  // top: "50%",
  marginTop: "27%",
  left: "54%",
  maxWidth: "40vw",
  maxHeight: "70vh",
  transform: "translateY(-50%)",
};

// let captionDisplay;
const captionText = {
  // display: captionDisplay,
  position: "absolute",
  overflow: "auto",
  top: "30%",
  left: "54%",
  maxWidth: "40vw",
  fontFamily: "Typewriter",
  fontSize: "16px",
  fontWeight: "bold",
  color: "black",
  backgroundColor: "rgba(255,255,0,0.7)",
  padding: "3px",
};

const toggleTextStyle = {
  // position: "sticky",
  position: "fixed",
  display: "inline-block",
  textAlign: "center",
  // bottom: "50%",
  top: "45%",
  left: "47%",
  paddingBottom: "6%",
  paddingTop: "1%",
  fontFamily: "Big Caslon",
  transform: "rotate(-90deg) translate(0, -50%)",
};

const IMG = (imgName) => {
  return require(`../assets/images/conversations/original_imgs/${imgName}`);
};

const MaskIMG = (imgName) => {
  return require(`../assets/images/conversations/masks/${imgName}`);
};

const ResponseModal = (props) => {
  let text = props.details.text;
  let origImage = props.details.filename_orig;
  let date = props.details.date;
  let subject = props.details.subject;
  let mask = props.details.filename_mask;
  let captions = props.details.captions;

  const [modalText, setModalText] = useState(text);
  const [subjectText, setSubjectText] = useState(subject);
  const [modalImage, setModalImage] = useState(IMG(origImage));
  const [typeText, setTypeText] = useState(null);

  const TypeString = () => {
    // speechSynthesis.cancel();
    return (
      <div style={captionText}>
        <Typewriter
          onInit={(typewriter) => {
            captions.map((item) =>
              typewriter
                .callFunction(() => speakText(item))
                // .callFunction(() => {
                //   if (typeText == null) {
                //     speechSynthesis.cancel();
                //   } else if (typeText != null) {
                //     speakText(item);
                //   }
                // })
                .typeString(item)
                .pauseFor(400)
                .deleteAll()
                .pauseFor(100)
                .start()
            );
          }}
          options={{
            delay: 70,
            autoStart: true,
            loop: false,
            cursor: "*/",
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ display: "block" }}>
      <div style={toggleTextStyle}>
        <span
          id="reachingOutBtn"
          style={{ marginRight: "27px", cursor: "pointer" }}
          onClick={() => {
            setModalText(noah_email);
            setSubjectText("");
            document.getElementById("reachingOutBtn").style.textDecoration =
              "underline";
            document.getElementById("responseBtn").style.textDecoration =
              "none";
          }}
        >
          Reaching Out
        </span>
        <span
          id="responseBtn"
          style={{
            position: "sticky",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => {
            setModalText(text);
            setSubjectText(subject);
            document.getElementById("responseBtn").style.textDecoration =
              "underline";
            document.getElementById("reachingOutBtn").style.textDecoration =
              "none";
          }}
        >
          Response
        </span>
      </div>
      <div style={{ position: "relative" }}>
        <img style={imgStyle} src={modalImage} alt={props.details.id} />
        <span>{typeText}</span>
        <div
          class="cocoBtnStyle"
          onMouseEnter={() => {
            setModalImage(MaskIMG(mask));
            setTypeText(TypeString);
          }}
          onMouseLeave={() => {
            setModalImage(IMG(origImage));
            setTypeText(null);
            speechSynthesis.cancel();
          }}
        >
          hi hello
        </div>
      </div>

      <div style={ModalTextStyle}>
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{date}</span>
          <br />
          <span style={{ marginTop: 0 }}>{subjectText}</span>
        </div>
        <p style={{ paddingBottom: "5%" }}>{modalText}</p>
      </div>
    </div>
  );
};

export default ResponseModal;

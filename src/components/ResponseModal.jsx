import React, { useState } from "react";
import converesations, { noah_email } from "../conversations_lookup";

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
  position: "fixed",
  display: "inline-block",
  top: "50%",
  left: "54%",
  maxWidth: "40vw",
  maxHeight: "70vh",
  transform: "translateY(-50%)",
};

const borderStyle = {
  width: "6rem",
  height: "6rem",
  margin: "0.5rem",
  display: "inline-block",
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
  // overflow: "",

  /* Safari */
  //  webkitTransform: "rotate(-90deg)",

  //  /* Firefox */
  //  -moz-transform: rotate(-90deg);

  //  /* IE */
  //  -ms-transform: rotate(-90deg);
};

const IMG = (imgName) => {
  return require(`../assets/images/conversations/original_imgs/${imgName}`);
};

const MaskIMG = (imgName) => {
  return require(`../assets/images/conversations/masks/${imgName}`);
};

let isMask = false;

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

  function cocoMode() {
    if (isMask === false) {
      setModalImage(MaskIMG(mask));
      isMask = !isMask;
      console.log(isMask);
    } else if (isMask === true) {
      setModalImage(IMG(origImage));
      isMask = !isMask;
    }
  }

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
      <img style={imgStyle} src={modalImage} alt={props.details.id} />
      <button onClick={() => cocoMode()}>hi hello</button>

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

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
  maxWidth: "35vw",
  marginLeft: "3%",
  marginRight: "55%",
  marginTop: "0",
  whiteSpace: "pre-wrap",
  fontFamily: "RobotoMono",
  fontSize: "12px",
  lineHeight: "20px",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
  overflowY: "auto",
  zIndex: "999",
};

const ModalHeaderStyle = {
  color: "black",
  fontSize: "10px",
  paddingTop: "25px",
  lineHeight: "20px",
};

const imgStyle = {
  // position: "-webkit-sticky",
  // position: "sticky",
  position: "fixed",
  display: "inline-block",
  // top: "50%",
  top: "45%",
  left: "54%",
  maxWidth: "40vw",
  maxHeight: "70vh",
  transform: "translateY(-50%)",
};

// let captionDisplay;
const captionText = {
  // display: captionDisplay,
  position: "fixed",
  overflow: "auto",
  top: "30%",
  left: "54%",
  maxWidth: "40vw",
  fontFamily: "Typewriter",
  fontSize: "16px",
  fontWeight: "bold",
  color: "black",
  backgroundColor: "rgba(255,255,0,.9)",
  padding: "3px",
};

const toggleTextStyle = {
  // position: "sticky",
  position: "fixed",
  display: "inline-block",
  textAlign: "center",
  // bottom: "50%",
  top: "42%",
  left: "42%",
  paddingBottom: "6%",
  paddingTop: "1%",
  fontFamily: "RobotoMono",
  fontSize: "13px",
  transform: "rotate(-90deg) translate(0, -50%)",
  zIndex: "99999",
};

const textBorderStyle = {
  // borderTop: "1px solid black",
  width: "100%",
  height: "auto",
  left: "0%",
  position: "absolute",
};

const Border = () => {
  return <hr style={textBorderStyle}></hr>;
};

const IMG = (imgName) => {
  return require(`../assets/images/conversations/original_imgs/${imgName}`);
};

const MaskIMG = (imgName) => {
  return require(`../assets/images/conversations/masks/${imgName}`);
};

const ResponseModal = (props) => {
  console.log(props.details);
  let text = props.details.text;
  let origImage = props.details.filename_orig;
  let date = props.details.date;
  let subject = props.details.subject;
  let mask = props.details.filename_mask;
  let captions = props.details.captions;
  let noahResponseText = props.details.noah_response;
  let _noahResponseDate = props.details.noah_response_date;
  let userResponseText = props.details.user_response;
  let _userResponseDate = props.details.user_response_date;

  const [modalText, setModalText] = useState(text);
  const [subjectText, setSubjectText] = useState(subject);
  const [responseDate, setResponseDate] = useState(date);
  const [modalImage, setModalImage] = useState(IMG(origImage));
  const [typeText, setTypeText] = useState(null);
  const [noahResponse, setNoahResponse] = useState(noahResponseText);
  const [noahResponseDate, setNoahResponseDate] = useState(_noahResponseDate);
  const [userResponse, setUserResponse] = useState(userResponseText);
  const [userResponseDate, setUserResponseDate] = useState(_userResponseDate);
  const [border, setBorder] = useState(Border);

  const indexNum = Math.floor(Math.random() * Math.floor(5));

  const TypeString = () => {
    speechSynthesis.cancel();
    return (
      <div style={captionText}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => speakText(captions[indexNum]))
              .typeString(captions[indexNum])
              .pauseFor(200)
              .deleteAll()
              .pauseFor(100)
              .start();
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

  const Empty = () => {
    return <></>;
  };

  return (
    <div style={{ display: "block" }}>
      <div style={ModalTextStyle}>
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{responseDate}</span>
          <br />
          <span style={{ marginTop: 0 }}>{subjectText}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{modalText}</p>
        {noahResponseText === undefined ? null : border}
        {/* {border} */}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{noahResponseDate}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{noahResponse}</p>
        {noahResponseText === undefined ? null : border}
        {/* {border} */}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{userResponseDate}</span>
        </div>
        <p style={{ paddingBottom: "5%" }}>{userResponse}</p>
      </div>

      <div style={toggleTextStyle}>
        <span
          id="reachingOutBtn"
          style={{ marginRight: "27px", cursor: "pointer" }}
          onClick={() => {
            setModalText(noah_email);
            setSubjectText("");
            setResponseDate("");
            setNoahResponse("");
            setNoahResponseDate("");
            setUserResponse("");
            setUserResponseDate("");
            setBorder("");
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
            setResponseDate(date);
            setNoahResponseDate(_noahResponseDate);
            setNoahResponse(noahResponseText);
            setUserResponseDate(_userResponseDate);
            setUserResponse(userResponseText);

            if (noahResponseText !== undefined) {
              setBorder(Border);
            } else {
              setBorder("");
            }
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
        <span
          class="cocoBtnStyle"
          onMouseEnter={() => {
            setModalImage(MaskIMG(mask));
            setTypeText(TypeString);
          }}
          onMouseLeave={() => {
            setModalImage(IMG(origImage));
            speechSynthesis.cancel();
            setTypeText(Empty);
          }}
        >
          COCO Mode
        </span>
      </div>
    </div>
  );
};

export default ResponseModal;

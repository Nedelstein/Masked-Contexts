import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";

import { noah_email } from "../conversations_lookup";
import speakText from "./SpeakText";

let modalTextCol = "black";

const IMG = (imgName) => {
  return require(`../assets/images/conversations/original_imgs/${imgName}`);
};

const MaskIMG = (imgName) => {
  return require(`../assets/images/conversations/masks/${imgName}`);
};

const ResponseModal = (props) => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  let modalTextWidth, modalTextTop, modalTextMarginLeft, modalTextTopBorder;
  let imgWidth, imgHeight, imgMargins, imgMargLeft, imgTransform;
  let rightDivWidth, rightDivLeft;
  let toggleTextMargTop,
    toggleTextTransform,
    toggleTextMargLeft,
    toggleTextWidth;

  if (isMobileDevice) {
    modalTextWidth = "90vw";
    modalTextTop = "58%";
    modalTextMarginLeft = "0%";
    modalTextTopBorder = "1px solid black";
    imgWidth = "90vw";
    imgHeight = "40vh";
    imgMargins = "0% 0%";
    imgMargLeft = "50%";
    imgTransform = "translate(-50%, 0)";
    rightDivLeft = "0";
    rightDivWidth = "auto";
    toggleTextMargTop = "0%";
    toggleTextMargLeft = "50%";
    toggleTextWidth = "100vw";
    toggleTextTransform = "translate(-50%, 0)";
  } else {
    modalTextWidth = "35vw";
    modalTextTop = "0";
    modalTextMarginLeft = "3%";
    modalTextTopBorder = "none";
    imgWidth = "40vw";
    imgHeight = "70vh";
    imgMargins = "-35% 35%";
    imgMargLeft = "auto";
    imgTransform = "none";
    rightDivLeft = "36vw";
    rightDivWidth = "35vw";
    toggleTextMargTop = "50%";
    toggleTextMargLeft = "0";
    toggleTextWidth = "auto";
    toggleTextTransform = "rotate(-90deg) translate(0, -50%)";
  }

  const ModalTextStyle = {
    display: "block",
    position: "fixed",
    color: modalTextCol,
    top: modalTextTop,
    height: "100%",
    minHeight: "100%",
    maxWidth: modalTextWidth,
    marginLeft: modalTextMarginLeft,
    // marginRight: "55%",
    marginTop: "0",
    whiteSpace: "pre-wrap",
    fontFamily: "RobotoMono",
    fontSize: "12px",
    lineHeight: "20px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    borderTop: modalTextTopBorder,
    overflowY: "auto",
    zIndex: "999",
  };

  const ModalHeaderStyle = {
    color: modalTextCol,
    fontSize: "10px",
    paddingTop: "25px",
    lineHeight: "20px",
  };

  const imgStyle = {
    display: "inline-block",
    // left: "53%",
    margin: imgMargins,
    maxWidth: imgWidth,
    maxHeight: imgHeight,
    marginLeft: imgMargLeft,
    transform: imgTransform,
    // transform: "translateY(-50%)",
    cursor: "help",
  };

  const captionText = {
    position: "absolute",
    margin: "-35% 0%",
    top: "0px",
    left: "35%",
    width: "fit-content",
    fontFamily: "Typewriter",
    fontSize: "16px",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "rgba(255,255,0,.9)",
    padding: "3px",
    // transform: "translateY(-50%)",
  };

  const rightDivStyle = {
    maxWidth: rightDivWidth,
    left: rightDivLeft,
    position: "relative",
  };

  const toggleTextStyle = {
    display: "inline-block",
    textAlign: "center",
    color: modalTextCol,
    // bottom: "50%",
    marginTop: toggleTextMargTop,
    marginLeft: toggleTextMargLeft,
    width: toggleTextWidth,
    left: "42%",
    paddingBottom: "6%",
    paddingTop: "1%",
    fontFamily: "RobotoMono",
    fontSize: "13px",
    transform: toggleTextTransform,
    zIndex: "99999",
  };

  const textBorderStyle = {
    width: "100%",
    height: "auto",
    left: "0%",
    position: "absolute",
    borderColor: "black",
    borderWidth: "0.5px",
  };

  const Border = () => {
    return <hr style={textBorderStyle}></hr>;
  };

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

  let userResponseText2 = props.details.user_response_2;
  let _userResponseDate2 = props.details.user_response_2_date;
  let userResponseText3 = props.details.user_response_3;
  let _userResponseDate3 = props.details.user_response_3_date;

  let noahResponseText2 = props.details.noah_response_2;
  let _noahResponseDate2 = props.details.noah_response_2_date;
  let noahResponseText3 = props.details.noah_response_3;
  let _noahResponseDate3 = props.details.noah_response_3_date;

  const [modalText, setModalText] = useState(text);
  const [subjectText, setSubjectText] = useState(subject);
  const [responseDate, setResponseDate] = useState(date);
  const [modalImage, setModalImage] = useState(IMG(origImage));
  const [typeText, setTypeText] = useState(null);
  const [noahResponse, setNoahResponse] = useState(noahResponseText);
  const [noahResponseDate, setNoahResponseDate] = useState(_noahResponseDate);
  const [userResponse, setUserResponse] = useState(userResponseText);
  const [userResponseDate, setUserResponseDate] = useState(_userResponseDate);

  const [noahResponse2, setNoahResponse2] = useState(noahResponseText2);
  const [noahResponse2Date, setNoahResponse2Date] = useState(
    _noahResponseDate2
  );

  const [userResponse2, setUserResponse2] = useState(userResponseText2);
  const [userResponse2Date, setUserResponse2Date] = useState(
    _userResponseDate2
  );

  const [noahResponse3, setNoahResponse3] = useState(noahResponseText3);
  const [noahResponse3Date, setNoahResponse3Date] = useState(
    _noahResponseDate3
  );

  const [userResponse3, setUserResponse3] = useState(userResponseText3);
  const [userResponse3Date, setUserResponse3Date] = useState(
    _userResponseDate3
  );

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
    <div style={{ display: "block", width: "100%" }}>
      <div id="modalText" style={ModalTextStyle}>
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{responseDate}</span>
          <br />
          <span style={{ marginTop: 0 }}>{subjectText}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{modalText}</p>
        {noahResponseText === undefined ? null : border}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{noahResponseDate}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{noahResponse}</p>
        {userResponseText === undefined ? null : border}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{userResponseDate}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{userResponse}</p>
        {noahResponse2 === undefined ? null : border}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: 0 }}>{noahResponse2Date}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{noahResponse2}</p>
        {userResponse2 === undefined ? null : border}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: "0" }}>{userResponse2Date}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{userResponse2}</p>
        {noahResponse3 === undefined ? null : border}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: "0" }}>{noahResponse3Date}</span>
        </div>
        <p style={{ paddingBottom: "2%" }}>{noahResponse3}</p>
        {userResponse3 === undefined ? null : border}
        <div style={ModalHeaderStyle}>
          <span style={{ marginBottom: "0" }}>{userResponse3Date}</span>
        </div>
        <p>{userResponse3}</p>
      </div>

      <div style={rightDivStyle}>
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
              setNoahResponse2("");
              setNoahResponse2Date("");
              setUserResponse2("");
              setUserResponse2Date("");
              setNoahResponse3("");
              setNoahResponse3Date("");
              setUserResponse3("");
              setUserResponse3Date("");

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

              setNoahResponse2(noahResponseText2);
              setNoahResponse2Date(_noahResponseDate2);
              setUserResponse2(userResponseText2);
              setUserResponse2Date(_userResponseDate2);

              setNoahResponse3(noahResponseText3);
              setNoahResponse3Date(_noahResponseDate3);
              setUserResponse3(userResponseText3);
              setUserResponse3Date(_userResponseDate3);

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
          <img
            style={imgStyle}
            src={modalImage}
            alt={props.details.id}
            onMouseEnter={() => {
              setModalImage(MaskIMG(mask));
              setTypeText(TypeString);
              document.getElementById("modal").style.backgroundColor = "black";
              modalTextCol = "white";
            }}
            onMouseLeave={() => {
              setModalImage(IMG(origImage));
              speechSynthesis.cancel();
              setTypeText(Empty);
              document.getElementById("modal").style.backgroundColor = "white";
              modalTextCol = "black";
            }}
          />
          {typeText}
        </div>
      </div>
    </div>
  );
};

export default ResponseModal;

import React, { useState } from "react";
import Modal from "react-modal";
import useMousePosition from "@react-hook/mouse-position";
// import styled from "styled-components";

import ResponseModal from "./ResponseModal";
import conversations from "../conversations_lookup";
// import { theme } from "../theme";

import { LandingHoverImg } from "./LandingHoverImg";

const classNames = require("classnames");

const keyphraseStyle = {
  position: "relative",
  display: "block",
  fontFamily: "RobotoMono",
  // fontWeight: "bold",
  fontSize: "50px",
  marginTop: "5%",
  transform: "translate(-50%, 0)",
  marginLeft: "50%",
  wordSpacing: "4px",
  lineHeight: "72px",
  // textTransform: "uppercase",
  zIndex: "100",
  width: "90%",
  opacity: "0",
  transition: "opacity 1s ease-in-out",
};

// const keyphraseDiv = {
//   // textAlign: "center",
// };

const buttonStyle = {
  // position: "-webkit-sticky",
  // position: "sticky",
  display: "inline",
  top: "25px",
  // margin: "0, 0%, 1%, 0",
  fontFamiily: "courier",
  background: "none",
  color: "black",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};

const ModalStyle = {
  content: {
    transform: "translate(-50%, -50%)",
    top: "50%",
    right: "auto",
    bottom: "auto",
    width: "95vw",
    height: "95vh",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "0",
    paddingBottom: "0",
    left: "50%",
    backgroundColor: "rgba(255,255,255,1)",
    // backgroundColor: "#fedcd2",
    border: "none",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
};

// const keySpan = styled.

let keyphrases = [];
for (let i in conversations) {
  keyphrases.push(conversations[i].keyphrase);
}

const active = {
  visibility: "hidden",
};

const KeyphraseText = () => {
  const [isHover, setHover] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [mousePosition, ref] = useMousePosition(0, 0, 30);
  const [isActive, setActive] = useState(new Array(keyphrases).fill(false));

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div ref={ref} className="keyphrases" style={keyphraseStyle}>
        <div
          style={{
            marginTop: "13%",
            marginLeft: "1%",
            marginRight: "15%",
            marginBottom: "10%",
          }}
        >
          {keyphrases.map((keyphrase, index) => (
            <p id={index} className="keyphraseP">
              <span
                className={classNames({
                  inActive: isActive[index] === true,
                })}
                onMouseEnter={() => {
                  setHover(conversations[index]);
                  let arr = new Array(keyphrases.length).fill(true);
                  arr[index] = false;
                  setActive(arr);
                  document.getElementById("masonryGrid").style.display = "none";
                }}
                onMouseLeave={() => {
                  let arr = new Array(keyphrases.length);
                  arr[index] = false;
                  setHover(null);
                  setActive(arr);
                  document.getElementById("masonryGrid").style.display = "flex";
                }}
                onClick={() => {
                  setModal(conversations[index]);
                  setIsOpen(true);
                }}
              >
                "{keyphrase}"
              </span>
            </p>
          ))}
        </div>
      </div>
      {isHover && (
        <LandingHoverImg
          mousePos={[mousePosition.screenX, mousePosition.screenY]}
          details={isHover}
          setHover={setHover}
        />
      )}
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel={"conversation"}
        htmlOpenClassName={"ReactModal__Html--open"}
        bodyOpenClassName={"ReactModal__Body--open"}
      >
        <>
          <button style={buttonStyle} onClick={closeModal}>
            &times;
          </button>
        </>
        {modal && <ResponseModal details={modal} />}
      </Modal>
    </>
  );
};

const LandingKeyphrases = () => {
  return (
    <>
      <KeyphraseText />
    </>
  );
};

export default LandingKeyphrases;

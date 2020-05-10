import React, { useState } from "react";
import Modal from "react-modal";
import useMousePosition from "@react-hook/mouse-position";
import { useMediaQuery } from "react-responsive";

import ResponseModal from "./ResponseModal";
import conversations from "../conversations_lookup";
import { LandingHoverImg } from "./LandingHoverImg";

const classNames = require("classnames");

const buttonStyle = {
  // position: "-webkit-sticky",
  // position: "sticky",
  display: "inline",
  top: "25px",
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
    overflowX: "hidden",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
};

let keyphrases = [];
for (let i in conversations) {
  keyphrases.push(conversations[i].keyphrase);
}

const KeyphraseText = () => {
  const [isHover, setHover] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [mousePosition, ref] = useMousePosition(0, 0, 30);
  const [isActive, setActive] = useState(new Array(keyphrases).fill(false));

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  function closeModal() {
    setIsOpen(false);
  }

  let keyPhraseMargRight;

  isMobileDevice ? (keyPhraseMargRight = "0.5%") : (keyPhraseMargRight = "18%");
  return (
    <>
      <div ref={ref} id="keyphraseStyle">
        <div
          style={{
            marginTop: "10%",
            marginLeft: "0%",
            marginRight: keyPhraseMargRight,
            marginBottom: "10%",
          }}
        >
          {keyphrases.map((keyphrase, index) => (
            <p id={index} className="keyphraseP">
              <span
                className={classNames({
                  inActive: isActive[index] === true,
                })}
                onMouseMove={() => {
                  setHover(conversations[index]);
                  let arr = new Array(keyphrases.length).fill(true);
                  arr[index] = false;
                  setActive(arr);
                  // document.getElementById("masonryGrid").style.display = "none";
                }}
                onMouseLeave={() => {
                  let arr = new Array(keyphrases.length);
                  arr[index] = false;
                  setHover(null);
                  setActive(arr);
                  // document.getElementById("masonryGrid").style.display = "flex";
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
        id="modal"
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

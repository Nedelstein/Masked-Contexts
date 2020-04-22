import React, { useState } from "react";
import Modal from "react-modal";

import ResponseModal from "./ResponseModal";
import conversations from "../conversations_lookup";
// import { theme } from "../theme";

import { LandingHoverImgRight, LandingHoverImgLeft } from "./LandingHoverImg";

const keyphraseStyle = {
  //   position: "absolute",
  display: "block",
  overflow: "auto",
  fontFamily: "Big Caslon",
  fontWeight: "bold",
  fontSize: "16px",
  textAlign: "left",
  lineHeight: "30px",
  marginTop: "5%",
  transform: "translate(-50%, 0)",
  marginLeft: "50%",
  wordSpacing: "5px",
  textTransform: "uppercase",
  zIndex: "100",
  width: "90%",
  opacity: "0",
  transition: "opacity 1s ease-in-out",
};

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  flexBasis: "100%",
  flex: "1",
  margin: "20px",
};

const buttonStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  top: "0.8%",
  margin: "1%, 1%, 1%, 0",
  background: "none",
  color: "black",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};

const ModalStyle = {
  content: {
    top: "50%",
    // left: "60%",
    right: "auto",
    bottom: "auto",
    width: "95vw",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    left: "50%",
    backgroundColor: "rgba(255,255,255,1)",
    overflowY: "auto",
    maxHeight: "90vh",
    border: "none",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
};

const KeyphraseText = () => {
  const [isHoverRight, setHoverRight] = useState(null);
  const [isHoverLeft, setHoverLeft] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);

  let keyphrases = [];
  for (let i in conversations) {
    keyphrases.push(conversations[i].keyphrase);
  }

  let half_keyphrases = Math.ceil(keyphrases.length / 2);
  let left_side = keyphrases.splice(0, half_keyphrases);

  // function openModal() {
  // let activeContent;
  // for (let i in conversations) {
  //   for (let j in keyphrases) {
  //     if (conversations[i].keyphrase === keyphrases[j]) {
  //       activeContent = conversations[i];
  //     }
  //   }
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="keyphrases" style={keyphraseStyle}>
        <div style={rowStyle}>
          <div style={columnStyle}>
            <div>
              {left_side.map((keyphrase, index) => (
                <p className="keyphraseP">
                  <span
                    onMouseEnter={() => {
                      setHoverLeft(conversations[index]);
                      // console.log(conversations[index]);
                    }}
                    onMouseLeave={() => {
                      setHoverLeft(null);
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
          <div style={columnStyle}>
            <div>
              {keyphrases.map((keyphrase, index) => (
                <p style={{ textAlign: "right" }} className="keyphraseP">
                  <span
                    onMouseEnter={() => {
                      setHoverRight(conversations[index + 11]);
                      // console.log(conversations[index + 11]);
                    }}
                    onMouseLeave={() => {
                      setHoverRight(null);
                    }}
                    onClick={() => {
                      setModal(conversations[index + 11]);
                      setIsOpen(true);
                    }}
                  >
                    "{keyphrase}"
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        conteentLabel={"conversation"}
        closeTimieoutMS={400}
      >
        <div>
          <button style={buttonStyle} onClick={closeModal}>
            &times;
          </button>
        </div>
        {modal && <ResponseModal details={modal} />}
      </Modal>
      {isHoverRight && (
        <LandingHoverImgRight details={isHoverRight} setHover={setHoverRight} />
      )}
      {isHoverLeft && (
        <LandingHoverImgLeft details={isHoverLeft} setHover={setHoverLeft} />
      )}
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

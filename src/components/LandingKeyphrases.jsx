import React, { useState } from "react";
import Modal from "react-modal";
import useMousePosition from "@react-hook/mouse-position";

import ResponseModal from "./ResponseModal";
import conversations from "../conversations_lookup";
// import { theme } from "../theme";

import { LandingHoverImg } from "./LandingHoverImg";

const keyphraseStyle = {
  //   position: "absolute",
  display: "block",
  overflow: "auto",
  fontFamily: "Big Caslon",
  fontWeight: "bold",
  fontSize: "24px",
  // lineHeight: "30px",
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

// const rowStyle = {
//   display: "flex",
//   flexDirection: "row",
//   flexWrap: "wrap",
//   width: "100%",
// };

// const columnStyle = {
//   display: "flex",
//   flexDirection: "column",
//   flexBasis: "100%",
//   flex: "1",
//   margin: "20px",
// };

const keyphraseDiv = {
  textAlign: "center",
};

const buttonStyle = {
  // position: "-webkit-sticky",
  // position: "sticky",
  position: "sticky",
  top: "25px",
  margin: "1%, 1%, 1%, 0",
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
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "0",
    paddingBottom: "0",
    left: "50%",
    backgroundColor: "rgba(255,255,255,1)",
    overflowY: "initial !important",
    border: "none",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
};

const KeyphraseText = () => {
  const [isHover, setHover] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [mousePosition, ref] = useMousePosition(0, 0, 30);

  let keyphrases = [];
  for (let i in conversations) {
    keyphrases.push(conversations[i].keyphrase);
  }

  // let half_keyphrases = Math.ceil(keyphrases.length / 2);
  // let left_side = keyphrases.splice(0, half_keyphrases);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div ref={ref} className="keyphrases" style={keyphraseStyle}>
        <div style={keyphraseDiv}>
          {keyphrases.map((keyphrase, index) => (
            <p className="keyphraseP">
              <span
                onMouseEnter={() => {
                  setHover(conversations[index]);
                  document.getElementById("masonryGrid").style.display = "none";
                  // console.log(conversations[index]);
                }}
                onMouseLeave={() => {
                  setHover(null);
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
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        conteentLabel={"conversation"}
        htmlOpenClassName={"ReactModal__Html--open"}
        bodyOpenClassName={"ReactModal__Body--open"}
      >
        <div>
          <button style={buttonStyle} onClick={closeModal}>
            &times;
          </button>
        </div>
        {modal && <ResponseModal details={modal} />}
      </Modal>
      {/* {isHoverRight && (
        <LandingHoverImgRight details={isHoverRight} setHover={setHoverRight} />
      )} */}
      {isHover && (
        <LandingHoverImg
          mousePos={[mousePosition.x, mousePosition.y]}
          details={isHover}
          setHover={setHover}
        />
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

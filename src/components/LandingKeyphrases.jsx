import React, { useState } from "react";
import Modal from "react-modal";
import useMousePosition from "@react-hook/mouse-position";

import ResponseModal from "./ResponseModal";
import conversations from "../conversations_lookup";
// import { theme } from "../theme";

import { LandingHoverImg } from "./LandingHoverImg";

const keyphraseStyle = {
  position: "relative",
  display: "block",
  fontFamily: "Courier",
  // fontWeight: "bold",
  fontSize: "50px",
  marginTop: "5%",
  transform: "translate(-50%, 0)",
  marginLeft: "50%",
  wordSpacing: "4px",
  lineHeight: "61px",
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
    paddingLeft: "20px",
    paddingRight: "20px",
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

const KeyphraseText = () => {
  const [isHover, setHover] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [mousePosition, ref] = useMousePosition(0, 0, 30);
  // const [isActive, setActive] = useState(null);

  let keyphrases = [];
  for (let i in conversations) {
    keyphrases.push(conversations[i].keyphrase);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function activeIndex(indices, index) {
    let i = indices.indexOf(index);
    // if (i >= 0) {
    //   indices.splice(i, 1);
    // }

    console.log(indices !== i);
    return indices !== i;

    // if (keyphrases[index] === indices[index]) {
    //   document.getElementById(index).style.display = "none";
    // }
    // indices.className = "hide";
    // console.log(indices);
  }

  // const onHoverDisappear = (id) => {
  //   setActive({ hover: id });
  // };

  // const onHoverReappear = () => {
  //   setActive({ hovere: null });
  // };

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
                onMouseEnter={() => {
                  const currentIndex = index;
                  setHover(conversations[index]);
                  // setActive(currentIndex);
                  document.getElementById("masonryGrid").style.display = "none";

                  // let activeKeyphrase = document.getElementById(currentIndex);
                  // if (document.querySelectorAll(".keyphraseP").id != isActive) {
                  //   document.getElementById(index).style.visibility = "hidden";
                  // }
                  // activeKeyphrase.style.visibility = "visible";
                }}
                onMouseLeave={() => {
                  setHover(null);
                  document.getElementById("masonryGrid").style.display = "flex";
                  // document.querySelector(".hide").style.display = "block";
                  // document.getElementById(index).style.visibility = "visible";

                  // setActive(null);
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

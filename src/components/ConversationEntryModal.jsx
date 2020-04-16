import React, { useState } from "react";
import Modal from "react-modal";

const ModalStyle = {
  content: {
    top: "50%",
    // left: "60%",
    right: "auto",
    bottom: "auto",
    width: "80vw",
    height: "70vh",
    transform: "translate(-50%, -50%)",
    marginLeft: "50%",
    backgroundColor: "rgba(0,0,0,0.7)",
    overflowY: "auto",
    maxHeight: "80vh",
    border: "none",
  },
  overlay: {
    background: "rgba(67,3,84,0.5)",
  },
};

const ModalTextStyle = {
  top: "0",
  marginLeft: "40%",
  marginRight: "12%",
  marginTop: "-37%",
  whiteSpace: "pre-wrap",
  color: "white",
  fontFamily: "Big Caslon",
  fontSize: "16px",
  lineHeight: "25px",
};

const buttonStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  top: "0.8%",
  margin: "1%, 1%, 1%, 0",
  background: "none",
  color: "white",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};

const textStyle = {
  color: "white",
  fontFamily: "Big Caslon",
  fontSize: "24px",
  textAlign: "center",
  paddingTop: "10%",
};

const ModalHeaderStyle = {
  fontSize: "12px",
};

const ConversationEntryModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        closeTimeoutMS={300}
      >
        <div ref={(_subtitle) => (subtitle = _subtitle)}>
          <button style={buttonStyle} onClick={closeModal}>
            &times;
          </button>
          <p style={textStyle}>
            This gallery contains the responses and conversatioins that occurred
            from my email exchanges with the photo authors.
            <br />
            <br /> Click on the images to read the corresponding text.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ConversationEntryModal;

import React, { useState } from "react";
import ReactDom from "react-dom";
import Masonry from "react-masonry-css";
import Modal from "react-modal";

import ConversationModal from "../components/ConversationModal";
import conversations from "../conversations_lookup";

const ModalStyle = {
  content: {
    top: "50%",
    left: "60%",
    right: "auto",
    bottom: "auto",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "gainsboro",
    overflowY: "auto",
    maxHeight: "80vh"
    // overflow
  }
};

const buttonStyle = {
  margin: "10px 10px 10px 0",
  background: "white",
  color: "black",
  border: "2px solid black",
  fontSize: "16px"
};

let ConversationsMasonry = () => {
  //dynamically import all images from folder
  let filename;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../assets/images/conversations/masks", false, /\.png$/)
  );

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    filename = images[i].replace("/static/media/", "");
    filename = filename.substring(0, filename.indexOf("_"));
    return (
      <div key={i}>
        {/* <div > */}
        <img
          id={filename}
          src={images[i]}
          style={{ width: "60%" }}
          alt="whoops"
          onClick={openModal}
        ></img>
        {/* </div> */}
      </div>
    );
  });

  const breakpointColumbsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2
  };

  let activeContent;
  for (let i in conversations) {
    if (filename === conversations[i].id) {
      activeContent = conversations[i];
    }
  }

  function openModal() {
    setIsOpen(true);
    setModal(activeContent);
    // console.log(text);
  }

  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ marginLeft: "15%", marginTop: "15%" }}>
      <Masonry
        breakpointCols={breakpointColumbsObj}
        className="my-masony-grid"
        columnClassName="my-masonry-grid_column"
        // onClick={openModal}
      >
        {imagesDiv}
      </Masonry>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel={"Conversation"}
      >
        <div ref={_subtitle => (subtitle = _subtitle)}>
          <button style={buttonStyle} onClick={closeModal}>
            Close
          </button>
          <ConversationModal details={modal} />
        </div>
      </Modal>
    </div>
  );
};

export default ConversationsMasonry;

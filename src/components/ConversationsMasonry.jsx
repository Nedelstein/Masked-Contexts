import React, { useState } from "react";
import ReactDom from "react-dom";
import Masonry from "react-masonry-css";
import Modal from "react-modal";

import ConversationModal from "../components/ConversationModal";

const ModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

let ConversationsMasonry = () => {
  //dynamically import all images from folder
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../assets/images/conversations/masks", false, /\.png$/)
  );

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    return (
      <div key={i}>
        <div id={i}>
          <img src={images[i]} style={{ width: "60%" }} alt="whoops"></img>
        </div>
      </div>
    );
  });

  const breakpointColumbsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

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
        onClick={openModal}
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
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <div>I am a modal</div> */}
        <div ref={_subtitle => (subtitle = _subtitle)}>
          <button onClick={closeModal}>close</button>

          <ConversationModal />
        </div>
      </Modal>
    </div>
  );
};

export default ConversationsMasonry;

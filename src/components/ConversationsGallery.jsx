import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import Modal from "react-modal";

import ConversationModal from "../components/ConversationModal";
import conversations from "../conversations_lookup";

const IMG = (imgName) => {
  return require(`../assets/images/conversations/${imgName}`);
};

const ConversationsGallery = () => {
  let filename;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);

  function importAll(r) {
    return r.keys().map(r);
  }

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
      width: "80vw",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      marginLeft: "50%",
      backgroundColor: "rgba(130,91,86,1)",
      overflowY: "auto",
      maxHeight: "80vh",
      border: "none",
    },
    overlay: {
      background: "rgba(86,126,130,0.3)",
    },
  };

  const ImageDivStyle = {
    display: "block",
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20%",
    marginBottom: "25%",
  };
  const ImageStyle = {
    width: "100%",
  };
  const images = importAll(
    require.context("../assets/images/conversations/masks", false, /\.png$/)
  );

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    filename = images[i].replace("/static/media/", "");
    filename = filename.substring(0, filename.indexOf("_"));
    return (
      <div key={i}>
        <img
          id={filename}
          src={images[i]}
          style={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            cursor: "pointer",
          }}
          alt="whoops"
          onClick={openModal}
        ></img>
      </div>
    );
  });

  let activeContent;
  for (let i in conversations) {
    if (filename === conversations[i].id) {
      activeContent = conversations[i];
    }
  }

  function openModal() {
    setIsOpen(true);
    setModal(activeContent);
  }

  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  const galleryParams = {
    effect: "coverflow",
    grabCursor: "true",
    centeredSlides: "true",
    slidesPerView: 3,
    // spaceBetween: 20,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <>
      <Swiper {...galleryParams}>
        <div style={ImageDivStyle}>
          {/* <img style={ImageStyle} src={IMG("masks/209842_mask.png")} /> */}
          {imagesDiv}
        </div>
        <div style={ImageDivStyle}>
          <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
        </div>
        <div style={ImageDivStyle}>
          <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
        </div>
        <div style={ImageDivStyle}>
          <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
        </div>
        <div style={ImageDivStyle}>
          <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
        </div>
        <div style={ImageDivStyle}>
          <img style={ImageStyle} src={IMG("masks/209842_mask.png")} />
        </div>
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel={"Conversation"}
        closeTimeoutMS={300}
      >
        <div ref={(_subtitle) => (subtitle = _subtitle)}>
          <button style={buttonStyle} onClick={closeModal}>
            &times;
          </button>
          <ConversationModal details={modal} />
        </div>
      </Modal>
    </>
  );
};

export default ConversationsGallery;

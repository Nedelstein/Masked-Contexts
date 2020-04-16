import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "../App.scss";
import "swiper/swiper.scss";
import "swiper/css/swiper.css";

import Modal from "react-modal";
import { Surface } from "gl-react-dom";
import GLTransitions from "gl-transitions";
import GLTransition from "react-gl-transition";
import timeLoop from "./timeLoop";

import ConversationModal from "../components/ConversationModal";
import conversations from "../conversations_lookup";

const IMG = (imgName) => {
  return require(`../assets/images/conversations/${imgName}`);
};

const ConversationsGallery = () => {
  let filenames = [];
  const totalImages = 1;
  const imagesArray = [
    "myfilepath.png",
    "myfilepath.png",
    "myfilepath.png",
    "myfilepath.png",
    "myfilepath.png",
  ];
  const masksArray = ["mymaskpath.png"];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [isHover, setHover] = useState(new Array(totalImages).fill(false));

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
    // display: "block",
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20%",
    marginBottom: "25%",
    fontFamily: "Big Caslon",
    fontSize: "20px",
    textAlign: "center",
  };
  const ImageStyle = {
    width: "100%",
  };

  // function importAll(r) {
  //   return r.keys().map(r);
  // }
  // let images = importAll(
  //   require.context("../assets/images/conversations/masks", false, /\.png$/)
  // );

  const galleryParams = {
    effect: "coverflow",
    // grabCursor: "true",
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

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: "true",
      onlyInViewport: "false",
    },
  };

  let images = [];
  for (let i in conversations) {
    images.push(
      "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/develop/src/assets/images/conversations/masks/" +
        conversations[i]["filename_mask"]
    );
  }

  const imagesDiv = new Array(images.length).fill().map((item, i) => {
    // filename = images[i].replace("/static/media/", "");
    // filename = filename.substring(0, filename.indexOf("_"));
    filenames.push(
      images[i].replace(
        "https://raw.githubusercontent.com/Nedelstein/Masked-Contexts/develop/src/assets/images/conversations/masks/",
        ""
      )
    );
    return (
      <div style={ImageDivStyle}>
        <img
          id={filenames[i]}
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

  function openModal() {
    let activeContent;
    for (let i in conversations) {
      for (let j in filenames) {
        if (conversations[i].filename_mask === filenames[j]) {
          activeContent = conversations[i];
          console.log(conversations[i]);
        }
      }
      setModal(activeContent);
      setIsOpen(true);
    }
  }

  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  let shouldReset = false;
  const MasktoImg = timeLoop(
    ({ delay, duration, maskPath, imagePath, time }) => {
      // console.log(time);
      const from = "masks/209842_mask.png";
      const to = "original_imgs/000000209842.jpg";
      const index = Math.floor(time / (delay + duration));
      const total = delay + duration;
      const transition = GLTransitions[41];
      const progress = shouldReset
        ? 0.001
        : (Math.min(time, duration) - index * total - delay) / duration;
      return progress > 0 ? (
        <GLTransition
          from={IMG(from)}
          to={IMG(to)}
          progress={progress}
          transition={transition}
        />
      ) : null;
    }
  );

  const JustMask = ({ maskPath }) => {
    const from = "masks/209842_mask.png";
    const to = "original_imgs/000000209842.jpg";
    const transition = GLTransitions[2];
    return (
      <GLTransition
        from={IMG(from)}
        to={IMG(to)}
        progress={0}
        transition={transition}
      />
    );
  };
  return (
    <>
      <Swiper {...galleryParams}>
        {imagesDiv}
        {/* <div style={ImageDivStyle}> */}
        {/* <img style={ImageStyle} src={IMG("masks/209842_mask.png")} /> */}

        {/* <Surface
            style={ImageStyle}
            onClick={openModal}
            onMouseEnter={() => {
              shouldReset = false;
              let arr = false;
              arr = true;
              setHover(arr);
            }}
            onMouseLeave={() => {
              shouldReset = true;
              setTimeout(() => {
                let arr = false;
                setHover(arr);
              }, 20);
            }}
          >
            {isHover == true ? (
              <MasktoImg
                delay={0}
                duration={3000}
                maskPath={IMG("masks/209842_mask.png")}
                imagePath={IMG("original_imgs/000000209842.jpg")}
              />
            ) : (
              <JustMask maskPath={IMG("masks/209842_mask.png")} />
            )}
          // </Surface> */}
        {/* </div> */}
        {/* <div style={ImageDivStyle}>
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
      </div> */}
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

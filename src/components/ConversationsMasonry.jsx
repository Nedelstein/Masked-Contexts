import React, { useState } from "react";
// import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import GLTransitions from "gl-transitions";
import GLTransition from "react-gl-transition";
import timeLoop from "./timeLoop";

import ConversationModal from "../components/ConversationModal";
import conversations from "../conversations_lookup";
// import { useHover } from "../hooks";

const IMG = (imgName) => {
  return require(`../assets/images/conversations/${imgName}`);
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

let ConversationsMasonry = () => {
  let filename;
  const totalImages = 5;
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
  const [progress, setProgress] = useState(0);
  const [isHover, setHover] = useState(new Array(totalImages).fill(false));
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
          style={{
            width: "60%",
            objectFit: "cover",
            objectPosition: "center",
            cursor: "pointer",
          }}
          alt="whoops"
          onClick={openModal}
        ></img>
        {/* </div> */}
      </div>
    );
  });

  let shouldReset = false;
  const MasktoImg = timeLoop(
    ({ delay, duration, maskPath, imagePath, time }) => {
      // console.log(time);
      const from = "masks/209842_mask.png";
      const to = "original_imgs/000000209842.jpg";
      const index = Math.floor(time / (delay + duration));
      const total = delay + duration;
      const transition = GLTransitions[47];
      const progress = shouldReset
        ? 0.001
        : (Math.min(time, duration) - index * total - delay) / duration;
      // console.log(progress);
      // console.log(delay);
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

  const breakpointColumbsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };

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
      <div>
        {/* This is our canvas which contains our image, */}
        {/* and we have a nice little mask animation :) */}
        {imagesArray.map((item, index) => {
          return (
            <Surface
              key={index}
              width={400}
              height={200}
              onMouseEnter={() => {
                shouldReset = false;
                let arr = new Array(totalImages).fill(false);
                arr[index] = true;
                setHover(arr);
              }}
              onMouseLeave={() => {
                shouldReset = true;
                setTimeout(() => {
                  let arr = new Array(totalImages).fill(false);
                  setHover(arr);
                }, 10);
              }}
            >
              {isHover[index] == true ? (
                <MasktoImg
                  delay={0}
                  duration={1500}
                  maskPath={masksArray[index]}
                  imagePath={imagesArray[index]}
                />
              ) : (
                <JustMask maskPath={masksArray[index]} />
              )}
            </Surface>
          );
        })}
      </div>
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
    </div>
  );
};

export default ConversationsMasonry;

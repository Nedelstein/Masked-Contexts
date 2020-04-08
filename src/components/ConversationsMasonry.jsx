import React, { useState } from "react";
import { LinearCopy } from "gl-react";
import { Surface } from "gl-react-dom";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
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
    backgroundColor: "#825B56",
    overflowY: "auto",
    maxHeight: "80vh",
    border: "none",
    // overflow
  },
  overlay: {
    background: "rgba(86,126,130,0.3)",
  },
};

const buttonStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  top: "0.8%",
  margin: "10px 10px 10px 0",
  background: "white",
  color: "black",
  border: "2px solid black",
  fontSize: "16px",
};

let ConversationsMasonry = () => {
  //dynamically import all images from folder
  let filename;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [progress, setProgress] = useState(0);
  // const [ref, hovered] = useHover();

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
          style={{ width: "60%", objectFit: "cover", objectPosition: "center" }}
          alt="whoops"
          // onMouseEnter={MasktoImg}
          onClick={openModal}
        ></img>
        {/* </div> */}
      </div>
    );
  });

  // let transNum = 0;
  // function transitionIn() {
  //   console.log("mouse in the house");
  //   transNum += 0.4;
  //   console.log(transNum);
  // }

  // const increaseTransProgress = timeLoop(({ delay, duration, time }) => {
  //   const index = Math.floor(time / (delay + duration));
  //   const total = delay + duration;
  //   const progress = (time - index * total - delay) / duration;
  //   return progress;
  // });

  // const MasktoImg = () => {
  //   const from = "masks/209842_mask.png";
  //   const to = "original_imgs/000000209842.jpg";
  //   // let progress = 0.2 + transNum;
  //   const transition = GLTransitions[13];
  //   return (
  //     <GLTransition
  //       from={IMG(from)}
  //       to={IMG(to)}
  //       progress={transProgress}
  //       transition={transition}
  //     />
  //   );
  // };

  const MasktoImg = timeLoop(({ delay, duration, time }) => {
    // console.log(time);
    const from = "masks/209842_mask.png";
    const to = "original_imgs/000000209842.jpg";
    const index = Math.floor(time / (delay + duration));
    const total = delay + duration;
    const transition = GLTransitions[3];
    const progress = (time - index * total - delay) / duration;
    return progress > 0 ? (
      <GLTransition
        from={IMG(from)}
        to={IMG(to)}
        progress={progress}
        transition={transition}
      />
    ) : (
      <LinearCopy>{from}</LinearCopy>
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

  const breakpointColumbsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };

  // let num = 0;
  // let interval;
  // const increaseTransProgress = () => {
  //   console.log("mouse in the house");
  //   // num = 0;
  //   num += 0.1;
  //   num = num;
  //   console.log(num);
  //   return num;
  //   // console.log(num);
  // };

  // interval = () => setInterval(increaseTransProgress, 100);

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
        <Surface
          // ref={ref}
          width={400}
          height={200}
          // onMouseEnter={() => {
          // interval();
          // setTransNum(increaseTransProgress);
          // console.log(transProgress);
          // }}
          // onMouseLeave={() => {
          // num = 0;
          // setTransNum(0);
          // }}
        >
          {/* <MasktoImg delay={2000} duration={1500} /> */}
          {/* <MasktoImg /> */}
        </Surface>
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
            Close
          </button>
          <ConversationModal details={modal} />
        </div>
      </Modal>
    </div>
  );
};

export default ConversationsMasonry;

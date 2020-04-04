import React from "react";

const ModalTextStyle = {
  top: "0",
  marginLeft: "40%",
  marginRight: "12%",
  marginTop: "-25%",
  whiteSpace: "pre-wrap",
  color: "black",
  fontFamily: "Big Caslon",
  fontSize: "24px",
  lineHeight: "30px"
};

const imgStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  top: "-50px",
  //   paddingRight: "30px",
  paddingTop: "6%",
  margin: "-10px",
  left: "10px"
};

const ConversationModal = props => {
  console.log(props);
  let text = props.details.text;
  let image = props.details.filename;
  const setModal = props.setModal;

  const IMG = imgName => {
    return require(`../assets/images/conversations/original_imgs/${imgName}`);
  };

  // const setOverlay = props.set
  return (
    <div>
      <img style={imgStyle} src={IMG(image)} alt={props.details.id} />
      <p style={ModalTextStyle}>{text}</p>
    </div>
  );
};

export default ConversationModal;

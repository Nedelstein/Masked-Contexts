import React from "react";

const ModalTextStyle = {
  top: "0",
  marginLeft: "40%",
  marginRight: "12%",
  marginTop: "-35%",
  whiteSpace: "pre-wrap",
  color: "black",
  fontFamily: "Big Caslon",
  fontSize: "24px",
  lineHeight: "30px",
};

const imgStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  top: "-50px",
  //   paddingRight: "30px",
  paddingTop: "10%",
  margin: "-10px",
  left: "10px",
  width: "37%",
  height: "auto",
};

const ConversationModal = (props) => {
  console.log(props);
  let text = props.details.text;
  let image = props.details.filename;

  const IMG = (imgName) => {
    return require(`../assets/images/conversations/original_imgs/${imgName}`);
  };

  return (
    <div>
      <img style={imgStyle} src={IMG(image)} alt={props.details.id} />
      <p style={ModalTextStyle}>{text}</p>
    </div>
  );
};

export default ConversationModal;

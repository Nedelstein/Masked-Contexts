import React from "react";

const ModalTextStyle = {
  marginLeft: "10%",
  marginRight: "10%",
  whiteSpace: "pre-wrap",
  color: "black"
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
      {/* <h1>This is working?</h1> */}
      <p style={ModalTextStyle}>{text}</p>
      <img src={IMG(image)} alt={props.details.id} />
    </div>
  );
};

export default ConversationModal;

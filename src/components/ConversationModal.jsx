import React from "react";

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

const ModalHeaderStyle = {
  fontSize: "12px",
};

const imgStyle = {
  position: "-webkit-sticky",
  position: "sticky",
  transform: "translate(0%, -50%)",
  top: "50%",
  margin: "-10px",
  left: "10px",
  width: "37%",
  height: "auto",
};

const ConversationModal = (props) => {
  // console.log(props);
  let text = props.details.text;
  let image = props.details.filename_orig;
  let date = props.details.date;
  let subject = props.details.subject;

  const IMG = (imgName) => {
    return require(`../assets/images/conversations/original_imgs/${imgName}`);
  };

  return (
    <div>
      <img style={imgStyle} src={IMG(image)} alt={props.details.id} />
      <div style={ModalTextStyle}>
        <div style={ModalHeaderStyle}>
          <p style={{ marginBottom: 0 }}>{date}</p>
          <p style={{ marginTop: 0 }}>{subject}</p>
          <hr
            style={{
              borderWidth: "1px",
              borderColor: "black",
              // size: "1px",
              // width: "700px",
              // height: "5px",
            }}
          />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ConversationModal;

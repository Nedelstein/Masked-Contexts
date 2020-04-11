import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyle = styled.button`
  position: relative;
  background-color: black;
  color: white;
  padding-left: 5px;
  padding-right: 5px;

  transform: translate(-50%, 0);
margin-bottom: 2%;
margin-top:1%;
  left: 50%;
  font-family: "Big Caslon";
  font-weight: bold;
  font-size 28px;
  mix-blend-mode: difference;
  z-index: 999999999;
  cursor: pointer;
  opacity: 0;
  transition: color 0.5s, opacity 3s;

  &:hover{
      color:black;
      background-color: white;
    //   text-shadow: 0px 8px 6px rgba(0,0,0,0.9)
  }
`;

const Button = () => {
  return (
    <div>
      <Link to="/about">
        <ButtonStyle className="enterButton">Enter</ButtonStyle>
      </Link>
    </div>
  );
};

export default Button;

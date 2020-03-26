import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  height: 100vh;
  text-align: right;
  padding: 0.7rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9998;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 600px) {
    width: 100%;
  }

  a {
    font-family: Big Caslon;
    font-size: 1.7rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #430354;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: #00000;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/about">
        {/* <span aria-label="about"></span> */}
        About
      </Link>
      <a href="/">
        <span aria-label="conversations"></span>
        Conversations
      </a>
      <a href="/">
        <span aria-label="masks"></span>
        Masks
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;

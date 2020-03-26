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
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

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
    color: ${({ theme }) => theme.purple};
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

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/about" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        About
      </Link>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Conversations
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Masks
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;

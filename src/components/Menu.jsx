import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #effffa;
  height: 10vh;
  text-align: center;
  padding: 0rem;
  position: fixed;
  top: 30vh;
  right: -0.7rem;
  z-index: 9998;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
  }

  a {
    font-family: Courier;
    font-size: 1.7rem;
    text-transform: uppercase;
    padding: 0.3rem;
    letter-spacing: 0.1rem;
    color: white;
    background-color: ${({ theme }) => theme.purple};
    text-decoration: none;
    transition: color 0.3s linear;
    margin-bottom: 66px;
    transform: rotate(90deg);

    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: red;
      background-color: cyan;
    }
  }
`;

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Home
      </Link>
      <Link to="/about" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        About
      </Link>
      <Link to="/masks" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Masks
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

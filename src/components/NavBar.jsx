import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  position: fixed;
  //   justify-content: space-between;
  //   height: 100%;
  //   margin: auto;
  padding: 0.7rem 2rem;
  align-items: center;
  z-index: 1;
  top: 50%;
  transform: rotate(-90deg);

  a {
    font-family: Adca;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 0.3rem;
    letter-spacing: 0.1rem;
    color: red;
    background-color: cyan;
    text-decoration: none;

    margin-right: 10px;

    transition: color 0.3s linear;
    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.purple};
    }
  }
`;

const NavBar = () => {
  return (
    <StyledMenu>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/conversations">
        <span aria-hidden="true"></span>
        Conversations
      </Link> */}
      <Link to="/masks">Masks</Link>
    </StyledMenu>
  );
};

export default NavBar;

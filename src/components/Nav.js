import React from "react";
//Styles and aNimation
import styled from "styled-components";
import { motion } from "framer-motion";
//Logo
import gamepad from "../img/gamepad.svg";

const Nav = () => {
  return (
    <StyledNav>
      <div>
        <Logo>
          <img src={gamepad} alt={gamepad}></img>
          <h2>Games</h2>
        </Logo>

        <input></input>
        <button>search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #490000;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 4rem;
  }
`;

export default Nav;

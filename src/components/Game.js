import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailsAction";

const GameCard = ({ name, released, id, image }) => {
//Load Details
const dispatch = useDispatch()
const loadDetailHandler = () => {
dispatch(loadDetail(id))
}

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow:  0px 5px 20px rgba(255, 255, 255, 0.3);
  background: linear-gradient(35deg, #211a36, #3c194b, black);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    padding: 0.3rem;
    height: 40vh;
    object-fit: cover;
    padding-bottom: 1rem;
  }
`;

export default GameCard;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";
//Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailsAction";
//Router
import { Link } from "react-router-dom";

const GameCard = ({ name, released, id, image }) => {
  //Load Details Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, rgba(184, 183, 183, 0.062), #c5b0b050);
  backdrop-filter: blur(3px);
  overflow: hidden;
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default GameCard;

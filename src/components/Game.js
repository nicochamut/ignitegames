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
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layout={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
  background: #ff00001f;
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

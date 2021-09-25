import React from "react";
import { smallImage } from "../util";
//Styled and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//IMAGES
import playstation from '../img/playstation.svg'
import nintendo from '../img/nintendo.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import gamepad from '../img/gamepad.svg'
import apple from '../img/apple.svg'


const GameDetail = ({ pathId }) => {
  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  //Exit Detail
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // GET ALL THE PLATAFORMS
  const getPlataform = (plataform) => {
    switch(plataform){
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  }
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <motion.h3>Platforms</motion.h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img key={data.platform.name} alt={data.platform.name} src={getPlataform(data.platform.name)} />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
                layoutId={`image${pathId}`}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <motion.img
                  src={smallImage(screen.image, 1280)}
                  alt={screen.name}
                  key={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6d0000f6;
  }
  &::-webkit-scrollbar-track {
    background: #292828;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #ff000021;
  backdrop-filter: blur(7px);
  position: absolute;
  left: 10%;
  color: black;
  text-shadow: 0px 5px 10px rgba(255, 255, 255, 0.4);
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:first-child {
    h3 {
      font-size: 2rem;
      margin-left: -20px;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;

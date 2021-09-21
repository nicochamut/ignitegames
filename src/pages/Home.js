import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//Components
import GameCard from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that damn data back
  const { popular, upComing, newGames } = useSelector((state) => state.games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <GameStyled>
        {upComing.map((game) => (
          <GameCard
            name={game.name}
            released={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
          />
        ))}
      </GameStyled>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const GameStyled = styled(motion.div)`
  min-height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

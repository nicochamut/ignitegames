import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//Components
import GameCard from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  //get the current location :D
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get dat damn data back
  const { popular, upComing, newGames } = useSelector((state) => state.games);
  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <h2>-Upcoming Games</h2>
        <GameStyled layoutId={pathId}>
          {upComing.map((game) => (
            <GameCard
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </GameStyled>

        <h2>Popular Games</h2>
        <GameStyled>
          {popular.map((game) => (
            <GameCard
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </GameStyled>

        <h2>New Games</h2>
        <GameStyled>
          {newGames.map((game) => (
            <GameCard
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </GameStyled>
      </AnimateSharedLayout>
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

const initState = {
  popular: [],
  newGames: [],
  upComing: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upComing: action.payload.upcoming,
        newGames: action.payload.newgames,
      };
    default:
      return { ...state };
  }
};

//Action

const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

export default gamesReducer;

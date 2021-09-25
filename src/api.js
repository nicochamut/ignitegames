// Base URL
const base_url = "https://api.rawg.io/api/";

//Current Month

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Current Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//CurrentYear and Date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

export default getCurrentMonth;

//Popular Games
const popular_games = `games?key=f04316d043714d6b9f293d0ecbd11853&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=f04316d043714d6b9f293d0ecbd11853&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=f04316d043714d6b9f293d0ecbd11853&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Game Details
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=f04316d043714d6b9f293d0ecbd11853`;

//Game Screenshots
export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=f04316d043714d6b9f293d0ecbd11853`;


export const popularGamesUrl = () => {
  const url = `${base_url}${popular_games}`;
  return url;
};

export const upComingGamesUrl = () => {
  const url = `${base_url}${upcoming_games}`;
  return url;
};

export const newGamesUrl = () => {
  const url = `${base_url}${new_games}`;
  return url;
};

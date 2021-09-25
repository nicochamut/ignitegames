import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_STATE",
  });

  const detailData = await axios.get(gameDetailsUrl(id));
  const gameDetailData = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: gameDetailData.data,
      isLoading: true,
    },
  });
};

export default loadDetail;

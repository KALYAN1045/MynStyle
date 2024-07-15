import axios from "axios";

// Action types
export const GET_COINS_REQUEST = "GET_COINS_REQUEST";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_FAIL = "GET_COINS_FAIL";

export const UPDATE_COINS_REQUEST = "UPDATE_COINS_REQUEST";
export const UPDATE_COINS_SUCCESS = "UPDATE_COINS_SUCCESS";
export const UPDATE_COINS_FAIL = "UPDATE_COINS_FAIL";

// Action creators
export const getCoins = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_COINS_REQUEST });

    const { data } = await axios.get(`/coins/${userId}/getCoins`);

    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data.coins,
    });
  } catch (error) {
    dispatch({
      type: GET_COINS_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const updateCoins = (userId, coinsToAdd) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COINS_REQUEST });

    const { data } = await axios.patch(`/coins/${userId}/updateCoins`, {
      userId,
      coins: coinsToAdd,
    });

    dispatch({
      type: UPDATE_COINS_SUCCESS,
      payload: data.coins,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_COINS_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

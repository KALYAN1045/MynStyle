import {
  GET_COINS_REQUEST,
  GET_COINS_SUCCESS,
  GET_COINS_FAIL,
} from "../actions/CoinAction";

const initialState = {
  coins: 0, // Initial value for coins
  loading: false, // Initial loading state
  error: null, // Initial error state
};

export const userCoinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Reset error state when requesting coins
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        coins: action.payload, // Update coins state with fetched data
        error: null, // Reset error state on success
      };
    case GET_COINS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload, // Set error message on failure
      };
    default:
      return state;
  }
};

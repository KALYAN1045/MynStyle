import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import { userCoinsReducer } from "./CoinReducer";

export const reducers = combineReducers({
  authReducer,
  postReducer,
  chatReducer,
  userCoinsReducer,
});

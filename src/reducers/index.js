import { combineReducers } from "redux";
import { userReducer } from "./user";
import { countReducer } from "./count";

export const rootReducer = combineReducers({
  user: userReducer,
  count: countReducer
});

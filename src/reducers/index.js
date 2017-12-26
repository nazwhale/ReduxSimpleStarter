import { combineReducers } from "redux";
import BugsReducer from "./reducer_bugs";

const rootReducer = combineReducers({
  bugs: BugsReducer
});

export default rootReducer;

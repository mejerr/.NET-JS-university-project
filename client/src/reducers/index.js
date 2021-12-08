import commentsReducer from "./comments";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    comments: commentsReducer
  });

  export default rootReducer;
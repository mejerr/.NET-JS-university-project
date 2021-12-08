import commentsReducer from "./comments";
import imagesReducer from "./images";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    comments: commentsReducer,
    images: imagesReducer
  });

  export default rootReducer;
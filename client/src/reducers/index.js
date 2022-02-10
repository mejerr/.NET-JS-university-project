import { combineReducers } from "redux";
import commentsReducer from "./comments";
import imagesReducer from "./images";
import usersReducer from "./users";

const rootReducer = combineReducers({
    comments: commentsReducer,
    images: imagesReducer,
    users: usersReducer
  });

  export default rootReducer;
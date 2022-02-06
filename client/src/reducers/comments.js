import {
  SET_COMMENTS,
  DELETE_COMMENT
} from "../constants/comments";

const initialState = {
  comments: {},
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_COMMENTS:
      const { comments, imageId } = payload;

      return {
        ...state,
        comments: {
          ...state.comments,
        [imageId] : [
          ...comments
        ]
      }
      };
    case DELETE_COMMENT:
      const { id, textIdDelete } = payload;

      const updatedArray = state.comments[id].filter(
        ({ id }) => id !== textIdDelete
      );

      return {
        ...state,
        comments: {
          ...state.comments,
          [id]: updatedArray
        }
      };
    default:
      return state;
  }
};

export default reducer;

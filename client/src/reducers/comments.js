import {
  SET_COMMENTS,
  SAVE_ADD_COMMENT,
  DELETE_COMMENT,
  ADD_COMMENT,
} from "../constants/comments";

const initialState = {
  comments: {},
};

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case SET_COMMENTS:
      const { comments } = payload;
    console.log(123213, comments)
      return state.comments = comments;
    case ADD_COMMENT:
      const {  commentId, comment  } = payload;

      return {
        ...state,
        comments: {
          ...state.comments,
            [commentId]: [
              ...(state?.comments[commentId] ? state.comments[commentId] : []),
              {
                text: comment,
                textId: state.comments[commentId] ? state.comments[commentId].length: 0
              },
            ]
          }
      };

    case DELETE_COMMENT:
      const { id, textIdDelete } = payload;
      const updatedArray = state.comments[id].filter(
        ({ textId }) => textId !== textIdDelete
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
